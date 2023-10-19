import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
};
export default function CookiePolicyPage() {
  return (
    <div className="content-container py-8 gap-6 flex-col flex">
      <h1>Cookie Policy</h1>
      <p>
        Welcome to ReStyle Fashion, a student-managed e-commerce website
        offering thrifted women&apos;s dresses, skirts, and shorts in the
        Philippines. Your privacy and online experience are important to us.
        This Cookie Policy explains how we use cookies on our website.
      </p>

      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small text files that are stored on your device when you
        visit a website. They help improve website functionality, enhance user
        experience, and collect information about user behavior. These cookies
        can be &quot;first-party cookies&quot; set by our website or
        &quot;third-party cookies&quot; set by other websites or services.
      </p>

      <h2>Why Do We Use Cookies?</h2>
      <p>We use cookies for various purposes, including but not limited to:</p>
      <ul>
        <li>
          <span className="font-semibold">Authentication</span>: Cookies help
          you log in and access your account.
        </li>
        <li>
          <span className="font-semibold">Functionality</span>: They are
          essential for features like shopping carts and product selection.
        </li>
        <li>
          <span className="font-semibold">Performance</span>: Cookies monitor
          and analyze website performance, helping us understand user behavior
          and site improvements.
        </li>
        <li>
          <span className="font-semibold">Analytics</span>: We gather data on
          your browsing behavior to personalize and enhance your experience.
        </li>
        <li>
          <span className="font-semibold">Marketing</span>: Cookies help display
          relevant ads and content on our website and third-party websites.
        </li>
      </ul>

      <h2>Types of Cookies We Use</h2>
      <p>Our cookies fall into the following categories:</p>
      <ul>
        <li>
          <span className="font-semibold">Strictly Necessary Cookies</span>:
          Essential for website function, like logging in and shopping cart
          management.
        </li>
        <li>
          <span className="font-semibold">
            Performance and Analytics Cookies
          </span>
          : Monitor and analyze website performance and user behavior.
        </li>
        <li>
          <span className="font-semibold">Functionality Cookies</span>:
          Personalize your experience by remembering your preferences and
          settings.
        </li>
        <li>
          <span className="font-semibold">
            Marketing and Third-Party Cookies
          </span>
          : Display personalized ads and content.
        </li>
      </ul>

      <h2>How to Manage Cookies</h2>
      <p>
        You can control and manage cookies via your web browser settings. Keep
        in mind that disabling certain cookies may affect the functionality and
        user experience of our website. Refer to your browser&apos;s help
        documentation for guidance on managing cookies.
      </p>

      <h2>Third-Party Cookies</h2>
      <p>
        Some third-party services, like social media platforms or advertising
        partners, may set cookies. These cookies are governed by the policies of
        those third parties and are beyond our control. Please review their
        privacy and cookie policies.
      </p>

      <h2>Changes to Our Cookie Policy</h2>
      <p>
        We may update this Cookie Policy to reflect changes in our practices or
        for legal and regulatory reasons. Any updates will be posted on this
        page with the new effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions or concerns about our Cookie Policy or the cookies
        we use, please contact us in Instagram: @_restylefashion
      </p>

      <p>
        By using our website, you consent to the use of cookies as described in
        this Cookie Policy. If you do not agree with the use of cookies, please
        refrain from using our website.
      </p>

      <p>
        This Cookie Policy is an integral part of our Terms of Service and
        Privacy Policy and should be read in conjunction with those documents.
      </p>
    </div>
  );
}
