import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <span className="header__logo-title">zamon</span>
          <span className="header__logo-subtitle">business travel</span>
        </Link>

        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <Link to="/" className="header__link header__link--active">Home</Link>
            </li>
            <li className="header__item">
              <Link to="/about" className="header__link">About</Link>
            </li>
            <li className="header__item">
              <Link to="/tour" className="header__link">Tour</Link>
            </li>
            <li className="header__item">
              <Link to="/contact" className="header__link">Contacts</Link>
            </li>
          </ul>
        </nav>

        <div className="header__right">
          <div className="header__langs">
            <button className="header__lang">UZ</button>
            <button className="header__lang">ENG</button>
            <button className="header__lang">RU</button>
          </div>

          <div className="header__socials">
            <a href="#" className="header__social">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 3 2.5 10.4c-.9.4-.9 1.1-.2 1.3l4.7 1.5 1.8 5.5c.2.6.4.8.9.8.4 0 .6-.2.9-.4l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.8L22.9 4.6C23.2 3.4 22.4 2.8 21 3Zm-3.3 4.6-8.4 7.6-.3 3.4-1.4-4.6 10.1-6.4Z" />
              </svg>
            </a>
            <a href="#" className="header__social">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;