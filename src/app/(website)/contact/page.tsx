import { ContactUI } from "@/components/pages/ContactUI";
import { getContent } from "@/lib/content";

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  const fullData = await getContent();
  const contactData = fullData.contact || {};

  return <ContactUI data={contactData} />;
}
