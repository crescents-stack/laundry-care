import { Button } from "@/components/ui/button";
// import Image from "next/image";
import Link from "next/link";
import WaveBack from "../../assets/backgrounds/wave/wave";
import { Star } from "lucide-react";

const HeroSection = async ({ dictionary }: { dictionary: any }) => {
  return (
    <>
      <section className="section-padding bg-primary">
        <div className="container  min-h-[30vh] grid grid-cols-1 gap-10">
          <aside className="flex items-center justify-center text-center max-w-[700px] mx-auto">
            <div className="flex flex-col gap-10">
              <h1 className="text-[hsl(var(--primary-50))]">
                {dictionary.home.hero.heading.white}
                <br />
                <span className="text-yellow-300">
                  {" "}
                  {dictionary.home.hero.heading.highlighted}
                </span>
              </h1>
              <div>
                <Button className="bg-lighter-50 text-primary hover:bg-lighter-200">
                  {dictionary.home.hero.btnText}
                </Button>
              </div>
            </div>
          </aside>
          {/* <aside className="hidden md:block">
            <Image
              src="/images/hero-cloths.png"
              alt=""
              height={1000}
              width={1000}
              className="w-full h-full"
              priority={true}
            />
          </aside> */}
        </div>
      </section>
      <section className="section-padding bg-[hsl(var(--primary-800))] text-white relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 container pb-10 lg:pb-20">
          <div className="grid grid-cols-1 gap-3">
            <h2 className="text-3xl font-bold text-center md:text-left text-white">
              {dictionary.home.hero.footer.left.heading}
            </h2>
            <p className="text-[hsl(var(--primary-100))] text-center md:text-left">
              {dictionary.home.hero.footer.left.p}
            </p>
          </div>
          <div className="flex flex-col item-start md:items-end gap-3">
            <div className="flex items-center justify-start md:justify-end gap-1">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <Star
                    key={item}
                    className="bg-[hsl(var(--primary-400))] stroke-[hsl(var(--primary-50))] p-1 rounded h-8 w-8"
                  />
                );
              })}
            </div>
            <Link
              href="/"
              className="text-white hover:text-[hsl(var(--primary-400))] text-center md:text-left"
            >
              {dictionary.home.hero.footer.right.p}
            </Link>
          </div>
        </div>
        <WaveBack />
      </section>
    </>
  );
};

export default HeroSection;
