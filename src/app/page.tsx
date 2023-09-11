import HowItWorks from "@/components/core/pages/home/how-it-works";
import HeroSection from "@/components/core/pages/home/herosection";
import CompareServices from "@/components/core/pages/home/compare-services";
import Shops from "@/components/core/pages/home/shops/shops";
import Customers from "@/components/core/pages/home/customers/customers";
import FAQ from "@/components/core/pages/faq";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <CompareServices />
      <Shops />
      <Customers />
      <FAQ />
    </div>
  );
};

export default Home;
