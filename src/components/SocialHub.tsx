import React from 'react';
import {
  Instagram,
  Sparkles,
  ExternalLink,
  Play,
  Heart,
  MessageCircle,
  Share2,
  Video,
  Flame
} from 'lucide-react';
import { RESTAURANT_INFO, SOCIAL_CARDS } from '../data/restaurantData';

import lunchhImg from '../assets/lunchh.webp';
import breakfastImg from '../assets/breakfast.webp';
import lunchImg from '../assets/lunch.webp';
import coffeeImg from '../assets/coffee.jpg';

import { useLanguage } from '../context/LanguageContext';

export const SocialHub: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="social" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf1f1] border border-[#f5dada] text-[#d48e8e] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d48e8e]" />
            <span>{t('social.label')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a2b2b] leading-tight mb-4">
            {t('social.title')}
          </h2>
          <p className="text-[#8a7272] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {t('social.sub')}
          </p>
        </div>

        {/* Primary Social Cards: Instagram & TikTok */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Instagram Card */}
          <div className="relative overflow-hidden rounded-3xl bg-[#fdfaf8] p-8 sm:p-10 border border-[#f3e9e2] shadow-xs flex flex-col justify-between group hover:border-[#e6a4a4] hover:shadow-md hover:shadow-[#e6a4a4]/10 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#7c4d4d] text-white flex items-center justify-center shadow-md">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <span className="text-[10px] font-bold text-[#7c4d4d] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#f3e9e2]">
                  Instagram
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4a2b2b] mb-2">
                {RESTAURANT_INFO.instagramHandle}
              </h3>
              <p className="text-[#8a7272] text-sm leading-relaxed mb-6 font-normal">
                {SOCIAL_CARDS[0].subtitle}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {SOCIAL_CARDS[0].highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-white text-[#7c4d4d] px-3 py-1 rounded-full border border-[#f3e9e2]"
                  >
                    #{h.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </div>

            <a
              id="cta-follow-instagram"
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#7c4d4d] hover:bg-[#5a3a3a] text-white py-3.5 px-6 rounded-2xl font-bold uppercase text-xs tracking-wider shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* TikTok Card */}
          <div className="relative overflow-hidden rounded-3xl bg-[#fdfaf8] p-8 sm:p-10 border border-[#f3e9e2] shadow-xs flex flex-col justify-between group hover:border-[#e6a4a4] hover:shadow-md hover:shadow-[#e6a4a4]/10 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#4a2b2b] text-white flex items-center justify-center shadow-md">
                  <Video className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold text-[#4a3a3a] uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-[#f3e9e2]">
                  TikTok
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4a2b2b] mb-2">
                {RESTAURANT_INFO.tiktokHandle}
              </h3>
              <p className="text-[#8a7272] text-sm leading-relaxed mb-6 font-normal">
                {SOCIAL_CARDS[1].subtitle}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {SOCIAL_CARDS[1].highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-white text-[#4a3a3a] px-3 py-1 rounded-full border border-[#f3e9e2]"
                  >
                    #{h.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </div>

            <a
              id="cta-watch-tiktok"
              href={RESTAURANT_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#4a2b2b] hover:bg-[#2b1f1f] text-white py-3.5 px-6 rounded-2xl font-bold uppercase text-xs tracking-wider shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Video className="w-4 h-4" />
              <span>Watch on TikTok</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
