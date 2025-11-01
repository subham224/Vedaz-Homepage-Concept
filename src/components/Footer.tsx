import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2C3A4F] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 */}
          <div style={{ fontFamily: "'Inter', sans-serif" }}>
            <h4 className="mb-4 text-[#D4AF37]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              About
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  About Vedaz
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div style={{ fontFamily: "'Inter', sans-serif" }}>
            <h4 className="mb-4 text-[#D4AF37]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Support
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  FAQ & Support
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-[#D4AF37] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div style={{ fontFamily: "'Inter', sans-serif" }}>
            <h4 className="mb-4 text-[#D4AF37]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <button className="px-6 py-3 bg-[#D4AF37] hover:bg-[#C19B2A] text-white rounded-full transition-colors">
              Download the App
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
          © 2025 Vedaz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
