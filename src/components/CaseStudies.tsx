import { TrendingUp, Eye, Users } from "lucide-react";

const caseStudies = [
  {
    name: "AutoWrite AI",
    category: "Writing Tool",
    thumbnail: "📝",
    results: [
      { label: "Views Generated", value: "2.3M", icon: Eye },
      { label: "New Users", value: "45K", icon: Users },
      { label: "Growth", value: "350%", icon: TrendingUp },
    ],
    description:
      "Launched viral content series about AI writing. Created 12 shorts + 3 YouTube videos.",
    videoLink: "#",
  },
  {
    name: "CodeMind Pro",
    category: "Coding Assistant",
    thumbnail: "💻",
    results: [
      { label: "Views Generated", value: "1.8M", icon: Eye },
      { label: "New Users", value: "32K", icon: Users },
      { label: "Growth", value: "280%", icon: TrendingUp },
    ],
    description:
      "Developer-focused content strategy with technical demos and use case tutorials.",
    videoLink: "#",
  },
  {
    name: "DataViz Suite",
    category: "Analytics Tool",
    thumbnail: "📊",
    results: [
      { label: "Views Generated", value: "3.1M", icon: Eye },
      { label: "New Users", value: "58K", icon: Users },
      { label: "Growth", value: "420%", icon: TrendingUp },
    ],
    description:
      "Viral trend-jacking strategy featuring data visualization hacks and business tips.",
    videoLink: "#",
  },
  {
    name: "VoiceFlow AI",
    category: "Voice Assistant",
    thumbnail: "🎤",
    results: [
      { label: "Views Generated", value: "1.5M", icon: Eye },
      { label: "New Users", value: "28K", icon: Users },
      { label: "Growth", value: "240%", icon: TrendingUp },
    ],
    description:
      "Product demo series with real-world applications and customer testimonials.",
    videoLink: "#",
  },
  {
    name: "DesignBot",
    category: "Design Tool",
    thumbnail: "🎨",
    results: [
      { label: "Views Generated", value: "2.7M", icon: Eye },
      { label: "New Users", value: "51K", icon: Users },
      { label: "Growth", value: "385%", icon: TrendingUp },
    ],
    description:
      "Before-after comparison videos and design challenge series went viral.",
    videoLink: "#",
  },
  {
    name: "ResearchAI",
    category: "Research Platform",
    thumbnail: "🔬",
    results: [
      { label: "Views Generated", value: "2.2M", icon: Eye },
      { label: "New Users", value: "41K", icon: Users },
      { label: "Growth", value: "310%", icon: TrendingUp },
    ],
    description:
      "Educational content series on AI research breakthroughs and industry insights.",
    videoLink: "#",
  },
];

export function CaseStudies() {
  return (
    <section id='case-studies' className='relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Case <span className='gradient-text'>Studies</span>
          </h2>
          <p className='text-lg text-slate-400 max-w-2xl mx-auto'>
            Real results from AI companies we've helped grow and go viral
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className='group glass rounded-xl overflow-hidden border border-cyan-400/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20'
            >
              {/* Thumbnail */}
              <div className='relative h-48 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 flex items-center justify-center overflow-hidden cursor-pointer'>
                <div className='text-7xl group-hover:scale-110 transition transform duration-300'>
                  {study.thumbnail}
                </div>
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center'>
                  <button className='opacity-0 group-hover:opacity-100 transition px-6 py-2 bg-cyan-500 text-slate-950 font-bold rounded-lg'>
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                {/* Header */}
                <div className='mb-4'>
                  <h3 className='text-xl font-bold mb-1 group-hover:text-cyan-400 transition'>
                    {study.name}
                  </h3>
                  <p className='text-sm text-cyan-400'>{study.category}</p>
                </div>

                {/* Description */}
                <p className='text-slate-400 text-sm mb-6'>
                  {study.description}
                </p>

                {/* Stats */}
                <div className='space-y-3 pt-6 border-t border-cyan-400/10'>
                  {study.results.map((result, idx) => {
                    const Icon = result.icon;
                    return (
                      <div
                        key={idx}
                        className='flex items-center justify-between'
                      >
                        <div className='flex items-center gap-2'>
                          <Icon size={16} className='text-cyan-400' />
                          <span className='text-sm text-slate-400'>
                            {result.label}
                          </span>
                        </div>
                        <span className='font-bold text-cyan-400'>
                          {result.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary */}
        <div className='mt-16 glass p-8 rounded-xl border border-cyan-400/10'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center'>
            <div>
              <div className='text-4xl font-bold text-cyan-400 mb-2'>15.7M</div>
              <p className='text-slate-400'>Total Views Generated</p>
            </div>
            <div>
              <div className='text-4xl font-bold text-cyan-400 mb-2'>275K</div>
              <p className='text-slate-400'>New Users Acquired</p>
            </div>
            <div>
              <div className='text-4xl font-bold text-cyan-400 mb-2'>6</div>
              <p className='text-slate-400'>Successful Campaigns</p>
            </div>
            <div>
              <div className='text-4xl font-bold text-purple-400 mb-2'>
                331%
              </div>
              <p className='text-slate-400'>Average Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
