import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for the ${site.appName} brain training app.`,
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={`This Privacy Policy explains how ${site.developer} ("we", "us", or "our") collects, uses, and protects information when you use the ${site.appName} mobile application (the "App").`}
    >
      <p>
        Your privacy is important to us. By downloading or using {site.appName},
        you agree to the practices described in this Privacy Policy. If you do
        not agree, please do not use the App.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        {site.appName} is a brain training app and does <strong>not</strong>{" "}
        require you to create an account or provide personal details such as your
        name, address, or phone number. We collect only limited information
        needed to operate and improve the App.
      </p>

      <h3>a. Information You Provide</h3>
      <p>
        If you contact us by email (for example, for support), we receive the
        email address and any information you choose to include in your message.
      </p>

      <h3>b. Information Collected Automatically</h3>
      <p>
        Like most mobile apps, {site.appName} automatically collects certain
        technical and usage information through analytics tools. This may
        include:
      </p>
      <ul>
        <li>Device type, operating system, and app version</li>
        <li>Language and general region/country settings</li>
        <li>
          App usage data, such as features used, screens viewed, session length,
          and game progress
        </li>
        <li>Anonymous or pseudonymous device and app instance identifiers</li>
        <li>Crash reports and performance/diagnostic data</li>
      </ul>
      <p>
        This information is collected in an aggregated and/or pseudonymized form
        and is used to understand how the App is used and to improve it. We do
        not use it to personally identify you.
      </p>

      <h2>2. Analytics and Third-Party Services</h2>
      <p>
        We use <strong>Google Firebase</strong> (including Firebase Analytics and
        Firebase Crashlytics) to collect usage statistics and crash reports.
        These services help us understand app performance and improve the user
        experience. Firebase may process certain device identifiers and usage
        data on our behalf.
      </p>
      <p>
        Your use of these services is also subject to Google&apos;s policies:
      </p>
      <ul>
        <li>
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase Privacy and Security
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
        </li>
      </ul>
      <p>
        {site.appName} does not display third-party advertising and does not sell
        your personal information to anyone.
      </p>

      <h2>3. How We Use Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Operate, maintain, and provide the features of the App</li>
        <li>Understand usage patterns and improve our games and content</li>
        <li>Diagnose technical problems and fix crashes</li>
        <li>Respond to your support requests</li>
        <li>Protect against fraud, abuse, and security issues</li>
      </ul>

      <h2>4. Legal Basis for Processing</h2>
      <p>
        Where applicable law (such as the EU/UK GDPR) requires it, we process
        information based on our legitimate interest in operating and improving
        the App, and, where required, on your consent. You may withdraw consent
        at any time as described below.
      </p>

      <h2>5. Children&apos;s Privacy</h2>
      <p>
        {site.appName} is designed to be suitable for users of every age,
        including children. We take children&apos;s privacy seriously and comply
        with applicable laws such as the U.S. Children&apos;s Online Privacy
        Protection Act (COPPA), the EU/UK GDPR, and Google Play&apos;s Families
        policy.
      </p>
      <ul>
        <li>We do not knowingly collect personal information from children.</li>
        <li>
          We do not require children to provide any personally identifying
          information to use the App.
        </li>
        <li>The App does not contain behavioral advertising.</li>
        <li>
          Analytics data is collected in a privacy-protective manner and is not
          used to build profiles of children.
        </li>
      </ul>
      <p>
        If you are a parent or guardian and believe your child has provided us
        with personal information, please contact us at{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> and we
        will promptly delete it.
      </p>

      <h2>6. Data Sharing and Disclosure</h2>
      <p>We do not sell or rent your information. We may share information only:</p>
      <ul>
        <li>
          With service providers (such as Google Firebase) that process data on
          our behalf under appropriate confidentiality and security obligations
        </li>
        <li>
          When required by law, regulation, legal process, or a valid government
          request
        </li>
        <li>
          To protect the rights, property, or safety of our users, the public,
          or {site.developer}
        </li>
      </ul>

      <h2>7. Data Retention</h2>
      <p>
        We retain usage and analytics data only for as long as necessary for the
        purposes described in this policy, after which it is deleted or
        anonymized. Support emails are retained only as long as needed to
        resolve your request.
      </p>

      <h2>8. Data Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect
        information against unauthorized access, loss, or misuse. However, no
        method of transmission or storage is completely secure, and we cannot
        guarantee absolute security.
      </p>

      <h2>9. Your Rights and Choices</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, or
        delete your data, or to object to or restrict certain processing. You
        can:
      </p>
      <ul>
        <li>
          Reset or limit your advertising/device identifier in your device
          settings
        </li>
        <li>
          Request deletion of your data — see our{" "}
          <a href="/data-deletion">Data Deletion</a> page
        </li>
        <li>
          Contact us at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> to
          exercise your rights
        </li>
      </ul>

      <h2>10. International Data Transfers</h2>
      <p>
        Our service providers may process and store information on servers
        located in countries other than your own. Where required, we rely on
        appropriate safeguards for such transfers.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will
        revise the &quot;Last updated&quot; date at the top of this page. Your
        continued use of the App after changes take effect constitutes your
        acceptance of the revised policy.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy or our data
        practices, please contact us:
      </p>
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
