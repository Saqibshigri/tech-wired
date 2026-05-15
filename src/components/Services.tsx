import { Zap, Film, TrendingUp, Share2 } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "YouTube Promotion",
    description:
      "Strategic YouTube channel growth for AI tools with viral thumbnail design, SEO optimization, and subscriber conversion strategies.",
    features: [
      "Channel Optimization",
      "Viral Thumbnails",
      "Series Planning",
      "SEO Strategy",
    ],
  },
  {
    icon: Zap,
    title: "Short-Form Content",
    description:
      "Engaging TikTok, Reels, and Shorts optimized for AI product positioning. 15-60 second content that converts viewers to users.",
    features: [
      "Reel Creation",
      "Trend Hacking",
      "Hook Writing",
      "Multi-Platform",
    ],
  },
  {
    icon: Film,
    title: "Product Demos & Reviews",
    description:
      "Professional AI tool demos and honest reviews that build credibility and drive product adoption through authentic storytelling.",
    features: [
      "Demo Production",
      "Use Case Stories",
      "Feature Highlights",
      "4K Quality",
    ],
  },
  {
    icon: TrendingUp,
    title: "Startup Growth Marketing",
    description:
      "Comprehensive growth strategy including content calendar, audience analysis, and conversion funnel optimization for AI startups.",
    features: [
      "Growth Strategy",
      "Audience Analysis",
      "Campaign Planning",
      "A/B Testing",
    ],
  },
  {
    icon: Share2,
    title: "Social Distribution",
    description:
      "Multi-channel content distribution strategy ensuring your message reaches the right audience across all platforms simultaneously.",
    features: [
      "Cross-Platform",
      "Timing Optimization",
      "Engagement Boost",
      "Analytics",
    ],
  },
];

export function Services() {
  return (
    <section id='services' className='relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Our <span className='gradient-text'>Services</span>
          </h2>
          <p className='text-lg text-slate-400 max-w-2xl mx-auto'>
            Comprehensive marketing solutions designed specifically for AI
            startups and SaaS companies
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className='group glass p-8 rounded-xl border border-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2'
              >
                {/* Icon */}
                <div className='mb-6 inline-block p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition'>
                  <Icon size={28} className='text-cyan-400' />
                </div>

                {/* Title */}
                <h3 className='text-xl font-bold mb-3 group-hover:text-cyan-400 transition'>
                  {service.title}
                </h3>

                {/* Description */}
                <p className='text-slate-400 mb-6 leading-relaxed'>
                  {service.description}
                </p>

                {/* Features */}
                <div className='space-y-2'>
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className='flex items-center gap-2 text-sm text-slate-300'
                    >
                      <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full'></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Border animation on hover */}
                <div className='absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-purple-600/0 group-hover:from-cyan-500/5 group-hover:to-purple-600/5 transition pointer-events-none'></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className='mt-16 text-center'>
          <p className='text-slate-400 mb-4'>
            Want to customize a package for your needs?
          </p>
          <button className='px-8 py-3 bg-cyan-500/10 border border-cyan-400/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition'>
            Let's Talk Strategy
          </button>
        </div>
      </div>
    </section>
  );
}
