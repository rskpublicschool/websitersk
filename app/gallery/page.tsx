import { Metadata } from 'next';
import Link from 'next/link';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody } from '@/app/components/Card';
import Button from '@/app/components/Button';

export const metadata: Metadata = {
  title: "Photo & Video Gallery",
  description: "Explore our school gallery showcasing events, activities, achievements, and campus life at RSK Public School.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Capturing Moments, Creating Memories">
          School Gallery
        </SectionTitle>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Photo Gallery Card with 6-Image Mosaic */}
            <Card hover className="group overflow-hidden flex flex-col">
              <Link href="/gallery/photos" className="block relative overflow-hidden bg-slate-950">
                {/* 6-Image Mosaic Collage */}
                <div className="h-64 sm:h-72 w-full grid grid-cols-3 grid-rows-2 gap-1.5 p-1.5 bg-slate-950">
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/corousalimages/cbse school in dehri on sone RSK public school academic excellence.jpeg"
                      alt="Academic Excellence"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/latestimages/physicslab1.jpeg"
                      alt="Physics Lab"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/latestimages/classroom2.jpeg"
                      alt="Smart Classroom"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/activitiesandevent/rsk public school dehri annuals day celebration.jpg"
                      alt="Annual Day Celebration"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/latestimages/computerlab1.jpeg"
                      alt="Computer Lab"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/latestimages/playschoolclassroom.jpeg"
                      alt="Play School Wing"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center text-white font-bold text-xs sm:text-sm border border-white/20 rounded-lg">
                      <span>+40 More</span>
                    </div>
                  </div>
                </div>

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:opacity-75 transition-opacity pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 bg-blue-600/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-blue-400/30 pointer-events-none">
                  <span>📷 Photo Gallery</span>
                </div>

                {/* Center Floating Gallery Icon & Callout */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="px-4 py-2.5 rounded-2xl bg-slate-900/85 backdrop-blur-md text-white flex items-center gap-2.5 shadow-2xl border border-white/20 group-hover:scale-105 group-hover:bg-blue-600/90 transition-all duration-300">
                    {/* Gallery Stack Icon */}
                    <div className="w-8 h-8 rounded-full bg-blue-500/80 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-extrabold leading-tight">Explore Photo Albums</p>
                      <p className="text-[10px] text-blue-200">11 Categories • 40+ HD Photos</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-4 right-4 text-white text-left pointer-events-none">
                  <span className="text-[11px] text-blue-200 font-medium">Labs • Events • Smart Classrooms • Sports</span>
                </div>
              </Link>

              <CardBody className="text-center flex-1 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2.5 group-hover:text-blue-600 transition-colors">Photo Gallery</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Browse interactive albums covering science labs, smart classrooms, annual day functions, sports meets, 
                    NCC drills, and vibrant campus life.
                  </p>
                </div>
                <Button href="/gallery/photos" variant="primary" className="w-full justify-center">
                  View Photos
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </CardBody>
            </Card>

            {/* Video Gallery Card with 6-Image Mosaic */}
            <Card hover className="group overflow-hidden flex flex-col">
              <Link href="/gallery/videos" className="block relative overflow-hidden bg-slate-950">
                {/* 6-Image Mosaic Collage */}
                <div className="h-64 sm:h-72 w-full grid grid-cols-3 grid-rows-2 gap-1.5 p-1.5 bg-slate-950">
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/schoolimages/rsk public school dehri students stunt formations activities  (1).jpeg"
                      alt="Republic Day Stunt Formation"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/70 text-[9px] text-white px-1 py-0.5 rounded font-mono">▶</span>
                  </div>
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/schoolimages/rsk public school dehri kids dance.jpeg"
                      alt="Kids Dance Performance"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/70 text-[9px] text-white px-1 py-0.5 rounded font-mono">▶</span>
                  </div>
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/schoolimages/rsk public school dehri kids parate 26th jan.jpeg"
                      alt="26th Jan Parade"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/70 text-[9px] text-white px-1 py-0.5 rounded font-mono">▶</span>
                  </div>
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/activitiesandevent/rsk public school dehri science fair innovation.jpg"
                      alt="Science Fair Demo"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/70 text-[9px] text-white px-1 py-0.5 rounded font-mono">▶</span>
                  </div>
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/activitiesandevent/rsk public school dehri horse riding.jpg"
                      alt="Horse Riding Video"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/70 text-[9px] text-white px-1 py-0.5 rounded font-mono">▶</span>
                  </div>
                  <div className="relative overflow-hidden rounded-lg bg-slate-900">
                    <img
                      src="/schoolimages/rsk public school dehri students performance song.jpeg"
                      alt="Student Song Performance"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex items-center justify-center text-white font-bold text-xs sm:text-sm border border-white/20 rounded-lg">
                      <span>+16 Videos</span>
                    </div>
                  </div>
                </div>

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 group-hover:opacity-75 transition-opacity pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 bg-red-600/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg border border-red-400/30 pointer-events-none">
                  <span>🎥 Video Gallery</span>
                </div>

                {/* Center Glowing Play Button & Callout */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="px-4 py-2.5 rounded-2xl bg-slate-900/85 backdrop-blur-md text-white flex items-center gap-2.5 shadow-2xl border border-white/20 group-hover:scale-105 group-hover:bg-red-600/90 transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 ml-0.5 text-white fill-current" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-extrabold leading-tight">Watch School Videos</p>
                      <p className="text-[10px] text-red-200">Performances • Karate • Testimonials</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-4 right-4 text-white text-left pointer-events-none">
                  <span className="text-[11px] text-red-200 font-medium">Student Stunts • Dance • Karate • ISRO Project</span>
                </div>
              </Link>

              <CardBody className="text-center flex-1 flex flex-col justify-between p-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2.5 group-hover:text-red-600 transition-colors">Video Gallery</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Watch authentic videos of cultural performances, karate martial arts, science exhibitions, 
                    student leadership, and parent testimonials.
                  </p>
                </div>
                <Button href="/gallery/videos" variant="primary" className="w-full justify-center bg-red-600 hover:bg-red-700">
                  Watch Videos
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </CardBody>
            </Card>
          </div>

          {/* Gallery Categories */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Gallery Categories</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg shadow-soft text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Annual Events</h4>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-soft text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Sports Day</h4>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-soft text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Cultural Programs</h4>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-soft text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Achievements</h4>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-soft text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Classroom Activities</h4>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-soft text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900">Infrastructure</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





