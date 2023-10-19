import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};
export default function PrivacyPolicyPage() {
  return (
    <div className="content-container py-8 gap-6 flex-col flex">
      <h1>Privacy Policy for ReStyle Fashion</h1>
      <p>
        <strong>Effective Date:</strong> October 19, 2023
      </p>

      <p>
        Thank you for visiting ReStyle Fashion, an e-commerce website dedicated
        to providing stylish thrifted dresses, skirts, and shorts for women
        based in the Philippines. We are committed to protecting your privacy
        and ensuring the security of your personal information. This Privacy
        Policy outlines our practices concerning the collection, use, and
        sharing of your personal information. By accessing or using our website,
        you agree to the terms and practices described in this Privacy Policy.
      </p>

      <h2>1. Information We Collect</h2>

      <p>
        a. <strong>Personal Information:</strong> When you make a purchase on
        our website or contact us through email to place an order, we may
        collect the following personal information:
      </p>

      <ul>
        <li>Full name</li>
        <li>Email address</li>
        <li>Contact number (optional)</li>
        <li>Shipping address</li>
        <li>Billing address</li>
      </ul>

      <p>
        b. <strong>Payment Information:</strong> At present, we process payments
        manually through email. We do not collect or store payment card details.
        In the future, if we integrate the PayMaya API for checkout, your
        payment information will be collected and processed securely by PayMaya,
        and we will not store this information.
      </p>

      <p>
        c. <strong>Communications:</strong> We may collect and store any
        communication you have with us via email.
      </p>

      <h2>2. How We Use Your Information</h2>

      <p>
        a. <strong>Order Processing:</strong> We use your personal information
        to fulfill and process your orders, contact you regarding your purchase,
        and ship items to your provided address.
      </p>

      <p>
        b. <strong>Communication:</strong> We may use your email address to send
        you order updates, shipping notifications, and responses to inquiries.
        We may also send you promotional emails if you have subscribed to our
        newsletter (you can opt out at any time).
      </p>

      <p>
        c. <strong>Customer Support:</strong> We use your information to provide
        customer support and address any concerns or issues you may have.
      </p>

      <h2>3. Information Sharing</h2>

      <p>
        We do not sell, trade, or share your personal information with third
        parties for marketing purposes. However, we may share your information
        in the following circumstances:
      </p>

      <p>
        a. <strong>Service Providers:</strong> We may share your information
        with trusted service providers, such as shipping carriers, to facilitate
        order fulfillment and delivery.
      </p>

      <p>
        b. <strong>Legal Compliance:</strong> We may disclose your information
        when required by law or to protect our rights and comply with legal
        obligations.
      </p>

      <h2>4. Data Security</h2>

      <p>
        We take reasonable steps to safeguard your personal information from
        unauthorized access, disclosure, alteration, and destruction. Although
        we cannot guarantee the security of information transmitted over the
        internet, we do our best to protect your data.
      </p>

      <h2>5. Your Choices and Rights</h2>

      <p>
        a. <strong>Access and Correction:</strong> You have the right to access
        and update your personal information. If you would like to correct any
        inaccuracies, please contact us.
      </p>

      <p>
        b. <strong>Opting Out:</strong> If you no longer wish to receive
        promotional emails from us, you can opt out by using the unsubscribe
        link in the email or contacting us.
      </p>

      <h2>6. Changes to this Privacy Policy</h2>

      <p>
        We reserve the right to modify this Privacy Policy at any time. Please
        review this Privacy Policy periodically. The &quot;Effective Date&quot;
        at the top of this page will indicate when the policy was last updated.
      </p>

      <h2>7. Contact Us</h2>

      <p>
        If you have any questions, concerns, or requests regarding your personal
        information or this Privacy Policy, please contact us at:
      </p>

      <ul>
        <li>Instagram: @_restylefashion</li>
      </ul>

      <p>
        Thank you for choosing ReStyle Fashion. We are dedicated to providing
        you with fashionable thrifted clothing while respecting your privacy.
      </p>
    </div>
  );
}
