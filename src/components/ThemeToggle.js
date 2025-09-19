import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
  };

  return (
    <button className="theme-toggle" onClick={handleToggle} aria-label="Toggle theme">
      <div className={`toggle-track ${isDark ? 'dark' : 'light'}`}>
        <div className="toggle-thumb">
          <span className="theme-icon">
            {isDark ? '🌙' : '☀️'}
          </span>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;

