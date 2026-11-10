import { Link } from "react-router-dom";
import { FaUser, FaGlobe, FaHome, FaArrowRight } from "react-icons/fa";
import train from "../Images/train.jpg";
import plane from "../Images/plane.jpg";
import dubai from "../Images/country-dubai.jpg";
import antalya from "../Images/country-antalya.jpg";
import sharm from "../Images/country-sharm.jpg";
import istanbul from "../Images/country-istanbul.jpg";
import "./Country.css";

const explore = [
  {
    id: 1,
    title: "Cheap Railway Tickets With Us",
    subtitle: "Whole world",
    text: "Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe. Immerse yourself in the beauty of different cultures, all accessible through our extensive railway network. .",
    img: train,
  },
  {
    id: 2,
    title: "Discover Exciting Air Travel Deals",
    subtitle: "Global Destinations",
    text: "Embark on an airborne adventure and explore destinations worldwide. Whether it's the breathtaking landscapes, vibrant cities, or cultural treasures, our airline services provide a convenient and exhilarating way to navigate the globe. Immerse yourself in the richness of diverse cultures, all easily accessible through our extensive air travel network. .",
    img: plane,
  },
];

const countries = [
  {
    id: 1,
    name: "Dubai",
    country: "United Arab Emirates",
    text: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",
    people: "8.66 Mil People",
    area: "41.290 km2",
    price: "$1.100.200",
    img: dubai,
  },
  {
    id: 2,
    name: "Antalya",
    country: "Turkey",
    text: "Antalya is the fastest-growing city in Turkey, and tourists from around the world are discovering its fabulous mix of great beaches and traditional Turkish culture. Kids will love the Beach Park, which features Aqua Land (a waterslide-fanatic's dream) and Dolphin Land (home to dolphins, sea lions and white whales). Make sure to explore the old town center and to see Hadrian's Gate.",
    people: "44.48 Mil People",
    area: "275.400 km2",
    price: "$946.000",
    img: antalya,
  },
  {
    id: 3,
    name: "Sharm El-Sheikh",
    country: "Egypt",
    text: "Sharm El Sheikh is the center of tourism action in Sinai Peninsula and it has the world top diving sites. Specially the underwater wonders of Ras Mohammed national park that took Sharm city to whole different level. The city has diving and shipwreck sites that attract both advanced and recreational divers from around the world to discover the un parallel marine life deep down the red sea.",
    people: "67.41 Mil People",
    area: "551.500 km2",
    price: "$425.600",
    img: sharm,
  },
  {
    id: 4,
    name: "Istanbul",
    country: "Turkey",
    text: "Istanbul is the most populous city in Turkey and its cultural, economic and historic center. It is located in north-western part of Turkey, divided into European and Asian side by Bosphorus, which connects the Sea of Marmara and Black Sea. It is the only city in the world that sits on two continents.",
    people: "67.41 Mil People",
    area: "551.500 km2",
    price: "$425.600",
    img: istanbul,
  },
];

const Country = () => {
  return (
    <section className="country">
      {/* Explore destinations */}
      <div className="country__block">
        <h2 className="country__title">Explore Destinations With Ease</h2>
        <p className="country__text">
          Find the best deals on railway and airplane tickets in each city, carefully selected for you.
        </p>

        <div className="country__list country__list--narrow">
          {explore.map((item) => (
            <div className="country__item" key={item.id}>
              <div className="country__img-box">
                <img src={item.img} alt={item.title} className="country__img" />
              </div>

              <div className="country__info">
                <div className="country__head">
                  <div>
                    <h3 className="country__name">{item.title}</h3>
                    <span className="country__sub">{item.subtitle}</span>
                  </div>
                  <Link to="/tour" className="country__btn">
                    Explore More
                  </Link>
                </div>
                <p className="country__desc">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Countries */}
      <div className="country__block">
        <h2 className="country__title">Visit One Of Our Countries Now</h2>
        <p className="country__text">
          Discover the best offers in each city, curated just for you. Immerse yourself in a world
          of savings and indulge in unparalleled experiences.
        </p>

        <div className="country__list">
          {countries.map((item) => (
            <div className="country__item" key={item.id}>
              <div className="country__img-box">
                <img src={item.img} alt={item.name} className="country__img" />
              </div>

              <div className="country__info">
                <div className="country__head">
                  <div>
                    <h3 className="country__name">{item.name}</h3>
                    <span className="country__sub">{item.country}</span>
                  </div>
                  <Link to="/tour" className="country__btn">
                    Explore More
                  </Link>
                </div>

                <p className="country__desc">{item.text}</p>

                <div className="country__stats">
                  <span><FaUser /> {item.people}</span>
                  <span><FaGlobe /> {item.area}</span>
                  <span><FaHome /> {item.price}</span>
                </div>

                <Link to="/contact" className="country__link">
                  Need Directions ? <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Country;