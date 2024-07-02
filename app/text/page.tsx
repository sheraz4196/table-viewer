import DataTable from "@/components/table/data-table";
import { getMonthlyData } from "@/lib/new-data";
import { columns } from "@/components/table/columns";
import { transformCarData } from "@/lib/utils";
export default async function Homicide() {
  const data = await getMonthlyData();
  const formattedData = transformCarData(data);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
}