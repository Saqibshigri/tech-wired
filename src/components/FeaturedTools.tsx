import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const tools = [
  {
    name: "ChatGPT Pro",
    category: "Language Model",
    rating: 4.9,
    emoji: "🤖",
    description: "Advanced conversational AI",
    featured: true,
  },
  {
    name: "Midjourney",
    category: "Image Generation",
    rating: 4.8,
    emoji: "🎨",
    description: "Creative AI art generator",
    featured: true,
  },
  {
    name: "Runway",
    category: "Video Creation",
    rating: 4.7,
    emoji: "🎬",
    description: "AI-powered video editing",
    featured: false,
  },
  {
    name: "Eleven Labs",
    category: "Voice Synthesis",
    rating: 4.9,
    emoji: "🎤",
    description: "Natural voice generation",
    featured: true,
  },
  {
    name: "Perplexity AI",
    category: "Search Engine",
    rating: 4.6,
    emoji: "🔍",
    description: "Next-gen web search",
    featured: false,
  },
  {
    name: "Copy.ai",
    category: "Content Writing",
    rating: 4.5,
    emoji: "✍️",
    description: "AI copywriting assistant",
    featured: true,
  },
];

export function FeaturedTools() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tools.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tools.length) % tools.length);
  };

  return (
    <section className='relative py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-bold mb-4'>
            Featured <span className='gradient-text'>AI Tools</span>
          </h2>
          <p className='text-lg text-slate-400 max-w-2xl mx-auto'>
            We specialize in promoting the latest and greatest AI tools
          </p>
        </div>

        {/* Carousel */}
        <div className='relative'>
          {/* Main Carousel */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Left Card (Previous) */}
            <div className='hidden md:block opacity-30 transform scale-90'>
              {(() => {
                const prevIndex =
                  (currentIndex - 1 + tools.length) % tools.length;
                const tool = tools[prevIndex];
                return (
                  <div className='glass p-6 rounded-xl border border-cyan-400/10 h-full'>
                    <div className='text-5xl mb-4'>{tool.emoji}</div>
                    <h3 className='text-lg font-bold mb-1'>{tool.name}</h3>
                    <p className='text-xs text-cyan-400 mb-3'>
                      {tool.category}
                    </p>
                    <div className='flex items-center gap-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className='fill-yellow-400 text-yellow-400'
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Center Card (Current) */}
            <div className='transform scale-100 md:scale-110'>
              {(() => {
                const tool = tools[currentIndex];
                return (
                  <div className='glass p-8 rounded-xl border-2 border-cyan-400/50 neon-glow h-full relative overflow-hidden'>
                    {/* Featured Badge */}
                    {tool.featured && (
                      <div className='absolute top-4 right-4 px-3 py-1 bg-cyan-500/20 border border-cyan-400 text-cyan-400 text-xs font-bold rounded-full'>
                        Featured
                      </div>
                    )}

                    <div className='text-7xl mb-6'>{tool.emoji}</div>
                    <h3 className='text-2xl font-bold mb-2 text-cyan-400'>
                      {tool.name}
                    </h3>
                    <p className='text-cyan-400/70 mb-4 font-semibold'>
                      {tool.category}
                    </p>
                    <p className='text-slate-300 mb-6'>{tool.description}</p>

                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-1'>
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={18}
                            className='fill-yellow-400 text-yellow-400'
                          />
                        ))}
                      </div>
                      <span className='font-bold text-lg text-yellow-400'>
                        {tool.rating}
                      </span>
                    </div>

                    <button className='w-full mt-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition'>
                      Learn More
                    </button>
                  </div>
                );
              })()}
            </div>

            {/* Right Card (Next) */}
            <div className='hidden md:block opacity-30 transform scale-90'>
              {(() => {
                const nextIdx = (currentIndex + 1) % tools.length;
                const tool = tools[nextIdx];
                return (
                  <div className='glass p-6 rounded-xl border border-cyan-400/10 h-full'>
                    <div className='text-5xl mb-4'>{tool.emoji}</div>
                    <h3 className='text-lg font-bold mb-1'>{tool.name}</h3>
                    <p className='text-xs text-cyan-400 mb-3'>
                      {tool.category}
                    </p>
                    <div className='flex items-center gap-1'>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className='fill-yellow-400 text-yellow-400'
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 md:-translate-x-4 p-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition'
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 md:translate-x-4 p-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition'
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className='flex justify-center gap-2 mt-12'>
          {tools.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition ${
                index === currentIndex ? "bg-cyan-400 w-8" : "bg-slate-600"
              }`}
            ></button>
          ))}
        </div>

        {/* All Tools Grid */}
        <div className='mt-16'>
          <h3 className='text-2xl font-bold mb-8'>All Featured Tools</h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4'>
            {tools.map((tool, index) => (
              <div
                key={index}
                className='glass p-4 rounded-lg border border-cyan-400/10 hover:border-cyan-400/50 transition text-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20'
              >
                <div className='text-4xl mb-2'>{tool.emoji}</div>
                <h4 className='text-sm font-bold mb-1 truncate'>{tool.name}</h4>
                <p className='text-xs text-cyan-400'>{tool.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
