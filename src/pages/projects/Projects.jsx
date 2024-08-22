import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './projects.css'

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__banner">
        <span className="projects__title">
          Our Projects - Dimmer Enterprises LTD
        </span>
        <p className="projects__description">
          Your One Stop Solution. We offer a wide range of borehole drilling and related services
          including: Hydrogeological Survey, Borehole Drilling, Test Pumping,
          Camera Inspection, Pump and Solar Installation, Tank Tower
          Construction and more, for both industrial, domestic and agricultural
          purposes. Let us empower our communities together, Contact us today{" "}
        </p>
        <Link to="/" className="projects__link">
          View More Projects <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
