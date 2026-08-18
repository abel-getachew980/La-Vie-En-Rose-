import React from 'react';
import { Instagram, Sparkles, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.875 2.896 2.896 0 0 1-2.887-2.875 2.896 2.896 0 0 1 2.887-2.876c.414 0 .8.093 1.15.253V9.529a6.326 6.326 0 0 0-1.15-.106 6.34 6.34 0 0 0-6.333 6.34 6.34 6.34 0 0 0 6.333 6.34 6.34 6.34 0 0 0 6.334-6.34V9.05a8.212 8.212 0 0 0 4.782 1.527V7.132a4.835 4.835 0 0 1-1.003-.446z" />
  </svg>
);

export const SocialHub: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="social" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Instagram Card */}
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 border border-natural-border shadow-xs flex flex-col justify-between group hover:border-natural-rose hover:shadow-md hover:shadow-natural-rose/10 transition-all duration-300 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/Instagram.png')" }}>
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-natural-terracotta/90 text-white flex items-center justify-center shadow-lg ring-4 ring-white/20 backdrop-blur-sm">
                  <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
            </div>

            <a
              id="cta-follow-instagram"
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mx-auto inline-flex items-center justify-center gap-2 bg-natural-terracotta hover:bg-natural-terracotta-dark text-white py-3.5 px-6 rounded-2xl font-bold uppercase text-xs tracking-wider shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Instagram className="w-4 h-4" />
              <span>{t('social.followIg')}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* TikTok Card */}
          <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 border border-natural-border shadow-xs flex flex-col justify-between group hover:border-natural-rose hover:shadow-md hover:shadow-natural-rose/10 transition-all duration-300 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/assets/Tiktok.png')" }}>
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-natural-heading/90 text-white flex items-center justify-center shadow-lg ring-4 ring-white/20 backdrop-blur-sm">
                  <TikTokIcon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
              </div>
            </div>

            <a
              id="cta-watch-tiktok"
              href={RESTAURANT_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mx-auto inline-flex items-center justify-center gap-2 bg-natural-heading hover:bg-natural-dark text-white py-3.5 px-6 rounded-2xl font-bold uppercase text-xs tracking-wider shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <TikTokIcon className="w-4 h-4" />
              <span>{t('social.watchTiktok')}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
