export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-synthwave-pink/20 bg-synthwave-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Meta Modern Monkey. All rights reserved.
          </p>
          <a
            href="mailto:support@metamodernmonkey.com"
            className="text-synthwave-cyan hover:text-synthwave-pink transition-colors duration-300 text-sm"
          >
            support@metamodernmonkey.com
          </a>
        </div>
      </div>
    </footer>
  );
}

