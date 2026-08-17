import React from 'react';
import {
  UtensilsCrossed,
  Sparkles,
  ExternalLink,
  Flame,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

import celebratoryCakeImg from '../assets/celebratory-cake.webp';
import breakfastImg from '../assets/breakfast.webp';
import lunchhImg from '../assets/lunchh.webp';
import lunchImg from '../assets/lunch.webp';

interface MenuHighlightsProps {
  onSelectDish?: (dish: MenuItem) => void;
}

export const MenuHighlights: React.FC<MenuHighlightsProps> = () => {
  // 4 Featured Polaroid Cards highlighting the culinary specialties
  const polaroidHighlights = [
    {
      title: 'Celebration Cakes',
      subtitle: 'Artisan Pastry & Tiers',
      image: celebratoryCakeImg,
      rotation: '-rotate-2',
    },
    {
      title: 'Artisan Breakfast',
      subtitle: 'Shakshuka & Waffles',
      image: breakfastImg,
      rotation: 'rotate-1',
    },
    {
      title: 'Fasting Gourmet Specials',
      subtitle: '100% Plant-Based Dishes',
      image: lunchhImg,
      rotation: '-rotate-1',
    },
    {
      title: 'Gourmet Lunch & Dinner',
      subtitle: 'House Savory & Pastas',
      image: lunchImg,
      rotation: 'rotate-2',
    },
  ];

  return (
    <section id="menu" className="py-24 bg-[#fdfaf8] relative">
      {/* Decorative ambiance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf1f1] border border-[#f5dada] text-[#d48e8e] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d48e8e]" />
            <span>Curated Culinary Highlights</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a2b2b] leading-tight mb-4">
            Explore Our Menu
          </h2>
          <p className="text-[#8a7272] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            Fasting specials, signature brunch dishes, artisan brews, and handcrafted pastries.
          </p>

          {/* Fasting Highlight Tagline Callout */}
          <div className="inline-flex items-center gap-3 bg-[#7c4d4d] text-white px-6 py-3 rounded-2xl shadow-md">
            <Flame className="w-5 h-5 text-[#f5dada] flex-shrink-0" />
            <span className="font-serif text-sm sm:text-base font-medium italic">
              {RESTAURANT_INFO.fastingTagline}
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* Banner Card + 4 Polaroid Highlight Frames                                 */}
        {/* ========================================================================= */}
        <div
          id="high-png-ui-container"
          className="relative rounded-3xl bg-[#2b1f1f] p-6 sm:p-10 lg:p-12 mb-12 shadow-2xl overflow-hidden border border-[#4a3535]"
        >
          {/* Subtle colorful neon aurora backdrop in natural blush */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#e6a4a4]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f5dada]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Hero Banner */}
          <div className="relative rounded-2xl overflow-hidden min-h-[260px] sm:min-h-[320px] mb-10 flex flex-col justify-between p-6 sm:p-8 bg-black/40 border border-[#4a3535] shadow-lg">
            {/* Background image overlay */}
            <img
              src={lunchImg}
              alt="A Place of Delight Feast"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />

            {/* Top row: "Menu" pill badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="bg-[#fdfaf8] text-[#4a3a3a] px-3.5 py-1 rounded-md text-xs font-bold tracking-wider uppercase shadow-xs">
                Menu
              </span>
              <span className="text-xs text-[#f5dada] uppercase tracking-widest font-mono hidden sm:inline">
                Addis Ababa • Est. 2026
              </span>
            </div>

            {/* Center Typography */}
            <div className="relative z-10 text-center my-6 max-w-2xl mx-auto">
              <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight mb-2 sm:mb-3 drop-shadow-md">
                A Place of Delight
              </h3>
              <p className="font-serif text-xl sm:text-3xl md:text-4xl text-[#f5dada] font-normal italic drop-shadow-sm">
                Life is a celebration &amp; the table an experience.
              </p>
            </div>

            {/* Bottom row: Circular Logo Stamp on bottom-left */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full border-2 border-white/60 bg-white/10 backdrop-blur-xs flex items-center justify-center text-white">
                  <span className="font-serif text-sm font-bold italic">R</span>
                </div>
                <div className="text-[11px] text-[#dcc9bb] font-medium">
                  <div className="font-serif font-bold text-white">La Vie En Rose</div>
                  <div className="text-[9px] text-[#f5dada] uppercase tracking-wider font-bold">Café &amp; Restaurant</div>
                </div>
              </div>

              <a
                href={RESTAURANT_INFO.topFoodMenuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#f5dada] hover:text-white font-bold uppercase tracking-wider underline underline-offset-4"
              >
                <span>View Full Menu on TopFood</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* 4 Polaroid / Showcase Photo Frames */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {polaroidHighlights.map((card, idx) => (
              <a
                key={idx}
                href={RESTAURANT_INFO.topFoodMenuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`polaroid-frame rounded-2xl cursor-pointer ${card.rotation} group hover:rotate-0 hover:scale-105 transition-all duration-300 block`}
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-stone-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-1 text-center">
                  <h4 className="font-serif text-sm font-bold text-[#4a3a3a] truncate">
                    {card.title}
                  </h4>
                  <p className="text-[11px] text-[#7c4d4d] font-bold uppercase tracking-wider truncate mt-0.5">
                    {card.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Section Primary CTA Button */}
        <div className="text-center">
          <a
            id="menu-cta-topfood-full"
            href={RESTAURANT_INFO.topFoodMenuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#7c4d4d] hover:bg-[#5a3a3a] text-white px-8 py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <UtensilsCrossed className="w-5 h-5" />
            <span>Open Full Digital Menu (TopFood)</span>
            <ExternalLink className="w-4 h-4 opacity-80" />
          </a>
          <p className="text-xs text-[#8a7272] mt-2">
            Browse complete dish listings, beverage pricing, and place orders directly on TopFood.
          </p>
        </div>
      </div>
    </section>
  );
};
