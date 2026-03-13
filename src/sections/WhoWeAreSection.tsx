import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhoWeAreSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;
    const caption = captionRef.current;

    if (!section || !text || !image || !caption) return;

    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(
        text.children,
        { x: '-6vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 35%',
            scrub: true,
          },
        }
      );

      // Image animation
      gsap.fromTo(
        image,
        { x: '6vw', rotate: 1.5, opacity: 0 },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 35%',
            scrub: true,
          },
        }
      );

      // Caption animation
      gsap.fromTo(
        caption,
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            end: 'top 30%',
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
      className="relative py-24 lg:py-32 bg-[#F6F4EF] z-20"
    >
      <div className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div ref={textRef} className="order-2 lg:order-1">
            <span className="eyebrow mb-4 block">WHO WE ARE</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-6">
              A small trust with a long memory.
            </h2>
            <p className="text-lg text-[#6E6E6E] leading-relaxed mb-8">
              We've been making modest, targeted grants for over 50 years—supporting 
              local charities, faith groups, and community projects that help people 
              find stability and purpose.
            </p>
            <button className="inline-flex items-center gap-2 text-[#D14A2A] font-medium hover:gap-3 transition-all">
              Read our story
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Image */}
          <div ref={imageRef} className="order-1 lg:order-2">
            <div className="card-rounded shadow-xl overflow-hidden">
              <img
                src="/images/who-we-are.jpg"
                alt="Community volunteer with child"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <p
              ref={captionRef}
              className="mt-4 text-sm text-[#6E6E6E] text-center italic"
            >
              "Community-led change starts with trust."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
