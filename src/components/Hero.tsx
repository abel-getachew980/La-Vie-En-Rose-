import React from 'react';
import { Sparkles, ArrowDown, MapPin, Utensils, Heart, Award, Coffee } from 'lucide-react';
import { RESTAURANT_INFO, BRANCH_LOCATIONS } from '../data/restaurantData';
import lunchhImg from '../assets/lunchh.webp';
import breakfastImg from '../assets/breakfast.webp';
import celebratoryCakeImg from '../assets/celebratory-cake.webp';
import { smoothScrollTo } from '../utils/smoothScroll';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    smoothScrollTo(id, { updateHash: true });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#fdfaf8]"
    >
      {/* Subtle decorative background glow in natural warm blush */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f5dada]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#f3e9e2]/70 rounded-full blur-3xl pointer-events-none -ml-20" />
      <div className="absolute inset-0 bg-[radial-gradient(#e6ded7_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy, Announcement, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Announcement Badge */}
            <div
              id="hero-announcement-badge"
              className="inline-flex items-center gap-2 bg-[#fdf1f1] border border-[#f5dada] text-[#d48e8e] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight mb-6 shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-[#d48e8e]" />
              <span>{t('hero.announcement')}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#e6a4a4]" />
              <span className="text-[#8a7a7a] font-normal normal-case hidden sm:inline">Feyel Bet, Addis Ababa</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-headline"
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[62px] text-[#4a2b2b] font-bold leading-[1.1] tracking-tight mb-6"
            >
              {t('hero.headline')}
            </h1>

            {/* Subheadline */}
            <p
              id="hero-subheadline"
              className="text-[#8a7272] text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mb-8"
            >
              {t('hero.subheadline')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                id="hero-btn-menu"
                onClick={() => scrollToSection('menu')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7c4d4d] hover:bg-[#5a3a3a] text-white px-7 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Utensils className="w-4 h-4" />
                <span>{t('hero.btnMenu')}</span>
              </button>

              <button
                id="hero-btn-locations"
                onClick={() => scrollToSection('locations')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#f8f1ec] text-[#4a3a3a] border border-[#f3e9e2] px-7 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#e6a4a4]" />
                <span>{t('hero.btnLocations')}</span>
              </button>
            </div>

            {/* Feature Value Props Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#f3e9e2] w-full">
              <div className="flex items-center gap-2 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#f3e9e2] text-xs font-semibold text-[#4a3a3a] shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#e6a4a4]" />
                <span>{t('hero.badge1')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#f3e9e2] text-xs font-semibold text-[#4a3a3a] shadow-2xs">
                <Heart className="w-3.5 h-3.5 text-[#e6a4a4]" />
                <span>{t('hero.badge2')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#f3e9e2] text-xs font-semibold text-[#4a3a3a] shadow-2xs">
                <Coffee className="w-3.5 h-3.5 text-[#e6a4a4]" />
                <span>{t('hero.badge3')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collage with Polaroid framing & Greek Island / Neon Rose aesthetic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Featured Photo Frame */}
              <div className="relative z-20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative h-72 sm:h-96 w-full overflow-hidden group">
                  <img
                    src={lunchhImg}
                    alt="La Vie En Rose Cafe Atmosphere & Gourmet Dishes"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-[11px] font-bold uppercase tracking-widest text-[#f5dada]">
                        Aesthetic Dining in Addis Ababa
                      </div>
                      <div className="font-serif text-lg font-bold">
                        Summit Branch • Greek Island Vibe
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Polaroid Card 1: Breakfast / Waffle Dish */}
              <div className="absolute -top-6 -left-6 sm:-left-10 z-30 w-36 sm:w-44 bg-white p-2.5 rounded-2xl shadow-xl border border-[#f3e9e2] rotate-[-6deg] hover:rotate-0 transition-transform duration-300">
                <div className="h-24 sm:h-28 rounded-xl overflow-hidden mb-2 bg-stone-100">
                  <img
                    src={breakfastImg}
                    alt="Belgian Waffles Brunch"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[11px] font-bold text-[#4a3a3a] truncate">Artisan Breakfast &amp; Brunch</div>
                <div className="text-[9px] text-[#d48e8e] font-bold uppercase tracking-wider">All Branches</div>
              </div>

              {/* Floating Polaroid Card 2: Celebratory Cakes / Pastries */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 z-30 w-40 sm:w-48 bg-white p-2.5 rounded-2xl shadow-xl border border-[#f3e9e2] rotate-[5deg] hover:rotate-0 transition-transform duration-300">
                <div className="h-24 sm:h-28 rounded-xl overflow-hidden mb-2 bg-stone-100">
                  <img
                    src={celebratoryCakeImg}
                    alt="Celebratory Artisan Cake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-[11px] font-bold text-[#4a3a3a] truncate">Celebration Cakes</div>
                <div className="text-[9px] text-[#7c4d4d] font-bold uppercase tracking-wider">Custom Pre-Orders</div>
              </div>

              {/* Ambient Circular Stamp Badge */}
              <div className="absolute -top-8 -right-6 z-10 w-24 h-24 rounded-full bg-[#7c4d4d] text-white p-2 flex flex-col items-center justify-center text-center shadow-lg border-2 border-white rotate-12">
                <span className="text-[8px] uppercase tracking-widest font-sans font-bold text-[#f5dada]">Established</span>
                <span className="font-serif text-sm font-bold italic">Addis</span>
                <span className="text-[8px] text-[#f5dada]">Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
