import { Link } from "react-router-dom";
import { FaExpand, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import dubai from "../../assets/loc-dubai.jpg";
import istanbul from "../../assets/loc-istanbul.jpg";
import antalya from "../../assets/loc-antalya.jpg";
import sharm from "../../assets/loc-sharm.jpg";
import tashkent from "../../assets/loc-tashkent.jpg";
import bg from "../../assets/reservation-bg.jpg";
import "./Location.css";

const places = [
  { id: 1, name: "Dubai", population: "3M", img: dubai },
  { id: 2, name: "Istanbul", population: "15M", img: istanbul },
  { id: 3, name: "Antalya", population: "2M", img: antalya },
  { id: 4, name: "Sharm El-Sheikh", population: "73K", img: sharm },
  { id: 5, name: "Tashkent", population: "3M", img: tashkent },
];

const Location = () => {
  return (
    <section className="location">
      {/* Best locations */}
      <div className="location__best">
        <h2 className="location__title">Best Locations</h2>
        <p className="location__text">
          Discover the best offers in each city, curated just for you. Immerse yourself in a world
          of savings and indulge in unparalleled experiences.
        </p>

        <div className="location__list">
          {places.map((item) => (
            <div className="location__panel" key={item.id}>
              <img src={item.img} alt={item.name} className="location__img" />

              <div className="location__bottom">
                <span className="location__expand">
                  <FaExpand />
                </span>
                <div className="location__caption">
                  <strong>{item.name}</strong>
                  <span>Population: {item.population}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div className="location__banner" style={{ backgroundImage: `url(${bg})` }}>
        <div className="location__overlay"></div>
        <div className="location__banner-content">
          <p className="location__banner-text">Book Prefered Deal Here</p>
          <h2 className="location__banner-title">Make Your Reservation</h2>
          <Link to="/tour" className="location__banner-btn">
            Discover More
          </Link>
        </div>
      </div>

      {/* Contact cards */}
      <div className="location__container">
        <div className="location__cards">
          <div className="location__card">
            <span className="location__card-icon"><FaPhoneAlt /></span>
            <h3 className="location__card-title">Make a Phone Call</h3>
            <a href="tel:+998992999999" className="location__card-link">+998 99 299 99 99</a>
          </div>

          <div className="location__card">
            <span className="location__card-icon"><FaEnvelope /></span>
            <h3 className="location__card-title">Contact Us via Email</h3>
            <a href="mailto:zamonbiztour@gmail.com" className="location__card-link">
              zamonbiztour@gmail.com
            </a>
          </div>

          <div className="location__card">
            <span className="location__card-icon"><FaMapMarkerAlt /></span>
            <h3 className="location__card-title">Visit Our Offices</h3>
            <a
              href="https://maps.google.com/?q=Chilonzor+9+Tashkent"
              target="_blank"
              rel="noreferrer"
              className="location__card-link"
            >
              15/25, Chilanzar - 9, Tashkent city
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="location__map">
          <iframe
            title="map"
            className="location__iframe"
            src="https://maps.google.com/maps?q=Chilonzor+25,+Tashkent&t=k&z=16&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        {/* Form */}
        <form className="location__form">
          <h2 className="location__form-title">
            Make Your <span>Reservation</span> Through This <span>Form</span>
          </h2>

          <div className="location__grid">
            <label className="location__field">
              <span>Your Name</span>
              <input type="text" placeholder="Ex. John Smithee" />
            </label>

            <label className="location__field">
              <span>Your Phone Number</span>
              <input type="tel" placeholder="Ex. +99899 999 99 99" />
            </label>

            <label className="location__field">
              <span>Number Of Guests</span>
              <select defaultValue="">
                <option value="" disabled>ex. 3 or 4 or 5</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </label>

            <label className="location__field">
              <span>Check In Date</span>
              <input type="date" />
            </label>

            <label className="location__field location__field--full">
              <span>Choose Your Destination</span>
              <select defaultValue="Antalya">
                <option>Istanbul</option>
                <option>Dubai</option>
                <option>Antalya</option>
                <option>Sharm El-Sheikh</option>
              </select>
            </label>

            <label className="location__field location__field--full">
              <span>Choose Your Visa Support</span>
              <select defaultValue="">
                <option value="" disabled>Country</option>
                <option>China</option>
                <option>Hong Kong</option>
                <option>European(Schengen)</option>
                <option>Japan</option>
                <option>Oman</option>
                <option>India</option>
              </select>
            </label>
          </div>

          <button type="submit" className="location__submit">
            Make Your Reservation Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Location;