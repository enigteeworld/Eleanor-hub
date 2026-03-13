import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Check, 
  FileText, 
  Clock, 
  PoundSterling, 
  Users, 
  ArrowRight,
  Mail,
  Phone,
  HelpCircle,
  Send
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const GrantsPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', message: '' });

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

  const grantTypes = [
    {
      icon: PoundSterling,
      title: 'Small Grants',
      range: '£500 - £2,000',
      description: 'For small projects and one-off initiatives with immediate community impact.',
      timeline: '4-6 weeks',
    },
    {
      icon: Users,
      title: 'Medium Grants',
      range: '£2,000 - £5,000',
      description: 'For established programmes and multi-phase community projects.',
      timeline: '6-8 weeks',
    },
    {
      icon: FileText,
      title: 'Project Grants',
      range: 'Up to £10,000',
      description: 'For larger initiatives with significant community reach and measurable outcomes.',
      timeline: '8-10 weeks',
    },
  ];

  const applicationSteps = [
    {
      number: '01',
      title: 'Initial Contact',
      description: 'Send us an email with a brief overview of your organisation and project.',
    },
    {
      number: '02',
      title: 'Proposal Review',
      description: 'Our trustees review your proposal against our funding criteria.',
    },
    {
      number: '03',
      title: 'Due Diligence',
      description: 'We may request additional information or arrange a site visit.',
    },
    {
      number: '04',
      title: 'Decision',
      description: 'You will receive a decision within the stated timeline for your grant type.',
    },
  ];

  const requiredDocuments = [
    'Registered charity or CIC number',
    'Most recent annual accounts',
    'Trustee/board member list',
    'Project budget breakdown',
    'Evidence of community need',
  ];

  const faqs = [
    {
      question: 'How long does the application process take?',
      answer: 'The timeline varies by grant type: Small grants (4-6 weeks), Medium grants (6-8 weeks), and Project grants (8-10 weeks).',
    },
    {
      question: 'Can we apply for multiple grants?',
      answer: 'Organisations can hold one active grant at a time. You may apply for a new grant 12 months after your previous grant was awarded.',
    },
    {
      question: 'What are the reporting requirements?',
      answer: 'Grantees must submit a brief progress report at 6 months and a final report upon project completion.',
    },
    {
      question: 'Do you fund individuals?',
      answer: 'No, we only fund UK-registered charities and Community Interest Companies (CICs).',
    },
  ];

  const handleApplyClick = () => {
    setDialogContent({
      title: 'Start Your Application',
      message: 'To apply for a grant, please email us at info@eleanorharveycharitabletrust.com with:\n\n1. Your organisation name and charity number\n2. A brief description of your project\n3. The amount you are requesting\n4. How the funds will be used\n\nWe will respond within 5 working days to discuss your application.'
    });
    setShowDialog(true);
  };

  return (
    <div ref={pageRef} className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center animate-in">
            <span className="eyebrow text-white/60 mb-4 block">GRANTS</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Apply for Funding
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto mb-10">
              We offer grants ranging from £500 to £10,000 to support grassroots 
              charities and community projects across the UK.
            </p>
            <button 
              onClick={handleApplyClick}
              className="btn-primary"
            >
              Start your application
              <Send size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Grant Types */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
            <span className="eyebrow mb-4 block">GRANT TYPES</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight">
              Find the right grant for your project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grantTypes.map((grant, index) => (
              <div
                key={index}
                className="animate-in p-8 bg-white card-rounded shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#D14A2A]/10 rounded-full flex items-center justify-center mb-6">
                  <grant.icon size={28} className="text-[#D14A2A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-[#141414] mb-2">
                  {grant.title}
                </h3>
                <p className="text-[#D14A2A] font-semibold mb-4">
                  {grant.range}
                </p>
                <p className="text-[#6E6E6E] mb-6">
                  {grant.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-[#6E6E6E]">
                  <Clock size={16} />
                  <span>Decision: {grant.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
            <span className="eyebrow mb-4 block">APPLICATION PROCESS</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-6">
              How it works
            </h2>
            <p className="text-lg text-[#6E6E6E]">
              Our straightforward application process is designed to be accessible 
              while ensuring responsible stewardship of funds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationSteps.map((step, index) => (
              <div key={index} className="animate-in relative">
                <span className="font-serif text-6xl text-[#D14A2A]/20 font-bold">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl text-[#141414] mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6E6E6E]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-in">
              <span className="eyebrow mb-4 block">REQUIREMENTS</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] leading-tight mb-6">
                What you'll need
              </h2>
              <p className="text-lg text-[#6E6E6E] leading-relaxed mb-8">
                To help us assess your application, please have the following 
                information ready when you contact us.
              </p>
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#A3B18A]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-[#A3B18A]" />
                    </div>
                    <span className="text-[#141414]">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-in">
              <div className="card-rounded shadow-xl overflow-hidden">
                <img
                  src="/images/who-we-are.jpg"
                  alt="Application requirements"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
            <span className="eyebrow mb-4 block">FAQs</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-6">
              Common questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="animate-in p-6 bg-[#F6F4EF] card-rounded"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle size={24} className="text-[#D14A2A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-serif text-lg text-[#141414] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-[#6E6E6E]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 text-[#D14A2A] font-medium hover:gap-3 transition-all"
            >
              View all FAQs
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center animate-in">
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-6">
              Have questions?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Our team is here to help. Reach out to discuss your project 
              before applying.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:info@eleanorharveycharitabletrust.com"
                className="inline-flex items-center gap-3 text-white hover:text-[#D14A2A] transition-colors"
              >
                <Mail size={20} />
                <span>info@eleanorharveycharitabletrust.com</span>
              </a>
              <a
                href="tel:+447452231724"
                className="inline-flex items-center gap-3 text-white hover:text-[#D14A2A] transition-colors"
              >
                <Phone size={20} />
                <span>+44 7452 231724</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-24 lg:py-32 bg-[#D14A2A]">
        <div className="section-padding text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to apply?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Take the first step towards securing funding for your community project.
          </p>
          <button 
            onClick={handleApplyClick}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#D14A2A] font-medium rounded-full hover:bg-[#F6F4EF] transition-colors"
          >
            Start your application
            <Send size={18} className="ml-2" />
          </button>
        </div>
      </section>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-[#F6F4EF] border-none max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{dialogContent.title}</DialogTitle>
            <DialogDescription className="text-[#6E6E6E] whitespace-pre-line">
              {dialogContent.message}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GrantsPage;
