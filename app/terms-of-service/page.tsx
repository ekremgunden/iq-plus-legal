import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for the ${site.appName} brain training app.`,
};

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={`These Terms of Service ("Terms") govern your use of the ${site.appName} mobile application (the "App") provided by ${site.developer}.`}
    >
      <p>
        By downloading, accessing, or using {site.appName}, you agree to be bound
        by these Terms. If you do not agree, please do not use the App.
      </p>

      <h2>1. Use of the App</h2>
      <p>
        {site.appName} is a brain training app that provides games and exercises
        for entertainment and self-improvement purposes. We grant you a limited,
        non-exclusive, non-transferable, revocable license to use the App for
        your personal, non-commercial use, subject to these Terms.
      </p>

      <h2>2. Eligibility and Children</h2>
      <p>
        {site.appName} is suitable for users of every age. If you are a minor in
        your jurisdiction, you should use the App only with the involvement and
        consent of a parent or legal guardian, who agrees to these Terms on your
        behalf.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          Copy, modify, distribute, sell, or lease any part of the App or its
          content
        </li>
        <li>
          Reverse engineer, decompile, or attempt to extract the source code of
          the App, except where permitted by law
        </li>
        <li>
          Use the App in any way that is unlawful, harmful, or that interferes
          with its normal operation
        </li>
        <li>
          Attempt to gain unauthorized access to the App, its systems, or related
          networks
        </li>
      </ul>

      <h2>4. Intellectual Property</h2>
      <p>
        The App, including its design, graphics, games, text, and logos, is owned
        by {site.developer} and is protected by intellectual property laws. All
        rights not expressly granted to you are reserved.
      </p>

      <h2>5. Health and Medical Disclaimer</h2>
      <p>
        {site.appName} is intended for entertainment and general mental exercise.
        It is <strong>not</strong> a medical device and does not diagnose, treat,
        cure, or prevent any disease or medical condition. The App does not
        provide medical advice. Consult a qualified professional for any health
        concerns.
      </p>

      <h2>6. Third-Party Services</h2>
      <p>
        The App uses third-party services such as Google Firebase. Your use of
        those services may be subject to their own terms and policies. We are not
        responsible for the content or practices of third parties.
      </p>

      <h2>7. Disclaimer of Warranties</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, whether express or implied, including but
        not limited to merchantability, fitness for a particular purpose, and
        non-infringement. We do not warrant that the App will be uninterrupted,
        error-free, or secure.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, {site.developer} shall not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages, or any loss of data or profits arising from your use of or
        inability to use the App.
      </p>

      <h2>9. Termination</h2>
      <p>
        We may suspend or terminate your access to the App at any time if you
        violate these Terms. You may stop using the App at any time by
        uninstalling it from your device.
      </p>

      <h2>10. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. When we do, we will revise
        the &quot;Last updated&quot; date at the top of this page. Your continued
        use of the App after changes take effect constitutes acceptance of the
        revised Terms.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        These Terms shall be governed by and construed in accordance with
        applicable law, without regard to its conflict of law provisions.
      </p>

      <h2>12. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
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
