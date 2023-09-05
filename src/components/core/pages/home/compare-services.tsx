import { Button } from "@/components/ui/button";
import { LeafIcon } from "lucide-react";

const CompareServices = () => {
  return (
    <section className=" section-margin bg-user-700">
      <div className="container section-padding ">
        <h2 className="text-lighter-50 text-center">
          <span className="text-yellow-400">Compare</span> our services
        </h2>
        <div className="overflow-auto">
          <table className="mt-10 w-full min-w-[1000px]">
            <thead>
              <tr>
                {TableData.headings.map((thead) => {
                  const { id, color, text, icon } = thead;
                  return (
                    <th
                      key={id}
                      className={`font-semibold min-w-[120px] p-5 text-sm md:text-base ${
                        id === 0
                          ? "rounded-tl-lg"
                          : id === 4
                          ? "rounded-tr-lg"
                          : ""
                      }`}
                      style={{ background: `${color}` }}
                    >
                      {icon}
                      {text}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {TableData.rows.map((row) => {
                const { id, tds } = row;
                return (
                  <tr
                    key={id}
                    className={`${
                      id % 2 !== 0 ? "bg-gray-100" : "bg-white"
                    } ${
                      id === 0
                        ? "rounded-bl-lg"
                        : id === 6
                        ? "rounded-br-lg"
                        : ""
                    }`}
                  >
                    {tds.map((td) => {
                      const { id, text, icon } = td;
                      return (
                        <td
                          key={id}
                          className={`p-5 text-body-400 text-xs md:text-sm ${
                            id === 0
                              ? "font-semibold text-user-700 bg-[#F2F2F280]"
                              : id === 1
                              ? "bg-[#BAEBFF40]"
                              : id === 2
                              ? "bg-[#93ECE540]"
                              : id === 3
                              ? "bg-[#FFE5AE40]"
                              : id === 4
                              ? "bg-[#DCF5FF40]"
                              : ""
                          }
                          ${id !== 0 ? "text-center" : ""}
                          ${
                            id === 0 && row.id === 6
                              ? "rounded-bl-lg"
                              : id === 4 && row.id === 6
                              ? "rounded-br-lg"
                              : ""
                          }`}
                        >
                          <div
                            className={`${
                              id !== 0
                                ? "flex items-center justify-center gap-1"
                                : ""
                            }`}
                          >
                            {icon}
                            {text}
                          </div>
                          <br />
                          {id !== 0 && row.id === 6 ? <Button>Get service</Button> : null}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CompareServices;

const TableData = {
  headings: [
    {
      id: 0,
      color: "#f2f2f2",
      text: "",
      icon: "",
    },
    {
      id: 1,
      color: "#BAEBFF",
      text: "Wash",
      icon: "",
    },
    {
      id: 2,
      color: "#93ECE5",
      text: "Clean & Iron",
      icon: "",
    },
    {
      id: 3,
      color: "#FFE5AE",
      text: "Ironing",
      icon: "",
    },
    {
      id: 4,
      color: "#DCF5FF",
      text: "Duvets & Bulky Items",
      icon: "",
    },
  ],
  rows: [
    {
      id: 0,
      tds: [
        {
          id: 0,
          text: "What is included",
        },
        {
          id: 1,
          text: "Wash + Tumble-Dry",
        },
        {
          id: 2,
          text: "Wash and Iron",
        },
        {
          id: 3,
          text: "Ironing",
        },
        {
          id: 4,
          text: "Custom cleaning",
        },
      ],
    },
    {
      id: 1,
      tds: [
        {
          id: 0,
          text: "Typically included items",
        },
        {
          id: 1,
          text: "T-shirts, trousers, bedsheets and udergarments.",
        },
        {
          id: 2,
          text: "Shirts, t-shirts, suits, trousers and bedsheets.",
        },
        {
          id: 3,
          text: "Shirts, t-shirts and bedsheets.",
        },
        {
          id: 4,
          text: "Duvets, pillows and blankets. ",
        },
      ],
    },
    {
      id: 2,
      tds: [
        {
          id: 0,
          text: "Service time",
        },
        {
          id: 1,
          text: "24h*",
          icon: "",
        },
        {
          id: 2,
          text: "24h*",
          icon: "",
        },
        {
          id: 3,
          text: "24h*",
          icon: "",
        },
        {
          id: 4,
          text: "Up to 3 days",
          icon: "",
        },
      ],
    },
    {
      id: 3,
      tds: [
        {
          id: 0,
          text: "Pricing",
        },
        {
          id: 1,
          text: "PER ITEMS BDT 15",
          icon: "",
        },
        {
          id: 2,
          text: "PER ITEMS BDT 15",
          icon: "",
        },
        {
          id: 3,
          text: "PER ITEMS BDT 15",
          icon: "",
        },
        {
          id: 4,
          text: "PER ITEMS BDT 50",
          icon: "",
        },
      ],
    },
    {
      id: 4,
      tds: [
        {
          id: 0,
          text: "Delivery",
        },
        {
          id: 1,
          text: "Free",
          icon: "",
        },
        {
          id: 2,
          text: "Free",
          icon: "",
        },
        {
          id: 3,
          text: "Free",
          icon: "",
        },
        {
          id: 4,
          text: "Free",
          icon: "",
        },
      ],
    },
    {
      id: 5,
      tds: [
        {
          id: 0,
          text: "Items returned",
        },
        {
          id: 1,
          text: "In a laundrycare bag",
          icon: "",
        },
        {
          id: 2,
          text: "In a laundrycare bag",
          icon: "",
        },
        {
          id: 3,
          text: "In a laundrycare bag",
          icon: "",
        },
        {
          id: 4,
          text: "In a laundrycare bag",
          icon: "",
        },
      ],
    },
    {
      id: 6,
      tds: [
        {
          id: 0,
          text: "Eco friendly",
        },
        {
          id: 1,
          text: "",
          icon: <LeafIcon />,
        },
        {
          id: 2,
          text: "",
          icon: <LeafIcon />,
        },
        {
          id: 3,
          text: "",
          icon: <LeafIcon />,
        },
        {
          id: 4,
          text: "",
          icon: <LeafIcon />,
        },
      ],
    },
  ],
};
