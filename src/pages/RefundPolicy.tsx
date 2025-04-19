
import Layout from "@/components/layout/Layout";

const RefundPolicy = () => {
  return (
    <Layout>
      <div className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
            <p className="text-gray-600">Last updated: April 19, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              At ContentShield, we strive to provide you with the highest quality plagiarism and AI content detection services. We understand that sometimes issues may arise, and we have established this Refund Policy to ensure transparency and fairness in our customer interactions.
            </p>

            <h2>Satisfaction Guarantee</h2>
            <p>
              We stand behind the quality and accuracy of our services with a 100% satisfaction guarantee. If our plagiarism or AI content detection tools fail to perform as advertised, we are committed to making it right through one of the following remedies:
            </p>
            <ul>
              <li>Re-processing your content with enhanced scrutiny</li>
              <li>Providing additional manual review by our content specialists</li>
              <li>Issuing a full or partial refund according to the guidelines below</li>
            </ul>

            <h2>Eligibility for Refunds</h2>
            <p>
              Refund requests may be considered under the following circumstances:
            </p>
            <ol>
              <li>
                <strong>Technical Failure:</strong> If our system fails to generate a report due to technical issues on our end, you are eligible for a full refund or service credit, at your discretion.
              </li>
              <li>
                <strong>Accuracy Concerns:</strong> If you have evidence that our detection results contain significant inaccuracies compared to our advertised performance levels, you may request a review and potential refund.
              </li>
              <li>
                <strong>Double Charges:</strong> If you were charged multiple times for the same service due to payment processing errors, the duplicate charges will be refunded in full.
              </li>
              <li>
                <strong>Unused Credits:</strong> If you have purchased a credit package and decide not to use all credits within 12 months of purchase, you may request a partial refund for unused credits, subject to the terms below.
              </li>
            </ol>

            <h2>Refund Request Timeline</h2>
            <p>
              To be eligible for a refund, you must submit your request within the following timeframes:
            </p>
            <ul>
              <li>For technical failures or accuracy concerns: Within 7 days of receiving the report or experiencing the issue</li>
              <li>For double charges: Within 30 days of the transaction date</li>
              <li>For unused credits: Before the 12-month expiration period ends</li>
            </ul>

            <h2>How to Request a Refund</h2>
            <p>
              To request a refund, please follow these steps:
            </p>
            <ol>
              <li>Contact our customer support team at support@contentshield.com with the subject line "Refund Request"</li>
              <li>Include your account email address and the transaction ID (found in your payment receipt)</li>
              <li>Clearly state the reason for your refund request and provide any relevant evidence or information</li>
              <li>Specify whether you prefer a refund to your original payment method or service credits</li>
            </ol>
            <p>
              Our customer support team will review your request and respond within 2 business days with a decision or request for additional information.
            </p>

            <h2>Refund Processing</h2>
            <p>
              When a refund is approved, it will be processed as follows:
            </p>
            <ul>
              <li>Refunds will typically be issued to the original payment method used for the purchase</li>
              <li>Full refunds will include the total amount paid for the service in question</li>
              <li>Partial refunds for unused credits will be prorated based on the package pricing and may include an administrative fee</li>
              <li>Refund processing time depends on your payment provider and typically takes 5-10 business days to appear in your account</li>
            </ul>

            <h2>Non-Refundable Items</h2>
            <p>
              The following items are generally not eligible for refunds:
            </p>
            <ul>
              <li>Services that have been fully delivered and meet our advertised performance standards</li>
              <li>Free trial usage that does not involve any payment</li>
              <li>Refund requests made after the specified timeframes have expired</li>
              <li>Subscription fees for periods where the service was available and functional, even if you did not use it</li>
            </ul>

            <h2>Special Circumstances</h2>
            <p>
              We understand that unique situations may arise that aren't covered by this policy. If you believe you have extenuating circumstances that warrant special consideration for a refund, please explain your situation to our customer support team. We review such cases individually and at our discretion.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              ContentShield reserves the right to update or modify this Refund Policy at any time without prior notice. Any changes will be effective immediately upon posting the revised policy on our website. Your continued use of our services following any changes indicates your acceptance of the new terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Refund Policy or would like to request a refund, please contact us:
            </p>
            <ul>
              <li>By email: support@contentshield.com</li>
              <li>By phone: +91 123 456 7890</li>
              <li>By mail: 123 Tech Park, Bengaluru, India</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RefundPolicy;
