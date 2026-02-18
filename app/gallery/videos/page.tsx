import { Metadata } from 'next';
import SectionTitle from '@/app/components/SectionTitle';

export const metadata: Metadata = {
  title: "Video Gallery",
  description: "Watch videos of school events, cultural programs, sports activities, and student performances.",
};

export default function VideoGalleryPage() {
  // Actual RSK school videos organized by categories
  const videoCategories = [
    {
      name: 'Leadership Messages',
      videos: [
        {
          title: 'Director Sir - School Briefing',
          src: '/schoolvideos/rsk public school dehri director sir briefing about school.mp4',
          description: 'Our Director shares the vision and mission of RSK Public School'
        },
        {
          title: 'Principal Sir - School Management',
          src: '/schoolvideos/rsk public school dehri principal sir briefing about school and mangement.mp4',
          description: 'Principal discusses academic excellence and school management'
        }
      ],
      color: 'blue',
      icon: '👨‍💼'
    },
    {
      name: 'Student Activities & Performances',
      videos: [
        {
          title: 'Republic Day Group Performance',
          src: '/schoolvideos/rsk public school dehri republic day performance of group stunt formation activity.mp4',
          description: 'Amazing group stunt formations during Republic Day celebrations'
        },
        {
          title: 'Kids Dancing - 26th January',
          src: '/schoolvideos/rsk public school dehri kids dancing 26th january.mp4',
          description: 'Energetic dance performances by our young students'
        },
        {
          title: 'Confident Speech - Republic Day',
          src: '/schoolvideos/rsk public school dehri girl open confident speech on republic day..mp4',
          description: 'Student delivering inspiring speech on Republic Day'
        },
        {
          title: 'Karate Student - Body Mind Connection',
          src: '/schoolvideos/rsk public school dehri karate student saying boy.mp4',
          description: 'Boy student sharing about discipline and "Hum khelte hain, seekhte hain, jeette hain"'
        },
        {
          title: 'Karate Girl - Confidence & Strength',
          src: '/schoolvideos/rsk public school dehri karate student saying girl.mp4',
          description: 'Girl student expressing confidence gained through martial arts training'
        },
        {
          title: 'Karate Girl 2 - Leadership & Balance',
          src: '/schoolvideos/rsk public school dehri karate student saying girl 2.mp4',
          description: 'Student speaking about leadership and mind-body balance through karate'
        }
      ],
      color: 'red',
      icon: '🎭'
    },
    {
      name: 'Science & Innovation',
      videos: [
        {
          title: 'ISRO Project Demonstration',
          src: '/schoolvideos/rsk public school dehri exhibition day student feedback and project demostration isro .mp4',
          description: 'Students showcasing innovative ISRO space science project'
        },
        {
          title: 'School Model Project Demo',
          src: '/schoolvideos/rsk public school dehri exhibition day student feedback and project demostration srk school model.mp4',
          description: 'Creative school model demonstration by talented students'
        }
      ],
      color: 'purple',
      icon: '🔬'
    },
    {
      name: 'Teacher Testimonials',
      videos: [
        {
          title: 'Female Teacher Feedback',
          src: '/schoolvideos/rsk public school dehri female teacher feedback and management feedback.mp4',
          description: 'Teacher shares experience about RSK management support'
        },
        {
          title: 'Kushal Sir - Science Teacher',
          src: '/schoolvideos/rsk public school dehri Kushal Sir science teacher feedback and management feedback.mp4',
          description: 'Science teacher discusses innovative teaching methods'
        },
        {
          title: 'Sports Teacher - Fitness Demo',
          src: '/schoolvideos/rsk public school dehri Sports teacher demostrating fitness with karate with kids in backgound.mp4',
          description: 'Sports teacher demonstrating fitness and karate with students'
        }
      ],
      color: 'green',
      icon: '👩‍🏫'
    },
    {
      name: 'Parent Testimonials',
      videos: [
        {
          title: 'Female Parent with Kids',
          src: '/schoolvideos/rsk public school dehri parent feedback female with kids.mp4',
          description: 'Parent sharing positive experience about their child at RSK'
        },
        {
          title: 'Very Satisfied Male Parent',
          src: '/schoolvideos/rsk public school dehri parent feedback male with kids very satisfied.mp4',
          description: 'Father expresses satisfaction with child\'s progress at RSK'
        },
        {
          title: 'Parents on School & Management',
          src: '/schoolvideos/rsk public school dehri parent feedback 2 female with kids about school and managment.mp4',
          description: 'Parents discuss school quality and management effectiveness'
        }
      ],
      color: 'amber',
      icon: '👨‍👩‍👧‍👦'
    }
  ];

  const colorClasses: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    amber: 'from-amber-500 to-amber-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600',
    indigo: 'from-indigo-500 to-indigo-600'
  };

  const totalVideos = videoCategories.reduce((sum, category) => sum + category.videos.length, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Watch authentic videos from RSK events, performances, and testimonials">
          Video Gallery - {totalVideos} Videos Available
        </SectionTitle>

        <div className="max-w-7xl mx-auto">
          {videoCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[category.color]} rounded-xl flex items-center justify-center text-white text-xl shadow-lg`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                  <p className="text-gray-600">{category.videos.length} {category.videos.length === 1 ? 'Video' : 'Videos'}</p>
                </div>
              </div>

              {/* Videos Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video, videoIndex) => (
                  <div
                    key={videoIndex}
                    className="bg-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Video Player */}
                    <div className="relative h-48 bg-gray-900">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        preload="metadata"
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {/* Video Type Badge */}
                      <div className="absolute top-3 left-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        🎥 Video
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">{video.title}</h4>
                      <p className="text-gray-600 text-xs leading-relaxed">{video.description}</p>
                      
                      {/* Video Controls Info */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>RSK School</span>
                        </div>
                        <div className={`text-xs font-medium text-${category.color}-600`}>
                          {category.name.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Video Gallery Statistics */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 p-6 rounded-lg">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-4">🎥 Complete Video Collection</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">{totalVideos}</div>
                  <div className="text-sm text-gray-600">Total Videos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">{videoCategories.length}</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">HD</div>
                  <div className="text-sm text-gray-600">Quality</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">Live</div>
                  <div className="text-sm text-gray-600">Available Now</div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-red-200">
                <p className="text-gray-700 text-sm">
                  🌟 Watch authentic videos showcasing RSK school life, student performances, teacher insights, and parent testimonials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





