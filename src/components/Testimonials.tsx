import React from 'react';
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-24 bg-[#fdfaf8] relative overflow-hidden">
      {/* Decorative ambient subtle background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf1f1] border border-[#f5dada] text-[#d48e8e] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d48e8e]" />
            <span>{t('reviews.label')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a2b2b] leading-tight mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-[#8a7272] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {t('reviews.sub')}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              id={`testimonial-card-${review.id}`}
              className="bg-white rounded-3xl p-8 border border-[#f3e9e2] shadow-xs hover:border-[#e6a4a4] hover:shadow-md hover:shadow-[#e6a4a4]/10 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* 5-Star Rating rendered via Lucide icons */}
                <div className="flex items-center gap-1 mb-6 text-[#7c4d4d]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#7c4d4d] text-[#7c4d4d]" />
                  ))}
                  <span className="text-xs font-bold text-[#8a7a7a] ml-2 font-mono">5.0 / 5.0</span>
                </div>

                {/* Quote symbol */}
                <Quote className="w-8 h-8 text-[#f5dada] mb-3" />

                {/* Review Text */}
                <p className="font-serif text-[#4a3a3a] text-base sm:text-lg italic leading-relaxed mb-6 font-normal">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#f3e9e2] flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-[#4a2b2b] text-base flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle className="w-4 h-4 text-[#7c4d4d]" />
                  </div>
                  <div className="text-xs text-[#d48e8e] font-bold uppercase tracking-wider">
                    {review.role} • {review.branchVisited}
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#fdf1f1] border border-[#f5dada] text-[#7c4d4d] flex items-center justify-center font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating Callout */}
        <div className="mt-14 max-w-xl mx-auto rounded-3xl bg-white p-6 border border-[#f3e9e2] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#fdf1f1] text-[#7c4d4d] flex items-center justify-center font-serif text-xl font-bold border border-[#f5dada]">
              5.0
            </div>
            <div>
              <div className="font-bold text-[#4a2b2b] text-sm">Loved by Addis Ababa Foodies</div>
              <div className="text-xs text-[#8a7272]">Over 500+ glowing reviews across platforms</div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[#7c4d4d]">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-[#7c4d4d] text-[#7c4d4d]" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
