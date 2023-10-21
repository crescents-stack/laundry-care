"use client";

import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";

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
import { Clock } from "lucide-react";

export function TimePicker({ field }: { field: any }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(field.value);
  const times = generateTimeStrings();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between font-normal"
        >
          {value
            ? times.find((time) => time.value === value)?.label
            : "Select time..."}
          <Clock className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search time..." className="h-9" />
          <CommandEmpty>No time found.</CommandEmpty>
          <CommandGroup className="max-h-[50vh] overflow-auto">
            {times.map((time) => (
              <CommandItem
                key={time.value}
                onSelect={(currentValue) => {
                  console.log(currentValue);
                  const valueToSet =
                    currentValue.toLocaleUpperCase() === value
                      ? ""
                      : currentValue.toLocaleUpperCase();
                  setValue(valueToSet);
                  field.value = valueToSet;
                  field.onChange(valueToSet);
                  setOpen(false);
                }}
              >
                {time.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === time.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default TimePicker;

function generateTimeStrings() {
  const times = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const hh = hour === 0 ? 12 : hour <= 12 ? hour : hour - 12;
      const mm = minute === 0 ? "00" : minute;
      const period = hour < 12 ? "AM" : "PM";

      const timeString = `${hh}:${mm} ${period}`;
      times.push({ value: timeString, label: timeString });
    }
  }

  return times;
}
