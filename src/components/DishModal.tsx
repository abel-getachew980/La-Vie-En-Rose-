import React from 'react';
import { X, ExternalLink, MapPin, Sparkles, CheckCircle2, UtensilsCrossed } from 'lucide-react';
import { MenuItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface DishModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  if (!dish) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#f3e9e2] my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors backdrop-blur-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image */}
        <div className="relative aspect-[16/10] bg-stone-900">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
            <div>
              <span className="text-[10px] font-bold text-[#f5dada] uppercase tracking-widest block mb-1">
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
          <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#f3e9e2]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#fdf1f1] text-[#7c4d4d] border border-[#f5dada]">
                {dish.branchAvailability}
              </span>
              {dish.isFastingFriendly && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#fdf1f1] text-[#d48e8e] border border-[#f5dada]">
                  100% Fasting
                </span>
              )}
            </div>
            {dish.price && (
              <span className="font-serif text-xl font-bold text-[#7c4d4d]">
                {dish.price}
              </span>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-[10px] font-bold text-[#8a7a7a] uppercase tracking-wider mb-1.5">
              Culinary Description
            </h4>
            <p className="text-[#4a3a3a] text-sm leading-relaxed font-normal">{dish.description}</p>
          </div>

          {/* Tags */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-1.5">
                {dish.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#fdfaf8] text-[#8a7a7a] px-3 py-1 rounded-xl font-bold border border-[#f3e9e2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Branch Availability Details */}
          <div className="p-3.5 rounded-2xl bg-[#fdfaf8] border border-[#f3e9e2] mb-6 text-xs text-[#8a7a7a] flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#7c4d4d] flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-[#4a2b2b]">Branch Note: </span>
              {dish.branchAvailability === 'Bulbula Branch Only' ? (
                <span>Exclusive to our Bole Bulbula branch stone oven kitchen.</span>
              ) : dish.branchAvailability === 'Order at Any Branch' ? (
                <span>Custom celebratory cake orders can be placed at Summit, Bole Rwanda, or Bulbula.</span>
              ) : (
                <span>Freshly prepared and available at Summit, Bole Rwanda, and Bole Bulbula branches.</span>
              )}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href={RESTAURANT_INFO.topFoodMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-[#7c4d4d] hover:bg-[#5a3a3a] text-white py-3 rounded-2xl font-bold uppercase text-xs tracking-wider shadow-sm transition-colors"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Order on TopFood</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-2xl border border-[#f3e9e2] text-[#4a3a3a] hover:bg-[#fdfaf8] text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
