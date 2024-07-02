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
      const msrp = parseFloat(row.getValue("msrp"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(msrp);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: "leaveCredit",
    header: () => <div className="text-right">Leave Credit</div>,
    cell: ({ row }) => {
      const leaveCredit = parseFloat(row.getValue("leaveCredit"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(leaveCredit);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "residual",
    header: () => <div className="text-right">Residual</div>,
    cell: ({ row }) => {
      const residual = parseFloat(row.getValue("residual"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(residual);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "moneyFactor",
    header: () => <div className="text-right">Money Factor</div>,
    cell: ({ row }) => {
      const moneyFactor = parseFloat(row.getValue("moneyFactor"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(moneyFactor);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "totalDriveOffs",
    header: () => <div className="text-right">Total Drive Offs</div>,
    cell: ({ row }) => {
      const totalDriveOffs = parseFloat(row.getValue("totalDriveOffs"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(totalDriveOffs);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "terms",
    header: () => <div className="text-right">Terms</div>,
    cell: ({ row }) => {
      const terms = parseFloat(row.getValue("terms"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(terms);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "noMSDs",
    header: () => <div className="text-right">No MSDs</div>,
    cell: ({ row }) => {
      const noMSDs = parseFloat(row.getValue("noMSDs"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(noMSDs);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "msds",
    header: () => <div className="text-right">MSDs</div>,
    cell: ({ row }) => {
      const msds = parseFloat(row.getValue("msds"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(msds);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
