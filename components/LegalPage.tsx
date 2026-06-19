import { ReactNode } from "react";
import { site } from "@/lib/site";

export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <div className="mb-10 border-b border-white/10 pb-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {intro && <p className="mt-3 text-gray-400">{intro}</p>}
        <p className="mt-4 text-sm text-gray-500">
          Last updated: {site.lastUpdated}
        </p>
      </div>
      <article className="prose-legal">{children}</article>
    </main>
  );
}
