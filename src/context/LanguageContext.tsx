import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'am';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header & Nav
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.menu': 'Menu & Highlights',
    'nav.locations': 'Locations',
    'nav.reviews': 'Reviews',
    'nav.social': 'Follow Us',
    'nav.announcement': 'Summit Branch (Feyel Bet) Now Open',
    'nav.topfoodBtn': 'View Digital Menu',
    'nav.branchesCount': '3 Branches in Addis Ababa',
    
    // Hero
    'hero.headline': 'See Life Through Rose-Coloured Glasses',
    'hero.subheadline': 'Aesthetic dining, vibrant brunch spots, and seasonal specialties across Addis Ababa.',
    'hero.announcement': 'Summit Branch Feyel Bet Now Open!',
    'hero.badge1': 'Greek Island Aesthetic',
    'hero.badge2': '100% Fasting Specials',
    'hero.badge3': 'Artisan Pastries & Brews',
    'hero.btnMenu': 'Explore Menu',
    'hero.btnLocations': 'View 3 Branches',
    
    // About Us
    'about.label': 'Brand Story & Philosophy',
    'about.title': 'The Philosophy of La Vie En Rose',
    'about.copy': '"Life in pink" — living with an outlook of continuous positivity, seeing everyday beauty just like when you first fall in love.',
    'about.fasting': 'Who says we can’t spice it up during fasting season? 100% delicious.',
    'about.kitchenTitle': 'Interactive Kitchen Showcase & Atmosphere',
    
    // Menu Highlights
    'menu.label': 'Curated Culinary Highlights',
    'menu.title': 'Explore Our Menu',
    'menu.sub': 'Fasting specials, signature brunch dishes, artisan brews, and handcrafted pastries.',
    'menu.filterAll': 'All Culinary Items',
    'menu.filterFasting': '100% Fasting Specials',
    'menu.filterSignature': 'Signature Favorites',
    'menu.viewDigital': 'View Full Menu on TopFood',
    
    // Locations
    'locations.label': 'Our Addis Ababa Branches',
    'locations.title': 'Visit Our 3 Locations',
    'locations.sub': 'Summit (Feyel Bet), Bole Rwanda, and Bole Bulbula branches.',
    'locations.directions': 'Get Directions',
    'locations.call': 'Call Branch',
    'locations.hours': 'Hours',
    
    // Reviews
    'reviews.label': 'Guest Experiences',
    'reviews.title': 'What Our Guests Say',
    'reviews.sub': 'Heartfelt feedback from our lovely guests across Addis Ababa.',
    
    // Social Hub
    'social.label': 'Join Our Community',
    'social.title': 'Follow La Vie En Rose',
    'social.sub': 'Tag @lavieenrose_addis on Instagram & TikTok to share your rose moments.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.tagline': 'Aesthetic Cafe & Restaurant in Addis Ababa, Ethiopia.',
  },
  am: {
    // Header & Nav
    'nav.home': 'ዋና ገፅ',
    'nav.about': 'ስለ እኛ',
    'nav.menu': 'ሜኑ እና ልዩ ምግቦች',
    'nav.locations': 'ቅርንጫፎቻችን',
    'nav.reviews': 'የደንበኞች አስተያየት',
    'nav.social': 'ተከተሉን',
    'nav.announcement': 'የሱሚት (ፈየል ቤት) ቅርንጫፍ ተከፍቷል!',
    'nav.topfoodBtn': 'ሜኑ ይመልከቱ',
    'nav.branchesCount': 'በአዲስ አበባ 3 ቅርንጫፎች',
    
    // Hero
    'hero.headline': 'ሕይወትን በሮዝ መነፅር ይመልከቱ',
    'hero.subheadline': 'ውብ የካፌና ሬስቶራንት አየር፣ ጣፋጭ የቁርስና የምሳ ምግቦች በአዲስ አበባ።',
    'hero.announcement': 'የሱሚት ፈየል ቤት ቅርንጫፍ አሁን ተከፍቷል!',
    'hero.badge1': 'የግሪክ ደሴቶች ዲዛይን',
    'hero.badge2': '100% የጾም ምግቦች',
    'hero.badge3': 'የቤት ውስጥ ኬኮችና ቡና',
    'hero.btnMenu': 'ሜኑ ይመልከቱ',
    'hero.btnLocations': 'ቅርንጫፎችን ይመልከቱ',
    
    // About Us
    'about.label': 'የእኛ ታሪክ እና ፍልስፍና',
    'about.title': 'የላ ቪ ኤን ሮዝ ፍልስፍና',
    'about.copy': '"ሕይወት በሮዝ ቀለም" — ዘወትር በአዎንታዊነት መኖር፣ የዕለት ተዕለት ውበትን በመውደድ ስሜት ማየት።',
    'about.fasting': 'በጾም ወቅት በጣፋጭ ምግቦች መደሰት አይቻልም ያለው ማን ነው? 100% ጣፋጭ።',
    'about.kitchenTitle': 'የወጥ ቤት ዝግጅት እና የካፌው ውበት',
    
    // Menu Highlights
    'menu.label': 'ልዩ የምግብ አቅርቦቶች',
    'menu.title': 'ሜኑአችንን ይጎብኙ',
    'menu.sub': 'የጾም ምግቦች፣ የቁርስና ምሳ ምርጫዎች፣ ትኩስ ቡናዎች እና ኬኮች።',
    'menu.filterAll': 'ሁሉም ምግቦች',
    'menu.filterFasting': '100% የጾም ምግቦች',
    'menu.filterSignature': 'የተመረጡ ምግቦች',
    'menu.viewDigital': 'ሙሉ ሜኑ በTopFood ይመልከቱ',
    
    // Locations
    'locations.label': 'በአዲስ አበባ የሚገኙ ቅርንጫፎቻችን',
    'locations.title': '3 ቅርንጫፎቻችንን ይጎብኙ',
    'locations.sub': 'ሱሚት (ፈየል ቤት)፣ ቦሌ ሩዋንዳ እና ቦሌ ቡልቡላ ቅርንጫፎች።',
    'locations.directions': 'አቅጣጫ ያግኙ',
    'locations.call': 'ደውሉ',
    'locations.hours': 'የሥራ ሰዓት',
    
    // Reviews
    'reviews.label': 'የደንበኞች ልምድ',
    'reviews.title': 'ደንበኞቻችን ምን ይላሉ?',
    'reviews.sub': 'ከክቡራት ደንበኞቻችን የተሰጡ ከልብ የመነጩ አስተያየቶች።',
    
    // Social Hub
    'social.label': 'ማህበረሰባችንን ይቀላቀሉ',
    'social.title': 'ላ ቪ ኤን ሮዝን ይከተሉ',
    'social.sub': 'በኢንስታግራም እና ቲክቶክ @lavieenrose_addis ብለው ይከተሉን።',
    
    // Footer
    'footer.rights': 'መብቱ በህግ የተጠበቀ ነው።',
    'footer.tagline': 'ውብ ካፌ እና ሬስቶራንት በአዲስ አበባ፣ ኢትዮጵያ።',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'am' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
