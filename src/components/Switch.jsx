import React, { useEffect, useState, useRef } from 'react';
import '@material/web/switch/switch.js';

const getInitialMode = () => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme');
    if (stored) {
      return stored === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return false;
};

export default function Switch() {
  const [dark, setDark] = useState(getInitialMode);
  const ref = useRef(null);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    if (ref.current) {
      ref.current.checked = dark;
    }
  }, [dark]);

  return (
    <md-switch
      ref={ref}
      checked={dark}
      onClick={() => setDark((v) => !v)}
      aria-label="Toggle dark mode"
    />
  );
}
