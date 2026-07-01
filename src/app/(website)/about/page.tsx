import { AboutUI } from "@/components/pages/AboutUI";
import { getContent } from "@/lib/content";

export const dynamic = 'force-dynamic';

export default async function AboutPage() {
  const fullData = await getContent();
  const aboutData = fullData.about || {};

  return <AboutUI data={aboutData} />;
}
