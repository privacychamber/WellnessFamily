import { ContactUI } from "@/components/pages/ContactUI";
import fs from "fs";
import path from "path";

export const dynamic = 'force-dynamic';

export default function ContactPage() {
  const contentPath = path.join(process.cwd(), "src", "data", "content.json");
  const fullData = JSON.parse(fs.readFileSync(contentPath, "utf-8"));
  const contactData = fullData.contact || {};

  return <ContactUI data={contactData} />;
}
