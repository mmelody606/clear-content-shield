import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">PlagLab</h3>
          <p className="text-gray-300 mb-4">
            Advanced plagiarism and AI content detection for academic and professional integrity.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" onClick={(e) => handleNavigation(e, '/')} className="text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" onClick={(e) => handleNavigation(e, '/about')} className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/blog" onClick={(e) => handleNavigation(e, '/blog')} className="text-gray-300 hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" onClick={(e) => handleNavigation(e, '/contact')} className="text-gray-300 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
                Plagiarism Checker
            </li>
            <li>
                AI Content Checker
            </li>
            <li>
                Plag and AI Remover
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
