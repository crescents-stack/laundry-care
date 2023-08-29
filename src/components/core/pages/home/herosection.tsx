import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import WaveBack from "../../assets/backgrounds/wave/wave";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      <section className="section-padding bg-user-500">
        <div className="container mx-auto min-h-[30vh] grid grid-cols-1 md:grid-cols-2 gap-10">
          <aside className="flex items-center justify-center">
            <div className="flex flex-col gap-10">
              <h1 className="font-bold text-user-50">
                Laundry & Dry Cleaning with 48h Delivery at
                <br />
                <span className="text-yellow-300"> Bashundhara</span>
              </h1>
              <div>
                <Button className="bg-lighter-50 text-user-500 hover:bg-lighter-200">
                  Schedule your pickup
                </Button>
              </div>
            </div>
          </aside>
          <aside className="hidden md:block">
            <Image
              src="/images/hero-cloths.png"
              alt=""
              height={1000}
              width={1000}
              className="w-full h-full"
              priority={true}
            />
          </aside>
        </div>
      </section>
      <section className="section-padding bg-user-800 text-lighter-50 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 container pb-10 lg:pb-20">
          <div className="grid grid-cols-1 gap-3">
            <h3 className="text-3xl font-bold text-center md:text-left">
              Ranked #1 by Customers
            </h3>
            <p className="text-user-200 text-center md:text-left">
              in categories Dry cleaner, Laundry service and Laundrette
            </p>
          </div>
          <div className="flex flex-col item-start md:items-end gap-3">
            <div className="flex items-center justify-start md:justify-end gap-1">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <Star
                    key={item}
                    className="bg-user-400 stroke-user-50 p-1 rounded h-8 w-8"
                  />
                );
              })}
            </div>
            <Link
              href="/"
              className="hover:text-user-400 text-center md:text-left"
            >
              See all reivews
            </Link>
          </div>
        </div>
        <WaveBack />
      </section>
    </>
  );
};

export default HeroSection;
