export async function getMonthlyData() {
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const sheetId = process.env.SHEET_ID;
  const range = "Sheet1!A:Z";

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

  try {
    const res = await fetch(url, {
      headers: {
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
    if (!res.ok) {
      throw new Error(`Error fetching data: ${res.statusText}`);
    }
    const data = await res.json();
    return data.values;
  } catch (error) {
    console.error(error);
    return null;
  }
}
