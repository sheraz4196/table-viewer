"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
    header: () => <div className="text-right">MSRP</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("msrp")}</div>
      );
    },
  },

  {
    accessorKey: "leaseCredit",
    header: () => <div className="text-right">Leave Credit</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.getValue("leaseCredit")}
        </div>
      );
    },
  },
  {
    accessorKey: "residual",
    header: () => <div className="text-right">Residual</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("residual")}</div>
      );
    },
  },
  {
    accessorKey: "moneyFactor",
    header: () => <div className="text-right">Money Factor</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.getValue("moneyFactor")}
        </div>
      );
    },
  },
  {
    accessorKey: "totalDriveoffs",
    header: () => <div className="text-right">Total Drive Offs</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">
          {row.getValue("totalDriveoffs")}
        </div>
      );
    },
  },
  {
    accessorKey: "term",
    header: () => <div className="text-right">Terms</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("term")}</div>
      );
    },
  },
  {
    accessorKey: "noMSDs",
    header: () => <div className="text-right">No MSDs</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right font-medium">{row.getValue("noMSDs")}</div>
      );
    },
  },
  {
    accessorKey: "msds",
    header: () => <div className="text-right">MSDs</div>,
    cell: ({ row }) => {
      const msds = parseFloat(row.getValue("msds"));

      return (
        <div className="text-right font-medium">{row.getValue("msds")}</div>
      );
    },
  },
];
