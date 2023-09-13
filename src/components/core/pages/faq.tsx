import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FAQ = ({ dictionary }: { dictionary: any }) => {
  const FaqItems = [
    {
      id: 0,
      question: "Do you wash my clothes together with other people's clothes?",
      answer:
        "Absolutely not. Each order is washed separately so no need to worry about that. Your clothes are safe with us!",
    },
    {
      id: 1,
      question: "What do you clean my cloths?",
      answer:
        "After your items are collected by our driver, they are taken to one of our trusted partner facilities to ensure your items are treated with the utmost care. We take pride in supporting local businesses and minimizing the carbon",
    },
    {
      id: 2,
      question: "What is the turnaround time?",
      answer:
        "You will be happy to know that last month we have delivered 98.7% of all standard laundry and dry cleaning within 24 hours.",
    },
    {
      id: 3,
      question: "What if I'm not at home during collection or delivery?",
      answer:
        "Not a problem. If you won't be at home during delivery, you can use our mobile app to simply reschedule or instruct the driver to leave your items in a safe place or at a reception if you have one. You can also always contact our Customer support team to get help.",
    },
  ];
  return (
    <div className="container section-margin section-padding">
      <h3 className="pb-10 text-user-800 text-center">
        Do you have any question?
      </h3>
      <div className="max-w-[700px] mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {FaqItems.map((item) => {
            const { id, question, answer } = item;
            return (
              <AccordionItem value={`${id}`} key={id}>
                <AccordionTrigger className="text-base lg:text-xl text-left">
                  {question}
                </AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className="flex justify-center pt-10">
        <Link
          href="/"
          className="text-center hover:underline text-user-500 hover:text-user-700"
        >
          Visit our help center
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
