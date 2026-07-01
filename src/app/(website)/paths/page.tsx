import { PathsUI } from "@/components/pages/PathsUI";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';

export default function PathsPage() {
  const contentPath = path.join(process.cwd(), "src", "data", "content.json");
  const fullData = JSON.parse(fs.readFileSync(contentPath, "utf-8"));
  const pathsData = fullData.paths || {};

  return <PathsUI data={pathsData} />;
}
