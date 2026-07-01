import { RetreatsUI } from "@/components/pages/RetreatsUI";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';

export default function RetreatsPage() {
  const contentPath = path.join(process.cwd(), "src", "data", "content.json");
  const fullData = JSON.parse(fs.readFileSync(contentPath, "utf-8"));
  const retreatsData = fullData.retreats || {};

  return <RetreatsUI data={retreatsData} />;
}
