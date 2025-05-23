import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToPricing = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#pricing';
      return;
    }
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">PlagLab</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link to="/about" className="font-medium text-gray-700 hover:text-primary">
            About Us
          </Link>
          <button 
            onClick={scrollToPricing}
            className="font-medium text-gray-700 hover:text-primary"
          >
            Pricing
          </button>
          <Link to="/ai-report" className="font-medium text-gray-700 hover:text-primary">
            AI Report
          </Link>
          <Link to="/plagiarism-report" className="font-medium text-gray-700 hover:text-primary">
            Plagiarism Report
          </Link>
          <Link to="/blog" className="font-medium text-gray-700 hover:text-primary">
            Blog
          </Link>
          <Link to="/contact" className="font-medium text-gray-700 hover:text-primary">
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <a href="tel:+1234567890" className="font-medium text-primary hover:text-primary/90 flex items-center gap-2">
            <Phone size={18} />
            +91 (828) 480-6279
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-primary focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="font-medium text-gray-700 hover:text-primary px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-medium text-gray-700 hover:text-primary px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <button 
              onClick={scrollToPricing}
              className="font-medium text-gray-700 hover:text-primary px-4 text-left"
            >
              Pricing
            </button>
            <Link
              to="/ai-report"
              className="font-medium text-gray-700 hover:text-primary px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Report
            </Link>
            <Link
              to="/plagiarism-report"
              className="font-medium text-gray-700 hover:text-primary px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Plagiarism Report
            </Link>
            <Link
              to="/blog"
              className="font-medium text-gray-700 hover:text-primary px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="font-medium text-gray-700 hover:text-primary px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-4">
              <a href="tel:+1234567890" className="font-medium text-primary hover:text-primary/90 flex items-center gap-2">
                <Phone size={18} />
                +91 (828) 480-6279
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
