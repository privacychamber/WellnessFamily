import { HomepageUI } from "@/components/pages/HomepageUI";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';

export default function Home() {
  const contentPath = path.join(process.cwd(), "src", "data", "content.json");
  const fullData = JSON.parse(fs.readFileSync(contentPath, "utf-8"));
  const homepageData = fullData.homepage;
  
  return <HomepageUI data={homepageData} />;
}
