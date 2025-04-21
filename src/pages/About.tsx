import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const whatsappLink = "https://wa.me/+231777477409"; // Replace with your WhatsApp number
  return (
    <Layout>
      <div className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About PlagLab</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to academic and professional integrity with our high-accuracy, lightning-fast, and affordably priced Services utilizing the latest technology and a team of experts to manually check and edit your academic work.
            </p>
          </div>

          <div className="mb-16">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80"
              alt="Team working on computers"
              className="w-full h-80 object-cover rounded-xl mb-8"
            />

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                  At PlagLab, we believe in the power of original thought and the importance of intellectual integrity. Our mission is to provide educators, students, researchers, and content creators with the best service that uphold these values.
                </p>
                <p className="text-gray-700 mb-4">
                  In today's digital landscape, with the rise of AI-generated content and easy access to information, maintaining originality has become increasingly challenging. We're here to ensure that your work stands on its own merit.
                </p>
                <p className="text-gray-700">
                  With the latest plagiarism detection and AI content identification tools, we empower you to make necessary checks and improvements before submission or publication.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  PlagLab was founded in 2022 by a team of academics and technology experts who recognized the growing challenges in maintaining content integrity in the digital age.
                </p>
                <p className="text-gray-700 mb-4">
                  What began as a tool designed specifically for university use has evolved into a successful service working with educational institutions, publishers, businesses, and individual content creators worldwide.
                </p>
                <p className="text-gray-700">
                  Today, we process thousands of documents daily, enabling our valued customers to receive PDF reports for both plagiarism and AI-generated content detection with industry-leading accuracy. Our commitment to continuous improvement means our capabilities are constantly evolving to stay ahead of new challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">What Sets Us Apart</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">We offer both Report Checking and Plag/AI remover</h3>
                <p className="text-gray-700">
                  Our platform uniquely combines plagiarism detection with AI content identification, providing a comprehensive content integrity solution.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Privacy-First Approach</h3>
                <p className="text-gray-700">
                  We never keep your files/documents after analysis is complete, ensuring your intellectual property remains yours alone.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Edit or Revision Support</h3>
                <p className="text-gray-700">
                  Beyond submitting your turnitin report, we provide guidance on how to revise flagged content to ensure originality while maintaining your voice.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group relative p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl">
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-75"></div>
                  <div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                  <img
                    src="src/image/Christian Weah Picture.jpg"
                    alt="CEO portrait"
                    className="relative w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 transform transition-all duration-300 group-hover:translate-y-1">
                  <h3 className="text-xl font-bold">Christian Weah</h3>
                  <p className="text-gray-600">Co-founder & CEO</p>
                  <p className="text-gray-700 mt-2">
                    IT and Civil Engineering Project Management Professional with 15+ years in academic integrity research.
                  </p>
                </div>
              </div>
              <div className="text-center group relative p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl">
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-sm opacity-75"></div>
                  <div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
                  <img
                    src="https://randomuser.me/api/portraits/women/54.jpg"
                    alt="CTO portrait"
                    className="relative w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 transform transition-all duration-300 group-hover:translate-y-1">
                  <h3 className="text-xl font-bold">Neha Gupta</h3>
                  <p className="text-gray-600">Co-founder & CTO</p>
                  <p className="text-gray-700 mt-2">
                    AI specialist with experience at leading tech companies.
                  </p>
                </div>
              </div>
              <div className="text-center group relative p-6 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-xl">
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 blur-sm opacity-75"></div>
                  <div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500"></div>
                  <img
                    src="https://randomuser.me/api/portraits/men/67.jpg"
                    alt="Research Director portrait"
                    className="relative w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 transform transition-all duration-300 group-hover:translate-y-1">
                  <h3 className="text-xl font-bold">Vikram Patel</h3>
                  <p className="text-gray-600">Research Director</p>
                  <p className="text-gray-700 mt-2">
                    Leading our algorithm development and detection accuracy improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience PlagLab?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of satisfied users who rely on our tools for content verification and originality assurance.
            </p>
            <Button asChild size="lg" className="px-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Get Service Now
            </a>
            </Button>
            
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
