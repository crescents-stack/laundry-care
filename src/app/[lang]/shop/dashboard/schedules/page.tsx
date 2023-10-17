"use client";

import { Badge } from "@/components/ui/badge";
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
  const [schedules, setSchedules] = useState([]);
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
                          : "bg-orange-400 hover:bg-orange-500"
                      }`}
                    >
                      {schedule.progress}
                    </Badge>
                  </TableCell>
                  <TableCell className="min-w-[100px] flex flex-col justify-center gap-2">
                    <div className="flex gap-2 hover:text-[hsl(var(--primary-600))] group cursor-pointer">
                      <Edit className="w-4 h-4 group-hover:stroke-[hsl(var(--primary-600))]" />
                      Progress
                    </div>
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
