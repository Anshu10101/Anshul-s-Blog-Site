'use client';

import { Fragment, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu, RadioGroup, Transition } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Blank = () => <svg className="h-6 w-6" />;

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="group relative rounded-lg p-2 transition-all duration-300 ease-out
        hover:bg-gray-200 dark:hover:bg-gray-800
        hover:shadow-md dark:hover:shadow-neon
        focus:outline-none focus:ring-2 focus:ring-futuristic-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <SunIcon className="h-5 w-5 text-gray-800 transition-all duration-300 
          group-hover:text-yellow-500 group-hover:rotate-180 
          dark:text-gray-200 dark:group-hover:text-futuristic-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-800 transition-all duration-300 
          group-hover:text-indigo-500 group-hover:-rotate-90
          dark:text-gray-200 dark:group-hover:text-futuristic-400" />
      )}
      <div className="absolute inset-0 rounded-lg bg-gradient-cyber opacity-0 transition-opacity group-hover:opacity-10 dark:group-hover:opacity-20" />
    </button>
  );
};

export default ThemeSwitch;
