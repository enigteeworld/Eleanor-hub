import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Gift, TrendingUp, Users, Check, ArrowRight, Shield } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const DonatePage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showDialog, setShowDialog] = useState(false);

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

  const donationAmounts = [25, 50, 100, 250, 500];

  const impactExamples = [
    {
      amount: '£25',
      impact: 'Provides materials for a community literacy class',
    },
    {
      amount: '£50',
      impact: 'Funds a week of meals at a community food bank',
    },
    {
      amount: '£100',
      impact: 'Supports a mental health counselling session',
    },
    {
      amount: '£250',
      impact: 'Enables vocational training for one person',
    },
    {
      amount: '£500',
      impact: 'Funds a community event bringing neighbours together',
    },
  ];

  const whyDonate = [
    {
      icon: Gift,
      title: 'Direct Impact',
      description: '100% of your donation goes directly to supporting community projects.',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Change',
      description: 'We fund projects that create lasting positive change in communities.',
    },
    {
      icon: Users,
      title: 'Grassroots Focus',
      description: 'We support local organisations that know their communities best.',
    },
    {
      icon: Shield,
      title: 'Trusted Stewardship',
      description: 'Registered charity with transparent financial reporting.',
    },
  ];

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount) || 0;
    if (amount > 0) {
      setShowDialog(true);
    }
  };

  return (
    <div ref={pageRef} className="relative pt-20">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center animate-in">
            <span className="eyebrow text-white/60 mb-4 block">DONATE</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Support Our Work
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mx-auto">
              Your donation helps us continue supporting grassroots charities 
              and community projects across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Donation Options */}
            <div className="animate-in">
              <span className="eyebrow mb-4 block">MAKE A DONATION</span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#141414] leading-tight mb-6">
                Choose an amount
              </h2>
              <p className="text-lg text-[#6E6E6E] mb-8">
                Every contribution, no matter the size, helps us support communities 
                in need across the UK.
              </p>

              {/* Amount Buttons */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-4 px-6 rounded-xl font-medium transition-all ${
                      selectedAmount === amount
                        ? 'bg-[#D14A2A] text-white'
                        : 'bg-white text-[#141414] hover:bg-[#D14A2A]/10'
                    }`}
                  >
                    £{amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm text-[#6E6E6E] mb-2">
                  Or enter a custom amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6E6E6E]">£</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full py-4 pl-10 pr-4 bg-white rounded-xl border border-transparent focus:border-[#D14A2A] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Donate Button */}
              <button
                onClick={handleDonate}
                disabled={!selectedAmount && !customAmount}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Donate Now
                <Heart size={18} className="ml-2" />
              </button>

              <p className="text-sm text-[#6E6E6E] text-center mt-4">
                Secure donation processing. Registered charity 266090.
              </p>
            </div>

            {/* Impact Info */}
            <div className="animate-in">
              <div className="card-rounded shadow-xl overflow-hidden h-full">
                <img
                  src="/images/causes-community.jpg"
                  alt="Community impact"
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-[#141414] mb-4">
                    Your impact
                  </h3>
                  <div className="space-y-4">
                    {impactExamples.map((example, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-[#D14A2A]/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[#D14A2A] font-semibold text-sm">
                            {example.amount.replace('£', '')}
                          </span>
                        </div>
                        <p className="text-[#6E6E6E] text-sm">{example.impact}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
            <span className="eyebrow mb-4 block">WHY DONATE</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight">
               Your support makes a difference
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDonate.map((item, index) => (
              <div
                key={index}
                className="animate-in text-center p-8 bg-[#F6F4EF] card-rounded"
              >
                <div className="w-16 h-16 bg-[#D14A2A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={28} className="text-[#D14A2A]" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-[#141414] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6E6E6E]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-24 lg:py-32 bg-[#F6F4EF]">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-in">
            <span className="eyebrow mb-4 block">OTHER WAYS TO HELP</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#141414] leading-tight mb-6">
              Beyond financial support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-in p-8 bg-white card-rounded shadow-lg">
              <div className="w-16 h-16 bg-[#A3B18A]/20 rounded-full flex items-center justify-center mb-6">
                <Users size={28} className="text-[#A3B18A]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#141414] mb-3">
                Volunteer
              </h3>
              <p className="text-[#6E6E6E] mb-4">
                Offer your time and skills to organisations we support in your local area.
              </p>
              <a
                href="mailto:info@eleanorharveycharitabletrust.com"
                className="inline-flex items-center gap-2 text-[#D14A2A] font-medium"
              >
                Get in touch
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="animate-in p-8 bg-white card-rounded shadow-lg">
              <div className="w-16 h-16 bg-[#0E3A3A]/10 rounded-full flex items-center justify-center mb-6">
                <Gift size={28} className="text-[#0E3A3A]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#141414] mb-3">
                Legacy Giving
              </h3>
              <p className="text-[#6E6E6E] mb-4">
                Consider leaving a gift in your will to continue supporting communities for generations.
              </p>
              <a
                href="mailto:info@eleanorharveycharitabletrust.com"
                className="inline-flex items-center gap-2 text-[#D14A2A] font-medium"
              >
                Learn more
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="animate-in p-8 bg-white card-rounded shadow-lg">
              <div className="w-16 h-16 bg-[#D14A2A]/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp size={28} className="text-[#D14A2A]" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-[#141414] mb-3">
                Corporate Partnership
              </h3>
              <p className="text-[#6E6E6E] mb-4">
                Partner with us to align your company's CSR goals with community impact.
              </p>
              <a
                href="mailto:info@eleanorharveycharitabletrust.com"
                className="inline-flex items-center gap-2 text-[#D14A2A] font-medium"
              >
                Discuss partnership
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Efficiency */}
      <section className="py-24 lg:py-32 bg-[#0E3A3A]">
        <div className="section-padding">
          <div className="max-w-3xl mx-auto text-center animate-in">
            <h2 className="font-serif text-3xl sm:text-4xl text-white leading-tight mb-6">
              Gift Aid
            </h2>
            <p className="text-lg text-white/80 mb-8">
              If you're a UK taxpayer, we can claim an additional 25p for every £1 you donate 
              through Gift Aid, at no extra cost to you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-white/80">
                <Check size={20} className="text-[#A3B18A]" />
                <span>No extra cost to you</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Check size={20} className="text-[#A3B18A]" />
                <span>25% boost to your donation</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Check size={20} className="text-[#A3B18A]" />
                <span>Simple to set up</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 lg:py-32 bg-[#D14A2A]">
        <div className="section-padding text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Questions about donating?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            We're here to help. Contact us to discuss how your support can make the most impact.
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

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-[#F6F4EF] border-none max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">Thank You for Your Support!</DialogTitle>
            <DialogDescription className="text-[#6E6E6E]">
              We are currently setting up our online donation system. 
              In the meantime, please contact us at{' '}
              <a href="mailto:info@eleanorharveycharitabletrust.com" className="text-[#D14A2A]">
                info@eleanorharveycharitabletrust.com
              </a>{' '}
              or call{' '}
              <a href="tel:+447452231724" className="text-[#D14A2A]">
                +44 7452 231724
              </a>{' '}
              to make your donation of £{selectedAmount || customAmount}.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DonatePage;
