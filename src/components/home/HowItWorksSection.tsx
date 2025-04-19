
import { FileSearch, FileText, Download, Check } from "lucide-react";

const steps = [
  {
    title: "Upload Your Content",
    description: "Simply paste your text or upload a document for analysis.",
    icon: FileText,
  },
  {
    title: "Analyze",
    description: "Our advanced algorithms scan the content for plagiarism or AI patterns.",
    icon: FileSearch,
  },
  {
    title: "Get Detailed Report",
    description: "Review the comprehensive analysis with highlighted sections and sources.",
    icon: Check,
  },
  {
    title: "Download Results",
    description: "Save your report in PDF format for future reference or revisions.",
    icon: Download,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get results in just a few simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
              <div className="mt-4 flex justify-center">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-medium">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
