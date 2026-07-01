import { RetreatsUI } from "@/components/pages/RetreatsUI";
import { getContent } from "@/lib/content";

export const dynamic = 'force-dynamic';

export default async function RetreatsPage() {
  const fullData = await getContent();
  const retreatsData = fullData.retreats || {};

  return <RetreatsUI data={retreatsData} />;
}
