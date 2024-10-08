import aboutBanner from "../../assets/bannerImage.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Overview = () => {
  const paragraphText = [
    {
      id: 1,
      text: "Dimmer Enterprises LTD is a leading Borehole Drilling Firm located in Nairobi, Kenya. With over 10 years of industry experience, we specialize in providing high-quality water solutions for residential, commercial, and industrial clients.",
    },
    {
      id: 2,
      text: "Our dedication to quality and sustainability has established us as a trusted name in the industry. We offer a comprehensive range of services, including borehole drilling, hydrogeological surveys, pump and solar installation, and maintenance.",
    },
    {
      id: 3,
      text: "Our team of experienced professionals is committed to delivering reliable and efficient water solutions that meet the unique needs of our clients. Reach out to us today to learn more about how we can help you with your water needs.",
    },
  ];
  return (
    <div className="about__overview">
      <div className="about__container">
        <div className="about__overview--col">
          {paragraphText.map(({ id, text }) => (
            <p className="about__overview--text" key={id}>
              {text}
            </p>
          ))}
          <div className="about__link--div">
            <Link to="https://web.facebook.com/people/Dimmer-enterprises-limited/100063598085974/?sk=photos" target="_blank" className="about__link">
              View Our Projects <FaArrowRight />{" "}
            </Link>
          </div>
        </div>
        <figure className="about__figure">
          <img
            className="about__figure--image"
            src={aboutBanner}
            alt="About Dimmer Enterprises LTD"
            title="About Dimmer Enterprises LTD"
            loading="eager"
          />
        </figure>
      </div>
    </div>
  );
};

export default Overview;
