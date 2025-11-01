import { useState } from "react";
import { Heart, TrendingUp, DollarSign, Sparkles } from "lucide-react";

interface PredictionCard {
  id: string;
  icon: React.ElementType;
  title: string;
  snippet: string;
  full: string;
}

const predictions: PredictionCard[] = [
  {
    id: "relationship",
    icon: Heart,
    title: "Relationship",
    snippet: "A day for clear communication. Listen more than you speak.",
    full: "Today's cosmic energy favors deep listening and authentic expression. Your relationships will flourish when you create space for others to share their truth. Let empathy guide your conversations."
  },
  {
    id: "career",
    icon: TrendingUp,
    title: "Career",
    snippet: "New opportunities emerge from unexpected places.",
    full: "The stars align to reveal hidden pathways in your professional journey. Stay open to unconventional ideas and collaborations. What seems like a detour may be the exact route you need."
  },
  {
    id: "wealth",
    icon: DollarSign,
    title: "Wealth",
    snippet: "Focus on long-term growth over short-term gains.",
    full: "Financial wisdom flows from patience today. The universe encourages you to plant seeds for future abundance rather than chasing immediate rewards. Trust in the process of gradual accumulation."
  },
  {
    id: "self",
    icon: Sparkles,
    title: "Self",
    snippet: "Inner transformation begins with small, mindful steps.",
    full: "Today is perfect for introspection and personal ritual. Your journey of self-discovery accelerates when you honor the small daily practices that ground and center you. Be gentle with yourself."
  }
];

export function PredictionCards() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  return (
    <section id="daily-focus" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-center mb-16 text-[#2C3A4F]"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '3rem',
            fontWeight: '300'
          }}
        >
          Your Daily Alignment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {predictions.map((card) => {
            const Icon = card.icon;
            const isFlipped = flippedCard === card.id;

            return (
              <div
                key={card.id}
                className="group relative h-80 cursor-pointer"
                onClick={() => setFlippedCard(isFlipped ? null : card.id)}
              >
                <div 
                  className={`absolute inset-0 transition-all duration-500 preserve-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                >
                  {/* Front of card */}
                  <div 
                    className="absolute inset-0 bg-[#FBFBFB] border border-[#E8E8E8] rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-[#D4AF37] transition-colors"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    <div className="w-16 h-16 rounded-full bg-[#D4AF37] bg-opacity-10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <h3 className="mb-4 text-[#2C3A4F]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem' }}>
                      {card.title}
                    </h3>
                    <p className="text-[#7C9A92]">
                      {card.snippet}
                    </p>
                  </div>

                  {/* Back of card */}
                  <div 
                    className="absolute inset-0 bg-[#2C3A4F] rounded-2xl p-8 flex flex-col justify-between"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    <div>
                      <h3 className="mb-4 text-[#D4AF37]" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem' }}>
                        {card.title}
                      </h3>
                      <p className="text-white text-sm leading-relaxed">
                        {card.full}
                      </p>
                    </div>
                    <button 
                      className="mt-6 text-[#D4AF37] hover:text-white transition-colors text-sm flex items-center gap-2"
                    >
                      Reflect on this →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
