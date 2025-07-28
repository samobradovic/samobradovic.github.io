import React from 'react';
import Switch from './Switch';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__name">Srđan (Sam) Obradović</span>
        <Switch />
      </div>
    </header>
  );
}
