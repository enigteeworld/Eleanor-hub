import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  'Small grants (typically £500–£5,000)',
  'Open to UK-registered charities and CICs',
  'We prioritise grassroots, community-led work',
];

const ApplySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    const rule = ruleRef.current;

    if (!section || !image || !text || !rule) return;

    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        image,
        { x: '-10vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );

      // Text animation
      gsap.fromTo(
        text.children,
        { x: '10vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );

      // Accent rule animation
      gsap.fromTo(
        rule,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="apply"
      className="relative py-24 lg:py-32 bg-[#F6F4EF] z-20"
    >
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div ref={imageRef}>
            <div className="card-rounded shadow-xl overflow-hidden">
              <img
                src="/images/apply-team.jpg"
                alt="Team collaborating"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div ref={textRef}>
            {/* Accent rule */}
            <div
              ref={ruleRef}
              className="w-16 h-1 bg-[#D14A2A] mb-6 origin-left"
            />

            <span className="eyebrow mb-4 block">APPLY FOR FUNDING</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-6">
              No forms. Just a conversation.
            </h2>
            <p className="text-lg text-[#6E6E6E] leading-relaxed mb-8">
              Tell us what you're trying to achieve. We'll ask a few questions, 
              review your proposal, and respond within a few weeks.
            </p>

            {/* Benefits list */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#A3B18A]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-[#A3B18A]" />
                  </div>
                  <span className="text-[#141414]">{benefit}</span>
                </li>
              ))}
            </ul>

            <button onClick={scrollToContact} className="btn-primary">
              Start an application
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;
