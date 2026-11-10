import { Link } from "react-router-dom";
import { FaUserFriends, FaPlane, FaPlus, FaRegBuilding, FaTag, FaClock, FaCheck } from "react-icons/fa";
import istanbul from "../../assets/istanbul.jpg";
import dubai from "../../assets/dubai.jpg";
import antalya from "../../assets/antalya.jpg";
import china from "../../assets/china.jpg";
import hongkong from "../../assets/hongkong.jpg";
import europe from "../../assets/europe.jpg";
import "./Offer.css";

const weekly = [
  { id: 1, city: "Istanbul", checkins: "234 Check Ins", price: "$420", img: istanbul },
  { id: 2, city: "Dubai", checkins: "308 Check Ins", price: "$700", img: dubai },
  { id: 3, city: "Antalya", checkins: "500 Check Ins", price: "$999", img: antalya },
];

const visa = [
  { id: 1, country: "China", checkins: "234 Check Ins", img: china },
  { id: 2, country: "Hong Kong", checkins: "234 Check Ins", img: hongkong },
  { id: 3, country: "European(Schengen)", checkins: "234 Check Ins", img: europe },
];

const Offer = () => {
  return (
    <section className="offer">
      {/* Weekly offers */}
      <div className="offer__block">
        <h2 className="offer__title">Best Weekly Offers In Each City</h2>
        <p className="offer__text">
          Discover the best weekly offers in each city, curated just for you. Immerse yourself in
          a world of savings and indulge in unparalleled experiences.
        </p>

        <div className="offer__list">
          {weekly.map((item) => (
            <div className="offer__item" key={item.id}>
              <img src={item.img} alt={item.city} className="offer__img offer__img--tall" />

              <div className="offer__card offer__card--weekly">
                <div className="offer__card-top">
                  <div>
                    <h3 className="offer__card-title">{item.city}</h3>
                    <span className="offer__checkins">
                      <FaUserFriends /> {item.checkins}
                    </span>
                  </div>
                  <div className="offer__price">
                    <strong>{item.price}</strong>
                    <span>/person</span>
                  </div>
                </div>

                <h4 className="offer__card-sub">Deal Includes:</h4>
                <ul className="offer__features">
                  <li><FaPlane /> 5 Days Trip + Hotel Included</li>
                  <li><FaPlus /> Airplane Bill Included</li>
                  <li><FaRegBuilding /> Daily Places Visit</li>
                </ul>

                <Link to="/contact" className="offer__btn">
                  Make A Reservation
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="offer__dots">
          <button className="offer__dot"></button>
          <button className="offer__dot"></button>
        </div>
      </div>

      {/* Visa support */}
      <div className="offer__block">
        <h2 className="offer__title">Visa Support</h2>
        <p className="offer__text">
          Experience stress-free travel with our expert visa support. We provide seamless
          assistance and comprehensive guidance ensuring a smooth journey.
        </p>

        <div className="offer__list">
          {visa.map((item) => (
            <div className="offer__item" key={item.id}>
              <img src={item.img} alt={item.country} className="offer__img offer__img--short" />

              <div className="offer__card offer__card--visa">
                <h3 className="offer__card-title">{item.country}</h3>
                <span className="offer__checkins">
                  <FaUserFriends /> {item.checkins}
                </span>

                <h4 className="offer__card-sub">Benefits of our Visa Support service:</h4>
                <ul className="offer__features">
                  <li><FaTag /> Best Prices</li>
                  <li><FaClock /> Short Processing Time</li>
                  <li><FaCheck /> Trustworthy Assistance</li>
                </ul>

                <Link to="/contact" className="offer__btn">
                  Make A Reservation
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="offer__dots">
          <button className="offer__dot"></button>
          <button className="offer__dot"></button>
        </div>
      </div>
    </section>
  );
};

export default Offer;