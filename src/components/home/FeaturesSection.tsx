
import { Shield, Clock, Database, DollarSign } from "lucide-react";

const features = [
  {
    title: "Fast Results",
    description: "Get full plagiarism and AI detection results less then an hour.",
    icon: Clock,
  },
  {
    title: "Accurate Report",
    description: "We use advanced technology to  identify similarities and AI patterns with 98% accuracy.",
    icon: Shield,
  },
  {
    title: "Secure & Private",
    description: "We never share your documents with any third party.",
    icon: Database,
  },
  {
    title: "Affordable Pricing",
    description: "Pay only for what you need with our transparent pricing model.",
    icon: DollarSign,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thousands of professionals and students trust us to check and remove plaigiarism and AI content from their documents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-all hover:scale-105 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "backwards"
              }}
            >
              <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {["10,000+", "98%", "1,500+", "24/7"].map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-50 px-8 py-6 rounded-lg flex flex-col items-center hover:shadow-md transition-all hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "backwards"
              }}
            >
              <div className="text-3xl font-bold text-primary mb-1 animate-bounce-subtle">{stat}</div>
              <div className="text-gray-600">
                {index === 0 && "Checks Completed"}
                {index === 1 && "Detection Accuracy"}
                {index === 2 && "Happy Customers"}
                {index === 3 && "Customer Support"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
