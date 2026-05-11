import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
      {/* Animated Background */}
      <div className='absolute inset-0 grid-pattern'></div>

      {/* Gradient Orbs */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow'></div>
      <div className='absolute -bottom-8 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow'></div>

      <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center'>
        {/* Badge */}
        <div className='inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-900/50 border border-cyan-400/30 rounded-full'>
          <Sparkles size={16} className='text-cyan-400' />
          <span className='text-sm text-cyan-400 font-semibold'>
            AI-Powered Growth Marketing
          </span>
        </div>

        {/* Main Headline */}
        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
          We Make <span className='gradient-text'>AI Products</span> Go{" "}
          <span className='text-cyan-400'>Viral</span>
        </h1>

        {/* Subheading */}
        <p className='text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed'>
          We help AI startups and SaaS companies dominate through powerful
          content, YouTube promotion, and short-form viral marketing that
          actually converts.
        </p>

        {/* Trust Badges */}
        <div className='flex flex-wrap justify-center gap-6 mb-12 text-sm text-slate-400'>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
            <span>AI-Focused Agency</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
            <span>Content-Driven Growth</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-cyan-400 rounded-full'></div>
            <span>Proven Results</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'>
          <button
            onClick={() => scrollToSection("contact")}
            className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-slate-950 font-bold rounded-xl hover:shadow-xl hover:shadow-cyan-500/50 transition transform hover:scale-105 flex items-center gap-2 btn-neon'
          >
            Book a Strategy Call <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection("case-studies")}
            className='px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400/10 transition flex items-center gap-2'
          >
            See Our Work <ArrowRight size={20} />
          </button>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto'>
          <div className='glass p-4 sm:p-6 rounded-lg'>
            <div className='text-2xl sm:text-3xl font-bold text-cyan-400'>
              500M+
            </div>
            <p className='text-xs sm:text-sm text-slate-400'>Content Views</p>
          </div>
          <div className='glass p-4 sm:p-6 rounded-lg'>
            <div className='text-2xl sm:text-3xl font-bold text-cyan-400'>
              50+
            </div>
            <p className='text-xs sm:text-sm text-slate-400'>
              AI Companies Grown
            </p>
          </div>
          <div className='glass p-4 sm:p-6 rounded-lg'>
            <div className='text-2xl sm:text-3xl font-bold text-cyan-400'>
              10x
            </div>
            <p className='text-xs sm:text-sm text-slate-400'>Avg. ROI Growth</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2'>
          <div className='w-1 h-2 bg-cyan-400 rounded-full animate-pulse-glow'></div>
        </div>
      </div>
    </section>
  );
}
