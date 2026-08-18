import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  ExternalLink,
  Clock,
  Sparkles,
  Copy,
  Check,
  Navigation,
  Compass
} from 'lucide-react';
import { BRANCH_LOCATIONS } from '../data/restaurantData';
import { useLanguage } from '../context/LanguageContext';

export const LocationsDirectory: React.FC = () => {
  const { t } = useLanguage();
  const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCH_LOCATIONS[0].id);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const localizedBranchLocations = BRANCH_LOCATIONS.map((b) => {
    let keyPrefix = 'location.summit';
    if (b.id === 'bole-rwanda') keyPrefix = 'location.boleRwanda';
    if (b.id === 'bole-bulbula') keyPrefix = 'location.boleBulbula';

    return {
      ...b,
      name: t(`${keyPrefix}.name`) || b.name,
      neighborhood: t(`${keyPrefix}.neighborhood`) || b.neighborhood,
      keyFeatures: t(`${keyPrefix}.features`) || b.keyFeatures,
      highlightTag: t(`${keyPrefix}.tag`) || b.highlightTag,
      hours: t(`${keyPrefix}.hours`) || b.hours,
      addressDetails: t(`${keyPrefix}.address`) || b.addressDetails,
      ambiance: t(`${keyPrefix}.ambiance`) || b.ambiance,
    };
  });

  const selectedBranch =
    localizedBranchLocations.find((b) => b.id === selectedBranchId) || localizedBranchLocations[0];

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section id="locations" className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-natural-rose-tint border border-natural-border-warm text-natural-rose-dark text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-natural-terracotta" />
            <span>{t('locations.label')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-natural-heading leading-tight mb-4">
            {t('locations.title')}
          </h2>
          <p className="text-natural-subtext text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {t('locations.sub')}
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {localizedBranchLocations.map((branch) => {
            const isSelected = branch.id === selectedBranchId;
            const directionsLink =
              branch.directionsUrl ||
              `https://www.google.com/maps/dir/?api=1&destination=${branch.coordinates.lat},${branch.coordinates.lng}`;

            return (
              <div
                key={branch.id}
                id={`branch-card-${branch.id}`}
                onClick={() => setSelectedBranchId(branch.id)}
                className={`group rounded-3xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-natural-bg border-natural-rose shadow-lg shadow-natural-rose/15 ring-2 ring-natural-rose/40'
                    : 'bg-natural-bg border-natural-border hover:bg-white hover:border-natural-rose hover:shadow-md'
                }`}
              >
                <div>
                  {/* Image & Tag */}
                  <div className="relative aspect-16/10 rounded-2xl overflow-hidden mb-5 bg-stone-200">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {branch.highlightTag && (
                      <div className="absolute top-3 left-3 bg-natural-terracotta text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {branch.highlightTag}
                      </div>
                    )}
                  </div>

                  {/* Branch Name & Neighborhood */}
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-bold text-natural-heading mb-1 group-hover:text-natural-terracotta transition-colors">
                      {branch.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-natural-rose-dark uppercase tracking-wider">
                        {branch.neighborhood}
                      </div>
                      <div className="text-[10px] font-mono font-semibold text-natural-muted bg-white px-2 py-0.5 rounded-md border border-natural-border">
                        {branch.coordinates.formatted}
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="p-3.5 rounded-2xl bg-white border border-natural-border mb-5">
                    <div className="text-[10px] font-bold text-natural-muted uppercase tracking-wider mb-1">
                      {t('locations.keyHighlights')}
                    </div>
                    <p className="text-sm font-medium text-natural-text">{branch.keyFeatures}</p>
                  </div>

                  {/* Contact Number & Hours */}
                  <div className="space-y-2 mb-6 text-xs text-natural-muted">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-natural-border">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-natural-terracotta" />
                        <span className="font-mono font-bold text-natural-text">{branch.phone}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyPhone(branch.phone);
                        }}
                        className="p-1 text-natural-muted hover:text-natural-terracotta cursor-pointer"
                        title={t('locations.copyPhone')}
                      >
                        {copiedPhone === branch.phone ? (
                          <Check className="w-3.5 h-3.5 text-natural-terracotta" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-2 px-1 text-natural-muted">
                      <Clock className="w-3.5 h-3.5 text-natural-muted shrink-0" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-natural-border flex items-center gap-3">
                  <a
                    id={`btn-directions-${branch.id}`}
                    href={directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-natural-terracotta hover:bg-natural-terracotta-dark text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-sm group/btn cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    <span>{t('locations.getDirections')}</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>

                  <a
                    href={`tel:${branch.phoneRaw}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center p-2.5 bg-white hover:bg-natural-rose-tint text-natural-text hover:text-natural-terracotta border border-natural-border rounded-xl transition-colors shadow-xs"
                    title={`Call ${branch.name}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Branch Detail Spotlight Card */}
        <div className="bg-natural-bg rounded-3xl p-8 sm:p-10 border border-natural-border shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-natural-rose-dark uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('locations.spotlightTitle')}</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-natural-heading mb-3">
                {selectedBranch.name} — {selectedBranch.neighborhood}
              </h3>
              <p className="text-natural-subtext text-base leading-relaxed mb-6 font-normal">
                {selectedBranch.ambiance}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-natural-text">
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-natural-border">
                  <Clock className="w-4 h-4 text-natural-terracotta" />
                  <span>{selectedBranch.hours}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-natural-border">
                  <MapPin className="w-4 h-4 text-natural-terracotta" />
                  <span>{selectedBranch.addressDetails}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-natural-border">
                  <Compass className="w-4 h-4 text-natural-terracotta" />
                  <span className="font-mono text-xs font-semibold">{selectedBranch.coordinates.formatted}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                id="btn-spotlight-directions"
                href={
                  selectedBranch.directionsUrl ||
                  `https://www.google.com/maps/dir/?api=1&destination=${selectedBranch.coordinates.lat},${selectedBranch.coordinates.lng}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-natural-terracotta hover:bg-natural-terracotta-dark text-white py-3.5 rounded-2xl font-bold uppercase text-xs tracking-wider shadow-sm transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>{t('locations.getDirections')} ({selectedBranch.name.replace(' Branch', '')})</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={`tel:${selectedBranch.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-natural-rose-tint text-natural-text hover:text-natural-terracotta border border-natural-border py-3.5 rounded-2xl font-bold uppercase text-xs tracking-widest transition-all"
              >
                <Phone className="w-4 h-4 text-natural-terracotta" />
                <span>{t('locations.directDial')} {selectedBranch.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
