
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PlagiarismReport = () => {
  return (
    <Layout>
      <div className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Plagiarism Detection Report</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sample report demonstrating our plagiarism checking capabilities
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-12">
            <div className="bg-primary text-white p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold">Plagiarism Analysis Report</h2>
                  <p>Document ID: PL-2025-04-19-5678</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="bg-white text-primary font-bold rounded-full px-6 py-2">
                    23% Similarity Score
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
                      <span className="font-medium">thesis_chapter2.docx</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Word Count:</span>
                      <span className="font-medium">2,845 words</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Submission Date:</span>
                      <span className="font-medium">April 19, 2025</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Analysis Time:</span>
                      <span className="font-medium">3.7 seconds</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Similarity Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Overall Similarity:</span>
                      <span className="font-bold text-yellow-600">23%</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Matching Sources:</span>
                      <span className="font-medium">14</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Similarity Breakdown:</span>
                      <span className="font-medium">12% Internet, 11% Publications</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-gray-600">Excluded Sources:</span>
                      <span className="font-medium">3 (Bibliography, Citations)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Content Similarity by Source</h3>
                <div className="relative overflow-x-auto rounded-lg">
                  <table className="w-full text-sm text-left text-gray-700">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Source
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Match %
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Matched Words
                        </th>
                        <th scope="col" className="px-6 py-3">
                          URL/Publication
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">
                          Journal of Educational Psychology
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                            7%
                          </span>
                        </td>
                        <td className="px-6 py-4">199</td>
                        <td className="px-6 py-4 truncate max-w-[200px]">
                          Smith, J. et al. (2023). "Learning Psychology..."
                        </td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="px-6 py-4 font-medium">
                          Harvard Educational Review
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                            5%
                          </span>
                        </td>
                        <td className="px-6 py-4">142</td>
                        <td className="px-6 py-4 truncate max-w-[200px]">
                          education.harvard.edu/review/2024/spring
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4 font-medium">
                          Educational Reform Blog
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                            4%
                          </span>
                        </td>
                        <td className="px-6 py-4">114</td>
                        <td className="px-6 py-4 truncate max-w-[200px]">
                          educationalreform.org/blog/cognitive-development
                        </td>
                      </tr>
                      <tr className="bg-gray-50 border-b">
                        <td className="px-6 py-4 font-medium">
                          Cambridge University Press
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            3%
                          </span>
                        </td>
                        <td className="px-6 py-4">85</td>
                        <td className="px-6 py-4 truncate max-w-[200px]">
                          "Modern Educational Psychology" (2024)
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-4 font-medium">
                          Various Sources <10 Matches
                        </td>
                        <td className="px-6 py-4">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            4%
                          </span>
                        </td>
                        <td className="px-6 py-4">114</td>
                        <td className="px-6 py-4 truncate max-w-[200px]">
                          Multiple Sources (View Full Report)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Highlighted Matched Content</h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-medium">Match #1: Journal of Educational Psychology</h4>
                      <p className="text-sm text-gray-600">7% similarity (199 words)</p>
                    </div>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                      Direct Quote
                    </span>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-md p-4 mb-4">
                    <p className="text-gray-700">
                      <span className="bg-yellow-100">The cognitive development of children in educational settings depends significantly on both intrinsic motivation and extrinsic factors such as teacher interaction and peer collaboration. Studies have consistently shown that engaging learning environments promote higher academic achievement and improved retention of knowledge across multiple subject areas.</span> This correlation remains strong even when controlling for socioeconomic factors and prior academic performance.
                    </p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-md p-4 text-sm">
                    <h5 className="font-medium mb-1">Source:</h5>
                    <p>
                      Smith, J., & Johnson, A. (2023). "Learning Psychology in Contemporary Educational Settings." Journal of Educational Psychology, 112(3), 456-471.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-medium">Match #2: Harvard Educational Review</h4>
                      <p className="text-sm text-gray-600">5% similarity (142 words)</p>
                    </div>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      Paraphrased
                    </span>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-md p-4 mb-4">
                    <p className="text-gray-700">
                      Educational reform initiatives have frequently <span className="bg-yellow-100">attempted to implement technology-enhanced learning without sufficient attention to teacher training and infrastructural requirements. The resulting gap between policy aspirations and classroom realities has led to inconsistent outcomes across districts and individual schools.</span> Successful integration of technology requires a multi-faceted approach involving all stakeholders.
                    </p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-md p-4 text-sm">
                    <h5 className="font-medium mb-1">Source:</h5>
                    <p>
                      Harvard Educational Review (2024). "Technology Integration in K-12 Settings: Challenges and Opportunities." Spring Issue, Vol. 94, No. 1.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-4">Recommendation</h3>
                <p className="text-gray-700 mb-4">
                  This document shows a moderate level of similarity (23%) with existing sources. While some matched content appears to be properly cited, there are several instances of direct quotes or closely paraphrased content without appropriate citation.
                </p>
                <p className="text-gray-700">
                  We recommend reviewing the highlighted sections and ensuring all borrowed content is properly cited according to the appropriate style guide. For academic submissions, reducing the similarity score to below 15% is typically recommended.
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <Button asChild>
                  <Link to="/contact">Get Your Own Report</Link>
                </Button>
                <Button variant="outline">Download Sample (PDF)</Button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to check your content for plagiarism?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our plagiarism detection tool provides detailed reports like this one, helping you ensure content originality and proper citation.
            </p>
            <Button asChild size="lg">
              <Link to="/">Try It Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlagiarismReport;
