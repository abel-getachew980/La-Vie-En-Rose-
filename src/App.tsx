import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { MenuHighlights } from './components/MenuHighlights';
import { LocationsDirectory } from './components/LocationsDirectory';
import { Testimonials } from './components/Testimonials';
import { SocialHub } from './components/SocialHub';
import { Footer } from './components/Footer';
import { DishModal } from './components/DishModal';
import { MenuItem } from './types';

export default function App() {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfaf8] text-[#4a3a3a] selection:bg-[#f5dada] selection:text-[#4a2b2b]">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Brand Story / Philosophy & Kitchen Video Section */}
        <AboutUs />

        {/* 3. Featured Highlights & Menu Showcase (Incorporating high.png UI) */}
        <MenuHighlights onSelectDish={(dish) => setSelectedDish(dish)} />

        {/* 4. Locations Directory */}
        <LocationsDirectory />

        {/* 5. Customer Testimonials */}
        <Testimonials />

        {/* 6. Social Hub (Instagram & TikTok) */}
        <SocialHub />
      </main>

      {/* Footer with direct dials */}
      <Footer />

      {/* Modal for Dish Highlights */}
      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  );
}
