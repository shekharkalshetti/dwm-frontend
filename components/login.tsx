"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export function Login({ signInUrl }: { signInUrl: string }) {
  return (
    <div className="w-full md:grid md:min-h-screen md:grid-cols-2">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[400px] gap-6">
          <div className="grid gap-2 text-center mb-20">
            <h1 className="text-5xl font-bold">Sangram Auto</h1>
            <h1 className="text-2xl font-bold text-gray-400">DWM</h1>
            {/* <p className="text-balance text-muted-foreground">
              Click on the button to Log In
            </p> */}
          </div>
          <div className="flex flex-col items-center justify-center">
            <Link className="" href={signInUrl}>
              <Button className="h-[45px] text-lg">Login</Button>
            </Link>
            <p className="mt-2 text-xs font-extralight">Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="bg-muted md:block">
        <Image
          src="/image.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="fixed bottom-4 right-4">
        <ModeToggle />
      </div>
    </div>
  );
}
