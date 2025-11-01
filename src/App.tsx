import { HeroSection } from "./components/HeroSection";
import { PredictionCards } from "./components/PredictionCards";
import { AIGuidesSection } from "./components/AIGuidesSection";
import { JournalSection } from "./components/JournalSection";
import { CommunitySection } from "./components/CommunitySection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Load custom fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap');
        `}
      </style>
      
      <HeroSection />
      <PredictionCards />
      <AIGuidesSection />
      <JournalSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
