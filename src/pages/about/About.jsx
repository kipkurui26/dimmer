import MiniBanner from "../../components/minibanner/MiniBanner";
import "./about.css";
import Mission from "./Mission";
import Appointment from "../../components/appointment/Appointment";
import Faqs from "../../components/faqs/Faqs";
import Overview from "./Overview";
import WhyUs from "./WhyUs";
import Equipments from "./Equipments";
import MetaTags from "../../components/metas/MetaTags";

const About = () => {
  const canonicalUrl = "https://dimmerenterprises.co.ke/about-us";
  const metaTags = [
    {
      metaName: "description",
      metaContent:
        "Learn about Dimmer Enterprises Ltd, Kenya's trusted drilling company. Expert in hydrogeological surveys, borehole drilling, and more.",
    },
  ];
  return (
    <section className="about">
      {/* Meta Tags */}
      <MetaTags
        title={
          "About Us - Dimmer Enterprises Limited"
        }
        metaTags={metaTags}
        canonicalUrl={canonicalUrl}
      />
      <MiniBanner
        isAbout={false}
        miniBannerContent="Our commitment to quality and sustainability has earned us a reputation for excellence in the industry."
        breadcrumbTitle="About Us"
        linkTitle={'View us on FaceBook'}
        hashLink={'https://web.facebook.com/people/Dimmer-enterprises-limited/100063598085974/?sk=photos'}
      />
      <Overview />
      <Mission />
      <WhyUs />
      <Equipments />
      <Appointment />

      <Faqs />
    </section>
  );
};

export default About;
