import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FAQsPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqCategories = [
    {
      category: 'Grant Applications',
      faqs: [
        {
          question: 'Who can apply for a grant?',
          answer: 'We fund UK-registered charities and Community Interest Companies (CICs) with a clear community benefit. Unfortunately, we cannot fund individuals, businesses, or organisations outside the UK.',
        },
        {
          question: 'What is the typical grant size?',
          answer: 'Our grants typically range from £500 to £10,000. Small grants (£500-£2,000) are for one-off projects, medium grants (£2,000-£5,000) for established programmes, and project grants (up to £10,000) for larger initiatives.',
        },
        {
          question: 'How long does the application process take?',
          answer: 'The timeline varies by grant type: Small grants (4-6 weeks), Medium grants (6-8 weeks), and Project grants (8-10 weeks). This includes initial review, due diligence, and trustee decision.',
        },
        {
          question: 'Can we apply for multiple grants?',
          answer: 'Organisations can hold one active grant at a time. You may apply for a new grant 12 months after your previous grant was awarded.',
        },
        {
          question: 'What are the reporting requirements?',
          answer: 'Grantees must submit a brief progress report at 6 months and a final report upon project completion. Reports should include how funds were used and the impact achieved.',
        },
      ],
    },
    {
      category: 'Eligibility',
      faqs: [
        {
          question: 'Do you fund religious organisations?',
          answer: 'Yes, we fund faith-based organisations including churches, provided their projects have a clear community benefit that extends beyond their congregation. We do not fund purely religious activities.',
        },
        {
          question: 'Can new charities apply?',
          answer: 'Yes, new charities can apply. However, you must be a registered charity or CIC with a bank account in the organisation\'s name. We may request additional information for newer organisations.',
        },
        {
          question: 'Do you fund projects outside the UK?',
          answer: 'No, we only fund projects based in the United Kingdom. Our focus is on supporting communities within the UK.',
        },
        {
          question: 'Can we apply for core funding?',
          answer: 'We primarily fund project-specific costs rather than core organisational funding. However, we may consider a portion of administrative costs as part of a project budget.',
        },
      ],
    },
    {
      category: 'Donations',
      faqs: [
        {
          question: 'How can I make a donation?',
          answer: 'You can make a donation via bank transfer, cheque, or by contacting us directly. We are also working on setting up online donation facilities. Please email us for donation details.',
        },
        {
          question: 'Is my donation tax-deductible?',
          answer: 'Yes, as a registered charity (266090), all donations are eligible for Gift Aid if you are a UK taxpayer. This means we can claim an additional 25p for every £1 you donate.',
        },
        {
          question: 'Can I leave a legacy in my will?',
          answer: 'Yes, legacy gifts are a wonderful way to support our work for future generations. Please contact us to discuss how to include The Eleanor Harvey Charitable Trust in your will.',
        },
        {
          question: 'How is my donation used?',
          answer: '100% of your donation goes directly to supporting community projects. Our administrative costs are kept below 5% and are covered separately by the trust\'s endowment.',
        },
      ],
    },
    {
      category: 'General',
      faqs: [
        {
          question: 'When was the trust established?',
          answer: 'The Eleanor Harvey Charitable Trust was established in 1974 by Eleanor Harvey with a vision to support local communities across the UK.',
        },
        {
          question: 'How are trustees appointed?',
          answer: 'Trustees are appointed based on their expertise, commitment to the trust\'s mission, and ability to contribute to governance. The board includes representatives with backgrounds in charity governance, finance, and community work.',
        },
        {
          question: 'How can I contact the trust?',
          answer: 'You can reach us by email at info@eleanorharveycharitabletrust.com or by phone at +44 7452 231724. Our office hours are Monday to Friday, 9:00 AM to 5:00 PM GMT.',
        },
        {
          question: 'Where can I find your annual reports?',
          answer: 'Our annual reports and financial statements are available on the Annual Reports page of this website. You can also request a copy by emailing us.',
        },
      ],
    },
  ];

  return (
    <div ref={pageRef} className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center animate-in">
            <span className="eyebrow text-white/60 mb-4 block">HELP</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              Find answers to common questions about our grants, donations, 
              and how we work.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16 last:mb-0">
                <h2 className="animate-in font-serif text-2xl sm:text-3xl text-[#141414] mb-8">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    const isOpen = openIndex === globalIndex;
                    
                    return (
                      <div
                        key={faqIndex}
                        className="animate-in bg-white card-rounded shadow-sm overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-[#F6F4EF]/50 transition-colors"
                        >
                          <span className="font-medium text-[#141414] pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            size={20}
                            className={`text-[#D14A2A] flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <p className="text-[#6E6E6E] leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center animate-in">
            <div className="w-16 h-16 bg-[#D14A2A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle size={32} className="text-[#D14A2A]" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] leading-tight mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-[#6E6E6E] mb-8">
              Can't find the answer you're looking for? Please reach out to our team 
              and we'll be happy to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Contact us
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <a
                href="mailto:info@eleanorharveycharitabletrust.com"
                className="inline-flex items-center gap-2 text-[#D14A2A] font-medium"
              >
                Email us directly
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-in">
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-6">
              Quick Links
            </h2>
            <p className="text-lg text-white/80">
              Find more information on these pages
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link
              to="/grants"
              className="animate-in p-6 bg-white/10 card-rounded text-center hover:bg-white/20 transition-colors"
            >
              <HelpCircle size={28} className="text-[#D14A2A] mx-auto mb-4" />
              <h3 className="font-serif text-lg text-white mb-2">
                Grants
              </h3>
              <p className="text-sm text-white/70">
                Learn about applying for funding
              </p>
            </Link>
            <Link
              to="/donate"
              className="animate-in p-6 bg-white/10 card-rounded text-center hover:bg-white/20 transition-colors"
            >
              <HelpCircle size={28} className="text-[#D14A2A] mx-auto mb-4" />
              <h3 className="font-serif text-lg text-white mb-2">
                Donate
              </h3>
              <p className="text-sm text-white/70">
                Support our work
              </p>
            </Link>
            <Link
              to="/about"
              className="animate-in p-6 bg-white/10 card-rounded text-center hover:bg-white/20 transition-colors"
            >
              <HelpCircle size={28} className="text-[#D14A2A] mx-auto mb-4" />
              <h3 className="font-serif text-lg text-white mb-2">
                About Us
              </h3>
              <p className="text-sm text-white/70">
                Learn about our history
              </p>
            </Link>
            <Link
              to="/reports"
              className="animate-in p-6 bg-white/10 card-rounded text-center hover:bg-white/20 transition-colors"
            >
              <HelpCircle size={28} className="text-[#D14A2A] mx-auto mb-4" />
              <h3 className="font-serif text-lg text-white mb-2">
                Reports
              </h3>
              <p className="text-sm text-white/70">
                View our annual reports
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
