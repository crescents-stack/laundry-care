import { ServiceType } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";

const ServiceSelector = ({ field }: { field: any }) => {
  const [services, setServices] = useState([]);
  const FetchServices = async () => {
    try {
      const response = await axios.get(`${process.env.BACKEND_URL}/services`);
      console.log({ response });
      if (response.status === 200) {
        setServices(response.data.services);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    !services.length && FetchServices();
  }, []);

  const AddService = (data: ServiceType) => {
    console.log({data})
    if (!field.value) {
      field.onChange([data]);
    } else {
      const tempVal = [...field.value];
      if (!tempVal.find((item) => item._id === data._id)) {
        field.onChange([...tempVal, data]);
      }
    }
  };
  const RemoveService = (data: ServiceType) => {
    if (field.value) {
      const tempVal = [...field.value];
      if (tempVal.find((item) => item._id === data._id)) {
        field.onChange([...tempVal.filter((item) => item._id !== data._id)]);
      }
    }
  };
  return (
    <div className="grid grid-cols-1 gap-5">
      {services.length
        ? services.map((item: any) => {
            const { _id, service, price, included, items, serivceTime } = item;
            const isSelected = field?.value?.find(
              (item: any) => item._id === _id
            );
            return (
              <div
                key={_id}
                className={`w-full grid grid-cols-1 gap-3 p-4 rounded-lg  cursor-pointer border hover:border-[hsl(var(--primary-300))]  ${
                  isSelected
                    ? "border-[hsl(var(--primary-600))] bg-[hsl(var(--primary-600))] hover:bg-[hsl(var(--primary-400))]"
                    : ""
                }`}
                onClick={() => {
                  const argumentObj = {
                    _id: item._id,
                    service: item.service,
                    price: 15,
                    description: item.items.toString(),
                  }
                  if (field.value) {
                    if (isSelected) {
                      RemoveService(argumentObj);
                    } else {
                      AddService(argumentObj);
                    }
                  } else {
                    AddService(argumentObj);
                  }
                }}
              >
                <h5
                  className={`${isSelected ? "text-white" : ""} font-semibold`}
                >
                  {service} |{" "}
                  <span
                    className={`${
                      isSelected
                        ? "text-[hsl(var(--primary-50))]"
                        : "text-[hsl(var(--primary-600))]"
                    }`}
                  >
                    BDT {price}/item
                  </span>{" "}
                  | Service Time: {serivceTime} Hours
                </h5>
                <p className={`${isSelected ? "text-white" : "text-gray-400"}`}>
                  {included.map((include: any) => {
                    return (
                      <span
                        key={include}
                        className={`border rounded-md px-1  ${
                          isSelected
                            ? "border-[hsl(var(--primary-50))] text-[hsl(var(--primary-50))]"
                            : "border-[hsl(var(--primary-600))] text-[hsl(var(--primary-600))]"
                        } text-xs mx-1`}
                      >
                        {include}
                      </span>
                    );
                  })}{" "}
                  |{" "}
                  {items.map((include: any) => {
                    return (
                      <span
                        key={include}
                        className={`border rounded-md text-xs px-1 mx-1 ${
                          isSelected ? "text-white" : "text-gray-400"
                        }`}
                      >
                        {include}
                      </span>
                    );
                  })}
                </p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default ServiceSelector;

// const ServicesList = [
// {
//   _id: 0,
//   service: "Wash + Tubmble Dry",
//   price: 15,
//   description: "T-shirts, trousers, bedsheets and udergarments etc.",
// },
//   {
//     _id: 1,
//     service: "Wash and Iron",
//     price: 15,
//     description: "Shirts, t-shirts, suits, trousers and bedsheets etc.",
//   },
//   {
//     _id: 2,
//     service: "Ironing",
//     price: 15,
//     description: "Shirts, t-shirts and bedsheets etc.",
//   },
//   {
//     _id: 3,
//     service: "Duvets & Bulky Items",
//     price: 50,
//     description: "Duvets, pillows and blankets etc.",
//   },
// ];
