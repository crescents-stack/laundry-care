"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import TimePicker from "@/components/custom/timepicker";
import ServiceSelector from "@/components/custom/serviceselector";
import CheckoutForm from "@/components/custom/checkoutform";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import PrivateRoute from "@/layouts/private-route";
const stripePromise = loadStripe("pk_test_qblFNYngBkEdjEZ16jxxoWSM");

const serviceSchema = z.object({
  id: z.number(),
  service: z.string(),
  price: z.number(),
  description: z.string(),
});

const FormSchema: any = z.object({
  address: z.string().min(10, {
    message: "Address must be at least 10 characters.",
  }),
  collectionDate: z.date({
    required_error: "A date of collection is required.",
  }),
  deliveryDate: z.date({
    required_error: "A date of delivery is required.",
  }),
  collectionTime: z.string().min(2, {
    message: "Collection time is required.",
  }),
  deliveryTime: z.string().min(2, {
    message: "Delivery time is required.",
  }),
  messageForRider: z.string(),
  services: z.array(serviceSchema).refine((services) => services.length > 0, {
    message: "At least one service is required.",
  }),
});

export default function PickupSchedule() {
  const [showCheckout, setShowCheckout] = useState(false);
  const [stripeClientSecret, setStripeClientSecret] = useState(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setShowCheckout(true);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  const GetClientSecret = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    const amount = 500;
    try {
      const response = await axios.post(
        `${process.env.BACKEND_URL}/stripe/secret`,
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setStripeClientSecret(response.data.client_secret);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetClientSecret();
    localStorage.setItem("from", "/pickup-schedule");
  }, []);

  return (
    <PrivateRoute>
      <div className="container section-padding">
        <div className="">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-start`}
              >
                {!showCheckout ? (
                  <div className="grid grid-cols-1 gap-8">
                    <h4 className="text-xl lg:text-2xl font-medium">
                      Collection & Delivery
                    </h4>
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }: { field: any }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Your address for pickup</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g. Bashundhara R/A, Block #F, Road ..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="collectionDate"
                      render={({ field }: { field: any }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Collection Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="collectionTime"
                      render={({ field }: { field: any }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Collection Time</FormLabel>
                          <TimePicker field={field} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="deliveryDate"
                      render={({ field }: { field: any }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Delivery Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date: Date) =>
                                  date < form.getValues("collectionDate")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="deliveryTime"
                      render={({ field }: { field: any }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Delivery Time</FormLabel>
                          <TimePicker field={field} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="messageForRider"
                      render={({ field }: { field: any }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Any special message for Rider</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ) : null}
                {!showCheckout ? (
                  <div className="grid grid-cols-1 gap-8">
                    <h4 className="text-xl lg:text-2xl font-medium">
                      What services do you need?
                    </h4>
                    <FormField
                      control={form.control}
                      name="services"
                      render={({ field }: { field: any }) => (
                        <FormItem className="flex flex-col">
                          <FormMessage />
                          <FormControl>
                            <ServiceSelector field={field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                ) : null}
              </div>
              <div className="flex justify-center pb-10">
                {showCheckout ? (
                  <div
                    onClick={() => setShowCheckout(false)}
                    className="cursor-pointer underline"
                  >
                    Reschedule
                  </div>
                ) : (
                  <Button type="submit">Confirm Schedule</Button>
                )}
              </div>
            </form>
          </Form>
        </div>
        {showCheckout ? (
          <div className="grid grid-cols-1 gap-8 max-w-[400px] mx-auto">
            <h4 className="text-xl lg:text-2xl font-medium">Checkout</h4>
            {stripeClientSecret ? (
              <Elements
                stripe={stripePromise}
                options={{
                  clientSecret: stripeClientSecret || "",
                }}
              >
                <CheckoutForm />
              </Elements>
            ) : (
              "Loading form..."
            )}
          </div>
        ) : null}
      </div>
    </PrivateRoute>
  );
}
