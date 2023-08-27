import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <section className="section-padding bg-user-500">
        <div className="container mx-auto min-h-[40vh] grid grid-cols-1 md:grid-cols-2 gap-10">
          <aside className="flex items-center justify-center">
            <div className="flex flex-col gap-10">
              <h1 className="font-bold text-user-50">
                Laundry & Dry Cleaning With 48h Delivery
              </h1>
              <div>
                <Button className="bg-lighter-50 text-user-500 hover:bg-lighter-200">
                  Schedule a date
                </Button>
              </div>
            </div>
          </aside>
          <aside className="hidden md:block">
            <Image
              src="/images/hero-cloths.png"
              alt=""
              height={200}
              width={200}
              className="w-full h-full"
            />
          </aside>
        </div>
      </section>
      <section className="section-padding bg-user-800 text-lighter-50">
        <div className="flex items-center justify-between gap-10 container">
          <div className="grid grid-cols-1 gap-3 ">
            <h3 className="text-3xl font-bold">Ranked #1 by Customers</h3>
            <p className="text-user-200">
              in categories Dry cleaner, Laundry service and Laundrette
            </p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center justify-end gap-1">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <Star
                    key={item}
                    className="bg-user-400 stroke-user-50 p-1 rounded h-8 w-8"
                  />
                );
              })}
            </div>
            <Link href="/" className="hover:text-user-400">See all reivews</Link>
          </div>
        </div>
      </section>
      <section className="section-padding container">
        <div className="">
          <h3 className="text-center font-bold">
            We collect, clean, and deliver <br /> your laundry and dry cleaning.
          </h3>
        </div>
      </section>
    </div>
  );
};

export default Home;
