'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';

import siteMetadata from '@/data/siteMetadata';
import headerNavLinks from '@/data/headerNavLinks';

import Link from '@/components/ui/Link';

import Logo from 'public/static/images/logo.svg';

import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
// import SearchButton from './SearchButton';

const Header = () => {
  const pathname = usePathname();

  let headerClass =
    'mx-auto w-full max-w-6xl fixed left-0 right-0 top-4 z-10 bg-white/10 py-3 backdrop-blur-lg border border-gray-200/20 dark:bg-gray-900/30 dark:border-cyan-500/20 md:rounded-2xl shadow-lg dark:shadow-cyan-500/20';

  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50';
  }

  return (
    <header className={headerClass}>
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 xl:max-w-5xl xl:px-0">
        <Link href="/" aria-label={siteMetadata.headerTitle} className="flex items-center">
          <div className="animate-wave">
            <Logo className="fill-dark dark:fill-cyan-400" />
          </div>
          <div className="group ml-2 text-xl font-bold transition-all duration-300 relative">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500">
              Anshul.dev
            </span>
            <span className="block h-0.5 max-w-0 bg-gradient-to-r from-gray-600 to-gray-900 transition-all duration-500 group-hover:max-w-full dark:from-cyan-400 dark:to-blue-500"></span>
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 opacity-0 blur transition duration-500 group-hover:opacity-20 dark:from-cyan-400 dark:to-blue-500"></div>
          </div>
        </Link>
        <div className="flex items-center gap-4 text-base leading-5">
          <div className="hidden sm:block">
            <nav className="flex space-x-2">
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className={clsx(
                      'relative px-4 py-2 font-medium transition-all duration-300 hover:text-gray-900 dark:hover:text-cyan-400',
                      'before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:origin-right before:scale-x-0 before:transform before:rounded-full before:bg-gray-900 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 dark:before:bg-cyan-400',
                      pathname.startsWith(link.href)
                        ? 'text-gray-900 before:scale-x-100 dark:text-cyan-400'
                        : 'text-gray-600 dark:text-gray-300'
                    )}
                  >
                    <span data-umami-event={`nav-${link.href.replace('/', '')}`} className="relative">
                      {link.title}
                      {pathname.startsWith(link.href) && (
                        <span className="absolute -inset-1 rounded-lg bg-gray-100 opacity-20 blur dark:bg-cyan-400/20"></span>
                      )}
                    </span>
                  </Link>
                ))}
            </nav>
          </div>
          <div
            role="separator"
            data-orientation="vertical"
            className="hidden h-6 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 dark:from-cyan-500/40 dark:via-blue-500/40 dark:to-cyan-500/40 md:block"
          />
          <div className="flex items-center gap-2">
            <ThemeSwitch />
            {/* <SearchButton /> */}
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
