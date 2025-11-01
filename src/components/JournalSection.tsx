import { Lock } from "lucide-react";

export function JournalSection() {
  return (
    <section id="journal" className="py-24 px-8 bg-[#7C9A92] bg-opacity-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="mb-6 text-[#2C3A4F]"
          style={{ 
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '3rem',
            fontWeight: '300'
          }}
        >
          The Journey Inward
        </h2>
        
        <p 
          className="mb-12 text-[#7C9A92] max-w-2xl mx-auto"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Reflection is the bridge between a cosmic hint and personal growth. Connect your 
          daily predictions to your real-life experiences.
        </p>

        {/* Interactive text area */}
        <div className="mb-8">
          <textarea
            placeholder="What's on your mind today?"
            className="w-full h-40 px-6 py-4 bg-white border-2 border-[#E8E8E8] rounded-2xl focus:border-[#D4AF37] focus:outline-none resize-none text-[#2C3A4F] placeholder-[#7C9A92] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </div>

        <div className="flex items-center justify-center gap-2 mb-8 text-[#7C9A92] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          <Lock className="w-4 h-4" />
          <span>Your journal is private, encrypted, and for your eyes only.</span>
        </div>

        <button 
          className="px-8 py-4 bg-white text-[#2C3A4F] rounded-full hover:bg-[#D4AF37] hover:text-white transition-all shadow-lg hover:shadow-xl"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Open My Journal
        </button>
      </div>
    </section>
  );
}
