import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Portfolio } from "@/components/portfolio";
import { designs } from "@/lib/designs";

export const dynamicParams = false;

export function generateStaticParams() {
  return designs.map(({ id }) => ({ design: id }));
}

export async function generateMetadata({ params }: { params: Promise<{ design: string }> }): Promise<Metadata> {
  const { design } = await params;
  const selected = designs.find(({ id }) => id === design);
  return { title: `Lê Quốc Trạng | ${selected?.name ?? "Portfolio"}` };
}

export default async function DesignPage({ params }: { params: Promise<{ design: string }> }) {
  const { design } = await params;
  const selected = designs.find(({ id }) => id === design);
  if (!selected) notFound();
  return <Portfolio design={selected.id} />;
}
