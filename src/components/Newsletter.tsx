import { Mail, Sparkles } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className='relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='glass p-12 rounded-xl border border-cyan-400/10 relative overflow-hidden'>
          {/* Background Elements */}
          <div className='absolute top-0 right-0 w-48 h-48 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>
          <div className='absolute -bottom-10 left-0 w-48 h-48 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10'></div>

          <div className='relative z-10'>
            {/* Header */}
            <div className='text-center mb-8'>
              <div className='inline-flex items-center gap-2 mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full'>
                <Sparkles size={16} className='text-cyan-400' />
                <span className='text-sm text-cyan-400 font-semibold'>
                  Weekly Newsletter
                </span>
              </div>
              <h2 className='text-3xl sm:text-4xl font-bold mb-4'>
                Get Weekly{" "}
                <span className='gradient-text'>AI Growth Ideas</span>
              </h2>
              <p className='text-lg text-slate-400'>
                Join 1000+ AI founders receiving actionable marketing strategies
                and viral content ideas every week
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
              <div className='flex flex-col sm:flex-row gap-3 mb-4'>
                <div className='flex-1 relative'>
                  <Mail
                    size={18}
                    className='absolute left-3 top-3 text-cyan-400'
                  />
                  <input
                    type='email'
                    placeholder='your@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='w-full pl-10 pr-4 py-3 bg-slate-900 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition'
                  />
                </div>
                <button
                  type='submit'
                  className='px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition whitespace-nowrap'
                >
                  Subscribe
                </button>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className='text-center text-cyan-400 font-semibold animate-pulse'>
                  ✓ Check your email for weekly AI growth tips!
                </div>
              )}

              {/* Features */}
              <div className='grid grid-cols-3 gap-4 mt-8 text-center text-sm'>
                <div>
                  <div className='text-cyan-400 font-bold mb-1'>📈</div>
                  <p className='text-slate-400'>Growth Hacks</p>
                </div>
                <div>
                  <div className='text-cyan-400 font-bold mb-1'>🎬</div>
                  <p className='text-slate-400'>Content Ideas</p>
                </div>
                <div>
                  <div className='text-cyan-400 font-bold mb-1'>🚀</div>
                  <p className='text-slate-400'>Viral Trends</p>
                </div>
              </div>

              <p className='text-xs text-slate-500 text-center mt-6'>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
