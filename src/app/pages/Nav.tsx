"use server";
import { Badge } from "@/components/ui/badge";
import prisma from "@/lib/db";
import React from "react";

const Nav = async () => {
  const counts = await prisma.todoList.count({ where: { isImportant: true } });


  return (
    <div className="flex h-16 items-center px-4">
      <button
        className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] justify-between"
        role="combobox"
        aria-expanded="false"
        aria-label="Select a team"
        type="button"
        aria-haspopup="dialog"
        aria-controls="radix-:rg5:"
        data-state="closed"
      >
        <span className="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5">
          <img
            className="aspect-square h-full w-full grayscale"
            src="https://avatar.vercel.sh/personal.png"
            alt="Alicia Koch"
          />
        </span>
        John Doe
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-auto h-4 w-4 shrink-0 opacity-50"
        >
          <path
            d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
        <a
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/"
        >
          Lists
        </a>
        <a
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/createPost"
        >
          Create List
        </a>
        <a
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/importantList"
        >
          Important
          <Badge className="ml-2"> {counts}</Badge>
        </a>
      </nav>
    </div>
  );
};

export default Nav;
