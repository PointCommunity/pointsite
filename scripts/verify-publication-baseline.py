"""Verify the captured public baseline without extracting files or contacting a provider."""
import gzip
import hashlib
import io
import json
from pathlib import Path, PurePosixPath
import tarfile

root = Path(__file__).resolve().parent.parent / "publication-baseline"
manifest = json.loads((root / "manifest.json").read_text())
assert manifest["format"] == 1 and manifest["kind"] == "captured-public-site"
assert manifest["origin"] == "https://pointatx.org"
files = manifest["files"]
assert len(files) == manifest["fileCount"] == 97
assert [item["path"] for item in files] == sorted(set(item["path"] for item in files))
assert sum(item["bytes"] for item in files) == manifest["totalBytes"] == 2_792_441
canonical = json.dumps(files, sort_keys=True, separators=(",", ":"), ensure_ascii=False).encode()
assert hashlib.sha256(canonical).hexdigest() == manifest["artifactDigest"]
packed = (root / "site.tar.gz").read_bytes()
assert len(packed) == manifest["archiveBytes"] and len(packed) < 4_000_000
assert hashlib.sha256(packed).hexdigest() == manifest["archiveSha256"]
with gzip.GzipFile(fileobj=io.BytesIO(packed)) as compressed:
    unpacked = compressed.read(4_000_001)
assert len(unpacked) <= 4_000_000
with tarfile.open(fileobj=io.BytesIO(unpacked), mode="r:") as archive:
    members = archive.getmembers()
    assert len(members) == len(files)
    for member, expected in zip(members, files):
        path = PurePosixPath(member.name)
        assert member.isfile() and not path.is_absolute()
        assert all(part not in ("", ".", "..") for part in path.parts)
        assert member.name == expected["path"] and member.size == expected["bytes"]
        assert hashlib.sha256(archive.extractfile(member).read()).hexdigest() == expected["sha256"]
print(json.dumps({"filesVerified": len(files), "artifactDigest": manifest["artifactDigest"]}))
