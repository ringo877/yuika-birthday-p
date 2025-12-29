import React from 'react';
import { Gift, Home, MessageCircleHeart, Sparkles, BookOpen, Palette, Camera, Music } from 'lucide-react';
import Hero from './sections/Hero.jsx';
import MessageBoard from './sections/MessageBoard.jsx';
import Fortune from './sections/Fortune.jsx';
import Novel from './sections/Novel.jsx';
import AiArt from './sections/AiArt.jsx';
import Gallery from './sections/Gallery.jsx';
import MusicSection from './sections/Music.jsx';

const MainPage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-yuika-cream">
      {/* Navbar (Desktop) */}
      <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-pink-100 h-14 md:h-16 flex items-center justify-between px-4 md:px-12">
        <div className="flex items-center gap-2 font-bold text-gray-800 text-base md:text-lg">
          <Gift className="text-yuika-pink w-5 h-5 md:w-6 md:h-6" />
          <span>BirthdayBash</span>
        </div>
        
        <div className="hidden md:flex gap-5 text-[10px] font-bold text-gray-500 tracking-wider uppercase">
          <button onClick={() => scrollToSection('board')} className="hover:text-yuika-pink transition-colors">Board</button>
          <button onClick={() => scrollToSection('fortune')} className="hover:text-yuika-pink transition-colors">Fortune</button>
          <button onClick={() => scrollToSection('novel')} className="hover:text-yuika-pink transition-colors">Novel</button>
          <button onClick={() => scrollToSection('music')} className="hover:text-yuika-pink transition-colors">Music</button>
          <button onClick={() => scrollToSection('ai-art')} className="hover:text-yuika-pink transition-colors">AI Art</button>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-yuika-pink transition-colors">Gallery</button>
        </div>

        <div className="bg-orange-100 text-orange-600 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-bold">
          For: ゆいかちゃん
        </div>
      </nav>

      <main className="pt-14 md:pt-16 space-y-8 md:space-y-12 pb-24 md:pb-32">
        <Hero />
        <MessageBoard />
        <Fortune />
        <Novel />
        <MusicSection />
        <AiArt />
        <Gallery />
      </main>

      <footer className="py-12 text-center text-xs text-gray-400 border-t border-pink-100 bg-white mb-16 md:mb-0">
        <div className="flex items-center justify-center gap-2 mb-2">
            <Gift className="w-4 h-4 text-pink-300" />
            <span className="font-bold text-gray-600">Happy Birthday ゆいかちゃん!</span>
        </div>
        <p>Made with love by Maho & Ayano • 2025</p>
      </footer>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-pink-100 flex justify-between items-center px-4 py-3 pb-6 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button onClick={() => scrollToSection('top')} className="flex flex-col items-center gap-1 text-[10px] text-gray-400 hover:text-yuika-pink focus:text-yuika-pink transition-colors w-10">
          <Home className="w-5 h-5" />
          <span>Top</span>
        </button>
        <button onClick={() => scrollToSection('board')} className="flex flex-col items-center gap-1 text-[10px] text-gray-400 hover:text-yuika-pink focus:text-yuika-pink transition-colors w-10">
          <MessageCircleHeart className="w-5 h-5" />
          <span>Msg</span>
        </button>
        <button onClick={() => scrollToSection('novel')} className="flex flex-col items-center gap-1 text-[10px] text-gray-400 hover:text-yuika-pink focus:text-yuika-pink transition-colors w-10">
          <BookOpen className="w-5 h-5" />
          <span>Story</span>
        </button>
        <button onClick={() => scrollToSection('music')} className="flex flex-col items-center gap-1 text-[10px] text-gray-400 hover:text-yuika-pink focus:text-yuika-pink transition-colors w-10">
          <Music className="w-5 h-5" />
          <span>Song</span>
        </button>
        <button onClick={() => scrollToSection('ai-art')} className="flex flex-col items-center gap-1 text-[10px] text-gray-400 hover:text-yuika-pink focus:text-yuika-pink transition-colors w-10">
          <Palette className="w-5 h-5" />
          <span>Art</span>
        </button>
        <button onClick={() => scrollToSection('gallery')} className="flex flex-col items-center gap-1 text-[10px] text-gray-400 hover:text-yuika-pink focus:text-yuika-pink transition-colors w-10">
          <Camera className="w-5 h-5" />
          <span>Pic</span>
        </button>
      </div>
    </div>
  );
};

export default MainPage;