import { AboutUI } from "@/components/pages/AboutUI";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  const contentPath = path.join(process.cwd(), "src", "data", "content.json");
  const fullData = JSON.parse(fs.readFileSync(contentPath, "utf-8"));
  const aboutData = fullData.about || {};

  return <AboutUI data={aboutData} />;
}
