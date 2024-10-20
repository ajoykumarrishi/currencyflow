import { FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full py-3 mt-auto bg-gradient-to-r from-orange-100 to-orange-50 border-t border-orange-200">
      <div className="container mx-auto text-center px-4">
        <p className="text-purple-900 font-semibold text-lg">
          © {new Date().getFullYear()} Rishi Ajoykumar. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://x.com/ajoykumarrishi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-900 transition duration-200 flex items-center"
          >
            <FaTwitter className="mr-2" /> Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/rishiajoykumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-900 transition duration-200 flex items-center"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;