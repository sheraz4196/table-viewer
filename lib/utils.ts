import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function transformCarData(rawData: any[]) {
  // Find the index where the headers start
  const headerIndex = rawData.findIndex((row: string | string[]) =>
    row.includes("Model")
  );

  if (headerIndex === -1) {
    console.error("Headers not found in raw data.");
    return [];
  }

  // Get the headers
  const headers = rawData[headerIndex];
  console.log("Headers:", headers);

  // Get the relevant rows after the headers
  const dataRows = rawData.slice(headerIndex + 1);

  // Initialize an array to store the formatted data
  const formattedData: {
    model: any;
    msrp: any;
    leaseCredit: any;
    residual: any;
    moneyFactor: any;
    totalDriveoffs: any;
    term: any;
    noMSDs: any;
    msds: any;
  }[] = [];

  dataRows.forEach((row: string | any[]) => {
    // If the row has only one element and it's a string, skip it (category header)
    if (!(row.length === 1 && typeof row[0] === "string")) {
      // Ensure each row has the same number of columns as headers
      const completeRow = [...row];
      while (completeRow.length < headers.length) {
        completeRow.push(null);
      }

      // Transform the row into the desired structure
      formattedData.push({
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

  console.log("Formatted Data:", formattedData);
  return formattedData;
}
