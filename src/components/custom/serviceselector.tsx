import { ServiceType } from "@/types/types";
import { Plus } from "lucide-react";

const ServiceSelector = ({ field }: { field: any }) => {
  const AddService = (data: ServiceType) => {
    if (!field.value) {
      field.onChange([data]);
    } else {
      const tempVal = [...field.value];
      if (!tempVal.find((item) => item.id === data.id)) {
        field.onChange([...tempVal, data]);
      }
    }
    console.log(field);
  };
  const RemoveService = (data: ServiceType) => {
    if (field.value) {
      const tempVal = [...field.value];
      if (tempVal.find((item) => item.id === data.id)) {
        field.onChange([...tempVal.filter((item) => item.id !== data.id)]);
      }
    }
  };
  return (
    <div className="grid grid-cols-1 gap-5">
      {Services.map((item: ServiceType) => {
        const { id, service, price, description } = item;
        const isSelected = field?.value?.find((item: any) => item.id === id);
        return (
          <div
            key={id}
            className={`w-full grid grid-cols-1 gap-3 p-4 rounded-lg  cursor-pointer border hover:border-[hsl(var(--primary-300))]  ${
              isSelected
                ? "border-[hsl(var(--primary-600))] bg-[hsl(var(--primary-600))] hover:bg-[hsl(var(--primary-400))]"
                : ""
            }`}
            onClick={() => {
              if (field.value) {
                if (isSelected) {
                  RemoveService(item);
                } else {
                  AddService(item);
                }
              } else {
                AddService(item);
              }
            }}
          >
            <h5 className={`${isSelected ? "text-white" : ""} font-semibold`}>
              {service} | BDT{price}/item
            </h5>
            <p className={`${isSelected ? "text-white" : "text-gray-400"}`}>
              {description}
            </p>
            {/* <div
              className="mt-5 text-[hsl(var(--primary-600))] border rounded-md p-2 flex items-center justify-center gap-3 hover:bg-gray-50 cursor-pointer"
              onClick={() => {
                if (field.value) {
                  if (isSelected) {
                    RemoveService(item);
                  } else {
                    AddService(item);
                  }
                } else {
                  AddService(item);
                }
              }}
            >
              <Plus className="w-4 h-4 stroke-[hsl(var(--primary-600))]" /> Add
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default ServiceSelector;

const Services = [
  {
    id: 0,
    service: "Wash + Tubmble Dry",
    price: 15,
    description: "T-shirts, trousers, bedsheets and udergarments etc.",
  },
  {
    id: 1,
    service: "Wash and Iron",
    price: 15,
    description: "Shirts, t-shirts, suits, trousers and bedsheets etc.",
  },
  {
    id: 2,
    service: "Ironing",
    price: 15,
    description: "Shirts, t-shirts and bedsheets etc.",
  },
  {
    id: 3,
    service: "Duvets & Bulky Items",
    price: 50,
    description: "Duvets, pillows and blankets etc.",
  },
];
