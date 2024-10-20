import { FaTwitter, FaLinkedin } from 'react-icons/fa';

function FooterComponent() {
  return (
    <footer className="py-3 mt-0">
      <div className="container mx-auto text-center">
        <p className="text-purple-900 font-semibold text-lg">
          © {new Date().getFullYear()} Rishi Ajoykumar. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:text-purple-900 transition duration-200 flex items-center"
          >
            <FaTwitter className="mr-2" /> Twitter
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-handle"
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

export default FooterComponent;