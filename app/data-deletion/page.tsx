import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Data Deletion",
  description: `How to request deletion of your data from the ${site.appName} app.`,
};

export default function DataDeletion() {
  return (
    <LegalPage
      title="Data Deletion Request"
      intro={`This page explains how to request the deletion of data associated with your use of the ${site.appName} app, as required by Google Play.`}
    >
      <h2>What data we store</h2>
      <p>
        {site.appName} does not require an account and does not store personal
        profiles. The only data associated with your use of the App is anonymous
        or pseudonymous usage and diagnostic data collected through Google
        Firebase (analytics and crash reports), as described in our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>Delete data directly from your device</h2>
      <p>
        Because most of your game progress and settings are stored locally on
        your device, you can remove them at any time by:
      </p>
      <ul>
        <li>
          Clearing the App&apos;s storage/cache: <strong>Settings → Apps →</strong>{" "}
          {site.appName} <strong>→ Storage → Clear data</strong>, or
        </li>
        <li>Uninstalling the App from your device.</li>
      </ul>

      <h2>Request deletion of analytics data</h2>
      <p>
        To request deletion of any usage or diagnostic data we may hold, send us
        an email and we will process your request:
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href={`mailto:${site.contactEmail}?subject=Data%20Deletion%20Request%20-%20${encodeURIComponent(
            site.appName
          )}`}>
            {site.contactEmail}
          </a>
        </li>
        <li>
          Subject line: <strong>Data Deletion Request</strong>
        </li>
        <li>
          Please include the device type and approximate date you last used the
          App so we can locate the relevant data.
        </li>
      </ul>

      <h2>What happens next</h2>
      <p>
        We will acknowledge your request and delete the associated data within{" "}
        <strong>30 days</strong>, unless we are legally required to retain it. We
        will not charge you for this request.
      </p>

      <div className="mt-10 rounded-2xl border border-indigo-400/30 bg-indigo-500/10 p-6">
        <p className="text-gray-200">
          <strong>Quick action:</strong> The fastest way to remove all data is to
          clear the app data and uninstall {site.appName}. For anything held by
          our analytics provider, email us and we&apos;ll take care of it.
        </p>
      </div>

      <h2>Contact</h2>
      <ul>
        <li>
          <strong>{site.developer}</strong>
        </li>
        <li>
          Email:{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
        </li>
      </ul>
    </LegalPage>
  );
}
