import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Church, GraduationCap, Heart, Users, ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CausesPage = () => {
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

  const causes = [
    {
      icon: Church,
      title: 'Christian Community Grants',
      description: 'We partner with churches and faith groups to provide practical help—food, shelter, pastoral care, and pathways back into community life.',
      image: '/images/featured-church.jpg',
      details: [
        'Support for church-based food banks',
        'Homelessness outreach programmes',
        'Pastoral care initiatives',
        'Community integration projects',
      ],
      color: '#0E3A3A',
    },
    {
      icon: GraduationCap,
      title: 'Education & Training',
      description: 'We support projects that improve access to learning—especially for people facing barriers due to poverty, location, or circumstance.',
      image: '/images/education-training.jpg',
      details: [
        'Adult literacy programmes',
        'Vocational training initiatives',
        'Youth mentoring schemes',
        'Digital skills workshops',
      ],
      color: '#D14A2A',
    },
    {
      icon: Heart,
      title: 'Health & Wellbeing',
      description: 'Grassroots projects that improve daily life and support mental and physical health in communities.',
      image: '/images/causes-health.jpg',
      details: [
        'Mental health support groups',
        'Community gardening projects',
        'Exercise and wellness programmes',
        'Carer support initiatives',
      ],
      color: '#A3B18A',
    },
    {
      icon: Users,
      title: 'Community Resilience',
      description: 'Local networks that strengthen neighbourhoods and build social connections.',
      image: '/images/causes-community.jpg',
      details: [
        'Neighbourhood association support',
        'Intergenerational projects',
        'Community event funding',
        'Local volunteer programmes',
      ],
      color: '#0E3A3A',
    },
  ];

  const eligibilityCriteria = [
    'UK-registered charity or CIC',
    'Clear community benefit',
    'Transparent governance',
    'Measurable outcomes',
    'Grassroots, community-led approach',
  ];

  return (
    <div ref={pageRef} className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center animate-in">
            <span className="eyebrow text-white/60 mb-4 block">OUR CAUSES</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Making a Difference
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              We support a wide range of causes that create lasting positive 
              change in communities across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Causes Detail */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="space-y-24">
            {causes.map((cause, index) => (
              <div
                key={index}
                className={`animate-in grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${cause.color}20` }}
                  >
                    <cause.icon
                      size={32}
                      style={{ color: cause.color }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] leading-tight mb-6">
                    {cause.title}
                  </h2>
                  <p className="text-lg text-[#6E6E6E] leading-relaxed mb-8">
                    {cause.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {cause.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ backgroundColor: `${cause.color}20` }}
                        >
                          <Check size={14} style={{ color: cause.color }} />
                        </div>
                        <span className="text-[#141414]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/grants"
                    className="inline-flex items-center gap-2 text-[#D14A2A] font-medium hover:gap-3 transition-all"
                  >
                    Apply for this cause
                    <ArrowRight size={18} />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="card-rounded shadow-xl overflow-hidden">
                    <img
                      src={cause.image}
                      alt={cause.title}
                      className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-in">
              <span className="eyebrow mb-4 block">ELIGIBILITY</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] leading-tight mb-6">
                Who can apply?
              </h2>
              <p className="text-lg text-[#6E6E6E] leading-relaxed mb-8">
                We welcome applications from organisations that meet our criteria 
                and share our commitment to community development.
              </p>
              <ul className="space-y-4">
                {eligibilityCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#A3B18A]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-[#A3B18A]" />
                    </div>
                    <span className="text-[#141414]">{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-in">
              <div className="card-rounded shadow-xl overflow-hidden">
                <img
                  src="/images/apply-team.jpg"
                  alt="Application process"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-[#D14A2A]">
        <div className="section-padding text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Ready to Apply?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Start your application today and join the hundreds of organisations 
            we've supported over the past 50 years.
          </p>
          <Link
            to="/grants"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#D14A2A] font-medium rounded-full hover:bg-[#F6F4EF] transition-colors"
          >
            Start your application
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CausesPage;
