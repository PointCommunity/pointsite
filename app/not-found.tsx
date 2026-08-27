import Link from 'next/link';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export default function NotFound() {
  return <><SiteHeader /><main className="not-found shell"><p className="eyebrow">404</p><h1>Page not found.</h1><p>Sorry, we couldn’t find the page you were looking for.</p><Link className="button button--dark" href="/">Return home</Link></main><SiteFooter /></>;
}
