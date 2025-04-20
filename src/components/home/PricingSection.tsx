import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const [pageCount, setPageCount] = useState<number>(10);
  const basePrice = 30; // Base price per page in INR
  const whatsappLink = "https://wa.me/+231777477409"; // Replace with your WhatsApp number
  
  const handleSliderChange = (value: number[]) => {
    setPageCount(value[0]);
  };

  return (
    <section id="pricing" className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combined pricing for Plagiarism and AI Content Detection
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow mb-8">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-2">Page Range</th>
                <th className="text-right py-4 px-2">Price (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-2">0 – 20 Pages</td>
                <td className="text-right py-4 px-2">₹30</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-2">21 – 50 Pages</td>
                <td className="text-right py-4 px-2">₹50</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-2">51 – 100 Pages</td>
                <td className="text-right py-4 px-2">₹100</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-4 px-2">101 – 150 Pages</td>
                <td className="text-right py-4 px-2">₹250</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="px-8 py-6 text-lg"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Get Service Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
