
import { Check } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Compare</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why PlagLab stands out from other plagiarism and AI detection tools
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left bg-gray-100 border">Features</th>
                <th className="p-4 text-center bg-primary text-white border">
                  PlagLab
                </th>
                <th className="p-4 text-center bg-gray-100 border">XMaster</th>
                <th className="p-4 text-center bg-gray-100 border">ResearchExpert</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 border bg-white">Plagiarism Detection Accuracy</td>
                <td className="p-4 border bg-white text-center font-medium">98%</td>
                <td className="p-4 border bg-white text-center">90%</td>
                <td className="p-4 border bg-white text-center">85%</td>
              </tr>
              <tr>
                <td className="p-4 border bg-white">AI Detection</td>
                <td className="p-4 border bg-white text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="p-4 border bg-white text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="p-4 border bg-white text-center">
                  <span className="text-red-500">✕</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 border bg-white">Plag and AI remover support</td>
                <td className="p-4 border bg-white text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="p-4 border bg-white text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="p-4 border bg-white text-center">
                  <span className="text-red-500">✕</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 border bg-white">Secure Documents Handling</td>
                <td className="p-4 border bg-white text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="p-4 border bg-white text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="p-4 border bg-white text-center">
                  <span className="text-red-500">✕</span>
                </td>
              </tr>
              <tr>
                <td className="p-4 border bg-white">Detailed Source Citations</td>
                <td className="p-4 border bg-white text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="p-4 border bg-white text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="p-4 border bg-white text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="p-4 border bg-white">Starting Price</td>
                <td className="p-4 border bg-white text-center font-medium">₹30</td>
                <td className="p-4 border bg-white text-center">₹45</td>
                <td className="p-4 border bg-white text-center">₹40</td>
              </tr>
              <tr>
                <td className="p-4 border bg-white">24/7 Customer Support</td>
                <td className="p-4 border bg-white text-center">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="p-4 border bg-white text-center">
                  <span className="text-red-500">✕</span>
                </td>
                <td className="p-4 border bg-white text-center">
                  <span className="text-red-500">✕</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
