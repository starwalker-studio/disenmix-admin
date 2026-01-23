import type { Exporter } from "react-admin";
import * as XLSX from "xlsx";

export const exportToExcel: Exporter = (records) => {
  const date = new Date().toISOString().split("T")[0];
  const filename = `leads-${date}.xlsx`;

  const worksheet = XLSX.utils.json_to_sheet(records);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
  XLSX.writeFile(workbook, filename);
};
