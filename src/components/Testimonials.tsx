import React from 'react';
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-16 bg-natural-bg relative overflow-hidden">
      {/* Decorative ambient subtle background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-natural-rose-tint border border-natural-border-warm text-natural-rose-dark text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-natural-rose-dark" />
            <span>{t('reviews.label')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-natural-heading leading-tight mb-4">
            {t('reviews.title')}
          </h2>
          <p className="text-natural-subtext text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {t('reviews.sub')}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => {
            const num = idx + 1;
            const reviewText = t(`review.${num}.text`) || review.text;
            const reviewRole = t(`review.${num}.role`) || review.role;
            const reviewBranch = t(`review.${num}.branch`) || review.branchVisited;

            return (
              <div
                key={review.id}
                id={`testimonial-card-${review.id}`}
                className="bg-white rounded-3xl p-8 border border-natural-border shadow-xs hover:border-natural-rose hover:shadow-md hover:shadow-natural-rose/10 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  {/* 5-Star Rating rendered via Lucide icons */}
                  <div className="flex items-center gap-1 mb-6 text-natural-terracotta">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-natural-terracotta text-natural-terracotta" />
                    ))}
                    <span className="text-xs font-bold text-natural-muted ml-2 font-mono">5.0 / 5.0</span>
                  </div>

                  {/* Quote symbol */}
                  <Quote className="w-8 h-8 text-natural-border-warm mb-3" />

                  {/* Review Text */}
                  <p className="font-serif text-natural-text text-base sm:text-lg italic leading-relaxed mb-6 font-normal">
                    &ldquo;{reviewText}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-natural-border flex items-center justify-between">
                  <div>
                    <div className="font-serif font-bold text-natural-heading text-base flex items-center gap-1.5">
                      <span>{review.name}</span>
                      <CheckCircle className="w-4 h-4 text-natural-terracotta" />
                    </div>
                    <div className="text-xs text-natural-rose-dark font-bold uppercase tracking-wider">
                      {reviewRole} • {reviewBranch}
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-natural-rose-tint border border-natural-border-warm text-natural-terracotta flex items-center justify-center font-bold text-sm">
                    {review.name.charAt(0)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Rating Callout */}
        <div className="mt-14 max-w-xl mx-auto rounded-3xl bg-white p-6 border border-natural-border shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-natural-rose-tint text-natural-terracotta flex items-center justify-center font-serif text-xl font-bold border border-natural-border-warm">
              5.0
            </div>
            <div>
              <div className="font-bold text-natural-heading text-sm">{t('reviews.calloutTitle')}</div>
              <div className="text-xs text-natural-subtext">{t('reviews.calloutSub')}</div>
            </div>
          </div>
          <div className="flex items-center gap-1 text-natural-terracotta">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-natural-terracotta text-natural-terracotta" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
