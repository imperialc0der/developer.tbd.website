import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type BackgroundColors =
  | "teal"
  | "purple"
  | "yellow"
  | "yellow-shade-1"
  | "black"
  | "red";

export type TextColors = BackgroundColors;
export type ToneTypes = "teal" | "purple" | "yellow";

export const backgroundClassesMap: Record<BackgroundColors, string> = {
  teal: "bg-tbd-teal",
  purple: "bg-tbd-purple-tint-2",
  yellow: "bg-tbd-yellow",
  "yellow-shade-1": "bg-tbd-yellow-shade-1",
  black: "bg-tbd-gray-shade-1",
  red: "bg-tbd-red",
};

export const textClassesMap: Record<TextColors, string> = {
  teal: "text-tbd-teal",
  purple: "text-tbd-purple",
  yellow: "text-tbd-yellow",
  "yellow-shade-1": "text-tbd-yellow-shade-1",
  black: "text-tbd-gray-shade-1",
  red: "text-tbd-red",
};

export const accordionClassesMap: Record<
  ToneTypes,
  `data-[state=open]:${string}`
> = {
  teal: `data-[state=open]:${textClassesMap.teal}`,
  purple: `data-[state=open]:${textClassesMap.purple}`,
  yellow: `data-[state=open]:${textClassesMap.yellow}`,
};
