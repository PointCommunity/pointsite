import Image from 'next/image';
import Link from 'next/link';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { assetPath } from '@/lib/paths';

const mapUrl = 'https://www.google.com/maps?q=11300+Old+San+Antonio+Rd,+Manchaca,+TX+78652&output=embed';

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <SiteHeader overlay />
        <Image src={assetPath('/assets/austin-skyline.jpeg')} alt="Austin skyline over the Colorado River" fill priority sizes="100vw" />
        <div className="hero-shade" />
        <div className="home-hero-copy shell"><h1>We are a family of Jesus-followers empowered by the Holy Spirit to make disciples of Jesus in all of life for the glory of God.</h1></div>
      </section>
      <main>
        <section className="home-intro shell"><p className="eyebrow">Point ATX</p><h2>A diverse group of ordinary people.</h2><p>We are a family of Jesus followers, empowered by the Spirit to make disciples of Jesus in all of life for the glory of God.</p><div className="button-row"><Link className="button" href="/who-we-are">Who we are</Link><Link className="button" href="/what-we-believe">Our beliefs</Link></div></section>
        <section className="home-feature home-feature--photo">
          <Image src={assetPath('/assets/neighborhood-table.jpeg')} alt="Friends and families sharing a meal" fill sizes="100vw" />
          <div className="feature-shade" />
          <div className="feature-copy shell"><p className="eyebrow">Life together</p><h2>Neighborhood Groups.</h2><p>Being the Church is more than a Sunday gathering. Discipleship happens in the everyday stuff of life within a community.</p><Link className="button button--light" href="/neighborhood-groups">Learn more</Link></div>
        </section>
        <section className="home-feature home-feature--split shell">
          <div className="feature-image"><Image src={assetPath('/assets/next-generation.jpeg')} alt="Families worshiping together at Point ATX" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
          <div className="feature-copy"><p className="eyebrow">Kids ministry</p><h2>Next Generation.</h2><p>Kids are not the Church of tomorrow, but the Church today. Elementary-age kids and up worship with their parents in a multi-generational environment, while birth through preschool children have a safe, fun place to learn.</p><Link className="button" href="/next-generation">Learn more</Link></div>
        </section>
        <section className="gathering-section"><div className="shell"><p className="eyebrow">Come as you are</p><h2>Gathering Times</h2><p>Sunday Gatherings: 10:30 AM<br />11300 Old San Antonio Rd., Manchaca, TX 78652</p><iframe title="Map to Point Community Church" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
