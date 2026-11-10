import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const navLinks = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Tours", path: "/tours" },
  { id: 4, title: "Contacts", path: "/contacts" },
];

const langs = ["UZ", "ENG", "RU"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <span className="header__logo-title">zamon</span>
          <span className="header__logo-subtitle">business travel</span>
        </Link>

        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
          <ul className="header__list">
            {navLinks.map((item) => (
              <li className="header__item" key={item.id}>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className={`header__link ${
                    pathname === item.path ? "header__link--active" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="header__right">
            <div className="header__langs">
              {langs.map((lang) => (
                <Link key={lang} to="/" className="header__lang" onClick={closeMenu}>
                  {lang}
                </Link>
              ))}
            </div>

            <div className="header__socials">
              <Link to="https://t.me/" className="header__social" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 3 2.5 10.4c-.9.4-.9 1.1-.2 1.3l4.7 1.5 1.8 5.5c.2.6.4.8.9.8.4 0 .6-.2.9-.4l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8L22.9 4.6C23.2 3.4 22.4 2.8 21 3Zm-3.3 4.6-8.4 7.6-.3 3.4-1.4-4.6 10.1-6.4Z" />
                </svg>
              </Link>
              <Link to="https://instagram.com/" className="header__social" target="_blank">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
        </nav>

        <button
          className={`header__burger ${isOpen ? "header__burger--open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;