import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "EULA",
  description: `End User License Agreement for the ${site.appName} brain training app.`,
};

export default function Eula() {
  return (
    <LegalPage
      title="End User License Agreement"
      intro={`This End User License Agreement ("EULA") is a legal agreement between you ("you" or the "User") and ${site.developer} ("we", "us", or "our") for the use of the ${site.appName} mobile application (the "App").`}
    >
      <p>
        By downloading, installing, or using {site.appName}, you agree to be
        bound by this EULA. If you do not agree, do not download, install, or use
        the App. This EULA applies in addition to our{" "}
        <a href="/terms-of-service">Terms of Service</a> and{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>1. License Grant</h2>
      <p>
        Subject to your compliance with this EULA, {site.developer} grants you a
        limited, non-exclusive, non-transferable, non-sublicensable, revocable
        license to download and install one copy of the App on a device that you
        own or control, and to use the App for your personal, non-commercial
        purposes.
      </p>

      <h2>2. License Restrictions</h2>
      <p>You agree that you will not, and will not allow others to:</p>
      <ul>
        <li>
          Copy, modify, adapt, translate, or create derivative works of the App
        </li>
        <li>
          Reverse engineer, disassemble, decompile, or attempt to derive the
          source code of the App, except to the extent permitted by applicable
          law
        </li>
        <li>
          Rent, lease, lend, sell, sublicense, assign, distribute, publish, or
          otherwise commercially exploit the App
        </li>
        <li>
          Remove, alter, or obscure any proprietary notices (including copyright
          or trademark notices) on the App
        </li>
        <li>
          Use the App in any unlawful manner or to circumvent any security or
          access controls
        </li>
      </ul>

      <h2>3. Ownership</h2>
      <p>
        The App is licensed, not sold, to you. {site.developer} and its licensors
        retain all right, title, and interest in and to the App, including all
        intellectual property rights. This EULA does not grant you any rights to
        trademarks, logos, or service marks of {site.developer}.
      </p>

      <h2>4. App Stores and Third Parties</h2>
      <p>
        You acknowledge that this EULA is between you and {site.developer} only,
        and not with Google or any app store provider. The App store provider is
        not responsible for the App or its content. You agree to comply with all
        applicable third-party terms (for example, the Google Play Terms of
        Service) when using the App.
      </p>
      <p>
        The App uses third-party services such as Google Firebase. Your use of
        these services may be subject to their own terms, as described in our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <h2>5. Age and Family Use</h2>
      <p>
        {site.appName} is intended to be suitable for users of every age. If you
        are a minor, you may use the App only with the consent and supervision of
        a parent or legal guardian, who accepts this EULA on your behalf.
      </p>

      <h2>6. Updates</h2>
      <p>
        We may, from time to time, provide updates, upgrades, or new versions of
        the App. Such updates may be automatically installed and are governed by
        this EULA unless accompanied by a separate license.
      </p>

      <h2>7. Health and Entertainment Disclaimer</h2>
      <p>
        {site.appName} is provided for entertainment and general mental-exercise
        purposes only. It is not a medical device and does not diagnose, treat,
        cure, or prevent any condition. We make no claims regarding cognitive,
        medical, or therapeutic outcomes.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The App is provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, whether express, implied, or statutory,
        including but not limited to implied warranties of merchantability,
        fitness for a particular purpose, and non-infringement. We do not warrant
        that the App will be uninterrupted, secure, or error-free.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, {site.developer} shall
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or any loss of data, profits, or goodwill, arising out
        of or related to your use of or inability to use the App.
      </p>

      <h2>10. Termination</h2>
      <p>
        This EULA is effective until terminated. Your rights under this EULA will
        terminate automatically without notice if you fail to comply with any of
        its terms. Upon termination, you must cease all use of the App and delete
        all copies from your devices. You may terminate this EULA at any time by
        uninstalling the App.
      </p>

      <h2>11. Governing Law</h2>
      <p>
        This EULA shall be governed by and construed in accordance with
        applicable law, without regard to its conflict of law provisions.
      </p>

      <h2>12. Changes to This EULA</h2>
      <p>
        We may update this EULA from time to time. When we do, we will revise the
        &quot;Last updated&quot; date at the top of this page. Your continued use
        of the App after changes take effect constitutes acceptance of the
        revised EULA.
      </p>

      <h2>13. Contact Us</h2>
      <p>If you have any questions about this EULA, please contact us:</p>
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
