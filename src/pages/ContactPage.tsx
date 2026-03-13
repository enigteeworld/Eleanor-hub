import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.animate-in',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.animate-in',
            start: 'top 85%',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true);
    setFormData({
      name: '',
      email: '',
      organisation: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@eleanorharveycharitabletrust.com',
      href: 'mailto:info@eleanorharveycharitabletrust.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+44 7452 231724',
      href: 'tel:+447452231724',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Shakespeare Martineau\nOne Temple Back, East\nBristol BS1 6DZ',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Monday - Friday\n9:00 AM - 5:00 PM GMT',
    },
  ];

  const enquiryTypes = [
    'General Enquiry',
    'Grant Application',
    'Donation Query',
    'Partnership Opportunity',
    'Press & Media',
    'Other',
  ];

  return (
    <div ref={pageRef} className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center animate-in">
            <span className="eyebrow text-white/60 mb-4 block">CONTACT</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question about grants, 
              want to donate, or simply want to learn more about our work.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="animate-in p-6 bg-white card-rounded shadow-lg text-center"
              >
                <div className="w-14 h-14 bg-[#D14A2A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-[#D14A2A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-[#141414] mb-2">
                  {item.title}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[#6E6E6E] hover:text-[#D14A2A] transition-colors whitespace-pre-line"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-[#6E6E6E] whitespace-pre-line">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div className="animate-in">
              <span className="eyebrow mb-4 block">SEND US A MESSAGE</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] leading-tight mb-6">
                We'd love to hear from you
              </h2>
              <p className="text-lg text-[#6E6E6E] mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#6E6E6E] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full py-3 px-4 bg-[#F6F4EF] rounded-xl border border-transparent focus:border-[#D14A2A] focus:outline-none transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6E6E6E] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full py-3 px-4 bg-[#F6F4EF] rounded-xl border border-transparent focus:border-[#D14A2A] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#6E6E6E] mb-2">
                    Organisation (if applicable)
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full py-3 px-4 bg-[#F6F4EF] rounded-xl border border-transparent focus:border-[#D14A2A] focus:outline-none transition-colors"
                    placeholder="Your organisation name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#6E6E6E] mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full py-3 px-4 bg-[#F6F4EF] rounded-xl border border-transparent focus:border-[#D14A2A] focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    {enquiryTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-[#6E6E6E] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full py-3 px-4 bg-[#F6F4EF] rounded-xl border border-transparent focus:border-[#D14A2A] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>

            {/* Image */}
            <div className="animate-in">
              <div className="card-rounded shadow-xl overflow-hidden h-full">
                <img
                  src="/images/education-training.jpg"
                  alt="Contact us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response Promise */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center animate-in">
            <div className="w-16 h-16 bg-[#A3B18A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check size={32} className="text-[#A3B18A]" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] leading-tight mb-6">
              Our Response Promise
            </h2>
            <p className="text-lg text-[#6E6E6E] mb-8">
              We aim to respond to all enquiries within 5 working days. 
              For grant applications, please allow up to 10 working days 
              for an initial response.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-[#141414]">
                <Check size={20} className="text-[#A3B18A]" />
                <span>General enquiries: 5 working days</span>
              </div>
              <div className="flex items-center gap-2 text-[#141414]">
                <Check size={20} className="text-[#A3B18A]" />
                <span>Grant applications: 10 working days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charity Info */}
      <section className="py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center animate-in">
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-6">
              Registered Charity
            </h2>
            <p className="text-lg text-white/80 mb-8">
              The Eleanor Harvey Charitable Trust is a registered charity in England and Wales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Charity Number</p>
                <p className="text-white font-semibold text-xl">266090</p>
              </div>
              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Established</p>
                <p className="text-white font-semibold text-xl">1974</p>
              </div>
              <div className="text-center">
                <p className="text-white/60 text-sm mb-1">Location</p>
                <p className="text-white font-semibold text-xl">Bristol, UK</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-[#F6F4EF] border-none max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Message Sent!</DialogTitle>
            <DialogDescription className="text-[#6E6E6E]">
              Thank you for reaching out. We've received your message and will 
              get back to you within 5 working days.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactPage;
