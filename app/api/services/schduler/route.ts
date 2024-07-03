import { NextResponse } from "next/server";

var cron = require("node-cron");

export async function POST(req: any, res: any) {
  try {
    cron.schedule("*/20 * * * *", async () => {
      console.log("");
      console.log("######################################");
      console.log("#                                    #");
      console.log("# Running scheduler every 20 minutes #");
      console.log("#                                    #");
      console.log("######################################");
      console.log("");
    });

    return NextResponse.json({ data: "Success", status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
