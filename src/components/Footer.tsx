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
import { useLanguage } from '../context/LanguageContext';

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.901 2.875 2.896 2.896 0 0 1-2.887-2.875 2.896 2.896 0 0 1 2.887-2.876c.414 0 .8.093 1.15.253V9.529a6.326 6.326 0 0 0-1.15-.106 6.34 6.34 0 0 0-6.333 6.34 6.34 6.34 0 0 0 6.333 6.34 6.34 6.34 0 0 0 6.334-6.34V9.05a8.212 8.212 0 0 0 4.782 1.527V7.132a4.835 4.835 0 0 1-1.003-.446z" />
  </svg>
);

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleBackToTop = () => {
    smoothScrollToTop(750);
  };

  return (
    <footer className="bg-natural-dark text-natural-sand pt-16 pb-12 border-t border-[#4a3535]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-natural-terracotta flex items-center justify-center text-white font-serif font-bold text-lg italic shadow-sm">
                R
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">
                  La Vie En Rose
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-natural-border-warm block">
                  {t('nav.cafeRestaurant')}
                </span>
              </div>
            </div>

            <p className="text-natural-sand text-sm leading-relaxed mb-6 font-normal">
              {t('footer.description')}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#3a2a2a] hover:bg-natural-terracotta text-natural-sand hover:text-white flex items-center justify-center transition-colors border border-[#4a3535]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#3a2a2a] hover:bg-natural-terracotta text-natural-sand hover:text-white flex items-center justify-center transition-colors border border-[#4a3535]"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={RESTAURANT_INFO.topFoodMenuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-natural-terracotta hover:bg-natural-terracotta-dark text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>TopFood Menu</span>
              </a>
            </div>
          </div>

          {/* Branch Direct-Dial Directory */}
          <div className="lg:col-span-7">
            <h4 className="font-serif text-white text-base font-bold mb-4 tracking-wide uppercase text-xs text-natural-border-warm">
              {t('footer.branchNumbers')}
            </h4>
            <div className="space-y-3">
              {BRANCH_LOCATIONS.map((branch) => {
                let keyPrefix = 'location.summit';
                if (branch.id === 'bole-rwanda') keyPrefix = 'location.boleRwanda';
                if (branch.id === 'bole-bulbula') keyPrefix = 'location.boleBulbula';

                const localizedName = t(`${keyPrefix}.name`) || branch.name;
                const localizedFeatures = t(`${keyPrefix}.features`) || branch.keyFeatures;

                return (
                  <div
                    key={branch.id}
                    className="p-3.5 rounded-2xl bg-[#352525] border border-[#4a3535] flex items-center justify-between hover:border-natural-terracotta transition-colors"
                  >
                    <div>
                      <div className="text-white text-sm font-bold">{localizedName}</div>
                      <div className="text-[11px] text-natural-sand">{localizedFeatures}</div>
                    </div>
                    <a
                      href={`tel:${branch.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-natural-terracotta hover:bg-natural-terracotta-dark text-white text-xs font-mono font-bold transition-colors shadow-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{branch.phone}</span>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-[#4a3535] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a89587]">
          <div>
            <span className="text-natural-sand font-bold">La Vie En Rose Café &amp; Restaurant</span> — {RESTAURANT_INFO.city}.
            <div className="mt-1">
              Copyright &copy; {RESTAURANT_INFO.copyrightYear} La Vie En Rose Café &amp; Restaurant. {t('footer.rights')}
            </div>
          </div>

          <button
            onClick={handleBackToTop}
            className="inline-flex items-center gap-1.5 text-natural-sand hover:text-white px-3.5 py-1.5 rounded-xl bg-[#352525] hover:bg-[#4a3535] border border-[#4a3535] transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            <span>{t('footer.backToTop')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
