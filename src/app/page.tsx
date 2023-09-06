
import HowItWorks from "@/components/core/pages/home/how-it-works";
import HeroSection from "@/components/core/pages/home/herosection";
import CompareServices from "@/components/core/pages/home/compare-services";
import Shops from "@/components/core/pages/home/shops/shops";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <CompareServices />
      <Shops />
    </div>
  );
};

export default Home;
