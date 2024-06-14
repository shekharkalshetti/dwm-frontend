"use client";

import { MoreHorizontal } from "lucide-react";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FilterSelect from "./filter-select";
import DailyTasks from "./daily-tasks";
import MonthlyTasks from "./monthly-tasks";
import { DateRange } from "react-day-picker";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function DepartmentTaskList() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  let newDate = new Date();
  let day = newDate.getDate();
  let month = months[newDate.getMonth()];

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col sm:gap-4 sm:py-2">
        <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
          <Tabs defaultValue="daily">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="daily">{`${day} ${month} Data`}</TabsTrigger>
                <TabsTrigger value="monthly">
                  This Month&apos;s Data
                </TabsTrigger>
                <TabsTrigger value="custom">Custom Data</TabsTrigger>
              </TabsList>
              <div className="flex flex-row ml-auto">
                <FilterSelect name="Status" />
                <FilterSelect name="Category" />
              </div>
            </div>
            <TabsContent value="daily">
              <DailyTasks />
            </TabsContent>
            <TabsContent value="monthly">
              <MonthlyTasks />
            </TabsContent>
            <TabsContent value="custom">
              <div className="py-4 h-80">
                <div className={cn("grid gap-2")}>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        id="date"
                        variant={"outline"}
                        className={cn(
                          "w-[300px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")} -{" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="h-full flex justify-center items-center">
                  <h3 className="px-10 sm:text-sm  tracking-tight text-center">
                    You have not chosen any time period. <br />
                    Use the &quot;Date Picker&quot; to begin.
                  </h3>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
