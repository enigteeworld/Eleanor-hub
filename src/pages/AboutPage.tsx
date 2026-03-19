import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Target, Users, Award, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

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

  const trustees = [
    {
      name: 'Eleanor Alice',
      role: 'Founder & Chair',
      bio: 'Established the trust in 1925 with a vision to support local communities.',
    },
    {
      name: 'Gregg Latchams',
      role: 'WRH Executor',
      bio: 'Brings 30 years of experience in charity governance and community development.',
    },
    
    
    {
      name: 'Matthew Thurlon',
      role: 'Trustee',
      bio: 'Former social worker dedicated to improving community wellbeing.',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We believe in the inherent dignity of every person and seek to alleviate suffering where we can.',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We focus on measurable outcomes and support projects that create lasting change.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We believe strong communities are built from the ground up, by the people who live in them.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with transparency, accountability, and the highest ethical standards.',
    },
  ];

  const timeline = [
    {
      year: '1925',
      title: 'Foundation',
      description: 'Eleanor Harvey establishes the trust with an initial endowment.',
    },
    {
      year: '1985',
      title: 'First Major Grant',
      description: 'Awarded £50,000 to support youth education programmes in Bristol.',
    },
    {
      year: '1998',
      title: 'Expansion',
      description: 'Extended funding reach to include community health initiatives.',
    },
    {
      year: '2010',
      title: 'Digital Transformation',
      description: 'Launched online application process to improve accessibility.',
    },
    {
      year: '2024',
      title: '50th Anniversary',
      description: 'Celebrated 100 years of supporting communities across the UK.',
    },
  ];

  return (
    <div ref={pageRef} className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center animate-in">
            <span className="eyebrow text-white/60 mb-4 block">ABOUT US</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Our Story
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              For over 100 years, The Eleanor Harvey Charitable Trust has been 
              making a difference in communities across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="animate-in">
              <span className="eyebrow mb-4 block">OUR MISSION</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] leading-tight mb-6">
                Supporting communities, changing lives
              </h2>
              <p className="text-lg text-[#6E6E6E] leading-relaxed mb-6">
                The Eleanor Harvey Charitable Trust supports humanitarian efforts 
                throughout the UK. We are a private, family trust that promotes 
                humanitarian efforts all throughout the world.
              </p>
              <p className="text-lg text-[#6E6E6E] leading-relaxed">
                Our vision is for a future where everyone can fully engage and 
                is healthy, creative, and self-sustaining.
              </p>
            </div>
            <div className="animate-in">
              <div className="card-rounded shadow-xl overflow-hidden h-full">
                <img
                  src="/images/contact-team.jpg"
                  alt="Our team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
            <span className="eyebrow mb-4 block">OUR VALUES</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight">
              What guides our work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="animate-in text-center p-8 bg-[#F6F4EF] card-rounded"
              >
                <div className="w-16 h-16 bg-[#D14A2A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={28} className="text-[#D14A2A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-[#141414] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6E6E6E]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
            <span className="eyebrow mb-4 block">OUR HISTORY</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight">
              100 years of giving
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="animate-in flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="font-serif text-2xl text-[#D14A2A] font-semibold">
                    {item.year}
                  </span>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-[#D14A2A] rounded-full" />
                  {index !== timeline.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-0.5 h-full bg-[#D14A2A]/30" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-serif text-xl text-[#141414] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#6E6E6E]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustees Section */}
      <section id="trustees" className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
            <span className="eyebrow mb-4 block">GOVERNANCE</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-6">
              Our Trustees
            </h2>
            <p className="text-lg text-[#6E6E6E]">
              The trust is governed by a board of dedicated trustees who ensure 
              our funds are used effectively and responsibly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee, index) => (
              <div
                key={index}
                className="animate-in p-8 bg-[#F6F4EF] card-rounded text-center"
              >
                <div className="w-20 h-20 bg-[#0E3A3A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users size={32} className="text-[#0E3A3A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-[#141414] mb-1">
                  {trustee.name}
                </h3>
                <p className="text-[#D14A2A] text-sm font-medium mb-4">
                  {trustee.role}
                </p>
                <p className="text-sm text-[#6E6E6E]">{trustee.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className="py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-in text-center">
              <Calendar size={32} className="text-[#D14A2A] mx-auto mb-4" />
              <h3 className="font-serif text-xl text-white mb-2">Established</h3>
              <p className="text-white/70">1974</p>
            </div>
            <div className="animate-in text-center">
              <Award size={32} className="text-[#D14A2A] mx-auto mb-4" />
              <h3 className="font-serif text-xl text-white mb-2">Charity Number</h3>
              <p className="text-white/70">266090</p>
            </div>
            <div className="animate-in text-center">
              <MapPin size={32} className="text-[#D14A2A] mx-auto mb-4" />
              <h3 className="font-serif text-xl text-white mb-2">Location</h3>
              <p className="text-white/70">Bristol, UK</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
