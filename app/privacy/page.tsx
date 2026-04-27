import type { Metadata } from "next";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Privacy Policy | WorldCupTactics",
  description:
    "Privacy Policy for WorldCupTactics.com — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  const lastUpdated = "April 28, 2026";

  return (
    <>
      <Nav />
      <div
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "4rem 2rem",
          lineHeight: 1.8,
          color: "var(--text-secondary)",
        }}
      >
        <h1
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: "3rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            marginBottom: "3rem",
          }}
        >
          Last updated: {lastUpdated}
        </p>

        {[
          {
            title: "1. Introduction",
            body: `Welcome to WorldCupTactics.com ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at worldcuptactics.com.

Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.`,
          },
          {
            title: "2. Information We Collect",
            body: `We may collect the following types of information:

**Automatically Collected Information:** When you visit our website, our servers may automatically log standard data provided by your web browser, such as your IP address, browser type and version, pages you visit, time and date of your visit, and time spent on each page.

**Analytics Data:** We use analytics services to understand how visitors use our site. This may include pages viewed, time on site, and traffic sources. This data is aggregated and anonymous.

**Advertising Data:** We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalised advertising by visiting Google's Ads Settings.

**Email Address:** If you subscribe to our newsletter or notify-me list, we collect your email address. We use this only to send you relevant updates about WorldCupTactics.`,
          },
          {
            title: "3. How We Use Your Information",
            body: `We use the information we collect to:

• Operate and maintain our website
• Improve, personalise, and expand our content
• Understand and analyse how visitors use our site
• Display relevant advertisements through Google AdSense
• Send periodic emails (only if you opted in)
• Comply with legal obligations`,
          },
          {
            title: "4. Cookies",
            body: `We use cookies and similar tracking technologies to track activity on our website. Cookies are small data files stored on your device.

**Types of cookies we use:**
• Essential cookies: required for the site to function
• Analytics cookies: help us understand site usage (e.g., Google Analytics)
• Advertising cookies: used by Google AdSense to display relevant ads

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our site may not function properly.

To opt out of interest-based advertising by Google, visit: https://www.google.com/settings/ads`,
          },
          {
            title: "5. Google AdSense",
            body: `We use Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your visit to our site and other sites on the Internet. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site.

You may opt out of personalised advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads or by visiting www.aboutads.info.

For more information on how Google uses data from sites that use its services, please visit: https://policies.google.com/technologies/partner-sites`,
          },
          {
            title: "6. Third-Party Services",
            body: `Our website may contain links to third-party websites and services. We are not responsible for the content or privacy practices of those third parties. We encourage you to review the privacy policies of any third-party sites you visit.

Third-party services we may use include:
• Google Analytics — website analytics
• Google AdSense — advertising
• Vercel — web hosting and deployment`,
          },
          {
            title: "7. Data Retention",
            body: `We retain your personal information only for as long as necessary to fulfil the purposes described in this policy, or as required by law. Email addresses collected through our notify-me list are retained until you unsubscribe.`,
          },
          {
            title: "8. Your Rights",
            body: `Depending on your location, you may have the following rights regarding your personal data:

• The right to access the personal data we hold about you
• The right to request correction of inaccurate data
• The right to request deletion of your data
• The right to withdraw consent at any time
• The right to opt out of marketing communications

To exercise any of these rights, please contact us at the email address below.`,
          },
          {
            title: "9. Children's Privacy",
            body: `Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us and we will promptly delete it.`,
          },
          {
            title: "10. Changes to This Policy",
            body: `We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this policy. Your continued use of the website after any changes constitutes your acceptance of the new policy.`,
          },
          {
            title: "11. Contact Us",
            body: `If you have any questions or concerns about this Privacy Policy, please contact us at:

WorldCupTactics.com
Email: contact@worldcuptactics.com`,
          },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: "var(--accent-green)",
                marginBottom: "0.75rem",
              }}
            >
              {title}
            </h2>
            {body.split("\n\n").map((para, i) => (
              <p key={i} style={{ marginBottom: "0.75rem", whiteSpace: "pre-line" }}>
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
