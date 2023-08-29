import { CheckCircleIcon } from "lucide-react";

const HowItWorks = () => {
  const STEPS = [
    {
      id: 0,
      dimmedTitle: "Flexible",
      title: "1. Schedule your Collection",
      shortDescription:
        "Plan your day with case. Choose a collection and delivery time at your convenience",
      list: [
        {
          id: 0,
          icon: "",
          text: "Book online or with our mobile app",
        },
        {
          id: 1,
          icon: "",
          text: "Weekend and evening slots available",
        },
      ],
    },
    {
      id: 1,
      dimmedTitle: "Quiz & Easy",
      title: "2. Pack your laundry",
      shortDescription:
        "Packe your items in a disposable bag. Use one bag per service. Our driver will transfer them to reusable Laundryheap bags which you can keep for your next order",
      list: [
        {
          id: 0,
          icon: "",
          text: "Pack one bag per service",
        },
        {
          id: 1,
          icon: "",
          text: "No need to count or weigh your items",
        },
      ],
    },
    {
      id: 2,
      dimmedTitle: "Transparent",
      title: "3. Wait for our driver",
      shortDescription:
        "You'll receive a notification when our driver is nearby. They will collect your bags and take them to your local cleaning facility.",
      list: [
        {
          id: 0,
          icon: "",
          text: "Regular order updates",
        },
        {
          id: 1,
          icon: "",
          text: "Live driver tracking",
        },
      ],
    },
    {
      id: 4,
      dimmedTitle: "Convenient",
      title: "4. Relax while we take care of your laundry",
      shortDescription:
        "Your local partner facility will clean your items with utmost care. Our driver will then deliver them back to you whenever you like. Your're in full control of your delivery and can always reschedule if not at home",
      list: [
        {
          id: 0,
          icon: "",
          text: "24h turnaround time",
        },
        {
          id: 1,
          icon: "",
          text: "Real-time order status",
        },
        {
          id: 2,
          icon: "",
          text: "Easy to reschedule",
        },
      ],
      button: {
        text: "Schedule your pickup",
        icon: "",
        link: "#",
      },
    },
  ];
  return (
    <>
      <section className="section-padding container">
        <div className="">
          <h3 className="text-center font-bold text-user-900">
            We collect, clean, and deliver <br /> your laundry and dry cleaning.
          </h3>
        </div>
      </section>
      <section className="container pb-20 grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        {STEPS.map((item) => {
          const { id, dimmedTitle, title, shortDescription, list } = item;
          return (
            <div key={id} className="flex flex-col gap-4">
              <h6 className="font-semibold text-gray-400 uppercase">
                {dimmedTitle}
              </h6>
              <h4 className="font-bold text-xl md:text-2xl lg:text-3xl text-user-900">
                {title}
              </h4>
              <p className="text-gray-600">{shortDescription}</p>
              <ul className="flex flex-col gap-3">
                {list.map((li) => {
                  const { id, text } = li;
                  return (
                    <li
                      key={id}
                      className="flex items-center justify-start gap-3 text-gray-600"
                    >
                      <CheckCircleIcon className="stroke-user-600" /> {text}
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
