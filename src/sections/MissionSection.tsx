import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Globe, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const MissionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ornament1Ref = useRef<HTMLDivElement>(null);
  const ornament2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const ornament1 = ornament1Ref.current;
    const ornament2 = ornament2Ref.current;

    if (!section || !content || !ornament1 || !ornament2) return;

    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        content.children,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );

      // Ornament animations
      gsap.fromTo(
        ornament1,
        { scale: 0.9, rotate: -6, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ornament2,
        { scale: 0.9, rotate: 6, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 0.15,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#F6F4EF] z-20 overflow-hidden"
    >
      {/* Decorative ornaments */}
      <div
        ref={ornament1Ref}
        className="absolute top-20 left-[10vw] text-[#0E3A3A]"
      >
        <Heart size={80} strokeWidth={1} />
      </div>
      <div
        ref={ornament2Ref}
        className="absolute bottom-20 right-[10vw] text-[#0E3A3A]"
      >
        <Globe size={80} strokeWidth={1} />
      </div>

      <div className="section-padding">
        <div
          ref={contentRef}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-8">
            Our Mission
          </h2>
          <p className="text-lg lg:text-xl text-[#6E6E6E] leading-relaxed mb-10">
            The Eleanor Harvey Charitable Trust supports humanitarian efforts 
            throughout the UK. In the world we envision, everyone will be able 
            to participate fully, be healthy, creative, and self-sufficient.
          </p>
          <button className="inline-flex items-center gap-2 text-[#D14A2A] font-medium hover:gap-3 transition-all">
            See our annual review
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
