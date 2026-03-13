import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, FileText, ArrowRight, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: '', message: '' });

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const card = cardRef.current;

    if (!section || !bg || !card) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.6,
        },
      });

      // Background entrance
      scrollTl.fromTo(
        bg,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, ease: 'none' },
        0
      );

      // Card entrance
      scrollTl.fromTo(
        card,
        { y: '18vh', scale: 0.98, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, ease: 'power2.out' },
        0
      );

      // Exit animations
      scrollTl.fromTo(
        bg,
        { scale: 1, opacity: 1 },
        { scale: 1.05, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        card,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleDownload = () => {
    setDialogContent({
      title: 'Download Guidance',
      message: 'Our application guidance document will be available for download soon. Please contact us directly for now.'
    });
    setShowDialog(true);
  };

  const handleApply = () => {
    setDialogContent({
      title: 'Start Your Application',
      message: 'To apply for a grant, please email us at info@eleanorharveycharitabletrust.com with details about your organisation and project.'
    });
    setShowDialog(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full h-screen overflow-hidden z-30"
    >
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0 }}
      >
        <img
          src="/images/contact-team.jpg"
          alt="Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0c1e1e]/55" />
      </div>

      {/* Contact card */}
      <div
        ref={cardRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-4xl"
        style={{ opacity: 0 }}
      >
        <div className="bg-[#F6F4EF]/96 backdrop-blur-sm card-rounded p-8 lg:p-12 shadow-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] text-center mb-10">
            Get in touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Contact info */}
            <div className="space-y-6">
              <a
                href="mailto:info@eleanorharveycharitabletrust.com"
                className="flex items-center gap-4 text-[#141414] hover:text-[#D14A2A] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#A3B18A]/20 rounded-full flex items-center justify-center group-hover:bg-[#D14A2A]/20 transition-colors">
                  <Mail size={20} className="text-[#A3B18A] group-hover:text-[#D14A2A]" />
                </div>
                <div>
                  <p className="text-sm text-[#6E6E6E]">Email</p>
                  <p className="text-sm font-medium">info@eleanorharveycharitabletrust.com</p>
                </div>
              </a>

              <a
                href="tel:+447452231724"
                className="flex items-center gap-4 text-[#141414] hover:text-[#D14A2A] transition-colors group"
              >
                <div className="w-12 h-12 bg-[#A3B18A]/20 rounded-full flex items-center justify-center group-hover:bg-[#D14A2A]/20 transition-colors">
                  <Phone size={20} className="text-[#A3B18A] group-hover:text-[#D14A2A]" />
                </div>
                <div>
                  <p className="text-sm text-[#6E6E6E]">Phone</p>
                  <p className="text-sm font-medium">+44 7452 231724</p>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-[#141414]">
                <div className="w-12 h-12 bg-[#A3B18A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-[#A3B18A]" />
                </div>
                <div>
                  <p className="text-sm text-[#6E6E6E]">Address</p>
                  <p className="text-sm">
                    Shakespeare Martineau<br />
                    One Temple Back, East<br />
                    Bristol BS1 6DZ
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-[#141414]">
                <div className="w-12 h-12 bg-[#0E3A3A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FileText size={20} className="text-[#0E3A3A]" />
                </div>
                <div>
                  <p className="text-sm text-[#6E6E6E]">Charity Number</p>
                  <p className="text-sm font-medium">266090</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={handleApply} className="btn-primary w-full sm:w-auto">
              Apply for a grant
              <Send size={18} className="ml-2" />
            </button>
            <button 
              onClick={handleDownload}
              className="btn-secondary w-full sm:w-auto"
            >
              Download guidance
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-[#F6F4EF] border-none">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{dialogContent.title}</DialogTitle>
            <DialogDescription className="text-[#6E6E6E]">
              {dialogContent.message}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
