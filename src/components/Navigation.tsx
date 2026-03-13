import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsAboutDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { 
      label: 'About', 
      path: '/about',
      dropdown: [
        { label: 'Our Story', path: '/about' },
        { label: 'Trustees', path: '/about#trustees' },
        { label: 'Annual Reports', path: '/reports' },
        { label: 'FAQs', path: '/faqs' },
      ]
    },
    { label: 'Our Causes', path: '/causes' },
    { label: 'Grants', path: '/grants' },
    { label: 'Donate', path: '/donate' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-[#F6F4EF]/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className={`font-serif text-lg sm:text-xl font-semibold transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'text-[#141414] hover:text-[#D14A2A]'
                  : 'text-white hover:text-[#D14A2A]'
              }`}
            >
              The Eleanor Harvey Charitable Trust
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.path} className="relative">
                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsAboutDropdownOpen(true)}
                      onMouseLeave={() => setIsAboutDropdownOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                          isScrolled || location.pathname !== '/'
                            ? 'text-[#141414]/80 hover:text-[#D14A2A]'
                            : 'text-white/90 hover:text-[#D14A2A]'
                        } ${isActive(link.path) ? 'text-[#D14A2A]' : ''}`}
                      >
                        {link.label}
                        <ChevronDown size={14} />
                      </button>
                      
                      {/* Dropdown */}
                      {isAboutDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block px-4 py-2 text-sm text-[#141414] hover:bg-[#F6F4EF] hover:text-[#D14A2A] transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors ${
                        isScrolled || location.pathname !== '/'
                          ? 'text-[#141414]/80 hover:text-[#D14A2A]'
                          : 'text-white/90 hover:text-[#D14A2A]'
                      } ${isActive(link.path) ? 'text-[#D14A2A]' : ''}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/grants"
                className="btn-primary text-sm"
              >
                Apply for a grant
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${
                isScrolled || location.pathname !== '/'
                  ? 'text-[#141414]'
                  : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#F6F4EF] transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 pt-20">
          {navLinks.map((link) => (
            <div key={link.path} className="text-center">
              {link.dropdown ? (
                <>
                  <span className="font-serif text-xl text-[#141414]">
                    {link.label}
                  </span>
                  <div className="mt-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block text-sm text-[#6E6E6E] hover:text-[#D14A2A] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className="font-serif text-2xl text-[#141414] hover:text-[#D14A2A] transition-colors"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link to="/grants" className="btn-primary mt-4">
            Apply for a grant
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
