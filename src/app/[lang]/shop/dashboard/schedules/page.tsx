"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  SelectLabel,
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
import axios from "axios";
import { Calendar, Clock, Edit, MapPin, Phone, Trash } from "lucide-react";
import { useEffect, useState } from "react";

const headers = [
  "Service",
  "Customer",
  "Rider",
  "Payment",
  "Collection",
  "Delivery",
  "Progress",
  "Actions",
];

export default function Schedules() {
  const [schedules, setSchedules] = useState<any>([]);
  const [status, setStatus] = useState("PENDING");
  const FetchScheduleAPI = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${process.env.BACKEND_URL}/schedules/shop`,
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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchScheduleAPI();
  }, []);

  const UpdateProgress = async (data: any) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `${process.env.BACKEND_URL}/schedules`,
        { _id: data._id, progress: status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      if(response.status === 200){
        const UpdatedSchedules = [...schedules.map((element: any) => {
          if(element._id === data._id){
            element.progress = status;
          }
          return element;
        })];
        setSchedules(UpdatedSchedules)
      }
    } catch (error) {
      console.log(error);
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
                    className={`min-w-[100px] text-dark-900 uppercase ${
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
                <TableRow key={schedule._id} className="border-b">
                  <TableCell className="min-w-[180px]">
                    {schedule.services.map((service: any) => {
                      return <div key={service._id}>{service.service}</div>;
                    })}
                  </TableCell>
                  <TableCell className="min-w-[250px]">
                    <div className="flex flex-col">
                      <span className="font-semibold">
                        {schedule.user.name}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3 h-3" /> {schedule.user.phone}
                      </span>
                      <span>
                        <MapPin className="w-3 h-3 mr-1 inline-block" />{" "}
                        {schedule.user.address}
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
                          Progress
                        </div>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Edit progress</DialogTitle>
                          <DialogDescription>
                            Make changes to serivce progress by selecting
                            status.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <Select onValueChange={(e) => setStatus(e)}>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectItem value="PENDING">Pending</SelectItem>
                                <SelectItem value="PROCESSING">
                                  Processing
                                </SelectItem>
                                <SelectItem value="DONE">Done</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <DialogFooter>
                          <Button onClick={() => UpdateProgress(schedule)}>
                            Save changes
                          </Button>
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
              <TableRow />
            </TableBody>
          ) : null}
        </Table>
      </div>
    </div>
  );
}
