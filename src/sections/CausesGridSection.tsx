import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Church, GraduationCap, Heart, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const causes = [
  {
    icon: Church,
    title: 'Christian Community Grants',
    description: 'Supporting churches and faith-led outreach.',
    image: '/images/featured-church.jpg',
  },
  {
    icon: GraduationCap,
    title: 'Education & Training',
    description: 'Helping people access skills and opportunity.',
    image: '/images/causes-education.jpg',
  },
  {
    icon: Heart,
    title: 'Health & Wellbeing',
    description: 'Grassroots projects that improve daily life.',
    image: '/images/causes-health.jpg',
  },
  {
    icon: Users,
    title: 'Community Resilience',
    description: 'Local networks that strengthen neighbourhoods.',
    image: '/images/causes-community.jpg',
  },
];

const CausesGridSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;

    if (!section || !heading || !cards) return;

    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        heading.children,
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

      // Cards animation
      const cardElements = cards.querySelectorAll('.cause-card');
      gsap.fromTo(
        cardElements,
        { y: '10vh', scale: 0.98, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cards,
            start: 'top 85%',
            end: 'top 40%',
            scrub: true,
          },
        }
      );

      // Parallax on card images
      cardElements.forEach((card) => {
        const img = card.querySelector('img');
        if (img) {
          gsap.fromTo(
            img,
            { y: -12 },
            {
              y: 12,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
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
      id="causes"
      className="relative py-24 lg:py-32 bg-[#F6F4EF] z-20"
    >
      <div className="section-padding">
        {/* Heading */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mb-4 block">OUR CAUSES</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight">
            Apply to charity causes around the UK
          </h2>
        </div>

        {/* Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {causes.map((cause, index) => (
            <div
              key={index}
              className="cause-card group card-rounded bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <cause.icon
                  size={28}
                  className="absolute bottom-4 left-4 text-white"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#141414] mb-2">
                  {cause.title}
                </h3>
                <p className="text-sm text-[#6E6E6E]">{cause.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CausesGridSection;
