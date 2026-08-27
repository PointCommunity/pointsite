'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { navigation } from '@/content/site';
import { assetPath } from '@/lib/paths';

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={`site-header ${overlay ? 'site-header--overlay' : ''}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Point Community Church home">
          <Image src={assetPath('/assets/point-logo.png')} alt="Point" width={498} height={188} priority />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Menu</span>
        </button>
        <nav id="site-navigation" className={open ? 'nav nav--open' : 'nav'} aria-label="Main navigation" onClick={() => setOpen(false)}>
          {navigation.map((item) => (
            <div className="nav-item" key={item.label}>
              <Link href={item.href}>{item.label}{'children' in item ? <span aria-hidden="true">⌄</span> : null}</Link>
              {'children' in item ? (
                <div className="nav-dropdown">
                  {item.children.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
