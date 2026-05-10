import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat("de-DE").format(n);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getLiveCO2Today(): number {
  const dayStart = new Date();
  dayStart.setHours(0, 0, 0, 0);
  const secsSinceMidnight = (Date.now() - dayStart.getTime()) / 1000;
  return Math.floor(secsSinceMidnight * 0.00208 * 1000);
}
