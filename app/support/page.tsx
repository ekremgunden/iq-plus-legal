import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help and support for the ${site.appName} brain training app.`,
};

const faqs = [
  {
    q: `Is ${site.appName} free to use?`,
    a: `Yes. ${site.appName} is free to download and play. You can train your brain with our exercises at no cost.`,
  },
  {
    q: "Do I need to create an account?",
    a: "No. You can use the app right away without registering or sharing any personal details.",
  },
  {
    q: "Is the app suitable for children?",
    a: "Yes. The app is designed to be family-safe and suitable for every age, with no behavioral advertising.",
  },
  {
    q: "How do I delete my data?",
    a: "You can clear the app's data or uninstall it at any time. See our Data Deletion page for full details.",
  },
  {
    q: "I found a bug. What should I do?",
    a: "Please email us with a short description and your device model. We review every report and release fixes regularly.",
  },
];

export default function Support() {
  return (
    <LegalPage
      title="Support"
      intro={`Need help with ${site.appName}? We're here for you.`}
    >
      <h2>Contact us</h2>
      <p>
        For any questions, feedback, bug reports, or support requests, reach out
        to us by email. We aim to respond within a few business days.
      </p>
      <div className="not-prose my-6">
        <a
          href={`mailto:${site.contactEmail}?subject=${encodeURIComponent(
            site.appName + " Support"
          )}`}
          className="inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-90"
        >
          Email {site.contactEmail}
        </a>
      </div>

      <h2>Frequently asked questions</h2>
      {faqs.map((f) => (
        <div key={f.q}>
          <h3>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}

      <h2>Helpful links</h2>
      <ul>
        <li>
          <a href="/privacy-policy">Privacy Policy</a>
        </li>
        <li>
          <a href="/terms-of-service">Terms of Service</a>
        </li>
        <li>
          <a href="/data-deletion">Data Deletion</a>
        </li>
      </ul>
    </LegalPage>
  );
}
