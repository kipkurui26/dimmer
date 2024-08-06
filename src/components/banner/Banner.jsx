import "./banner.css";
import { Link } from "react-router-dom";

const Banner = ({
  bannerTitle,
  bannerDescription,
  bannerButton,
  bannerSpan,
  buttonLink,
  isSpan = false,
}) => {
  return (
    <section className="banner">
      <div className="banner__container">
        {isSpan && <span className="banner__span">{bannerSpan}</span>}
        <h1 className="banner__title">{bannerTitle}</h1>
        <p className="banner__description">{bannerDescription}</p>
        <button className="banner__button" type="submit">
          <Link to={buttonLink} className="banner__button--link">
            {bannerButton}
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Banner;
