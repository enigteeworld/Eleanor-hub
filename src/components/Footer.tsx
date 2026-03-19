import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Causes', path: '/causes' },
    { label: 'Grants', path: '/grants' },
    { label: 'Donate', path: '/donate' },
    { label: 'Contact', path: '/contact' },
  ];

  const resourceLinks = [
    { label: 'Annual Reports', path: '/reports' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Apply for Grant', path: '/grants' },
  ];

  return (
    <footer className="bg-[#0E3A3A] text-[#F6F4EF]">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <h3 className="font-serif text-2xl font-semibold mb-4">
                The Eleanor Harvey Charitable Trust
              </h3>
            </Link>
            <p className="text-[#F6F4EF]/70 mb-6">
              Small grants that open big doors. Supporting grassroots charities 
              and community projects across the UK for over 100 years.
            </p>
            <div className="flex items-center gap-2 text-[#F6F4EF]/60 text-sm">
              <Heart size={16} className="text-[#D14A2A]" />
              <span>Made with care for our communities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#F6F4EF]/70 hover:text-[#D14A2A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#F6F4EF]/70 hover:text-[#D14A2A] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@eleanorharveycharitabletrust.com"
                  className="flex items-center gap-3 text-[#F6F4EF]/70 hover:text-[#D14A2A] transition-colors group"
                >
                  <Mail size={18} />
                  <span className="text-sm">info@eleanorharveycharitabletrust.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+447452231724"
                  className="flex items-center gap-3 text-[#F6F4EF]/70 hover:text-[#D14A2A] transition-colors group"
                >
                  <Phone size={18} />
                  <span className="text-sm">+44 7452 231724</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#F6F4EF]/70">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Shakespeare Martineau<br />
                  One Temple Back, East<br />
                  Bristol BS1 6DZ
                </span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-[#F6F4EF]/10">
              <p className="text-sm text-[#F6F4EF]/50">
                Registered charity<br />
                number 266090
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#F6F4EF]/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#F6F4EF]/50">
              © {currentYear} The Eleanor Harvey Charitable Trust. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-[#F6F4EF]/50 hover:text-[#D14A2A] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-[#F6F4EF]/50 hover:text-[#D14A2A] transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-sm text-[#F6F4EF]/50 hover:text-[#D14A2A] transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
