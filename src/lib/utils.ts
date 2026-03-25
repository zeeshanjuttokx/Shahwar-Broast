import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number | { [key: string]: number }) {
  if (typeof price === 'number') {
    return `Rs. ${price}`;
  }
  const values = Object.values(price);
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) return `Rs. ${min}`;
  return `Rs. ${min} - ${max}`;
}

export function formatPriceDetailed(price: number | { [key: string]: number }) {
  if (typeof price === 'number') {
    return `Rs. ${price}`;
  }
  return Object.entries(price)
    .map(([key, val]) => `${key}: ${val}`)
    .join(', ');
}
