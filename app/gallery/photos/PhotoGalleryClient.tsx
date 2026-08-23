'use client';

import { useState, useEffect, useCallback } from 'react';
import SectionTitle from '@/app/components/SectionTitle';

interface Category {
  name: string;
  images: string[];
  color: string;
  count: number;
}

export default function PhotoGalleryClient() {
  const photoCategories: Category[] = [
    {
      name: 'Physics Laboratories',
      images: [
        '/latestimages/physicslab1.jpeg',
        '/latestimages/physicslab2.jpeg'
      ],
      color: 'blue',
      count: 2
    },
    {
      name: 'Chemistry Laboratories',
      images: [
        '/latestimages/chemistrylab1.jpeg',
        '/latestimages/chemistrylab2.jpeg'
      ],
      color: 'emerald',
      count: 2
    },
    {
      name: 'Biology Laboratories',
      images: [
        '/latestimages/biolab1.jpeg',
        '/latestimages/biolab2.jpeg'
      ],
      color: 'teal',
      count: 2
    },
    {
      name: 'Computer Laboratories & IT',
      images: [
        '/latestimages/computerlab1.jpeg',
        '/latestimages/computerlab2.jpeg'
      ],
      color: 'indigo',
      count: 2
    },
    {
      name: 'Modern Smart Classrooms',
      images: [
        '/latestimages/classroom1.jpeg',
        '/latestimages/classroom2.jpeg',
        '/latestimages/classroom3.jpeg',
        '/latestimages/classroom4.jpeg',
        '/latestimages/classroom5.jpeg',
        '/latestimages/classroom6.jpeg'
      ],
      color: 'purple',
      count: 6
    },
    {
      name: 'Junior & Play School Wing',
      images: [
        '/latestimages/playschoolclassroom.jpeg'
      ],
      color: 'rose',
      count: 1
    },
    {
      name: 'Annual Day Celebration',
      images: ['/activitiesandevent/rsk public school dehri annuals day celebration.jpg'],
      color: 'blue',
      count: 1
    },
    {
      name: 'Sports Day & Activities',
      images: ['/activitiesandevent/rsk public school dehri sports day celebration.jpg'],
      color: 'green',
      count: 1
    },
    {
      name: 'Republic Day & Patriotic Events',
      images: [
        '/schoolimages/rsk public school dehri kids parate 26th jan.jpeg',
        '/schoolimages/rsk public school dehri students stunt formations activities  (1).jpeg',
        '/schoolimages/rsk public school dehri students stunt formations activities  (2).jpeg',
        '/schoolimages/rsk public school dehri students stunt formations activities  (3).jpeg'
      ],
      color: 'amber',
      count: 4
    },
    {
      name: 'Science Fair & Innovation',
      images: [
        '/activitiesandevent/rsk public school dehri science fair innovation.jpg',
        '/schoolimages/rsk public school dehri food stall students model exhibition.jpeg',
        '/schoolimages/rsk public school dehri food stall students model exhibition (1).jpeg',
        '/schoolimages/rsk public school dehri food stall students model exhibition (2).jpeg',
        '/schoolimages/rsk public school dehri food stall students model exhibition (3).jpeg',
        '/schoolimages/rsk public school dehri food stall students model exhibition (4).jpeg',
        '/schoolimages/rsk public school dehri food stall students model exhibition (5).jpeg',
        '/schoolimages/rsk public school dehri food stall students model exhibition (6).jpeg',
        '/schoolimages/rsk public school dehri food stall students model exhibition 1.jpeg',
        '/schoolimages/rsk public school dehri food stall students model exhibition 11.jpeg'
      ],
      color: 'purple',
      count: 10
    },
    {
      name: 'Cultural Programs & Performances',
      images: [
        '/activitiesandevent/rsk public school dehri saraswati pooja celebration.jpg',
        '/schoolimages/rsk public school dehri kids dance.jpeg',
        '/schoolimages/rsk public school dehri students performance song.jpeg'
      ],
      color: 'red',
      count: 3
    },
    {
      name: 'NCC Training & Discipline',
      images: [
        '/schoolimages/rsk public school dehri students NCC cadet march.jpeg',
        '/schoolimages/rsk public school dehri students NCC cadet stunt girls and boys (1).jpeg',
        '/schoolimages/rsk public school dehri students NCC cadet stunt girls and boys (2).jpeg'
      ],
      color: 'indigo',
      count: 3
    },
    {
      name: 'Educational Trips & Adventures',
      images: ['/activitiesandevent/rsk public school dehri educational trips students.jpg'],
      color: 'teal',
      count: 1
    },
    {
      name: 'Horse Riding Classes',
      images: ['/activitiesandevent/rsk public school dehri horse riding.jpg'],
      color: 'orange',
      count: 1
    },
    {
      name: 'Bal Mela & Fun Events',
      images: [
        '/schoolimages/rsk public school dehri food stall students bal mela (1).jpeg',
        '/schoolimages/rsk public school dehri food stall students bal mela (2).jpeg',
        '/schoolimages/rsk public school dehri food stall students bal mela (3).jpeg',
        '/schoolimages/rsk public school dehri food stall students bal mela (4).jpeg',
        '/schoolimages/rsk public school dehri food stall students bal mela (5).jpeg',
        '/schoolimages/rsk public school dehri food stall students bal mela (6).jpeg',
        '/schoolimages/rsk public school dehri food stall students bal mela (7).jpeg',
        '/schoolimages/rsk public school dehri food stall students bal mela (8).jpeg',
        '/schoolimages/rsk public school dehri food stall students bal mela (10).jpeg'
      ],
      color: 'pink',
      count: 9
    },
    {
      name: 'Inter-School Competitions',
      images: ['/activitiesandevent/rsk public school dehri inter school competitions.jpg'],
      color: 'cyan',
      count: 1
    },
    {
      name: 'Teachers & Management',
      images: [
        '/corousalimages/rsk public school teachers group photo.jpeg',
        '/schoolimages/chief guests and management.jpeg'
      ],
      color: 'violet',
      count: 2
    }
  ];

  // Lightbox Modal state
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState<'all' | number>('all');

  const totalPhotosCount = photoCategories.reduce((sum, cat) => sum + cat.count, 0);

  // Open Lightbox for specific category and image index
  const openLightbox = (categoryIndex: number, imageIndex: number) => {
    setActiveCategoryIndex(categoryIndex);
    setActiveImageIndex(imageIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const currentCategory = photoCategories[activeCategoryIndex] || photoCategories[0];
  const currentImages = currentCategory.images || [];

  const handlePrevImage = useCallback(() => {
    setActiveImageIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  }, [currentImages.length]);

  const handleNextImage = useCallback(() => {
    setActiveImageIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  }, [currentImages.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling on background when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen, handlePrevImage, handleNextImage]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Click any image or category to view full-size photos in the popup lightbox">
          Photo Gallery - {totalPhotosCount} Photos Available
        </SectionTitle>

        {/* Category & Filter Tabs */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 justify-center items-center bg-white p-3 rounded-2xl shadow-sm border border-gray-200">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🖼️ All Categories ({photoCategories.length})
            </button>

            {photoCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFilter(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                  selectedFilter === idx
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Cards View */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoCategories
              .filter((_, idx) => selectedFilter === 'all' || selectedFilter === idx)
              .map((category, idx) => {
                // Find actual index in photoCategories
                const realCategoryIndex = photoCategories.findIndex(c => c.name === category.name);
                
                return (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                  >
                    {/* Main Cover Image Preview */}
                    <div
                      onClick={() => openLightbox(realCategoryIndex, 0)}
                      className="h-56 relative overflow-hidden cursor-pointer bg-slate-950 flex items-center justify-center p-1"
                    >
                      {category.images && category.images.length > 0 ? (
                        <>
                          <img
                            src={category.images[0]}
                            alt={`${category.name} - RSK Public School`}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-70 group-hover:opacity-80 transition-opacity pointer-events-none" />
                          
                          {/* Image count badge */}
                          <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full border border-white/20 z-10">
                            📷 {category.count} {category.count === 1 ? 'Photo' : 'Photos'}
                          </div>

                          {/* Click Hint Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                            <div className="bg-white/95 text-gray-900 px-4 py-2 rounded-full font-bold text-xs shadow-xl flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                              <span>Click to Expand Lightbox</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="h-full flex items-center justify-center bg-blue-600 text-white font-semibold text-sm">
                          No Preview Available
                        </div>
                      )}
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {category.name}
                          </h3>
                        </div>
                        <p className="text-gray-500 text-xs mb-3">
                          {category.count} High-Resolution {category.count === 1 ? 'Photo' : 'Photos'}
                        </p>

                        {/* Thumbnail Grid & "+X More" Navigation */}
                        {category.images && category.images.length > 1 && (
                          <div className="mt-3 pt-3 border-t border-gray-100">
                            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                              Photo Previews (Click to Jump)
                            </span>
                            <div className="grid grid-cols-4 gap-2">
                              {category.images.slice(1, 4).map((img, imgIdx) => (
                                <button
                                  key={imgIdx}
                                  onClick={() => openLightbox(realCategoryIndex, imgIdx + 1)}
                                  className="aspect-square bg-slate-900 rounded-lg overflow-hidden relative group/thumb border border-gray-200 hover:border-blue-500 hover:ring-2 hover:ring-blue-400 transition-all p-0.5"
                                  title={`View Photo ${imgIdx + 2}`}
                                >
                                  <img
                                    src={img}
                                    alt={`${category.name} preview ${imgIdx + 2}`}
                                    className="w-full h-full object-contain group-hover/thumb:scale-105 transition-transform"
                                  />
                                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity" />
                                </button>
                              ))}

                              {/* "+X More" Badge Button */}
                              {category.count > 4 && (
                                <button
                                  onClick={() => openLightbox(realCategoryIndex, 4)}
                                  className="aspect-square bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-lg flex flex-col items-center justify-center p-1 border border-blue-400 shadow-md hover:scale-105 transition-all cursor-pointer"
                                  title="View all photos in this category"
                                >
                                  <span className="text-xs font-extrabold">+{category.count - 4}</span>
                                  <span className="text-[9px] uppercase font-semibold text-blue-200">More</span>
                                </button>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* View All Photos Button */}
                      <button
                        onClick={() => openLightbox(realCategoryIndex, 0)}
                        className="mt-4 w-full py-2.5 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-800 text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm"
                      >
                        <span>View All {category.count} Photos in Lightbox</span>
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* POPUP LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md text-white p-3 sm:p-6 animate-fade-in select-none">
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-gray-800 z-10">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-blue-600 text-white text-xs font-bold rounded-full">
                  {currentCategory.name}
                </span>
                <span className="text-gray-400 text-xs sm:text-sm font-semibold">
                  Photo {activeImageIndex + 1} of {currentImages.length}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline-block text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full border border-gray-700">
                Use ◄ ► arrows or ESC to close
              </span>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors duration-200 shadow-lg border border-gray-700"
                aria-label="Close Lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Large Image Container */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Previous Button */}
            {currentImages.length > 1 && (
              <button
                onClick={handlePrevImage}
                className="absolute left-2 sm:left-6 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-black/60 hover:bg-blue-600/90 text-white rounded-full flex items-center justify-center transition-all duration-200 border border-white/20 shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
                aria-label="Previous Photo"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Photo Display */}
            <div className="relative max-h-[72vh] max-w-[88vw] sm:max-w-[82vw] flex items-center justify-center">
              <img
                key={`${activeCategoryIndex}-${activeImageIndex}`}
                src={currentImages[activeImageIndex]}
                alt={`${currentCategory.name} - Photo ${activeImageIndex + 1}`}
                className="max-h-[70vh] max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300 animate-fade-in border border-gray-800"
              />
            </div>

            {/* Next Button */}
            {currentImages.length > 1 && (
              <button
                onClick={handleNextImage}
                className="absolute right-2 sm:right-6 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-black/60 hover:bg-blue-600/90 text-white rounded-full flex items-center justify-center transition-all duration-200 border border-white/20 shadow-2xl backdrop-blur-md hover:scale-110 active:scale-95"
                aria-label="Next Photo"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* Bottom Thumbnail Carousel Strip */}
          {currentImages.length > 1 && (
            <div className="pt-3 border-t border-gray-800">
              <div className="flex gap-2.5 overflow-x-auto justify-center py-2 px-4 max-w-4xl mx-auto scrollbar-thin">
                {currentImages.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      idx === activeImageIndex
                        ? 'border-blue-500 ring-2 ring-blue-400 scale-110 opacity-100'
                        : 'border-gray-700 opacity-50 hover:opacity-100 hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain bg-slate-900"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
