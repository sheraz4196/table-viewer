import { columns } from "@/components/table/columns";
import DataTable from "@/components/table/data-table";
import { getMonthlyData } from "@/lib/new-data";
import cron from "node-cron";
import { transformCarData } from "@/lib/utils";
export default async function Home() {
  cron.schedule("* * * * *", async function () {
    await getMonthlyData();
  });
  const data = await getMonthlyData();
  const formattedData = transformCarData(data);

  return (
    <main className="px-5 mx-auto lg:py-10 pb-10">
      <DataTable columns={columns} data={formattedData} />
    </main>
  );
}
