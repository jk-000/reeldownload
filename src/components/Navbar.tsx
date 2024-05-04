/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <header className="h-fit w-full">
      <nav
        className={cn(
          "z-50",
          "flex h-[3.5rem] px-4",
          "w-full items-center border-b bg-accent/20"
        )}
      >
        <div className="hidden cursor-pointer select-none text-xl font-extrabold uppercase md:block">
          <Link href="/">
              <img src="./logo.png" alt="logo" width={150} height="auto" />
          </Link>
        </div>
        <MobileNav className="md:hidden" />
        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
