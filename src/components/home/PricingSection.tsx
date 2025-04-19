
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const [pageCount, setPageCount] = useState<number>(10);
  const basePrice = 30; // Base price per page in INR
  
  const handleSliderChange = (value: number[]) => {
    setPageCount(value[0]);
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pay only for what you need with our straightforward per-page pricing model
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Plagiarism Check Pricing */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Plagiarism Check</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-4xl font-bold">₹{basePrice}</span>
                <span className="text-xl text-gray-500 ml-1">/page</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-600 mb-6">Pages to check:</p>
              <Slider
                defaultValue={[pageCount]}
                max={100}
                min={1}
                step={1}
                onValueChange={handleSliderChange}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex justify-between mb-3">
                <span className="font-medium">Pages</span>
                <span className="font-medium">{pageCount}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Price per page</span>
                <span>₹{basePrice}</span>
              </div>
              <div className="pt-3 border-t border-gray-200 flex justify-between font-bold">
                <span>Total</span>
                <span>₹{pageCount * basePrice}</span>
              </div>
            </div>

            <Button asChild size="lg" className="w-full">
              <Link to="/plagiarism">Check Plagiarism Now</Link>
            </Button>
          </div>

          {/* AI Content Check Pricing */}
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">AI Content Check</h3>
              <div className="flex justify-center items-baseline">
                <span className="text-4xl font-bold">₹{basePrice}</span>
                <span className="text-xl text-gray-500 ml-1">/page</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-gray-600 mb-6">Pages to check:</p>
              <Slider
                defaultValue={[pageCount]}
                max={100}
                min={1}
                step={1}
                onValueChange={handleSliderChange}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>1</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <div className="flex justify-between mb-3">
                <span className="font-medium">Pages</span>
                <span className="font-medium">{pageCount}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span>Price per page</span>
                <span>₹{basePrice}</span>
              </div>
              <div className="pt-3 border-t border-gray-200 flex justify-between font-bold">
                <span>Total</span>
                <span>₹{pageCount * basePrice}</span>
              </div>
            </div>

            <Button asChild size="lg" className="w-full">
              <Link to="/ai-detect">Check AI Content Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
