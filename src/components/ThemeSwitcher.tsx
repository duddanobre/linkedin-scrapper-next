'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
    </div>
  );

  return (
    <div className="theme-switcher">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-all duration-300 ${theme === 'light' ? 'bg-blue-500 text-white shadow-inner' : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="Light mode"
        title="Light mode"
      >
        <span className="text-lg">☀️</span>
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-full transition-all duration-300 ${theme === 'system' ? 'bg-blue-500 text-white shadow-inner' : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="System preference"
        title="Use system preference"
      >
        <span className="text-lg">💻</span>
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-blue-500 text-white shadow-inner' : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'}`}
        aria-label="Dark mode"
        title="Dark mode"
      >
        <span className="text-lg">🌙</span>
      </button>
    </div>
  );
}