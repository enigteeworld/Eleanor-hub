import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Download, TrendingUp, PieChart, Users, PoundSterling, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ReportsPage = () => {
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

  const annualReports = [
    { year: '2024', title: 'Annual Report & Accounts 2024', size: '2.4 MB' },
    { year: '2023', title: 'Annual Report & Accounts 2023', size: '2.1 MB' },
    { year: '2022', title: 'Annual Report & Accounts 2022', size: '1.9 MB' },
    { year: '2021', title: 'Annual Report & Accounts 2021', size: '1.8 MB' },
    { year: '2020', title: 'Annual Report & Accounts 2020', size: '1.7 MB' },
  ];

  const financialHighlights = [
    {
      icon: PoundSterling,
      label: 'Total Funds Distributed (2024)',
      value: '£125,000',
    },
    {
      icon: Users,
      label: 'Grants Awarded (2024)',
      value: '48',
    },
    {
      icon: TrendingUp,
      label: 'Average Grant Size',
      value: '£2,604',
    },
    {
      icon: PieChart,
      label: 'Administrative Costs',
      value: '< 5%',
    },
  ];

  const grantDistribution = [
    { category: 'Christian Community Grants', percentage: 35, amount: '£43,750' },
    { category: 'Education & Training', percentage: 25, amount: '£31,250' },
    { category: 'Health & Wellbeing', percentage: 20, amount: '£25,000' },
    { category: 'Community Resilience', percentage: 20, amount: '£25,000' },
  ];

  const policies = [
    { title: 'Grant Making Policy', description: 'Our approach to awarding grants' },
    { title: 'Safeguarding Policy', description: 'Protecting vulnerable individuals' },
    { title: 'Data Protection Policy', description: 'How we handle personal data' },
    { title: 'Equality & Diversity Policy', description: 'Our commitment to inclusion' },
    { title: 'Environmental Policy', description: 'Our environmental responsibilities' },
    { title: 'Complaints Procedure', description: 'How to raise concerns' },
  ];

  return (
    <div ref={pageRef} className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center animate-in">
            <span className="eyebrow text-white/60 mb-4 block">TRANSPARENCY</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Annual Reports
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              We are committed to transparency and accountability. 
              View our annual reports and financial information.
            </p>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
            <span className="eyebrow mb-4 block">2024 HIGHLIGHTS</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight">
              Our impact at a glance
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {financialHighlights.map((item, index) => (
              <div
                key={index}
                className="animate-in p-6 bg-white card-rounded shadow-lg text-center"
              >
                <div className="w-14 h-14 bg-[#D14A2A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-[#D14A2A]" strokeWidth={1.5} />
                </div>
                <p className="font-serif text-3xl text-[#141414] mb-1">
                  {item.value}
                </p>
                <p className="text-sm text-[#6E6E6E]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grant Distribution */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-in">
              <span className="eyebrow mb-4 block">GRANT DISTRIBUTION</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] leading-tight mb-6">
                Where the money goes
              </h2>
              <p className="text-lg text-[#6E6E6E] mb-8">
                In 2024, we distributed £125,000 across four key areas, 
                supporting 48 grassroots organisations.
              </p>

              <div className="space-y-6">
                {grantDistribution.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[#141414] font-medium">
                        {item.category}
                      </span>
                      <span className="text-[#6E6E6E]">{item.amount}</span>
                    </div>
                    <div className="h-3 bg-[#F6F4EF] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#D14A2A] rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-[#6E6E6E] mt-1">
                      {item.percentage}% of total funding
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-in">
              <div className="card-rounded shadow-xl overflow-hidden">
                <img
                  src="/images/causes-education.jpg"
                  alt="Grant distribution"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
            <span className="eyebrow mb-4 block">DOWNLOADS</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-6">
              Annual Reports & Accounts
            </h2>
            <p className="text-lg text-[#6E6E6E]">
              Download our annual reports to learn more about our activities, 
              governance, and financial performance.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {annualReports.map((report, index) => (
              <div
                key={index}
                className="animate-in flex items-center justify-between p-6 bg-white card-rounded shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#D14A2A]/10 rounded-full flex items-center justify-center">
                    <FileText size={20} className="text-[#D14A2A]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#141414]">
                      {report.title}
                    </h3>
                    <p className="text-sm text-[#6E6E6E]">PDF • {report.size}</p>
                  </div>
                </div>
                <button 
                  onClick={() => alert(`Download for ${report.title} will be available soon. Please contact us for a copy.`)}
                  className="flex items-center gap-2 text-[#D14A2A] font-medium hover:gap-3 transition-all"
                >
                  <Download size={18} />
                  <span className="hidden sm:inline">Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
            <span className="eyebrow mb-4 block">GOVERNANCE</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-6">
              Our Policies
            </h2>
            <p className="text-lg text-[#6E6E6E]">
              We operate under clear policies that ensure transparency, 
              accountability, and ethical practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="animate-in p-6 bg-[#F6F4EF] card-rounded hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#0E3A3A]/10 rounded-full flex items-center justify-center mb-4">
                  <FileText size={20} className="text-[#0E3A3A]" />
                </div>
                <h3 className="font-serif text-lg text-[#141414] mb-2">
                  {policy.title}
                </h3>
                <p className="text-sm text-[#6E6E6E] mb-4">
                  {policy.description}
                </p>
                <button 
                  onClick={() => alert(`${policy.title} document will be available soon. Please contact us for a copy.`)}
                  className="inline-flex items-center gap-2 text-[#D14A2A] text-sm font-medium"
                >
                  View policy
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustee Report */}
      <section className="py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center animate-in">
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-6">
              Trustee Annual Report
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Each year, our trustees prepare a comprehensive report on the trust's 
              activities, achievements, and future plans.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => alert('Trustee Annual Report will be available soon. Please contact us for a copy.')}
                className="inline-flex items-center gap-2 text-white hover:text-[#D14A2A] transition-colors"
              >
                <FileText size={20} />
                <span>Read the latest report</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 lg:py-32 bg-[#D14A2A]">
        <div className="section-padding text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Questions about our finances?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            We're happy to provide additional information about our financial 
            management and grant-making activities.
          </p>
          <a
            href="mailto:info@eleanorharveycharitabletrust.com"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#D14A2A] font-medium rounded-full hover:bg-[#F6F4EF] transition-colors"
          >
            Contact us
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ReportsPage;
