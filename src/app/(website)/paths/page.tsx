import { PathsUI } from "@/components/pages/PathsUI";
import { getContent } from "@/lib/content";

export const dynamic = 'force-dynamic';

export default async function PathsPage() {
  const fullData = await getContent();
  const pathsData = fullData.paths || {};

  return <PathsUI data={pathsData} />;
}
