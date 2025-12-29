import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-24 pb-12 md:pt-32 md:pb-20 text-center overflow-hidden">
      {/* Decorative Dots */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 10 + 4 + 'px',
              height: Math.random() * 10 + 4 + 'px',
              backgroundColor: ['#FF6B95', '#60A5FA', '#FBBF24', '#34D399'][Math.floor(Math.random() * 4)],
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      <div className="bg-white inline-block px-6 py-8 md:px-12 md:py-10 rounded-3xl shadow-sm border border-pink-100 max-w-2xl mx-auto relative animate-float w-11/12 md:w-auto">
        <div className="flex justify-center items-center gap-2 text-yuika-pink font-bold text-xs md:text-sm mb-4 tracking-widest uppercase">
          <Sparkles className="w-4 h-4" />
          It's a special day!
          <Sparkles className="w-4 h-4" />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black text-gray-800 mb-2 tracking-tight">
          HAPPY
        </h1>
        <h1 className="text-4xl md:text-7xl font-black gradient-text mb-6 tracking-tight">
          BIRTHDAY
        </h1>
        
        <div className="relative inline-block">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-700 relative z-10">
            ゆいかちゃん
          </h2>
          <div className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-yellow-200/60 -rotate-1 z-0 rounded-full"></div>
        </div>
      </div>

      <div className="mt-8 md:mt-12 text-gray-600 text-sm md:text-base leading-relaxed px-4">
        <p>今日は世界で一番大切な親友の誕生日。</p>
        <p>素敵な1年になりますように！</p>
      </div>
    </section>
  );
};

export default Hero;