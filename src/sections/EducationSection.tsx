import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const band = bandRef.current;
    const icon = iconRef.current;

    if (!section || !card || !band || !icon) return;

    const ctx = gsap.context(() => {
      // Card animation
      gsap.fromTo(
        card,
        { y: '10vh', scale: 0.98, opacity: 0 },
        {
          y: 0,
          scale: 1,
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

      // Band wipe animation
      gsap.fromTo(
        band,
        { y: '100%' },
        {
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );

      // Icon animation
      gsap.fromTo(
        icon,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            end: 'top 35%',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToApply = () => {
    const element = document.getElementById('apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#F6F4EF] z-20"
    >
      <div className="section-padding">
        <div ref={cardRef} className="relative card-rounded overflow-hidden shadow-xl">
          {/* Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src="/images/education-training.jpg"
              alt="Education and training"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Bottom band */}
          <div className="relative overflow-hidden">
            <div
              ref={bandRef}
              className="bg-[#D14A2A] p-8 lg:p-10"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="text-white">
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-3">
                    Education & Training
                  </h3>
                  <p className="text-white/90 max-w-2xl">
                    We support projects that improve access to learning—especially 
                    for people facing barriers due to poverty, location, or circumstance.
                  </p>
                </div>
                <button
                  onClick={scrollToApply}
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#D14A2A] font-medium rounded-full hover:bg-[#F6F4EF] transition-colors flex-shrink-0"
                >
                  Apply now
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </div>

            {/* Floating icon */}
            <div
              ref={iconRef}
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#F6F4EF] rounded-full shadow-lg flex items-center justify-center"
            >
              <GraduationCap size={32} className="text-[#D14A2A]" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
