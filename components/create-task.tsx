"use client";

import { useState } from "react";

import { Check, ChevronsUpDown, PlusCircle } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

const categories = [
  {
    value: "attendance",
    label: "Attendance",
  },
  {
    value: "reports",
    label: "Reports",
  },
  {
    value: "recruitment",
    label: "Recruitment",
  },
  {
    value: "new_joining_formalities",
    label: "New Joining Formalities",
  },
];

const CreateTask = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const [attributes, setAttributes] = useState<string[]>([]);
  const [attribute, setAttribute] = useState("");
  const [frequency, setFrequency] = useState("");
  const [day, setDay] = useState("");

  const handleAddAttribute = () => {
    if (attribute) {
      setAttributes((prevAttributes) => [...prevAttributes, attribute]);
      setAttribute(""); // Clear the input after adding
    }
  };

  const handleCloseDialog = () => {
    setAttributes([]);
    setAttribute("");
    setValue("");
    setType("");
  };

  const getSuffix = (day: string) => {
    const dayNum = parseInt(day);
    if (dayNum === 1 || dayNum === 21 || dayNum === 31) return "st";
    if (dayNum === 2 || dayNum === 22) return "nd";
    if (dayNum === 3 || dayNum === 23) return "rd";
    return "th";
  };

  return (
    <Dialog onOpenChange={handleCloseDialog}>
      <DialogTrigger asChild>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add task
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-3 pt-2">
          <div className="flex flex-col">
            <Label htmlFor="name" className="text-left mb-3">
              Task name
            </Label>
            <Input
              id="name"
              placeholder="Enter task name"
              className="col-span-3"
            />
          </div>
          <div>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger className="w-full mt-3" asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="justify-between"
                >
                  {value
                    ? categories.find((category) => category.value === value)
                        ?.label
                    : "Select category..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="">
                <Command>
                  <CommandInput placeholder="Search categories..." />
                  <CommandList>
                    <CommandEmpty>No category found.</CommandEmpty>
                    <CommandGroup>
                      {categories.map((category) => (
                        <CommandItem
                          key={category.value}
                          value={category.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === category.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {category.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <p className="mt-1 text-sm text-muted-foreground">
              Select from the available categories
            </p>
          </div>
          <div className="grid gap-3 mt-3">
            <Label htmlFor="entry" className="text-left">
              Data type
            </Label>
            <Select onValueChange={setType}>
              <SelectTrigger className="">
                <SelectValue placeholder="Select a data type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="file">File upload</SelectItem>
                  <SelectItem value="data">Data entry</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {type === "data" && (
            <div>
              <div className="flex items-center">
                <Input
                  value={attribute}
                  placeholder="Enter data entry attribute"
                  onChange={(e) => setAttribute(e.target.value)}
                  className="col-span-4"
                />
                <Button className="ml-2" onClick={handleAddAttribute}>
                  <PlusCircle className="h-5 w-5" />
                </Button>
              </div>
              <div className="mt-3 flex flex-wrap">
                {attributes.map((attr, index) => (
                  <div key={index} className="">
                    <Badge className="mr-1">{attr}</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="grid gap-3 mt-3">
          <Label htmlFor="entry" className="text-left">
            Frequency
          </Label>
          <Select onValueChange={setFrequency}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a data type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="monthly">Monthy</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {frequency === "monthly" && (
          <div className="flex items-center">
            <Label className="text-left">On</Label>
            <Input
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="Day"
              className="mx-3 w-20"
              type="number"
              min="1"
              max="31"
            />
            <Label className="">{getSuffix(day)}</Label>
            <Label className="ml-1 text-left">of every month</Label>
          </div>
        )}
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTask;
