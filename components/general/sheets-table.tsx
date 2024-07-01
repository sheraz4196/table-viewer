import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getMonthlyData } from "@/lib/new-data";
import { transformCarData } from "@/lib/utils";
export default async function SheetsTable() {
  const data = await getMonthlyData();
  const formattedData = transformCarData(data);
  console.log("Data is here", formattedData);
  return (
    <section>
      <Table>
        <TableCaption>Work Descriptions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Model</TableHead>
            <TableHead>MSRP</TableHead>
            <TableHead>Leave Credit</TableHead>
            <TableHead>Residual</TableHead>
            <TableHead>Money Factor</TableHead>
            <TableHead>Total Drive Offs</TableHead>
            <TableHead>Terms</TableHead>
            <TableHead>No MSDs</TableHead>
            <TableHead>MSDs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {formattedData.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{item.model}</TableCell>
                <TableCell>{item.msrp}</TableCell>
                <TableCell>{item.leaseCredit}</TableCell>
                <TableCell>{item.residual}</TableCell>
                <TableCell>{item.moneyFactor}</TableCell>
                <TableCell>{item.term}</TableCell>
                <TableCell>{item.noMSDs}</TableCell>
                <TableCell>{item.msds}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}
