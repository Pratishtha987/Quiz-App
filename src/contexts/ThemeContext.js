import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    let themeValue = false;
    
    if (saved) {
      // Handle both string and boolean values
      if (saved === 'dark' || saved === 'true') {
        themeValue = true;
      } else if (saved === 'light' || saved === 'false') {
        themeValue = false;
      } else {
        // Try to parse as JSON for backward compatibility
        try {
          themeValue = JSON.parse(saved);
        } catch (e) {
          themeValue = false;
        }
      }
    }
    
    // Apply theme immediately
    document.documentElement.setAttribute('data-theme', themeValue ? 'dark' : 'light');
    document.body.className = themeValue ? 'dark-theme' : 'light-theme';
    
    return themeValue;
  });

  useEffect(() => {
    console.log('Theme changed to:', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', JSON.stringify(isDark));
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    // Also add a class to body for additional theme support
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
    console.log('Document theme attribute:', document.documentElement.getAttribute('data-theme'));
  }, [isDark]);

  // Apply theme on initial load
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      const isDarkTheme = saved === 'dark' || saved === 'true' || JSON.parse(saved);
      document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
      document.body.className = isDarkTheme ? 'dark-theme' : 'light-theme';
    }
  }, []);

  const toggleTheme = () => {
    console.log('Toggling theme from', isDark, 'to', !isDark);
    setIsDark(!isDark);
  };

  const value = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

