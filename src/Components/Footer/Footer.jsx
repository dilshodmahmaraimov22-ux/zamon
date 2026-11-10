import { Link } from "react-router-dom";
import bg from "../Images/fbgr.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__cta" style={{ backgroundImage: `url(${bg})` }}>
        <div className="footer__overlay"></div>

        <div className="footer__container">
          <div className="footer__text">
            <h2 className="footer__title">ARE YOU LOOKING TO TRAVEL ?</h2>
            <p className="footer__subtitle">Make A Reservation By Clicking The Button</p>
          </div>

          <Link to="/contact" className="footer__btn">
            Book Yours Now
          </Link>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">
          Copyright © 2024 <span>Zamon Business Tour.</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;