import { CheckCircleIcon } from "lucide-react";

const HowItWorks = ({ dictionary }: { dictionary: any }) => {
  return (
    <>
      <section className="section-padding container">
        <div className="">
          <h3 className="text-[hsl(var(--primary-800))] text-center">
            {dictionary.home.howItWorks.heading.start}{" "}
            <span className="text-rider-400">
              {dictionary.home.howItWorks.heading.span1}
            </span>
            ,{" "}
            <span className="text-shop-400">
              {dictionary.home.howItWorks.heading.span2}
            </span>
            {dictionary.home.howItWorks.heading.middle}{" "}
            <span className="text-user-400">
              {dictionary.home.howItWorks.heading.span3} <br />
            </span>{" "}
            {dictionary.home.howItWorks.heading.end}
          </h3>
        </div>
      </section>
      <section className="container pb-20 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {dictionary.home.howItWorks.steps.map((item: any) => {
          const { id, dimmedTitle, title, shortDescription, list } = item;
          return (
            <div key={id} className="flex flex-col gap-4">
              <p className="font-semibold text-gray-400 uppercase">
                {dimmedTitle}
              </p>
              <h4 className="font-bold text-xl md:text-2xl lg:text-3xl text-[hsl(var(--primary-900))]">
                {title}
              </h4>
              <p className="text-gray-600">{shortDescription}</p>
              <ul className="flex flex-col gap-3">
                {list.map((li: any) => {
                  const { id, text } = li;
                  return (
                    <li
                      key={id}
                      className="flex items-center justify-start gap-3 text-gray-600"
                    >
                      <CheckCircleIcon className="stroke-[hsl(var(--primary-600))]" /> {text}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default HowItWorks;
