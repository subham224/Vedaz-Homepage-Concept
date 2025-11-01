import { MessageCircle, TrendingUp, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CommunityCard {
  type: "discussion" | "poll" | "reflection";
  title: string;
  author?: string;
  replies?: number;
  icon: React.ElementType;
  pollData?: { option: string; percentage: number }[];
}

const communityCards: CommunityCard[] = [
  {
    type: "discussion",
    title: "How is everyone navigating the current Mercury Retrograde?",
    author: "@CelestialSeeker",
    replies: 42,
    icon: MessageCircle
  },
  {
    type: "poll",
    title: "Which of today's predictions resonates most with you?",
    icon: TrendingUp,
    pollData: [
      { option: "Career", percentage: 35 },
      { option: "Self", percentage: 45 },
      { option: "Relationship", percentage: 15 },
      { option: "Wealth", percentage: 5 }
    ]
  },
  {
    type: "reflection",
    title: "My 'Self' prediction helped me set a new boundary. Here's what happened...",
    author: "@MoonChild",
    icon: Users
  }
];

export function CommunitySection() {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % communityCards.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + communityCards.length) % communityCards.length);
  };

  return (
    <section id="community" className="py-24 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="mb-4 text-[#2C3A4F]"
            style={{ 
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '3rem',
              fontWeight: '300'
            }}
          >
            Shared Horizons
          </h2>
          <p 
            className="text-[#7C9A92]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore insights and share experiences with the Vedaz community.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCard * 100}%)` }}
            >
              {communityCards.map((card, index) => {
                const Icon = card.icon;
                
                return (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-[#FBFBFB] border border-[#E8E8E8] rounded-2xl p-8 hover:border-[#D4AF37] transition-colors min-h-[300px] flex flex-col">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-[#D4AF37] bg-opacity-10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#D4AF37]" />
                        </div>
                        <div className="flex-1">
                          <h3 
                            className="text-[#2C3A4F] mb-2"
                            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem' }}
                          >
                            {card.title}
                          </h3>
                          {card.author && (
                            <p 
                              className="text-[#7C9A92] text-sm"
                              style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                              {card.type === "discussion" ? `Started by ${card.author}` : `A Reflection by ${card.author}`}
                              {card.replies && ` • ${card.replies} Replies`}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Poll visualization */}
                      {card.type === "poll" && card.pollData && (
                        <div className="space-y-3 mb-6">
                          {card.pollData.map((item, i) => (
                            <div key={i}>
                              <div className="flex justify-between mb-1 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                                <span className="text-[#2C3A4F]">{item.option}</span>
                                <span className="text-[#7C9A92]">{item.percentage}%</span>
                              </div>
                              <div className="h-2 bg-[#E8E8E8] rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-[#D4AF37] rounded-full transition-all duration-500"
                                  style={{ width: `${item.percentage}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevCard}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white border border-[#E8E8E8] rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextCard}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white border border-[#E8E8E8] rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-white transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {communityCards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentCard === index ? 'bg-[#D4AF37] w-8' : 'bg-[#E8E8E8]'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            className="px-8 py-4 bg-[#2C3A4F] text-white rounded-full hover:bg-[#1F2937] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Explore All Discussions
          </button>
        </div>
      </div>
    </section>
  );
}
