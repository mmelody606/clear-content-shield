import { CircleDollarSign, MessageSquare, FileText, SendHorizontal, CreditCard, FileCheck } from "lucide-react";

const steps = [
  {
    title: "Browse Our Pricing",
    description: "Explore our service packages and pricing options on the website.",
    icon: CircleDollarSign,
  },
  {
    title: "Click 'Get Services Now'",
    description: "Select your desired package and click the Get Services Now button.",
    icon: MessageSquare,
  },
  {
    title: "Chat with an Agent",
    description: "Connect with our agent on WhatsApp for instant support.",
    icon: SendHorizontal,
  },
  {
    title: "Submit Documents",
    description: "Share your documents and receive a customized quote.",
    icon: FileText,
  },
  {
    title: "Make Payment",
    description: "Complete the payment to confirm your request.",
    icon: CreditCard,
  },
  {
    title: "Receive Your Report",
    description: "Get your detailed report via WhatsApp within 1 hour.",
    icon: FileCheck,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get your report in 6 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm">
            <p className="text-red-700 text-center font-medium">
            Note: If you need Plagiarism Reduction or AI Content Reduction, kindly request it during the chat with our agent. 
            A separate price quote will be provided for these additional services.
            </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
