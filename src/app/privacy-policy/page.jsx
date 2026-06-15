import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Nextec",
  description: "Read Nextec's Privacy Policy to understand how we collect, use, and protect your personal information.",
};

const PrivacyPolicy = () => {
  return (
    <main className="mainBgColor min-h-screen py-16">
      <div className="wrapper max-w-4xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-stone-400 uppercase tracking-widest mb-2">Legal</p>
          <h1 className="text-4xl font-semibold mb-3">Privacy Policy</h1>
          <p className="text-stone-400 text-sm">
            Effective Date: June 2025 &nbsp;·&nbsp;{" "}
            <Link href="https://www.nextec.live" className="text-blue-400 hover:underline">
              nextec.live
            </Link>
          </p>
        </div>

        {/* Intro */}
        <div className="border-l-4 border-blue-500 pl-5 mb-10 text-stone-300 leading-relaxed">
          <p>
            Nextec ("we", "our", "us") operates{" "}
            <strong className="text-white">nextec.live</strong>. This Privacy Policy
            explains what information we collect, how we use it, and your rights
            regarding your personal data. By using our website or services, you
            agree to the practices described in this policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8 text-stone-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-white">Personal Information:</strong> Name,
                email address, phone number, and any other details you provide via
                our contact or inquiry forms.
              </li>
              <li>
                <strong className="text-white">Usage Data:</strong> Pages visited,
                browser type, IP address, time spent on pages, and referring URLs.
              </li>
              <li>
                <strong className="text-white">Cookies:</strong> Small data files
                stored on your device to improve website functionality and analytics.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to your inquiries and provide requested services.</li>
              <li>To improve and personalize our website and offerings.</li>
              <li>To send you updates or newsletters (only with your consent).</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To analyze website traffic and usage trends.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Sharing of Information
            </h2>
            <p className="mb-3">
              We do <strong className="text-white">not</strong> sell, trade, or rent
              your personal information to third parties. We may share your data with:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Trusted service providers (hosting, analytics) who assist in operating
                our website, under strict confidentiality agreements.
              </li>
              <li>Law enforcement or government bodies when required by law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Cookies & Tracking
            </h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can
              disable cookies through your browser settings, though some features may
              not function correctly. By continuing to use our site, you consent to
              our use of cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect
              your personal information against unauthorized access, alteration,
              disclosure, or destruction. However, no method of internet transmission
              is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices or content. We encourage you to
              review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Your Rights
            </h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access the personal data we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <Link href="mailto:servicesnextec@gmail.com" className="text-blue-400 hover:underline">
                servicesnextec@gmail.com
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Children's Privacy
            </h2>
            <p>
              Our services are not directed to individuals under the age of 13. We do
              not knowingly collect personal information from children. If you believe
              we have inadvertently collected such data, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be
              posted on this page with an updated effective date. We encourage you to
              review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Contact Us
            </h2>
            <p>If you have any questions about this Privacy Policy, please reach out:</p>
            <div className="mt-3 space-y-1">
              <p>
                📧{" "}
                <Link href="mailto:servicesnextec@gmail.com" className="text-blue-400 hover:underline">
                  servicesnextec@gmail.com
                </Link>
              </p>
              <p>📞 +1 551 407 4732 (USA — Head Office, Kearny, NJ)</p>
              <p>📞 +44 7488 930858 (UK — London, E13 0BH)</p>
            </div>
          </section>

        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-stone-700 text-center text-stone-500 text-sm">
          © {new Date().getFullYear()} Nextec. All rights reserved. &nbsp;·&nbsp;{" "}
          <Link href="/" className="hover:text-white transition">
            Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
};

export default PrivacyPolicy;