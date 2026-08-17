import React from 'react';
import { X, ExternalLink, MapPin, Sparkles, CheckCircle2, UtensilsCrossed } from 'lucide-react';
import { MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';

interface DishModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  const { t, language } = useLanguage();

  if (!dish) return null;

  const branchAvailLabel = language === 'am'
    ? (dish.branchAvailability === 'Bulbula Branch Only' ? 'በቡልቡላ ቅርንጫፍ ብቻ' : dish.branchAvailability === 'Order at Any Branch' ? 'በማንኛውም ቅርንጫፍ ይዘዙ' : 'በሁሉም ቅርንጫፎች')
    : dish.branchAvailability;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-natural-border my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-xs"
          aria-label={t('about.close')}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="relative aspect-16/10 bg-stone-900">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
            <div>
              <span className="text-[10px] font-bold text-natural-border-warm uppercase tracking-widest block mb-1">
                {dish.category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white leading-tight">
                {dish.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Dish Content */}
        <div className="p-6">
          {/* Price & Badges */}
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-natural-border">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-natural-rose-tint text-natural-terracotta border border-natural-border-warm">
                {branchAvailLabel}
              </span>
              {dish.isFastingFriendly && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-natural-rose-tint text-natural-rose-dark border border-natural-border-warm">
                  {t('dish.fasting')}
                </span>
              )}
            </div>
            {dish.price && (
              <span className="font-serif text-xl font-bold text-natural-terracotta">
                {dish.price}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-[10px] font-bold text-natural-subtext uppercase tracking-wider mb-1.5">
              {t('dish.description')}
            </h4>
            <p className="text-natural-text text-sm leading-relaxed font-normal">{dish.description}</p>
          </div>

          {/* Tags */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-1.5">
                {dish.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-natural-bg text-natural-subtext px-3 py-1 rounded-xl font-bold border border-natural-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Branch Availability Details */}
          <div className="p-3.5 rounded-2xl bg-natural-bg border border-natural-border mb-6 text-xs text-natural-subtext flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-natural-terracotta shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-natural-heading">{t('dish.branchNote')} </span>
              {dish.branchAvailability === 'Bulbula Branch Only' ? (
                <span>{t('dish.bulbulaNote')}</span>
              ) : dish.branchAvailability === 'Order at Any Branch' ? (
                <span>{t('dish.preorderNote')}</span>
              ) : (
                <span>{t('dish.allBranchesNote')}</span>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={RESTAURANT_INFO.topFoodMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-natural-terracotta hover:bg-natural-terracotta-dark text-white py-3 rounded-2xl font-bold uppercase text-xs tracking-wider shadow-sm transition-colors"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>{t('dish.orderTopfood')}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-2xl border border-natural-border text-natural-text hover:bg-natural-bg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              {t('about.close')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
