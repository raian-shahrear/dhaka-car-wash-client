import AboutUsHero from "./AboutUsHero";
import AboutUsMissionVision from "./AboutUsMissionVision";
import AboutUsTeam from "./AboutUsTeam";

const AboutUS = () => {
  return (
    <div className="container mx-auto px-4 lg:px-10 pt-20 lg:pt-32 min-h-[67vh]">
      <AboutUsHero />
      <AboutUsMissionVision />
      <AboutUsTeam />
    </div>
  );
};

export default AboutUS;
