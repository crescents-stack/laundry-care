import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash } from "lucide-react";

const schedules = [
  {
    _id: "ID001",
    services: [{ _id: "adsf", service: "Wash" }],
    customer: {
      _id: "234rqef",
      name: "Musiur Alam Opu",
      phone: "435345432534",
    },
    rider: { _id: "234rqef", name: "Md. Jahidul Islam", phone: "435345432534" },
    collection: {
      date: "02/14/23",
      time: "10:30PM",
    },
    delivery: {
      date: "02/14/23",
      time: "10:30PM",
    },
    payment: {
      amount: "345",
      status: "PAID",
    },
    progress: "PENDING",
  },
  {
    _id: "ID002",
    services: [{ _id: "adsf", service: "Wash" }],
    customer: {
      _id: "234rqef",
      name: "Musiur Alam Opu",
      phone: "435345432534",
    },
    rider: { _id: "234rqef", name: "Md. Jahidul Islam", phone: "435345432534" },
    collection: {
      date: "02/14/23",
      time: "10:30PM",
    },
    delivery: {
      date: "02/14/23",
      time: "10:30PM",
    },
    payment: {
      amount: "345",
      status: "PAID",
    },
    progress: "PENDING",
  },
];
const headers = [
  "ID",
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

          <TableBody>
            {[...schedules].reverse().map((schedule) => (
              <TableRow key={schedule._id}>
                <TableCell className="min-w-[100px]">{schedule._id}</TableCell>
                <TableCell className="min-w-[100px]">
                  {schedule.services.map((service: any) => {
                    return <div key={service._id}>{service.service}</div>;
                  })}
                </TableCell>
                <TableCell className="min-w-[100px]">
                  <div className="flex flex-col">
                    <span className="font-semibold">
                      {schedule.customer.name}
                    </span>
                    <span>{schedule.customer.phone}</span>
                  </div>
                </TableCell>
                <TableCell className="min-w-[100px]">
                  <div className="flex flex-col">
                    <span className="font-semibold">{schedule.rider.name}</span>
                    <span>{schedule.rider.phone}</span>
                  </div>
                </TableCell>
                <TableCell className="min-w-[100px]">
                  <div className="flex flex-col">
                    <span>BDT {schedule.payment.amount}</span>
                    <span>{schedule.payment.status}</span>
                  </div>
                </TableCell>
                <TableCell className="min-w-[100px]">
                  <div className="flex flex-col">
                    <span>{schedule.collection.date}</span>
                    <span>{schedule.collection.time}</span>
                  </div>
                </TableCell>
                <TableCell className="min-w-[100px]">
                  <div className="flex flex-col">
                    <span>{schedule.delivery.date}</span>
                    <span>{schedule.delivery.time}</span>
                  </div>
                </TableCell>
                <TableCell className="min-w-[100px]">
                  {schedule.progress}
                </TableCell>
                <TableCell className="min-w-[100px]">
                  <div className="flex gap-2">
                    <Edit className="w-4 h-4" />
                    <Trash className="w-4 h-4 stroke-red-500" />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
