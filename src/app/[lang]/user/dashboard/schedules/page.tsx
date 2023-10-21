"use client";

import DatePicker from "@/components/custom/datepicker";
import TimePicker from "@/components/custom/timepicker";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { Calendar, Clock, Edit, MapPin, Phone, Trash } from "lucide-react";
import { useState, useEffect } from "react";

const headers = [
  // "ID",
  "Service",
  "Shop",
  "Rider",
  "Payment",
  "Collection",
  "Delivery",
  "Progress",
  "Actions",
];

export default function Schedules() {
  const [schedules, setSchedules] = useState<any>([]);
  const [formData, setFormData] = useState<any>(null);
  const [errors, setErrors] = useState({});
  const [spinner, setSpinner] = useState(false);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnSubmit = (data: any) => {
    const validationErrors = validation(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(data);
      const collectionDate = new Date(formData.collectionDate);
      const deliveryDate = new Date(formData.deliveryDate);
      const collect = {
        date: collectionDate.toLocaleDateString(),
        time: formData.collectionTime,
      };
      const deliver = {
        date: deliveryDate.toLocaleDateString(),
        time: formData.deliveryTime,
      };
      UpdateProgress({ _id: data._id, collect, deliver });
    }
    setErrors(validationErrors);
  };
  const validation = (data: any) => {
    let obj: any = {};
    return obj;
  };
  const FetchScheduleAPI = async () => {
    setSpinner(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${process.env.BACKEND_URL}/schedules/user`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setSchedules(response.data.schedules);
      }
      setSpinner(false);
    } catch (error: any) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Fetching schedules",
        description: error.response.message || "Something went wrong!",
      });
      setSpinner(false);
    }
  };
  useEffect(() => {
    FetchScheduleAPI();
  }, []);

  const UpdateProgress = async (data: any) => {
    setSpinner(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${process.env.BACKEND_URL}/schedules/user`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if (response.status === 200) {
        setSchedules([
          ...schedules.map((element: any) => {
            if (element._id === data._id) {
              element = { ...element, ...data };
            }
            return element;
          }),
        ]);
        toast({
          variant: "default",
          title: "Updating schedules",
          description: response.data.message || "Successful!",
        });
      }
      setSpinner(false);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Fetching schedules",
        description: error.response.message || "Something went wrong!",
      });
      setSpinner(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 h-full">
      <h3>Schedules</h3>
      <div className="border h-full rounded-lg overflow-x-auto">
        <Table>
          <TableCaption>All the recent schedules</TableCaption>
          <TableHeader>
            <TableRow className="bg-[hsl(var(--primary-50))]">
              {headers.map((head: any, index: number) => {
                return (
                  <TableHead
                    key={head}
                    className={`min-w-[100px] text-dark-900 ${
                      index === 0 ? "rounded-tl-lg" : ""
                    }`}
                  >
                    {head}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>

          {schedules.length ? (
            <TableBody>
              {[...schedules].reverse().map((schedule: any) => (
                <TableRow key={schedule._id}>
                  <TableCell className="min-w-[180px]">
                    {schedule.services.map((service: any) => {
                      return <div key={service._id}>{service.service}</div>;
                    })}
                  </TableCell>
                  <TableCell className="min-w-[250px]">
                    <div className="flex flex-col">
                      <span className="font-semibold">
                        {schedule.shop.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {schedule.shop.phone}
                      </span>
                      <span>
                        <MapPin className="w-3 h-3 mr-1 inline-block" />{" "}
                        {schedule.shop.address}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="min-w-[100px]">
                    <div className="flex flex-col">
                      <span className="font-semibold">
                        {schedule.rider.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {schedule.rider.phone}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="mr-1">BDT {schedule.payment.amount}</span>
                    <Badge className="pt-[4px]">
                      {schedule.payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="min-w-[100px]">
                    <div className="flex flex-col">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {schedule.collect.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {schedule.collect.time}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="min-w-[100px]">
                    <div className="flex flex-col">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {schedule.deliver.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {schedule.deliver.time}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="min-w-[100px]">
                    <Badge
                      className={`pt-[4px] ${
                        schedule.progress === "DONE"
                          ? "bg-[hsl(var(--primary-600))] hover:bg-[hsl(var(--primary-700))]"
                          : schedule.progress === "PROCESSING"
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-orange-400 hover:bg-orange-500"
                      }`}
                    >
                      {schedule.progress}
                    </Badge>
                  </TableCell>
                  <TableCell className="min-w-[100px] flex flex-col justify-center gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="flex gap-2 hover:text-[hsl(var(--primary-600))] group cursor-pointer">
                          <Edit className="w-4 h-4 group-hover:stroke-[hsl(var(--primary-600))]" />
                          Schedule
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit Schedule</DialogTitle>
                          <DialogDescription>
                            Make changes to serivce progress by selecting
                            status.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-1 gap-2">
                            <label className="font-semibold">
                              Collection Date
                            </label>
                            <DatePicker
                              setter={handleOnChange}
                              name="collectionDate"
                              defaultValue={schedule.collect.date}
                            />
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            <label className="font-semibold">
                              Collection Time
                            </label>
                            <TimePicker
                              field={{
                                value: schedule.collect.time,
                                onChange: (e: any) => {
                                  handleOnChange({
                                    target: {
                                      name: "collectionTime",
                                      value: e,
                                    },
                                  });
                                },
                              }}
                            />
                          </div>
                          <div className="grid grid-cols-1 gap-2">
                            <label className="font-semibold">
                              Delivery Date
                            </label>
                            <DatePicker
                              setter={handleOnChange}
                              name="deliveryDate"
                              defaultValue={schedule.deliver.date}
                            />
                          </div>

                          <div className="grid grid-cols-1 gap-2">
                            <label className="font-semibold">
                              Delivery Time
                            </label>
                            <TimePicker
                              field={{
                                value: schedule.deliver.time,
                                onChange: (e: any) => {
                                  handleOnChange({
                                    target: {
                                      name: "deliveryTime",
                                      value: e,
                                    },
                                  });
                                },
                              }}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          {spinner ? (
                            <ButtonLoading className="" />
                          ) : (
                            <Button onClick={() => handleOnSubmit(schedule)}>
                              Update
                            </Button>
                          )}
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                    <div className="flex gap-2 text-red-500 cursor-pointer">
                      <Trash className="w-4 h-4 stroke-red-500" />
                      Service
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : null}
        </Table>
      </div>
    </div>
  );
}
