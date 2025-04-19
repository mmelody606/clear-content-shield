
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ContentShield</h3>
          <p className="text-gray-300 mb-4">
            Advanced plagiarism and AI content detection for academic and professional integrity.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-gray-300 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">
                Plagiarism Checker
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">
                AI Content Detector
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">
                Content Revision
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/terms" className="text-gray-300 hover:text-white">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/disclaimer" className="text-gray-300 hover:text-white">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link to="/refund" className="text-gray-300 hover:text-white">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} ContentShield. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
