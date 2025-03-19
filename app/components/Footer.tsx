// app/components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-900 border-t">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Footer Links
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;