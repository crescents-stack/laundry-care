import Link from "next/link";

const Footer = () => {
  const Links = [
    {
      id: 0,
      parent: "Explore",
      childs: [
        {
          id: 0,
          child: "How it works",
          link: "#how-it-works",
        },
        {
          id: 1,
          child: "Services & Prices",
          link: "#services-&-prices",
        },
        {
          id: 2,
          child: "Help Center",
          link: "#help-center",
        },
      ],
    },
    {
      id: 1,
      parent: "Our solutions",
      childs: [
        {
          id: 0,
          child: "Laundry",
          link: "#laundry",
        },
        {
          id: 1,
          child: "Dry cleaning",
          link: "#dry-cleaning",
        },
      ],
    },
    {
      id: 2,
      parent: "Our company",
      childs: [
        {
          id: 0,
          child: "About",
          link: "/about",
        },
        {
          id: 1,
          child: "Blogs",
          link: "/blogs",
        },
        {
          id: 2,
          child: "Locations",
          link: "/locations",
        },
        {
          id: 3,
          child: "Customer Reviews",
          link: "/customer-reviews",
        },
      ],
    },
    {
      id: 3,
      parent: "Work with us",
      childs: [
        {
          id: 0,
          child: "Career",
          link: "/career",
        },
        {
          id: 1,
          child: "Partner shop owner",
          link: "/shop",
        },
        {
          id: 2,
          child: "Partner rider",
          link: "/rider",
        },
      ],
    },
  ];
  return (
    <footer className="section-padding border-t border-[hsl(var(--primary-50))]">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-10">
        {Links.map((item) => {
          return (
            <div key={item.id}>
              <h4 className="text-lg lg:text-xl font-bold text-[hsl(var(--primary-800))]">{item.parent}</h4>
              <div className="flex flex-col items-start justify-start gap-3 py-5">
                {item.childs.map((children) => {
                  const { id, link, child } = children;
                  return (
                    <Link
                      key={id}
                      href={link}
                      className="text-[hsl(var(--primary-900))] hover:text-[hsl(var(--primary-600))]"
                    >
                      {child}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-10 border-t border-user-50 text-gray-400 container">
        All rights reserved. © Laundrycare 2023. By visiting this page you agree
        to our{" "}
        <Link href="#" className="text-[hsl(var(--primary-600))] hover:underline">
          privacy policy
        </Link>{" "}
        and{" "}
        <Link href="#" className="text-[hsl(var(--primary-600))] hover:underline">
          terms and conditions
        </Link>
        .
      </div>
    </footer>
  );
};

export default Footer;
