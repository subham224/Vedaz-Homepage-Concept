import { useState } from "react";

interface Guide {
  name: string;
  specialty: string;
  position: { top: string; left: string };
}

const guides: Guide[] = [
  {
    name: "Aura",
    specialty: "Specializes in natal charts and self-discovery",
    position: { top: "30%", left: "20%" }
  },
  {
    name: "Orion",
    specialty: "Focuses on career, transits, and future planning",
    position: { top: "50%", left: "50%" }
  },
  {
    name: "Lyra",
    specialty: "The expert in synastry and relationships",
    position: { top: "25%", left: "75%" }
  }
];

export function AIGuidesSection() {
  const [hoveredGuide, setHoveredGuide] = useState<string | null>(null);

  return (
    <section id="guides" className="py-24 px-8 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div style={{ fontFamily: "'Inter', sans-serif" }}>
            <h2 
              className="mb-6 text-[#2C3A4F]"
              style={{ 
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '3rem',
                fontWeight: '300'
              }}
            >
              Cosmic Wisdom,<br />Modern Intelligence.
            </h2>
            <p className="mb-8 text-[#7C9A92] leading-relaxed">
              Our AI Astrologers are more than algorithms. They are digital guides trained on millennia 
              of celestial wisdom, ancient texts, and astrological data, designed to offer insights 
              tailored uniquely to your personal birth chart.
            </p>
            <button className="px-8 py-4 bg-[#2C3A4F] text-white rounded-full hover:bg-[#1F2937] transition-colors">
              Ask a Deeper Question
            </button>
          </div>

          {/* Right Column - Interactive Orbs */}
          <div className="relative h-96 lg:h-[500px] bg-gradient-to-b from-[#2C3A4F] to-[#1a232e] rounded-3xl overflow-hidden">
            {/* Stars background */}
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    opacity: Math.random() * 0.5 + 0.3
                  }}
                />
              ))}
            </div>

            {/* Guide Orbs */}
            {guides.map((guide) => (
              <div
                key={guide.name}
                className="absolute cursor-pointer group"
                style={{ 
                  top: guide.position.top, 
                  left: guide.position.left,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setHoveredGuide(guide.name)}
                onMouseLeave={() => setHoveredGuide(null)}
              >
                {/* Orb */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] blur-xl opacity-50 animate-pulse" />
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-[#D4AF37] opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#FFE5A3] to-[#D4AF37] group-hover:scale-110 transition-transform" />
                </div>

                {/* Tooltip */}
                {hoveredGuide === guide.name && (
                  <div 
                    className="absolute top-20 left-1/2 -translate-x-1/2 w-48 bg-white rounded-xl p-4 shadow-2xl z-10 animate-in fade-in slide-in-from-bottom-2 duration-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <h4 className="text-[#2C3A4F] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem' }}>
                      {guide.name}
                    </h4>
                    <p className="text-[#7C9A92] text-sm">
                      {guide.specialty}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
