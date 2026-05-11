import { Lightbulb, Users, Zap } from "lucide-react";

export function About() {
  return (
    <section id='about' className='relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Side - Content */}
          <div>
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              About <span className='gradient-text'>Tech Wired</span>
            </h2>

            <p className='text-lg text-slate-300 mb-6 leading-relaxed'>
              We're a content-driven AI marketing agency built for one purpose:
              helping AI startups and SaaS companies get the visibility they
              deserve.
            </p>

            <p className='text-slate-400 mb-8 leading-relaxed'>
              In the fast-moving world of AI, great products often go unnoticed.
              We bridge that gap by creating viral content, strategic YouTube
              campaigns, and short-form content that actually converts viewers
              into users.
            </p>

            {/* Values */}
            <div className='space-y-4 mb-8'>
              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center'>
                    <Lightbulb size={24} className='text-cyan-400' />
                  </div>
                </div>
                <div>
                  <h3 className='font-bold mb-2'>Innovation-Focused</h3>
                  <p className='text-slate-400'>
                    We stay ahead of trends and emerging content opportunities
                  </p>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center'>
                    <Users size={24} className='text-cyan-400' />
                  </div>
                </div>
                <div>
                  <h3 className='font-bold mb-2'>Specialist Expertise</h3>
                  <p className='text-slate-400'>
                    We only work with AI companies, so we know the industry
                    deeply
                  </p>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center'>
                    <Zap size={24} className='text-cyan-400' />
                  </div>
                </div>
                <div>
                  <h3 className='font-bold mb-2'>Growth-Obsessed</h3>
                  <p className='text-slate-400'>
                    We measure success by your growth and conversion metrics
                  </p>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-3 gap-4 p-6 glass rounded-lg border border-cyan-400/10'>
              <div>
                <div className='text-3xl font-bold text-cyan-400'>50+</div>
                <p className='text-sm text-slate-400'>AI Companies</p>
              </div>
              <div>
                <div className='text-3xl font-bold text-cyan-400'>5 yrs</div>
                <p className='text-sm text-slate-400'>Experience</p>
              </div>
              <div>
                <div className='text-3xl font-bold text-cyan-400'>500M+</div>
                <p className='text-sm text-slate-400'>Total Reach</p>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className='relative'>
            {/* Gradient Orbs */}
            <div className='absolute -top-10 -right-10 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow'></div>
            <div className='absolute -bottom-20 -left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow'></div>

            {/* Glass Card */}
            <div className='relative glass p-8 rounded-xl border border-cyan-400/10 z-10'>
              <div className='space-y-6'>
                <div>
                  <h3 className='text-cyan-400 font-bold mb-2'>Our Mission</h3>
                  <p className='text-slate-300'>
                    Make AI startups visible, viral, and unstoppable in the
                    market
                  </p>
                </div>
                <div className='h-1 bg-gradient-to-r from-cyan-500 to-purple-600'></div>
                <div>
                  <h3 className='text-cyan-400 font-bold mb-2'>Our Process</h3>
                  <p className='text-slate-300'>
                    Strategy → Production → Distribution → Growth
                  </p>
                </div>
                <div className='h-1 bg-gradient-to-r from-cyan-500 to-purple-600'></div>
                <div>
                  <h3 className='text-cyan-400 font-bold mb-2'>Our Promise</h3>
                  <p className='text-slate-300'>
                    Transparent metrics, proven results, and full accountability
                  </p>
                </div>
              </div>

              {/* Featured Quote */}
              <div className='mt-8 p-4 bg-cyan-500/10 border-l-4 border-cyan-400 rounded'>
                <p className='italic text-slate-300'>
                  "The right content at the right time can launch a startup from
                  zero to hero. That's what we do."
                </p>
                <p className='text-cyan-400 font-bold mt-3'>
                  — Tech Wired Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
