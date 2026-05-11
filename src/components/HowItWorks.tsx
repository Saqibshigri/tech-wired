import { Upload, Sparkles, Rocket } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Submit Your AI Product",
    description:
      "Tell us about your AI solution, target audience, and growth goals. Share your product link and we'll analyze your positioning.",
    details: ["Product Analysis", "Market Research", "Audience Identification"],
  },
  {
    icon: Sparkles,
    number: "02",
    title: "We Create Viral Strategy",
    description:
      "Our team develops a comprehensive content strategy with YouTube topics, viral shorts ideas, and distribution timeline tailored for maximum reach.",
    details: ["Content Calendar", "Viral Ideas", "Brand Messaging"],
  },
  {
    icon: Rocket,
    number: "03",
    title: "Publish & Distribute",
    description:
      "We produce high-quality content and publish across YouTube, TikTok, Instagram, Twitter, and LinkedIn with optimized timing and messaging.",
    details: ["Production", "Multi-Platform Deploy", "Performance Tracking"],
  },
];

export function HowItWorks() {
  return (
    <section id='how-it-works' className='relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            How It <span className='gradient-text'>Works</span>
          </h2>
          <p className='text-lg text-slate-400 max-w-2xl mx-auto'>
            A simple 3-step process to launch your AI product into the viral
            stratosphere
          </p>
        </div>

        {/* Steps Container */}
        <div className='relative'>
          {/* Connecting Line */}
          <div className='hidden lg:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent'></div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10'>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className='relative'>
                  {/* Card */}
                  <div className='glass p-8 rounded-xl border border-cyan-400/10 hover:border-cyan-400/50 transition-all group'>
                    {/* Number Badge */}
                    <div className='mb-6 flex items-center gap-4'>
                      <div className='text-5xl font-bold gradient-text'>
                        {step.number}
                      </div>
                      <div className='w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition'>
                        <Icon size={32} className='text-cyan-400' />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className='text-2xl font-bold mb-4 group-hover:text-cyan-400 transition'>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className='text-slate-400 mb-6 leading-relaxed'>
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className='space-y-2 pt-6 border-t border-cyan-400/10'>
                      {step.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-2 text-sm text-slate-300'
                        >
                          <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow between items */}
                  {index < steps.length - 1 && (
                    <div className='hidden lg:flex absolute -right-12 top-1/3 translate-y-2'>
                      <div className='text-4xl text-cyan-400 font-bold'>→</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className='mt-16 glass p-8 rounded-xl border border-cyan-400/10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-2xl font-bold mb-4'>Timeline</h3>
              <ul className='space-y-3'>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                  <span>Week 1-2: Strategy & Planning</span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                  <span>Week 3-6: Content Production</span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
                  <span>Week 7+: Publishing & Optimization</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-bold mb-4'>Expected Results</h3>
              <ul className='space-y-3'>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                  <span>100K+ video views in first month</span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                  <span>50+ qualified leads per campaign</span>
                </li>
                <li className='flex items-center gap-3'>
                  <div className='w-2 h-2 bg-purple-500 rounded-full'></div>
                  <span>10x average engagement rate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
