'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/hooks/useThemeContext';
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer text-2xl transition-transform duration-300 hover:scale-110"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <MdDarkMode className="" />
      ) : (
        <MdLightMode className="" />
      )}
    </div>
  );
}
