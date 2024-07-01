import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function transformCarData(rawData: any[]) {
  // Find the index where the headers start
  const headerIndex = rawData.findIndex((row) => row.includes("Model"));

  // Get the headers
  const headers = rawData[headerIndex];

  // Get the relevant rows after the headers
  const dataRows = rawData
    .slice(headerIndex + 1)
    .filter((row) => row.length > 0);

  // Transform the data into the desired structure
  const formattedData = dataRows.map((row) => ({
    model: row[0] || null,
    msrp: row[1] || null,
    leaseCredit: row[2] || null,
    residual: row[3] || null,
    moneyFactor: row[4] || null,
    totalDriveoffs: row[5] || null,
    term: row[6] || null,
    noMSDs: row[7] || null,
    msds: row[8] || null,
  }));

  return formattedData;
}
