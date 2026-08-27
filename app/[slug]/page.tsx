import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PageContent } from '@/components/PageContent';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { pages } from '@/content/site';
import { assetPath } from '@/lib/paths';

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.find((candidate) => candidate.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.intro };
}

export default async function ContentRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find((candidate) => candidate.slug === slug);
  if (!page) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <header className={`page-hero ${page.heroImage ? 'page-hero--image' : ''}`}>
          {page.heroImage ? <Image src={assetPath(page.heroImage)} alt="" fill priority sizes="100vw" /> : null}
          {page.heroImage ? <div className="hero-shade" /> : null}
          <div className="shell page-hero-copy"><p className="eyebrow">{page.eyebrow}</p><h1>{page.title}</h1>{page.intro ? <p>{page.intro}</p> : null}</div>
        </header>
        <div className="page-body shell"><PageContent page={page} /></div>
      </main>
      <SiteFooter />
    </>
  );
}
