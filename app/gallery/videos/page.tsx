import { Metadata } from 'next';
import SectionTitle from '@/app/components/SectionTitle';

export const metadata: Metadata = {
  title: "Video Gallery",
  description: "Watch videos of school events, cultural programs, sports activities, and student performances.",
};

export default function VideoGalleryPage() {
  // Sample video categories - in real implementation, this would come from a CMS or database
  const videoCategories = [
    { name: 'Annual Function 2024 Highlights', duration: '15:30', color: 'red' },
    { name: 'Sports Day 2024', duration: '12:45', color: 'green' },
    { name: 'Independence Day Ceremony', duration: '8:20', color: 'amber' },
    { name: 'Cultural Performance', duration: '20:15', color: 'purple' },
    { name: 'School Tour & Facilities', duration: '10:00', color: 'blue' },
    { name: 'Student Testimonials', duration: '6:30', color: 'indigo' }
  ];

  const colorClasses: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    amber: 'from-amber-500 to-amber-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600',
    indigo: 'from-indigo-500 to-indigo-600'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Watch our school events and activities">
          Video Gallery
        </SectionTitle>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoCategories.map((video, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className={`h-48 bg-gradient-to-br ${colorClasses[video.color]} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Play Button */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className={`w-8 h-8 text-${video.color}-600 ml-1`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{video.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Video</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Video Gallery Coming Soon</h4>
                <p className="text-gray-700 mb-3">
                  We are currently uploading our video collection. The complete video gallery will be available soon.
                  You can also visit our YouTube channel for the latest videos.
                </p>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Visit Our YouTube Channel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





