"use client";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CheckoutForm = () => {
  const [spinner, setSpinner] = useState(false);
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    setSpinner(true);
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    console.log("Clicked", stripe, elements);

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

    // const CreateOrderInDatabase = async (amount: number) => {
    //   const token = localStorage.getItem("token");
    //   try {
    //     const response = await axios.post(
    //       `${process.env.BACKEND_URL}/orders/create`,
    //       {
    //         userId: "asdfads",
    //         orderItems: "asdfads",
    //         totalPrice: amount,
    //         shippingAddress: "Bangladesh",
    //         paymentMethod: "Credit Card",
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     console.log(response);
    //     if (response.status === 200) {
    //     }
    //     router.push("/dashboard/orders");
    //     setSpinner(false);
    //   } catch (error) {
    //     console.log(error);
    //     setSpinner(false);
    //   }
    // };
    console.log(result, "<<<")
    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
      setSpinner(false);
    } else {
      const { amount } = result.paymentIntent;
      console.log(amount, ">>")
      // CreateOrderInDatabase(amount);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        disabled={!stripe || spinner}
        className={`${
          spinner ? "bg-default" : "bg-primary"
        } text-white px-3 py-2 rounded-xl mt-5 w-full`}
      >
        {spinner ? "Processing..." : "Payment"}
      </button>
    </form>
  );
};

export default CheckoutForm;