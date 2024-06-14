"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Megaphone } from "lucide-react";
import Link from "next/link";

const DeptCard = ({
  title,
  members,
  alerts,
}: {
  title: string;
  members: string[];
  alerts: boolean;
}) => {
  return (
    <Card
      className="w-full h-100 md:h-100 md:w-80 mr-2"
      x-chunk="dashboard-07-chunk-4"
    >
      <CardHeader className="mt-3">
        <Link href={"/departments/hr"}>
          <CardTitle className="text-lg mb-1">{title}</CardTitle>
        </Link>
        {alerts && (
          <div>
            <div className="grid grid-cols-3 gap-2 pb-2">
              <div className="flex flex-col col-span-1 w-full rounded-lg bg-red-500 text-xs text-white p-3">
                <div className="flex flex-row">
                  <Megaphone className="h-5 w-5" />
                  <p className="font-extrabold text-sm ml-5">05</p>
                </div>
                <p className="font-semibold">Due today</p>
              </div>
              <div className="flex flex-col col-span-1 w-full rounded-lg bg-orange-500 text-xs text-white p-3">
                <div className="flex flex-row">
                  <Megaphone className="h-5 w-5" />
                  <p className="font-bold text-sm ml-5">03</p>
                </div>
                <p className="font-semibold">Due today</p>
              </div>
              <div className="flex flex-col col-span-1 w-full rounded-lg bg-yellow-500 text-xs text-white p-3">
                <div className="flex flex-row">
                  <Megaphone className="h-5 w-5" />
                  <p className="font-bold text-sm ml-5">01</p>
                </div>
                <p className="font-semibold">Due today</p>
              </div>
            </div>
          </div>
        )}
        <div className="flex flex-wrap mb-2">
          {members.map((member, index) => (
            <Badge key={index} className="text-[10px] mr-2 mb-2">
              {member}
            </Badge>
          ))}
        </div>
        <div className="text-xs text-muted-foreground max-w-lg text-balance leading-relaxed">
          Created on 12/06/2024
        </div>
      </CardHeader>
    </Card>
  );
};

export default DeptCard;
