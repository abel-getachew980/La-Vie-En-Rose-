import React from 'react';
import {
  Phone,
  MapPin,
  UtensilsCrossed,
  Instagram,
  Video,
  Heart,
  ArrowUp,
  ExternalLink
} from 'lucide-react';
import { RESTAURANT_INFO, BRANCH_LOCATIONS } from '../data/restaurantData';
import { smoothScrollTo, scrollToTop as smoothScrollToTop } from '../utils/smoothScroll';

export const Footer: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href, { updateHash: true });
  };

  const handleBackToTop = () => {
    smoothScrollToTop(750);
  };

  return (
    <footer className="bg-[#2b1f1f] text-[#dcc9bb] pt-16 pb-12 border-t border-[#4a3535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#7c4d4d] flex items-center justify-center text-white font-serif font-bold text-lg italic shadow-sm">
                R
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  La Vie En Rose
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#f5dada] block">
                  Café &amp; Restaurant
                </span>
              </div>
            </div>

            <p className="text-[#dcc9bb] text-sm leading-relaxed mb-6 font-normal">
              Aesthetic dining, vibrant Greek island-inspired atmosphere, fasting delicacies, and handcrafted artisan pastries across Addis Ababa.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#3a2a2a] hover:bg-[#7c4d4d] text-[#dcc9bb] hover:text-white flex items-center justify-center transition-colors border border-[#4a3535]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#3a2a2a] hover:bg-[#7c4d4d] text-[#dcc9bb] hover:text-white flex items-center justify-center transition-colors border border-[#4a3535]"
                aria-label="TikTok"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.topFoodMenuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7c4d4d] hover:bg-[#5a3a3a] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>TopFood Menu</span>
              </a>
            </div>
          </div>

          {/* Branch Direct-Dial Directory */}
          <div className="lg:col-span-5">
            <h4 className="font-serif text-white text-base font-bold mb-4 tracking-wide uppercase text-xs text-[#f5dada]">
              Branch Direct-Dial Numbers
            </h4>
            <div className="space-y-3">
              {BRANCH_LOCATIONS.map((branch) => (
                <div
                  key={branch.id}
                  className="p-3.5 rounded-2xl bg-[#352525] border border-[#4a3535] flex items-center justify-between hover:border-[#7c4d4d] transition-colors"
                >
                  <div>
                    <div className="text-white text-sm font-bold">{branch.name}</div>
                    <div className="text-[11px] text-[#dcc9bb]">{branch.keyFeatures}</div>
                  </div>
                  <a
                    href={`tel:${branch.phoneRaw}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7c4d4d] hover:bg-[#5a3a3a] text-white text-xs font-mono font-bold transition-colors shadow-xs"
                  >
                    <Phone className="w-3 h-3" />
                    <span>{branch.phone}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-white text-base font-bold mb-4 tracking-wide uppercase text-xs text-[#f5dada]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#dcc9bb]">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="hover:text-[#f5dada] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-[#f5dada] transition-colors"
                >
                  The Philosophy &amp; Kitchen
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleLinkClick(e, '#menu')}
                  className="hover:text-[#f5dada] transition-colors"
                >
                  Menu &amp; Highlights
                </a>
              </li>
              <li>
                <a
                  href="#locations"
                  onClick={(e) => handleLinkClick(e, '#locations')}
                  className="hover:text-[#f5dada] transition-colors"
                >
                  Locations &amp; Directions
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => handleLinkClick(e, '#reviews')}
                  className="hover:text-[#f5dada] transition-colors"
                >
                  Customer Reviews
                </a>
              </li>
              <li>
                <a
                  href="#social"
                  onClick={(e) => handleLinkClick(e, '#social')}
                  className="hover:text-[#f5dada] transition-colors"
                >
                  Join the Rose Family
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={RESTAURANT_INFO.topFoodMenuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#f5dada] hover:text-white font-bold text-xs uppercase tracking-wider"
                >
                  <span>Order on TopFood App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#4a3535] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a89587]">
          <div>
            <span className="text-[#dcc9bb] font-bold">La Vie En Rose Café &amp; Restaurant</span> — {RESTAURANT_INFO.city}.
            <div className="mt-1">
              Copyright &copy; {RESTAURANT_INFO.copyrightYear} La Vie En Rose Café &amp; Restaurant. All rights reserved.
            </div>
          </div>

          <button
            onClick={handleBackToTop}
            className="inline-flex items-center gap-1.5 text-[#dcc9bb] hover:text-white px-3.5 py-1.5 rounded-xl bg-[#352525] hover:bg-[#4a3535] border border-[#4a3535] transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
