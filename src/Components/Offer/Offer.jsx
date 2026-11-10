import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserFriends, FaPlane, FaPlus, FaRegBuilding, FaTag, FaClock, FaCheck } from "react-icons/fa";
import istanbul from "../Images/istanbul.jpg";
import dubai from "../Images/dubai.jpg";
import antalya from "../Images/antalya.jpg";
import china from "../Images/china.jpg";
import hongkong from "../Images/hongkong.jpg";
import europe from "../Images/europe.jpg";
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

const Slider = ({ items, renderItem }) => {
  const perPage = 3;
  const pages = [];
  for (let i = 0; i < items.length; i += perPage) {
    pages.push(items.slice(i, i + perPage));
  }

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [pages.length]);

  return (
    <>
      <div className="offer__slider">
        <div
          className="offer__track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {pages.map((page, index) => (
            <div className="offer__page" key={index}>
              {page.map(renderItem)}
            </div>
          ))}
        </div>
      </div>

      <div className="offer__dots">
        {pages.map((_, index) => (
          <button
            key={index}
            className={`offer__dot ${current === index ? "offer__dot--active" : ""}`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </>
  );
};

const Offer = () => {
  return (
    <section className="offer">
      <div className="offer__block">
        <h2 className="offer__title">Best Weekly Offers In Each City</h2>
        <p className="offer__text">
          Discover the best weekly offers in each city, curated just for you. Immerse yourself in
          a world of savings and indulge in unparalleled experiences.
        </p>

        <Slider
          items={weekly}
          renderItem={(item) => (
            <div className="offer__item offer__item--weekly" key={item.id}>
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
          )}
        />
      </div>

      {/* Visa support */}
      <div className="offer__block">
        <h2 className="offer__title">Visa Support</h2>
        <p className="offer__text">
          Experience stress-free travel with our expert visa support. We provide seamless
          assistance and comprehensive guidance ensuring a smooth journey.
        </p>

        <Slider
          items={visa}
          renderItem={(item) => (
            <div className="offer__item offer__item--visa" key={item.id}>
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
          )}
        />
      </div>
    </section>
  );
};

export default Offer;