import Link from "next/link";
import { site } from "@/lib/site";

const features = [
  {
    icon: "🧠",
    title: "Memory",
    desc: "Strengthen short- and long-term memory with engaging recall challenges.",
  },
  {
    icon: "🎯",
    title: "Focus",
    desc: "Sharpen attention and concentration through targeted exercises.",
  },
  {
    icon: "🧩",
    title: "Logic",
    desc: "Solve puzzles that build reasoning and pattern-recognition skills.",
  },
  {
    icon: "⚡",
    title: "Speed",
    desc: "Boost mental agility and processing speed with timed mini-games.",
  },
  {
    icon: "🔢",
    title: "Numbers",
    desc: "Practice math and quantitative thinking at your own pace.",
  },
  {
    icon: "📈",
    title: "Progress",
    desc: "Track your growth over time and challenge your personal best.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-fuchsia-600/15 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-5xl px-5 py-24 text-center sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
            🧠 Brain Training for Every Age
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Train your brain with{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              {site.appName}
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Fun, science-inspired exercises that help improve memory, focus,
            logic, and problem-solving. Designed for kids, adults, and seniors
            alike — just a few minutes a day.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-7 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-90"
            >
              Get it on Google Play
            </a>
            <Link
              href="/privacy-policy"
              className="rounded-xl border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            One app, six core skills
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-400">
            Every session adapts to your level, keeping training both
            challenging and enjoyable.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* All ages band */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/10 to-fuchsia-600/10 p-10 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Made for every age
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Whether you&apos;re a child building early thinking skills, an adult
            staying sharp, or a senior keeping the mind active, {site.appName}{" "}
            grows with you. Simple, friendly, and family-safe.
          </p>
        </div>
      </section>

      {/* Legal links */}
      <section className="mx-auto max-w-5xl px-5 pb-24">
        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/privacy-policy"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-400/40"
          >
            <h3 className="font-semibold text-white">Privacy Policy</h3>
            <p className="mt-2 text-sm text-gray-400">
              How we handle and protect your data.
            </p>
            <span className="mt-4 inline-block text-sm text-indigo-400 group-hover:translate-x-1 transition">
              Read more →
            </span>
          </Link>
          <Link
            href="/terms-of-service"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-400/40"
          >
            <h3 className="font-semibold text-white">Terms of Service</h3>
            <p className="mt-2 text-sm text-gray-400">
              The rules for using {site.appName}.
            </p>
            <span className="mt-4 inline-block text-sm text-indigo-400 group-hover:translate-x-1 transition">
              Read more →
            </span>
          </Link>
          <Link
            href="/data-deletion"
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-indigo-400/40"
          >
            <h3 className="font-semibold text-white">Data Deletion</h3>
            <p className="mt-2 text-sm text-gray-400">
              Request removal of your data anytime.
            </p>
            <span className="mt-4 inline-block text-sm text-indigo-400 group-hover:translate-x-1 transition">
              Read more →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
