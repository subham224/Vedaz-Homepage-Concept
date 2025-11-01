import { User } from "lucide-react";

export function HeroSection() {
  const scrollToFocus = () => {
    document.getElementById('daily-focus')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="relative min-h-screen bg-[#FBFBFB]">
      {/* Animated constellation background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1000 1000">
          <path
            d="M 100 200 L 300 150 L 500 300 L 700 200 L 900 400"
            stroke="#D4AF37"
            strokeWidth="1"
            fill="none"
            className="animate-[pulse_4s_ease-in-out_infinite]"
          />
          <circle cx="100" cy="200" r="2" fill="#D4AF37" className="animate-[pulse_3s_ease-in-out_infinite]" />
          <circle cx="300" cy="150" r="2" fill="#D4AF37" className="animate-[pulse_4s_ease-in-out_infinite]" />
          <circle cx="500" cy="300" r="2" fill="#D4AF37" className="animate-[pulse_5s_ease-in-out_infinite]" />
          <circle cx="700" cy="200" r="2" fill="#D4AF37" className="animate-[pulse_3.5s_ease-in-out_infinite]" />
          <circle cx="900" cy="400" r="2" fill="#D4AF37" className="animate-[pulse_4.5s_ease-in-out_infinite]" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-8 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="text-[#2C3A4F]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          <h1 className="text-2xl">Vedaz</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-8" style={{ fontFamily: "'Inter', sans-serif" }}>
          <a href="#today" className="text-[#2C3A4F] hover:text-[#D4AF37] transition-colors">Today</a>
          <a href="#journal" className="text-[#2C3A4F] hover:text-[#D4AF37] transition-colors">My Journal</a>
          <a href="#community" className="text-[#2C3A4F] hover:text-[#D4AF37] transition-colors">Community</a>
          <a href="#guides" className="text-[#2C3A4F] hover:text-[#D4AF37] transition-colors">AI Guides</a>
        </div>

        <button className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white hover:bg-[#C19B2A] transition-colors">
          <User className="w-5 h-5" />
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-32 max-w-4xl mx-auto" style={{ marginTop: '10vh' }}>
        <h1 
          className="mb-6 text-[#2C3A4F]" 
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '4rem',
            lineHeight: '1.2',
            fontWeight: '300'
          }}
        >
          Clarity for Today,<br />Wisdom for Tomorrow.
        </h1>
        
        <p 
          className="mb-12 text-[#7C9A92] max-w-2xl"
          style={{ 
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.25rem'
          }}
        >
          Welcome back, Alex. Your daily alignment is ready.
        </p>

        <button 
          onClick={scrollToFocus}
          className="px-8 py-4 bg-[#D4AF37] text-white rounded-full hover:bg-[#C19B2A] transition-all hover:shadow-lg flex items-center gap-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          View Today's Focus
          <span className="animate-bounce">↓</span>
        </button>
      </div>
    </div>
  );
}
