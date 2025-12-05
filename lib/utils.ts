import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function generateRiskScore(): number {
  return Math.floor(Math.random() * 10) + 1;
}

export function getRiskCategory(score: number): 'Good' | 'Average' | 'Bad' {
  if (score <= 3) return 'Good';
  if (score <= 6) return 'Average';
  return 'Bad';
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function simulateBatteryDegradation(currentSOH: number): number {
  // Simulate gradual degradation
  const degradation = Math.random() * 0.1;
  return Math.max(0, currentSOH - degradation);
}

export function calculateThermalRunawayRisk(temperature: number): number {
  // Risk increases exponentially with temperature
  if (temperature < 30) return 0;
  if (temperature < 40) return 20;
  if (temperature < 50) return 50;
  if (temperature < 60) return 75;
  return 95;
}

