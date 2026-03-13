import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const stripsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const strips = stripsRef.current;
    const text = textRef.current;

    if (!section || !bg || !strips || !text) return;

    const ctx = gsap.context(() => {
      // Auto-play entrance animation
      const tl = gsap.timeline();

      // Background entrance
      tl.fromTo(
        bg,
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
        0
      );

      // Strips entrance
      const stripElements = strips.querySelectorAll('.hero-strip');
      tl.fromTo(
        stripElements,
        { y: '12vh', scale: 0.96, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out',
        },
        0.2
      );

      // Text entrance
      tl.fromTo(
        text.children,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
        },
        0.6
      );

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset elements when scrolling back to top
            gsap.set(bg, { opacity: 1, scale: 1 });
            gsap.set(stripElements, { y: 0, scale: 1, opacity: 1 });
            gsap.set(text.children, { y: 0, opacity: 1 });
          },
        },
      });

      // Exit animations (70% - 100%)
      scrollTl.fromTo(
        stripElements,
        { y: 0, scale: 1, opacity: 1 },
        { y: '-18vh', scale: 0.98, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        text.children,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        bg,
        { scale: 1, opacity: 1 },
        { scale: 1.06, opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stripImages = [
    '/images/hero-strip-1.jpg',
    '/images/hero-strip-2.jpg',
    '/images/hero-strip-3.jpg',
    '/images/hero-strip-4.jpg',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden z-10"
    >
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0 }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Collage strips */}
      <div
        ref={stripsRef}
        className="absolute inset-0 flex items-center justify-center gap-4 px-4 sm:px-8"
      >
        {stripImages.map((src, index) => (
          <div
            key={index}
            className="hero-strip hidden sm:block relative h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
            style={{
              width: index === 3 ? '20vw' : '16vw',
              opacity: 0,
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <img
              src={src}
              alt={`Community member ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Mobile single image */}
        <div className="sm:hidden absolute inset-0">
          <img
            src="/images/hero-strip-1.jpg"
            alt="Community"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      </div>

      {/* Text content */}
      <div
        ref={textRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <span className="eyebrow text-white/80 mb-4">RAISING HOPE</span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white max-w-4xl leading-[0.95] mb-6">
          Small grants that open big doors.
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-10">
          We fund grassroots charities and community projects across the UK.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => scrollToSection('apply')}
            className="btn-primary"
          >
            Apply for a grant
          </button>
          <button
            onClick={() => scrollToSection('causes')}
            className="inline-flex items-center gap-2 text-white font-medium hover:text-[#D14A2A] transition-colors"
          >
            Learn about our causes
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
