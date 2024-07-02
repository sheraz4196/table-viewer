"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";

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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Model
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
