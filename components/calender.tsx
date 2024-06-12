"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";

export function HomeCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col justify-center items-center">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
