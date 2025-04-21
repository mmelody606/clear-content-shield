import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-purple-700">
            Check for Plagiarism & AI Content Instantly! Get Your Turnitin Report Fast!
            </h1>
          <p className="text-xl text-gray-700 max-w-lg">
            Ensure academic and professional integrity with our high-accuracy, lightning-fast, and affordably priced Services utilizing the latest technology and a team of experts to manually check and edit your academic work.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg hover:scale-105 transition-transform"
              onClick={scrollToPricing}
            >
              See Pricing
            </Button>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 relative z-10 animate-bounce-subtle">
            <img
              src="/image/vector_hero.jpg"
              alt="Content checking visualization"
              className="w-full h-auto rounded-md mb-6"
            />
            <div className="flex justify-between items-center">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                98% Accuracy
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                Fast Result
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-lg z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
