import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function ThemeToggle({ darkMode, toggleDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleDarkMode}
      className="relative p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors duration-200 ease-in-out group"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-14 h-7">
        <div className="absolute inset-0 flex items-center justify-between px-1">
          <Sun
            color='white'
            size={16}
            className={`text-white-500 transition-opacity duration-200 ${
              darkMode ? 'opacity-100' : 'opacity-100'
            }`}
          />
          <Moon
          color='black'
            size={16}
            className={`text-blue-300 transition-opacity duration-200 ${
              darkMode ? 'opacity-100' : 'opacity-100'
            }`}
          />
        </div>
        <div
          className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ${
            darkMode ? 'translate-x-8' : 'translate-x-1'
          }`}
        />
      </div>
    </button>
  );
}