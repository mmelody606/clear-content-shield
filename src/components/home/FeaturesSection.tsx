
import { Shield, Clock, Database, DollarSign } from "lucide-react";

const features = [
  {
    title: "Fast Results",
    description: "Get comprehensive plagiarism and AI detection results in seconds, not hours.",
    icon: Clock,
  },
  {
    title: "Accurate Detection",
    description: "Our advanced algorithms identify matches and AI patterns with 98% accuracy.",
    icon: Shield,
  },
  {
    title: "Secure & Private",
    description: "All uploads are encrypted and we never store your content after analysis.",
    icon: Database,
  },
  {
    title: "Affordable Pricing",
    description: "Pay only for what you need with our transparent per-page pricing model.",
    icon: DollarSign,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thousands of professionals and students rely on our tools for content verification
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="bg-gray-50 px-8 py-6 rounded-lg flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-1">10,000+</div>
            <div className="text-gray-600">Checks Completed</div>
          </div>
          <div className="bg-gray-50 px-8 py-6 rounded-lg flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-1">98%</div>
            <div className="text-gray-600">Detection Accuracy</div>
          </div>
          <div className="bg-gray-50 px-8 py-6 rounded-lg flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-1">1,500+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-gray-50 px-8 py-6 rounded-lg flex flex-col items-center">
            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
