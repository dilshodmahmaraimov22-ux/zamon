import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Header.css";

const langs = [
  { code: "uz", label: "UZ" },
  { code: "en", label: "ENG" },
  { code: "ru", label: "RU" },
];

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLang = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
  };

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
              <Link to="/" className="header__link header__link--active">{t("home")}</Link>
            </li>
            <li className="header__item">
              <Link to="/about" className="header__link">{t("about")}</Link>
            </li>
            <li className="header__item">
              <Link to="/tour" className="header__link">{t("tour")}</Link>
            </li>
            <li className="header__item">
              <Link to="/contact" className="header__link">{t("contacts")}</Link>
            </li>
          </ul>
        </nav>

        <div className="header__right">
          <div className="header__langs">
            {langs.map((lang) => (
              <button
                key={lang.code}
                className={`header__lang ${
                  i18n.language === lang.code ? "header__lang--active" : ""
                }`}
                onClick={() => changeLang(lang.code)}
              >
                {lang.label}
              </button>
            ))}
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