"use client";
import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  ColumnDef,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
  flexRender,
  SortingState,
  getSortedRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListFilter, SlidersHorizontal } from "lucide-react";
import Sidebar from "../siderbar/sidebar";
import Image from "next/image";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const BMW_DATA = [
    {
      icon: <Image src={"/star.png"} alt="Star" width={18} height={18} />,
      title: "2024 M3 Manual (PA, Exec, SL)",
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: "2024 M3comp (DApro, PA,Icon)",
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,
      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: `760xi (Exec,Msport,21",Rear Ent)`,
      monthly: "$1239",
    },
  ];
  const MERCEDES_BENZ = [
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS450",
      drive_off: "$1,159.65",
      monthly: "$1,159.65",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
    {
      icon: <Image src={"/warn.png"} alt="WARN icon" width={18} height={18} />,

      title: "2024 EQS580",
      drive_off: "$1,159.65",
      monthly: "$1,173.28",
    },
  ];
  return (
    <>
      {data && (
        <div>
          {/* <div className="hidden lg:flex items-center py-4">
            <Input
              placeholder="Filter emails..."
              value={
                (table?.getColumn("model")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table?.getColumn("model")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  ?.filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div> */}
          <div className="flex lg:hidden items-center justify-between py-4">
            <button type="button" className="flex items-center gap-4">
              <ListFilter className="size-6" />
              <span>Filter</span>
            </button>
          </div>

          <div className="flex flex-col max-h-screen">
            <div className="flex-grow overflow-auto rounded-md border">
              <Table className="relative w-full">
                <TableHeader>
                  <TableRow className="bg-[#ECECEC] dark:bg-[#17181A] border-b">
                    <TableHead
                      colSpan={2}
                      className="z-10 sticky top-0 bg-[#ECECEC] dark:bg-[#17181A]"
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={"/bmw.png"}
                          alt="BMW logo"
                          width={18}
                          height={18}
                        />
                        <p className="flex gap-2 items-center">
                          BMW
                          <span>{BMW_DATA.length}</span>
                        </p>
                      </div>
                    </TableHead>
                    <TableHead className="z-10 sticky top-0 bg-[#ECECEC] dark:bg-[#17181A]">
                      Monthly
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {BMW_DATA.length ? (
                    BMW_DATA.map((item, key) => (
                      <TableRow key={key}>
                        <TableCell colSpan={2} className="text-xs ">
                          <div className="flex items-center gap-2 col-span-2">
                            {item.icon}
                            <Image
                              src={"/bmw.png"}
                              alt="BMW logo"
                              width={18}
                              height={18}
                            />
                            <p>{item.title}</p>
                          </div>
                        </TableCell>
                        <TableCell className="text-xs w-2">
                          {item.monthly}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={BMW_DATA.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
                <TableHeader className="bg-[#ECECEC] dark:bg-[#17181A]">
                  <TableRow className="bg-[#ECECEC]dark:bg-[#17181A] border-b">
                    <TableHead className="z-10 sticky top-0 bg-[#ECECEC] dark:bg-[#17181A]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={"/benz.png"}
                          alt="BMW logo"
                          width={18}
                          height={18}
                          className="bg-black rounded-full"
                        />
                        <p className="flex items-center gap-2">
                          Mercedes-Benz
                          <span>{MERCEDES_BENZ.length}</span>
                        </p>
                      </div>
                    </TableHead>
                    <TableHead className="z-10 sticky top-0 bg-[#ECECEC] dark:bg-[#17181A]">
                      Drive Of
                    </TableHead>
                    <TableHead className="z-10 sticky top-0 bg-[#ECECEC] dark:bg-[#17181A]">
                      Monthly
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MERCEDES_BENZ.length ? (
                    MERCEDES_BENZ.map((item, key) => (
                      <TableRow key={key}>
                        {/* <TableCell className="text-xs">{item.star}</TableCell> */}
                        <TableCell className="text-xs flex items-center gap-3">
                          {item.icon}
                          <Image
                            src={"/benz.png"}
                            alt="BMW logo"
                            width={18}
                            height={18}
                            className="bg-black rounded-full"
                          />
                          <p>{item.title}</p>
                        </TableCell>
                        <TableCell className="text-xs w-2">
                          {item.drive_off}
                        </TableCell>
                        <TableCell className="text-xs w-2">
                          {item.monthly}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={BMW_DATA.length}
                        className="h-24 text-center"
                      >
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
          {/* <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div> */}
        </div>
      )}
    </>
  );
}
