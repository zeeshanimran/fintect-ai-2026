import SectionClient from "./section-client";

const sections = [
  "workflows",
  "decisions",
  "knowledge",
  "documents",
  "analytics",
  "integrations",
  "billing",
  "team",
];

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  return <SectionClient section={section} />;
}
