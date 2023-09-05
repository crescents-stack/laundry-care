
import HowItWorks from "@/components/core/pages/home/how-it-works";
import HeroSection from "@/components/core/pages/home/herosection";
import CompareServices from "@/components/core/pages/home/compare-services";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <CompareServices />
    </div>
  );
};

export default Home;
