
import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: April 19, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              At ContentShield, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our plagiarism and AI content detection services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you register for an account, use our services, or communicate with us.
            </p>

            <h3>Personal Data</h3>
            <p>
              When you register for an account, we may collect your name, email address, payment information, and other contact details. This information is used to provide you with access to our services, process transactions, and communicate with you about your account.
            </p>

            <h3>Content You Upload</h3>
            <p>
              When you use our plagiarism and AI content detection services, you may upload text documents or paste content for analysis. We temporarily process this content to provide our detection services, but we do not permanently store the full text of the documents you upload unless you explicitly opt-in to have your content saved for future reference.
            </p>

            <h3>Usage Data</h3>
            <p>
              We automatically collect certain information about how you interact with our website and services, including your IP address, browser type, operating system, referring URLs, access times, and pages viewed. This information helps us analyze user behavior, maintain the security of our services, and improve our website functionality.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul>
              <li>Providing, maintaining, and improving our services</li>
              <li>Processing transactions and sending related information</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Sending technical notices, updates, security alerts, and support messages</li>
              <li>Monitoring and analyzing trends, usage, and activities in connection with our services</li>
              <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
              <li>Personalizing your experience and providing content recommendations</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information during transmission and once we receive it. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Document Retention</h2>
            <p>
              By default, ContentShield does not store the full text of documents you upload for analysis after the analysis is complete. Our systems are designed to process your content, generate detection results, and then remove the full document content from our active systems, typically within 24 hours of processing.
            </p>
            <p>
              We may retain certain metadata about your submissions (such as submission timestamps, word counts, and overall similarity scores) for service improvement and account history purposes, but this metadata does not include the actual text content you submitted.
            </p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party service providers to help us operate our business and administer activities on our behalf, such as payment processing, email delivery, and hosting services. These third parties may have access to your information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our service is not intended for use by individuals under the age of 16. We do not knowingly collect personally identifiable information from children under 16. If we discover that a child under 16 has provided us with personal information, we will delete such information from our servers immediately.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul>
              <li>The right to access the personal information we have about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent where processing is based on consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided at the end of this policy.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>By email: privacy@contentshield.com</li>
              <li>By phone: +91 123 456 7890</li>
              <li>By mail: 123 Tech Park, Bengaluru, India</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
