import { Link } from "react-router-dom";
import bg from "../Images/herobg.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero__content">
        <p className="hero__subtitle">Take a Glimpse Into The Beautiful City Of:</p>
        <h1 className="hero__title">Istanbul</h1>
        <Link to="/tour" className="hero__btn">
          Go There
        </Link>
      </div>

      <div className="hero__info">
        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6H4Z" />
              </svg>
            </div>
            <div className="hero__stat-text">
              <span className="hero__label">Population:</span>
              <strong className="hero__value">44.48 M</strong>
            </div>
          </div>

          <div className="hero__stat">
            <div className="hero__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
              </svg>
            </div>
            <div className="hero__stat-text">
              <span className="hero__label">Territory:</span>
              <strong className="hero__value">275.400 KM2</strong>
            </div>
          </div>

          <div className="hero__stat">
            <div className="hero__icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3 2 12h3v8h5v-5h4v5h5v-8h3L12 3Z" />
              </svg>
            </div>
            <div className="hero__stat-text">
              <span className="hero__label">AVG Price:</span>
              <strong className="hero__value">$946.000</strong>
            </div>
          </div>
        </div>

        <Link to="/tour" className="hero__more">
          Explore More
        </Link>
      </div>

      <div className="hero__pagination">
        <button className="hero__page">1</button>
        <button className="hero__page">2</button>
        <button className="hero__page">3</button>
        <button className="hero__page">4</button>
      </div>
    </section>
  );
};

export default Hero;