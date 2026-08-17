import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, MapPin, Phone, ExternalLink, Menu, X, Sparkles, Globe } from 'lucide-react';
import { RESTAURANT_INFO, BRANCH_LOCATIONS } from '../data/restaurantData';
import { smoothScrollTo } from '../utils/smoothScroll';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenReservation?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active nav based on scroll position
      const sections = ['home', 'about', 'menu', 'locations', 'reviews', 'social'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveNav(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { labelKey: 'nav.home', href: '#home', id: 'home' },
    { labelKey: 'nav.about', href: '#about', id: 'about' },
    { labelKey: 'nav.menu', href: '#menu', id: 'menu' },
    { labelKey: 'nav.locations', href: '#locations', id: 'locations' },
    { labelKey: 'nav.reviews', href: '#reviews', id: 'reviews' },
    { labelKey: 'nav.social', href: '#social', id: 'social' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    smoothScrollTo(href, { updateHash: true });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-xs border-b border-[#f3e9e2] py-3'
          : 'bg-[#fdfaf8]/90 backdrop-blur-sm border-b border-[#f3e9e2] py-4'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="hidden lg:flex items-center justify-between max-w-7xl mx-auto px-6 text-xs text-[#8a7a7a] mb-2 border-b border-[#f3e9e2] pb-1.5">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase text-[10px] tracking-tight text-[#d48e8e] bg-[#fdf1f1] px-3 py-0.5 rounded-full border border-[#f5dada]">
            <Sparkles className="w-3 h-3 text-[#d48e8e]" />
            {t('nav.announcement')}
          </span>
          <span className="text-[#dcc9bb]">|</span>
          <span className="text-[#8a7272]">Greek Island Aesthetic • 100% Fasting Specials • Artisan Pastries</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#e6a4a4]" />
            <span>{t('nav.branchesCount')}</span>
          </div>
          <span className="text-[#dcc9bb]">|</span>
          <a
            href={`tel:${BRANCH_LOCATIONS[0].phoneRaw}`}
            className="hover:text-[#7c4d4d] font-medium transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-[#e6a4a4]" />
            {BRANCH_LOCATIONS[0].phone}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            id="brand-logo-link"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-[#e6a4a4] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
              <span className="font-serif italic text-xl font-bold">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-tight text-[#7c4d4d] leading-tight group-hover:text-[#5a3a3a] transition-colors">
                La Vie En Rose
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8a7a7a] font-bold">
                Café & Restaurant
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 relative ${
                  activeNav === link.id
                    ? 'text-[#e6a4a4]'
                    : 'text-[#8a7a7a] hover:text-[#7c4d4d]'
                }`}
              >
                {t(link.labelKey)}
                {activeNav === link.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#e6a4a4] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Primary CTA & Language Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            {/* EN / AM Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 bg-[#fdf1f1] hover:bg-[#fbdada] text-[#7c4d4d] border border-[#f5dada] px-3 py-2 rounded-full text-xs font-bold transition-all cursor-pointer shadow-xs"
              title="Switch Language / ቋንቋ ይቀይሩ"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'EN | አማርኛ' : 'አማርኛ | EN'}</span>
            </button>

            <a
              id="header-cta-topfood"
              href={RESTAURANT_INFO.topFoodMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#7c4d4d] hover:bg-[#5a3a3a] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>{t('nav.topfoodBtn')}</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile menu controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="text-xs bg-[#fdf1f1] text-[#7c4d4d] border border-[#f5dada] px-2.5 py-1.5 rounded-full font-bold shadow-xs cursor-pointer"
            >
              {language === 'en' ? 'አማርኛ' : 'EN'}
            </button>

            <a
              href={RESTAURANT_INFO.topFoodMenuUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-[#7c4d4d] text-white px-3 py-1.5 rounded-full font-bold uppercase tracking-wider sm:hidden shadow-xs"
            >
              Menu
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#4a3a3a] hover:text-[#2b1f1f] hover:bg-[#f8f1ec] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-white border-b border-[#f3e9e2] px-6 py-5 shadow-xl mt-2 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`py-2 text-sm font-bold uppercase tracking-wider border-b border-[#f3e9e2] ${
                  activeNav === link.id ? 'text-[#e6a4a4]' : 'text-[#8a7a7a]'
                }`}
              >
                {t(link.labelKey)}
              </a>
            ))}

            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.topFoodMenuUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#7c4d4d] text-white py-3 rounded-xl font-bold uppercase text-xs tracking-widest shadow"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>{t('nav.topfoodBtn')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-[#8a7a7a] flex flex-col gap-1">
              <div className="font-bold text-[#4a3a3a] uppercase tracking-wider text-[11px]">Quick Call Any Branch:</div>
              {BRANCH_LOCATIONS.map((b) => (
                <a
                  key={b.id}
                  href={`tel:${b.phoneRaw}`}
                  className="flex items-center justify-between text-[#7c4d4d] py-1"
                >
                  <span>{b.name}</span>
                  <span className="font-mono text-xs">{b.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
