import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Flame,
  ChefHat,
  Eye,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

import lunchImg from '../assets/lunch.webp';
import kitchenVideo from '../assets/kitchen.mp4';
import lunchhImg from '../assets/lunchh.webp';
import fastingVideo from '../assets/fasting.mp4';
import breakfastImg from '../assets/breakfast.webp';
import wholePlaceVideo from '../assets/whole-place.mp4';

interface KitchenScene {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  duration: string;
  description: string;
  image: string;
  videoSrc: string;
  keyHighlights: string[];
}

import { useLanguage } from '../context/LanguageContext';

export const AboutUs: React.FC = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const kitchenScenes: KitchenScene[] = [
    {
      id: 'scene-sizzle',
      title: "Chef's Kitchen: Sizzling Pan & Searing Station",
      subtitle: 'Fresh culinary craft in every service',
      tag: 'Kitchen Live',
      duration: '0:38',
      description:
        'Watch our culinary team expertly sear tender cuts with seasoned onions and aromatic spices over high flames, blending velvety reductions and fragrant steamed dishes.',
      image: lunchImg,
      videoSrc: kitchenVideo,
      keyHighlights: ['Fresh pan searing daily', 'House-made velvety reductions', 'Steamed spiced pilaf'],
    },
    {
      id: 'scene-fasting',
      title: 'Curated Fasting Mastery & Seasonal Indulgence',
      subtitle: 'Flavorful dairy-free & plant-based culinary creations',
      tag: 'Fasting Kitchen',
      duration: '0:42',
      description:
        'From rich dairy-free Genovese pesto to hearty layered fasting vegetable lasagna and crisp avocado wraps, we deliver 100% gourmet indulgence during Ethiopia’s fasting seasons.',
      image: lunchhImg,
      videoSrc: fastingVideo,
      keyHighlights: ['100% plant-based recipes', 'Fresh herbs & olive oils', 'Full flavor without compromise'],
    },
    {
      id: 'scene-atmosphere',
      title: 'Greek Island Aesthetic & Floral Rose Walls',
      subtitle: 'Where gastronomy meets immersive aesthetic ambiance',
      tag: 'Atmosphere Tour',
      duration: '0:30',
      description:
        'Experience the sunlight-bathed marble tables, Greek island-inspired whitewashed archways, and vibrant blooming rose floral walls across our Addis Ababa branches.',
      image: breakfastImg,
      videoSrc: wholePlaceVideo,
      keyHighlights: ['Greek Island architecture', 'Blooming rose floral walls', 'Warm Addis Ababa hospitality'],
    },
  ];

  const currentScene = kitchenScenes[activeSceneIndex];

  // Handle video playback synchronization
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, activeSceneIndex]);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleVideoEnded = () => {
    setActiveSceneIndex((current) => (current + 1) % kitchenScenes.length);
    setProgress(0);
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative subtle background accents in warm blush */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#fdf1f1] rounded-full blur-3xl -translate-y-1/2 -ml-20 pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#f8f1ec] rounded-full blur-3xl -mr-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#fdf1f1] border border-[#f5dada] text-[#d48e8e] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d48e8e]" />
            <span>{t('about.label')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a2b2b] leading-tight mb-6">
            {t('about.title')}
          </h2>
          <div className="relative p-6 sm:p-8 rounded-3xl bg-[#fdfaf8] border border-[#f3e9e2] shadow-xs max-w-2xl mx-auto">
            <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#4a3a3a] italic leading-relaxed font-normal">
              {t('about.copy')}
            </p>
          </div>
        </div>

        {/* Kitchen Video Section: "use the kitchen video in the about us section" */}
        <div
          id="kitchen-video-showcase"
          className="rounded-3xl bg-[#2b1f1f] text-white p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-[#4a3535]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Video Player Display */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e6a4a4] animate-ping" />
                  <span className="text-xs uppercase tracking-wider font-bold text-[#f5dada]">
                    Behind the Scenes • Kitchen Spotlight
                  </span>
                </div>
                <span className="text-xs text-[#dcc9bb] font-mono">
                  Scene {activeSceneIndex + 1} of {kitchenScenes.length}
                </span>
              </div>

              {/* Video Screen Frame */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-[#4a3535] shadow-inner group">
                <video
                  ref={videoRef}
                  src={currentScene.videoSrc}
                  poster={currentScene.image}
                  playsInline
                  autoPlay
                  muted={isMuted}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={handleVideoEnded}
                  className="w-full h-full object-cover object-center"
                />

                {/* Video Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

                {/* Sizzle Steam / Heat Indicator */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white flex items-center gap-1.5 border border-white/10">
                  <Flame className="w-3.5 h-3.5 text-[#e6a4a4]" />
                  <span>{currentScene.tag}</span>
                </div>

                {/* Quick Expand Button */}
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-md p-2 rounded-full text-white/80 hover:text-white transition-colors border border-white/10"
                  aria-label="View Fullscreen Video Experience"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Center Play/Pause Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-16 h-16 rounded-full bg-[#e6a4a4] hover:bg-[#d89393] text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-200 border-2 border-white/30 backdrop-blur-xs"
                    aria-label={isPlaying ? 'Pause kitchen video' : 'Play kitchen video'}
                  >
                    {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
                  </button>
                </div>

                {/* Bottom Video Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-2">
                  <div
                    className="w-full bg-stone-700/60 rounded-full h-1.5 overflow-hidden cursor-pointer"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const clickX = e.clientX - rect.left;
                      const newPct = (clickX / rect.width);
                      if (videoRef.current && videoRef.current.duration) {
                        videoRef.current.currentTime = newPct * videoRef.current.duration;
                        setProgress(newPct * 100);
                      }
                    }}
                  >
                    <div
                      className="bg-gradient-to-r from-[#e6a4a4] to-[#f5dada] h-full rounded-full transition-all duration-150"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#dcc9bb]">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="hover:text-white transition-colors font-bold uppercase tracking-wider text-[10px]"
                      >
                        {isPlaying ? 'Pause' : 'Play'}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="hover:text-white transition-colors flex items-center gap-1 font-bold uppercase tracking-wider text-[10px]"
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                        <span>{isMuted ? 'Muted' : 'Audio On'}</span>
                      </button>
                    </div>
                    <span className="font-mono text-[#dcc9bb]">{currentScene.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Scene Selector & Recipe Craft Explanation */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#e6a4a4] text-xs font-bold uppercase tracking-wider mb-2">
                  <ChefHat className="w-4 h-4" />
                  <span>Culinary Craftsmanship</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                  {currentScene.title}
                </h3>
                <p className="text-[#dcc9bb] text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {currentScene.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2.5 mb-6">
                  {currentScene.keyHighlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-[#e6a4a4] flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scene Switcher Buttons */}
              <div className="pt-4 border-t border-[#4a3535]">
                <div className="text-[10px] uppercase tracking-widest text-[#dcc9bb] font-bold mb-3">
                  Select Kitchen Perspective
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {kitchenScenes.map((scene, idx) => (
                    <button
                      key={scene.id}
                      onClick={() => {
                        setActiveSceneIndex(idx);
                        setProgress(0);
                        setIsPlaying(true);
                      }}
                      className={`p-2.5 rounded-2xl text-left transition-all text-xs border ${
                        activeSceneIndex === idx
                          ? 'bg-[#4a3535] border-[#e6a4a4] text-white font-bold'
                          : 'bg-[#3a2727]/60 border-[#4a3535] text-[#dcc9bb] hover:text-white hover:bg-[#3a2727]'
                      }`}
                    >
                      <div className="font-bold truncate">{idx + 1}. {scene.tag}</div>
                      <div className="text-[10px] text-[#dcc9bb] mt-0.5">{scene.duration}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Experience */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-[#2b1f1f] rounded-3xl overflow-hidden border border-[#4a3535] shadow-2xl">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#7c4d4d] transition-colors"
            >
              ✕
            </button>
            <div className="p-6">
              <div className="text-[#e6a4a4] text-xs font-bold uppercase tracking-widest mb-1">
                La Vie En Rose Kitchen Experience
              </div>
              <h3 className="font-serif text-2xl text-white font-bold mb-4">{currentScene.title}</h3>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black mb-4">
                <video
                  src={currentScene.videoSrc}
                  poster={currentScene.image}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-[#dcc9bb] text-sm italic">{currentScene.description}</p>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="bg-[#7c4d4d] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#5a3a3a] shrink-0 ml-4"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
