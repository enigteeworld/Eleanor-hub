import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HandHeart, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    icon: HandHeart,
    title: 'What we fund',
    description:
      'We fund small, local organisations with clear outcomes—charities, community groups, and faith-led projects that serve people in need.',
    color: '#A3B18A',
  },
  {
    icon: Users,
    title: 'Who we partner with',
    description:
      'We collaborate with organisations that help people of all backgrounds. We do not discriminate on religion, but we do look for integrity, transparency, and measurable impact.',
    color: '#0E3A3A',
  },
];

const WhatWeFundSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    const ctx = gsap.context(() => {
      const cardElements = cards.querySelectorAll('.principle-card');

      cardElements.forEach((card, index) => {
        const direction = index === 0 ? '-8vw' : '8vw';

        gsap.fromTo(
          card,
          { x: direction, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 50%',
              scrub: true,
            },
          }
        );

        // Icon animation
        const icon = card.querySelector('.principle-icon');
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 75%',
                end: 'top 50%',
                scrub: true,
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#F6F4EF] z-20"
    >
      <div className="section-padding">
        <div ref={cardsRef} className="space-y-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`principle-card card-rounded overflow-hidden shadow-lg ${
                index === 1 ? 'lg:ml-16' : ''
              }`}
            >
              {/* Color band */}
              <div
                className="h-24 flex items-center justify-center"
                style={{ backgroundColor: principle.color }}
              >
                <div className="principle-icon w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <principle.icon
                    size={32}
                    className="text-white"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 bg-white">
                <h3 className="font-serif text-2xl lg:text-3xl text-[#141414] mb-4">
                  {principle.title}
                </h3>
                <p className="text-lg text-[#6E6E6E] leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeFundSection;
