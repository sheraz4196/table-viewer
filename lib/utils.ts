import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function transformCarData(rawData: any[]) {
  const headerIndex = rawData.findIndex((row) => row.includes("Model"));

  if (headerIndex === -1) {
    console.error("Headers not found in raw data.");
    return [];
  }
  const headers = rawData[headerIndex];
  const dataRows = rawData.slice(headerIndex + 1);
  const formattedData: any[] = [];
  dataRows.forEach((row) => {
    if (row.length === 1 && typeof row[0] === "string") {
      formattedData.push({ category: row[0], type: "header" });
    } else {
      const completeRow = [...row];
      while (completeRow.length < headers.length) {
        completeRow.push(null);
      }
      formattedData.push({
        type: "data",
        model: completeRow[0] || null,
        msrp: completeRow[1] || null,
        leaseCredit: completeRow[2] || null,
        residual: completeRow[3] || null,
        moneyFactor: completeRow[4] || null,
        totalDriveoffs: completeRow[5] || null,
        term: completeRow[6] || null,
        noMSDs: completeRow[7] || null,
        msds: completeRow[8] || null,
      });
    }
  });

  return formattedData;
}
