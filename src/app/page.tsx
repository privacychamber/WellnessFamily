import { HomepageUI } from "@/components/pages/HomepageUI";
import { client } from "../../sanity/lib/client";

export const revalidate = 0; // Disable cache for immediate updates during dev

export default async function Home() {
  // Fetch the homepage document from Sanity
  const data = await client.fetch(`*[_type == "homepage"][0]`);

  return <HomepageUI data={data} />;
}
