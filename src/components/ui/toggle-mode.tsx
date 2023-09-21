"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const setTheme = (theme: string) => {
    let currentTheme = document.getElementById("customThemes");
    if (currentTheme) {
      currentTheme.className = theme;
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <div className="flex flex-wrap items-center justify-center gap-[1px]">
            <div className="bg-user-500 rounded-full h-[15px] w-[15px]"></div>
            <div className="bg-rider-500 rounded-full h-[15px] w-[15px]"></div>
            <div className="bg-shop-500 rounded-full h-[15px] w-[15px]"></div>
            <div className="bg-admin-500 rounded-full h-[15px] w-[15px]"></div>
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("user")}>
          <div className="flex items-center gap-[10px]">
            <div className="bg-user-500 rounded-full h-[15px] w-[15px]"></div>
            <span className="mt-[3px]">User</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("rider")}>
          <div className="flex items-center gap-[10px]">
            <div className="bg-rider-500 rounded-full h-[15px] w-[15px]"></div>
            <span className="mt-[3px]">Rider</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("shop")}>
          <div className="flex items-center gap-[10px]">
            <div className="bg-shop-500 rounded-full h-[15px] w-[15px]"></div>
            <span className="mt-[3px]">Shop</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("admin")}>
          <div className="flex items-center gap-[10px]">
            <div className="bg-admin-500 rounded-full h-[15px] w-[15px]"></div>
            <span className="mt-[3px]">Admin</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
