import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Church, GraduationCap, Heart, Users, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        '.hero-content > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
        }
      );

      // Stats counter animation
      const statElements = statsRef.current?.querySelectorAll('.stat-number');
      statElements?.forEach((el) => {
        const target = parseInt(el.getAttribute('data-target') || '0');
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 80%',
            },
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const causes = [
    {
      icon: Church,
      title: 'Christian Community Grants',
      description: 'Supporting churches and faith-led outreach initiatives.',
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

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/hero-bg.jpg"
            alt="Community"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero content */}
        <div className="hero-content relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <span className="eyebrow text-white/80 mb-4 block">RAISING HOPE</span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95] mb-6">
            Small grants that open big doors.
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            We fund grassroots charities and community projects across the UK.
            For over 50 years, we've been making a difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/grants" className="btn-primary">
              Apply for a grant
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-[#D14A2A] transition-colors"
            >
              Learn about us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="stat-number font-serif text-4xl md:text-5xl text-white mb-2" data-target="50">
                0
              </p>
              <p className="text-white/70 text-sm">Years of Giving</p>
            </div>
            <div>
              <p className="stat-number font-serif text-4xl md:text-5xl text-white mb-2" data-target="500">
                0
              </p>
              <p className="text-white/70 text-sm">Grants Awarded</p>
            </div>
            <div>
              <p className="stat-number font-serif text-4xl md:text-5xl text-white mb-2" data-target="1000">
                0
              </p>
              <p className="text-white/70 text-sm">Lives Impacted</p>
            </div>
            <div>
              <p className="stat-number font-serif text-4xl md:text-5xl text-white mb-2" data-target="2">
                0
              </p>
              <p className="text-white/70 text-sm">Million+ Distributed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Preview */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="eyebrow mb-4 block">WHO WE ARE</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-6">
                A small trust with a long memory.
              </h2>
              <p className="text-lg text-[#6E6E6E] leading-relaxed mb-8">
                We've been making modest, targeted grants for over 50 years—supporting 
                local charities, faith groups, and community projects that help people 
                find stability and purpose.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#D14A2A] font-medium hover:gap-3 transition-all"
              >
                Read our story
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="card-rounded shadow-xl overflow-hidden">
              <img
                src="/images/who-we-are.jpg"
                alt="Community volunteer with child"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Causes Preview */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="eyebrow mb-4 block">OUR CAUSES</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-6">
              Apply to charity causes around the UK
            </h2>
            <p className="text-lg text-[#6E6E6E]">
              We support a wide range of causes that make a real difference in communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {causes.map((cause, index) => (
              <div
                key={index}
                className="group card-rounded bg-[#F6F4EF] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
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
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[#141414] mb-2">
                    {cause.title}
                  </h3>
                  <p className="text-sm text-[#6E6E6E]">{cause.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/causes" className="btn-secondary">
              View all causes
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Apply CTA Section */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="card-rounded shadow-xl overflow-hidden order-2 lg:order-1">
              <img
                src="/images/apply-team.jpg"
                alt="Team collaborating"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-1 bg-[#D14A2A] mb-6" />
              <span className="eyebrow mb-4 block">APPLY FOR FUNDING</span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-6">
                No forms. Just a conversation.
              </h2>
              <p className="text-lg text-[#6E6E6E] leading-relaxed mb-8">
                Tell us what you're trying to achieve. We'll ask a few questions, 
                review your proposal, and respond within a few weeks.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Small grants (typically £500–£5,000)',
                  'Open to UK-registered charities and CICs',
                  'We prioritise grassroots, community-led work',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#A3B18A]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-[#A3B18A]" />
                    </div>
                    <span className="text-[#141414]">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/grants" className="btn-primary">
                Start an application
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-8">
              Our Mission
            </h2>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-10">
              The Eleanor Harvey Charitable Trust supports humanitarian efforts 
              throughout the UK. In the world we envision, everyone will be able 
              to participate fully, be healthy, creative, and self-sufficient.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#D14A2A] font-medium hover:gap-3 transition-all"
            >
              Learn more about us
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="py-24 lg:py-32 bg-[#D14A2A]">
        <div className="section-padding text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Support Our Work
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Your donation helps us continue supporting grassroots charities 
            and community projects across the UK.
          </p>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#D14A2A] font-medium rounded-full hover:bg-[#F6F4EF] transition-colors"
          >
            Make a donation
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
