import SheetsTable from "@/components/general/sheets-table";
import { getMonthlyData } from "@/lib/new-data";
export default async function Home() {
  const data = await getMonthlyData();
  return (
    <main>
      <SheetsTable />
    </main>
  );
}
