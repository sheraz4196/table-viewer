import { ColumnDef } from "@tanstack/react-table";
export type TableValues = {
  model: string;
  msrp: string | null;
  leaseCredit: string | null;
  residual: string | null;
  moneyFactor: string | null;
  totalDriveoffs: string | null;
  term: string | null;
  noMSDs: string | null;
  msds: string | null;
};

export const columns: ColumnDef<TableValues>[] = [
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "msrp",
    header: "MSRP",
  },
  {
    accessorKey: "leaveCredit",
    header: "Leave Credit",
  },
  {
    accessorKey: "residual",
    header: "Residual",
  },
  {
    accessorKey: "moneyFactor",
    header: "Money Factor",
  },
  {
    accessorKey: "totalDriveOffa",
    header: "Total Drive Offs",
  },
  {
    accessorKey: "terms",
    header: "Terms",
  },
  {
    accessorKey: "no-msds",
    header: "No MSDs",
  },
  {
    accessorKey: "msds",
    header: "MSDs",
  },
];
