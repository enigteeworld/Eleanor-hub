import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Church, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedCauseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card = cardRef.current;
    const icon = iconRef.current;
    const text = textRef.current;

    if (!section || !card || !icon || !text) return;

    const ctx = gsap.context(() => {
      // Card animation
      gsap.fromTo(
        card,
        { y: '12vh', opacity: 0 },
        {
          y: 0,
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

      // Icon animation
      gsap.fromTo(
        icon,
        { scale: 0.8, rotate: -10, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
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

      // Text animation
      gsap.fromTo(
        text.children,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
        <div ref={cardRef} className="relative">
          {/* Decorative icon */}
          <div
            ref={iconRef}
            className="absolute -top-6 right-8 lg:right-16 z-10 w-20 h-20 lg:w-28 lg:h-28 bg-[#F6F4EF] rounded-full shadow-lg flex items-center justify-center"
          >
            <Church size={32} className="text-[#D14A2A]" strokeWidth={1.5} />
          </div>

          {/* Main card */}
          <div className="card-rounded bg-white shadow-xl overflow-hidden">
            {/* Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
              <img
                src="/images/featured-church.jpg"
                alt="Christian community"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div ref={textRef} className="p-8 lg:p-12">
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#141414] mb-4">
                Christian Community Grants
              </h3>
              <p className="text-lg text-[#6E6E6E] max-w-2xl mb-8">
                We partner with churches and faith groups to provide practical 
                help—food, shelter, pastoral care, and pathways back into community life.
              </p>
              <button onClick={scrollToApply} className="btn-primary">
                Apply now
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCauseSection;
