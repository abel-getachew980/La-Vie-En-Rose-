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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-natural-rose-tint border border-natural-border-warm text-natural-rose-dark text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-natural-rose-dark" />
            <span>{t('social.label')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-natural-heading leading-tight mb-4">
            {t('social.title')}
          </h2>
          <p className="text-natural-subtext text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {t('social.sub')}
          </p>
        </div>

        {/* Primary Social Cards: Instagram & TikTok */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Instagram Card */}
          <div className="relative overflow-hidden rounded-3xl bg-natural-bg p-8 sm:p-10 border border-natural-border shadow-xs flex flex-col justify-between group hover:border-natural-rose hover:shadow-md hover:shadow-natural-rose/10 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-natural-terracotta text-white flex items-center justify-center shadow-md">
                  <Instagram className="w-7 h-7 text-white" />
                </div>
                <span className="text-[10px] font-bold text-natural-terracotta uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-natural-border">
                  Instagram
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-natural-heading mb-2">
                {RESTAURANT_INFO.instagramHandle}
              </h3>
              <p className="text-natural-subtext text-sm leading-relaxed mb-6 font-normal">
                {t('social.igSubtitle')}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {[t('social.igTag1'), t('social.igTag2'), t('social.igTag3')].map((h, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-white text-natural-terracotta px-3 py-1 rounded-full border border-natural-border"
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
              className="inline-flex items-center justify-center gap-2 bg-natural-terracotta hover:bg-natural-terracotta-dark text-white py-3.5 px-6 rounded-2xl font-bold uppercase text-xs tracking-wider shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              <span>{t('social.followIg')}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* TikTok Card */}
          <div className="relative overflow-hidden rounded-3xl bg-natural-bg p-8 sm:p-10 border border-natural-border shadow-xs flex flex-col justify-between group hover:border-natural-rose hover:shadow-md hover:shadow-natural-rose/10 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-natural-heading text-white flex items-center justify-center shadow-md">
                  <Video className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-bold text-natural-text uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-natural-border">
                  TikTok
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-natural-heading mb-2">
                {RESTAURANT_INFO.tiktokHandle}
              </h3>
              <p className="text-natural-subtext text-sm leading-relaxed mb-6 font-normal">
                {t('social.ttSubtitle')}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {[t('social.ttTag1'), t('social.ttTag2'), t('social.ttTag3')].map((h, i) => (
                  <span
                    key={i}
                    className="text-xs font-bold bg-white text-natural-text px-3 py-1 rounded-full border border-natural-border"
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
              className="inline-flex items-center justify-center gap-2 bg-natural-heading hover:bg-natural-dark text-white py-3.5 px-6 rounded-2xl font-bold uppercase text-xs tracking-wider shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Video className="w-4 h-4" />
              <span>{t('social.watchTiktok')}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
