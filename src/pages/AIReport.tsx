import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AIReport = () => {
  const whatsappLink = "https://wa.me/+231777477409"; // Replace with your WhatsApp number
  return (
    <Layout>
      <div className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">AI Content Detection Report</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sample report demonstrating our AI checking capabilities
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-12">
            <div className="bg-primary text-white p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">AI Content Analysis Report</h2>
                  <p>Document ID: AI-2025-04-19-1234</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="bg-white text-primary font-bold rounded-full px-6 py-2">
                    87% AI Probability
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-2">Document Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">File Name:</span>
                      <span className="font-medium">research_paper.docx</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Word Count:</span>
                      <span className="font-medium">1,567 words</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Submission Date:</span>
                      <span className="font-medium">April 19, 2025</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Analysis Time:</span>
                      <span className="font-medium">2.3 seconds</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">AI Detection Results</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Overall AI Probability:</span>
                      <span className="font-bold text-red-600">87%</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Confidence Level:</span>
                      <span className="font-medium">High</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Detected AI Models:</span>
                      <span className="font-medium">GPT-4, Claude</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Human Content Sections:</span>
                      <span className="font-medium">~13%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Content Analysis by Section</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Introduction</h4>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      92% AI
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    The introduction shows strong indicators of AI generation, including predictable sentence structure, unnatural transitions, and overly formal language patterns.
                  </p>
                  <details className="text-sm">
                    <summary className="font-medium text-primary cursor-pointer">View sample text</summary>
                    <div className="mt-2 p-3 bg-white border border-gray-200 rounded-md">
                      <p className="text-gray-800 italic">
                        "Artificial intelligence has revolutionized numerous sectors in contemporary society, transforming how businesses operate and individuals conduct their daily activities. This comprehensive analysis examines the multifaceted implications of AI integration across diverse industries, with particular emphasis on healthcare, finance, and education. The subsequent sections will elucidate the various methodologies employed in AI implementation and the consequent outcomes observed in these domains."
                      </p>
                    </div>
                  </details>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Literature Review</h4>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      95% AI
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Extremely high probability of AI generation. Perfect citation formats, encyclopedic knowledge of sources, and uniform tone throughout the section.
                  </p>
                  <details className="text-sm">
                    <summary className="font-medium text-primary cursor-pointer">View sample text</summary>
                    <div className="mt-2 p-3 bg-white border border-gray-200 rounded-md">
                      <p className="text-gray-800 italic">
                        "Smith et al. (2023) conducted a longitudinal study examining the efficacy of machine learning algorithms in diagnostic medicine, determining a 94% accuracy rate across 15,000 cases. Similarly, Johnson and Patel (2022) identified substantial improvements in financial forecasting when implementing neural network architectures, with error margins decreasing by approximately 37% compared to traditional statistical methods."
                      </p>
                    </div>
                  </details>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Methodology</h4>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      76% AI
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Moderate to high probability of AI generation, with some likely human editing. Contains some specific details that suggest human input.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Conclusion</h4>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      32% AI
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Predominantly human-written. Shows personal perspective, subtle inconsistencies, and specific contextual references that AI typically wouldn't generate.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">AI Detection Patterns</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Linguistic Patterns</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">●</span>
                        <span>Excessive use of complex transitional phrases</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">●</span>
                        <span>Unnatural precision in sentence length variation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">●</span>
                        <span>Formulaic paragraph structures throughout document</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">●</span>
                        <span>Predictable word choice patterns</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Content Indicators</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">●</span>
                        <span>Perfect citation formatting without errors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">●</span>
                        <span>Consistent tone throughout unrelated topics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">●</span>
                        <span>Generic examples lacking personal specificity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">●</span>
                        <span>Absence of unique research insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-4">Recommendation</h3>
                <p className="text-gray-700 mb-4">
                  Based on our analysis, this document shows strong indicators of being primarily AI-generated with minimal human editing. We recommend requesting a complete rewrite with authentic human input or clearly indicating which portions were created with AI assistance.
                </p>
                <p className="text-gray-700">
                  For academic submissions, this level of AI generation would typically be flagged for academic integrity review. For professional settings, transparency about AI use is recommended.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4"> Are You Interested in getting your Turnitin AI Report?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We provide detailed reports like this one, helping you ensure content originality and transparency.
            </p>
            <Button asChild size="lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Contact Us on WhatsApp 
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AIReport;
