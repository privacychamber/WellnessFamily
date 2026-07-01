import { HomepageUI } from "@/components/pages/HomepageUI";
import { getContent } from "@/lib/content";

export const dynamic = 'force-dynamic';

export default async function Home() {
  const fullData = await getContent();
  const homepageData = fullData.homepage || {};
  
  return <HomepageUI data={homepageData} />;
}
