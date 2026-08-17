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
import { BranchLocation } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const LocationsDirectory: React.FC = () => {
  const { t } = useLanguage();
  const [selectedBranchId, setSelectedBranchId] = useState<string>(BRANCH_LOCATIONS[0].id);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const selectedBranch =
    BRANCH_LOCATIONS.find((b) => b.id === selectedBranchId) || BRANCH_LOCATIONS[0];

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  return (
    <section id="locations" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf1f1] border border-[#f5dada] text-[#d48e8e] text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#7c4d4d]" />
            <span>{t('locations.label')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a2b2b] leading-tight mb-4">
            {t('locations.title')}
          </h2>
          <p className="text-[#8a7272] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            {t('locations.sub')}
          </p>
        </div>

        {/* Branch Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {BRANCH_LOCATIONS.map((branch) => {
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
                    ? 'bg-[#fdfaf8] border-[#e6a4a4] shadow-lg shadow-[#e6a4a4]/15 ring-2 ring-[#e6a4a4]/40'
                    : 'bg-[#fdfaf8] border-[#f3e9e2] hover:bg-white hover:border-[#e6a4a4] hover:shadow-md'
                }`}
              >
                <div>
                  {/* Image & Tag */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-stone-200">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {branch.highlightTag && (
                      <div className="absolute top-3 left-3 bg-[#7c4d4d] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                        {branch.highlightTag}
                      </div>
                    )}
                  </div>

                  {/* Branch Name & Neighborhood */}
                  <div className="mb-4">
                    <h3 className="font-serif text-2xl font-bold text-[#4a2b2b] mb-1 group-hover:text-[#7c4d4d] transition-colors">
                      {branch.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-[#d48e8e] uppercase tracking-wider">
                        {branch.neighborhood}
                      </div>
                      <div className="text-[10px] font-mono font-semibold text-[#8a7a7a] bg-white px-2 py-0.5 rounded-md border border-[#f3e9e2]">
                        {branch.coordinates.formatted}
                      </div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="p-3.5 rounded-2xl bg-white border border-[#f3e9e2] mb-5">
                    <div className="text-[10px] font-bold text-[#8a7a7a] uppercase tracking-wider mb-1">
                      Key Highlights
                    </div>
                    <p className="text-sm font-medium text-[#4a3a3a]">{branch.keyFeatures}</p>
                  </div>

                  {/* Contact Number & Hours */}
                  <div className="space-y-2 mb-6 text-xs text-[#8a7a7a]">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#f3e9e2]">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#7c4d4d]" />
                        <span className="font-mono font-bold text-[#4a3a3a]">{branch.phone}</span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyPhone(branch.phone);
                        }}
                        className="p-1 text-[#8a7a7a] hover:text-[#7c4d4d] cursor-pointer"
                        title="Copy phone number"
                      >
                        {copiedPhone === branch.phone ? (
                          <Check className="w-3.5 h-3.5 text-[#7c4d4d]" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-2 px-1 text-[#8a7a7a]">
                      <Clock className="w-3.5 h-3.5 text-[#8a7a7a] flex-shrink-0" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#f3e9e2] flex items-center gap-3">
                  <a
                    id={`btn-directions-${branch.id}`}
                    href={directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#7c4d4d] hover:bg-[#5a3a3a] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-sm group/btn cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>

                  <a
                    href={`tel:${branch.phoneRaw}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center p-2.5 bg-white hover:bg-[#fdf1f1] text-[#4a3a3a] hover:text-[#7c4d4d] border border-[#f3e9e2] rounded-xl transition-colors shadow-xs"
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
        <div className="bg-[#fdfaf8] rounded-3xl p-8 sm:p-10 border border-[#f3e9e2] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d48e8e] uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Branch Details</span>
              </div>
              <h3 className="font-serif text-3xl font-bold text-[#4a2b2b] mb-3">
                {selectedBranch.name} — {selectedBranch.neighborhood}
              </h3>
              <p className="text-[#8a7272] text-base leading-relaxed mb-6 font-normal">
                {selectedBranch.ambiance}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#4a3a3a]">
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#f3e9e2]">
                  <Clock className="w-4 h-4 text-[#7c4d4d]" />
                  <span>{selectedBranch.hours}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#f3e9e2]">
                  <MapPin className="w-4 h-4 text-[#7c4d4d]" />
                  <span>{selectedBranch.addressDetails}</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#f3e9e2]">
                  <Compass className="w-4 h-4 text-[#7c4d4d]" />
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
                className="w-full flex items-center justify-center gap-2 bg-[#7c4d4d] hover:bg-[#5a3a3a] text-white py-3.5 rounded-2xl font-bold uppercase text-xs tracking-wider shadow-sm transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions ({selectedBranch.name.replace(' Branch', '')})</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <a
                href={`tel:${selectedBranch.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-white hover:bg-[#fdf1f1] text-[#4a3a3a] hover:text-[#7c4d4d] border border-[#f3e9e2] py-3.5 rounded-2xl font-bold uppercase text-xs tracking-widest transition-all"
              >
                <Phone className="w-4 h-4 text-[#7c4d4d]" />
                <span>Direct Dial: {selectedBranch.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
