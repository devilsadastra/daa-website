import { cn } from "@/lib/utils";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[20rem]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-300 shadow-input dark:shadow-none p-4 bg-black/80 border border-amber-500 flex flex-col space-y-2 hover:-translate-y-1 hover:border-amber-400",
        className
      )}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex-1 overflow-hidden">{header}</div>
        <div className="flex flex-col space-y-2 mt-auto">
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon && <div className="mb-2 text-amber-500 text-4xl">{icon}</div>}
            <h3 className="font-bold text-xl md:text-2xl text-white">{title}</h3>
          </div>
          <div className="text-gray-300 text-sm md:text-base">{description}</div>
        </div>
      </div>
    </div>
  );
};
