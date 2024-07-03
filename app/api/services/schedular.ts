// pages/api/schedular.js
import { NextResponse, NextRequest } from "next/server";
import cron from "node-cron";
import { getMonthlyData } from "@/lib/new-data";
import { transformCarData } from "@/lib/utils";

export async function handler(req: NextRequest, res: NextResponse) {
  let formattedData;
  try {
    cron.schedule("*/20 * * * *", async () => {
      console.log("");
      console.log("######################################");
      console.log("#                                    #");
      console.log("# Running scheduler every 20 minutes #");
      console.log("#                                    #");
      console.log("######################################");
      console.log("");

      // Fetch and process data
      const data = await getMonthlyData();
      formattedData = transformCarData(data);
      console.log(formattedData);
    });

    return NextResponse.json({
      data: "Success",
      status: 200,
      sheetsData: formattedData,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
