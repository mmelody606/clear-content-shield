
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Detect Plagiarism & AI Content Instantly!
          </h1>
          <p className="text-xl text-gray-700 max-w-lg">
            Ensure academic and professional integrity with our high-accuracy, lightning-fast, and affordably priced content verification tools.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link to="/plagiarism">Check Plagiarism Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg">
              <Link to="/ai-detect">Detect AI Content</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 relative z-10">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
              alt="Content checking visualization"
              className="w-full h-auto rounded-md mb-6"
            />
            <div className="flex justify-between items-center">
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                98% Accuracy
              </div>
              <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Results in seconds
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
