"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function PhoneNumberInput({ onChange }: { onChange: Function }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("+880");
  const [label, setLabel] = React.useState("Bangladesh (+880)");
  const [phone, setPhone] = React.useState("");

  React.useEffect(() => {
    onChange({
      target: {
        name: "phone",
        value: value + phone,
      },
    });
  }, [phone, value]);
  return (
    <div className="mb-4">
      <label htmlFor="phone" className="text-gray-700 block mb-2">
        Phone Number (with country code):
      </label>
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-0">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full sm:w-[180px] sm:border-r-0 font-normal justify-between p-2 rounded-lg sm:rounded-l-lg sm:rounded-r-none"
            >
              {label}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full ms:w-[180px] p-0">
            <Command>
              <CommandInput
                placeholder="country code"
                className="h-9"
              />
              <CommandEmpty>...</CommandEmpty>
              <CommandGroup className="max-h-[30vh] overflow-auto">
                {CountryCodes.map((CountryCode) => (
                  <CommandItem
                    key={CountryCode.value}
                    onSelect={() => {
                      setValue(CountryCode.value);
                      setLabel(CountryCode.label);
                      setOpen(false);
                    }}
                  >
                    {CountryCode.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === CountryCode.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="123-456-7890"
          onChange={(e) => setPhone(e.target.value)}
          className="px-2 py-[5px] border border-lighter-400 hover:border-[hsl(var(--primary-400))] rounded-lg sm:rounded-r-lg sm:rounded-l-none focus:outline-none flex-1"
        />
      </div>
    </div>
  );
}

export default PhoneNumberInput;

const CountryCodes = [
  { id: 1, label: "United States (+1)", value: "+1" },
  { id: 2, label: "China (+86)", value: "+86" },
  { id: 3, label: "India (+91)", value: "+91" },
  { id: 4, label: "Brazil (+55)", value: "+55" },
  { id: 5, label: "Russia (+7)", value: "+7" },
  { id: 6, label: "Indonesia (+62)", value: "+62" },
  { id: 7, label: "Pakistan (+92)", value: "+92" },
  { id: 8, label: "Nigeria (+234)", value: "+234" },
  { id: 9, label: "Bangladesh (+880)", value: "+880" },
  { id: 10, label: "Japan (+81)", value: "+81" },
  { id: 11, label: "Mexico (+52)", value: "+52" },
  { id: 12, label: "Philippines (+63)", value: "+63" },
  { id: 13, label: "Vietnam (+84)", value: "+84" },
  { id: 14, label: "Ethiopia (+251)", value: "+251" },
  { id: 15, label: "Egypt (+20)", value: "+20" },
  { id: 16, label: "Germany (+49)", value: "+49" },
  { id: 17, label: "Iran (+98)", value: "+98" },
  { id: 18, label: "Turkey (+90)", value: "+90" },
  { id: 19, label: "Congo (DRC) (+243)", value: "+243" },
  { id: 20, label: "France (+33)", value: "+33" },
];
