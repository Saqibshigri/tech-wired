import { MessageSquare, Phone, Mail } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    productLink: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.company) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        productLink: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id='contact' className='relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Side - Info */}
          <div>
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              Ready to <span className='gradient-text'>Go Viral?</span>
            </h2>
            <p className='text-lg text-slate-400 mb-8'>
              Schedule a free 30-minute strategy call with our team. We'll
              analyze your AI product and create a custom growth plan.
            </p>

            {/* Contact Methods */}
            <div className='space-y-6 mb-12'>
              <div className='flex gap-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center'>
                  <Phone size={24} className='text-cyan-400' />
                </div>
                <div>
                  <h3 className='font-bold mb-1'>Book a Call</h3>
                  <p className='text-slate-400'>Free 30-min strategy session</p>
                  <button className='text-cyan-400 font-semibold hover:text-cyan-300 transition'>
                    Calendly Link →
                  </button>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center'>
                  <Mail size={24} className='text-purple-400' />
                </div>
                <div>
                  <h3 className='font-bold mb-1'>Email Us</h3>
                  <p className='text-slate-400'>We respond within 24 hours</p>
                  <a
                    href='mailto:hello@neuroreachaicom'
                    className='text-purple-400 font-semibold hover:text-purple-300 transition'
                  >
                    hello@neuroreach.ai
                  </a>
                </div>
              </div>

              <div className='flex gap-4'>
                <div className='flex-shrink-0 w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center'>
                  <MessageSquare size={24} className='text-cyan-300' />
                </div>
                <div>
                  <h3 className='font-bold mb-1'>Quick Chat</h3>
                  <p className='text-slate-400'>Start with a quick question</p>
                  <button className='text-cyan-300 font-semibold hover:text-cyan-200 transition'>
                    Message Us →
                  </button>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className='glass p-6 rounded-lg border border-cyan-400/10'>
              <p className='text-sm font-semibold mb-3'>
                Trusted by leading AI companies:
              </p>
              <div className='flex flex-wrap gap-2'>
                {[
                  "ChatBot Pro",
                  "DataViz AI",
                  "CodeMind",
                  "VoiceFlow",
                  "DesignBot",
                ].map((company, i) => (
                  <span
                    key={i}
                    className='text-xs px-3 py-1 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-slate-300'
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className='glass p-8 rounded-xl border border-cyan-400/10'>
            <h3 className='text-2xl font-bold mb-6'>Let's Plan Your Growth</h3>

            <form onSubmit={handleSubmit} className='space-y-4'>
              {/* Name */}
              <div>
                <label className='block text-sm font-semibold mb-2'>
                  Your Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-slate-900 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition'
                  placeholder='John Founder'
                />
              </div>

              {/* Email */}
              <div>
                <label className='block text-sm font-semibold mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-slate-900 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition'
                  placeholder='john@startup.com'
                />
              </div>

              {/* Company */}
              <div>
                <label className='block text-sm font-semibold mb-2'>
                  Company/Product Name
                </label>
                <input
                  type='text'
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 bg-slate-900 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition'
                  placeholder='Acme AI'
                />
              </div>

              {/* Product Link */}
              <div>
                <label className='block text-sm font-semibold mb-2'>
                  Product Link (Optional)
                </label>
                <input
                  type='url'
                  name='productLink'
                  value={formData.productLink}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-slate-900 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition'
                  placeholder='https://yourproduct.com'
                />
              </div>

              {/* Message */}
              <div>
                <label className='block text-sm font-semibold mb-2'>
                  Tell us about your goals
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  className='w-full px-4 py-3 bg-slate-900 border border-cyan-400/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition resize-none'
                  rows={4}
                  placeholder='What growth goals are you targeting?'
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition'
              >
                Book Strategy Call
              </button>

              {submitted && (
                <div className='text-center text-cyan-400 font-semibold animate-pulse'>
                  ✓ We'll reach out within 24 hours!
                </div>
              )}

              <p className='text-xs text-slate-500 text-center'>
                We'll respond to you within 24 hours with a personalized growth
                strategy
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
