import HowItWorks from "@/components/core/pages/home/how-it-works";
import HeroSection from "@/components/core/pages/home/herosection";
import CompareServices from "@/components/core/pages/home/compare-services";
import Shops from "@/components/core/pages/home/shops/shops";
import Customers from "@/components/core/pages/home/customers/customers";
import FAQ from "@/components/core/pages/faq";
import { ParamLang } from "@/types/types";
import { getDictionary } from "../dictionaries";

const Home = async ({ params }: ParamLang) => {
  const dictionary = await getDictionary(params.lang);
  return (
    <div>
      <HeroSection dictionary={dictionary} />
      <HowItWorks dictionary={dictionary} />
      <CompareServices dictionary={dictionary} />
      <Shops dictionary={dictionary} />
      <Customers dictionary={dictionary} />
      <FAQ dictionary={dictionary} />
    </div>
  );
};

export default Home;
