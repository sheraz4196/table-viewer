import { columns } from "@/components/table/columns";
import DataTable from "@/components/table/data-table";
import { getMonthlyData } from "@/lib/new-data";
import cron from "node-cron";
import { transformCarData } from "@/lib/utils";
export default async function Home() {
  cron.schedule("* * * * *", getMonthlyData);
  const data = await getMonthlyData();
  const formattedData = transformCarData(data);
  return (
    <main className="container mx-auto py-10">
      <DataTable columns={columns} data={formattedData} />
    </main>
  );
}
