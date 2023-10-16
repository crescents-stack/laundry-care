"use client";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutForm = ({ formdata }: { formdata: any }) => {
  const [spinner, setSpinner] = useState(false);
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    setSpinner(true);
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${window.location.href}?redirect_status=success`,
      },
      redirect: "if_required",
    });

    const CreateOrderInDatabase = async (data: any) => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.post(
          `${process.env.BACKEND_URL}/schedules`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        if (response.status === 200) {
          router.push(
            window.location.origin +
              localStorage.getItem("lang") +
              localStorage.getItem("theme") +
              "/dashboard/schedules"
          );
          setSpinner(false);
        }
      } catch (error) {
        console.log(error);
        setSpinner(false);
      }
    };

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
      setSpinner(false);
    } else {
      const { amount } = result.paymentIntent;
      const scheduleDataForDB = {
        services: formdata.services.map((element: any) => {
          return { _id: element._id, service: element.service };
        }),
        user: {
          _id: "651adfe80eb8a540b4e7db82",
          name: "Musiur Alam Opu",
          phone: "+8801323260714",
          address: "Bashundhara R/A",
        },
        shop: {
          _id: "651adfe80eb8a540b4e7db82",
          name: "Musiur Alam Opu",
          phone: "+8801323260714",
          address: "Bashundhara R/A",
        },
        rider: {
          _id: "651b95130dc63c6aebe74c6a",
          name: "Musiur Alam Opu",
          phone: "+8801323260714",
          message: formdata.messageForRider
        },
        collect: {
          date: formdata.collectionDate.toLocaleDateString(),
          time: formdata.collectionTime,
        },
        deliver: {
          date: formdata.deliveryDate.toLocaleDateString(),
          time: formdata.deliveryTime,
        },
        payment: {
          amount,
          status: "PAID",
        },
        progress: "PENDING",
      };
      CreateOrderInDatabase(scheduleDataForDB);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        disabled={!stripe || spinner}
        className={`${
          spinner ? "bg-gray-600" : "bg-primary"
        } text-white px-3 py-2 rounded-xl mt-5 w-full`}
      >
        {spinner ? "Processing..." : "Payment"}
      </button>
    </form>
  );
};

export default CheckoutForm;

const ScheduleTemplate = {
  services: [
    {
      _id: "652c4469fd833cf176089acd",
      service: "Wash",
    },
  ],
  shop: {
    _id: "651adfe80eb8a540b4e7db82",
    name: "Musiur Alam Opu",
    phone: "+8801323260714",
    address: "Bashundhara R/A",
  },
  rider: {
    _id: "651b95130dc63c6aebe74c6a",
    name: "Musiur Alam Opu",
    phone: "+8801323260714",
  },
  collect: {
    date: "10/16/2023",
    time: "04:29 AM",
  },
  deliver: {
    date: "10/16/2023",
    time: "04:29 AM",
  },
  payment: {
    amount: 75,
    status: "PAID",
  },
  progress: "PENDING",
};
