import './header.css';
import Navbar from './Navbar';
import Logo from './Logo';
import { useState } from 'react';
export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <Logo />
      <Navbar toggle={toggle} setToggle={setToggle} />
      <div
        onClick={() => {
          setToggle((prev) => !prev);
        }}
        className="header-menu"
      >
        <i className=""></i>
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
    </header>
  );
}
