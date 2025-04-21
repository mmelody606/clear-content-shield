
import Layout from "@/components/layout/Layout";

const Disclaimer = () => {
  return (
    <Layout>
      <div className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
            <p className="text-gray-600">Last updated: April 19, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              The information provided by PlagLab ("we," "us," or "our") on our website and associated services is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>

            <h2>Technology Limitations</h2>
            <p>
              While our plagiarism and AI content detection tools utilize advanced algorithms and technologies, no detection system can guarantee 100% accuracy. The results provided by our services should be used as a guideline and not as definitive proof of plagiarism or AI-generated content. We recommend that users exercise their own judgment when interpreting the results.
            </p>

            <h2>Not Legal Advice</h2>
            <p>
              The information provided by our services does not constitute legal advice. If you have concerns about potential copyright infringement, plagiarism allegations, or the legal implications of using AI-generated content, we strongly recommend consulting with a qualified legal professional.
            </p>

            <h2>External Links</h2>
            <p>
              Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>

            <h2>Errors and Omissions</h2>
            <p>
              The content on our website may contain technical, typographical, or photographic errors. ContentShield does not warrant that any of the materials on its website are accurate, complete, or current. ContentShield may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall ContentShield, nor any of its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from any: (i) errors, mistakes, or inaccuracies in our detection results; (ii) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of our service; (iii) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein; (iv) any interruption or cessation of transmission to or from our service; (v) any bugs, viruses, trojan horses, or the like, which may be transmitted to or through our service by any third party; and/or (vi) any errors or omissions in any content or for any loss or damage of any kind incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available via the service, whether based on warranty, contract, tort, or any other legal theory, and whether or not the company is advised of the possibility of such damages.
            </p>

            <h2>Accuracy of Materials</h2>
            <p>
              While we strive to provide accurate information about plagiarism and AI content detection, we cannot guarantee that the materials on our website are completely free from errors or omissions. The field of AI detection, in particular, is rapidly evolving, and our tools and information are continuously updated to reflect the latest developments.
            </p>

            <h2>Changes to This Disclaimer</h2>
            <p>
              ContentShield reserves the right to change this disclaimer at any time without notice. By using this website, you are agreeing to be bound by the then-current version of this disclaimer.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this disclaimer, please contact us through the information provided on our Contact page.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
