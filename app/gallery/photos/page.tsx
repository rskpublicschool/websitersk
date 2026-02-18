import { Metadata } from 'next';
import SectionTitle from '@/app/components/SectionTitle';

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Browse through our collection of photos from school events, activities, and campus life.",
};

export default function PhotoGalleryPage() {
  // Photo categories with actual RSK images
  const photoCategories = [
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
        '/teacherspage/best cbse school in Dehri RSK public school teachersgroup. .jpeg',
        '/schoolimages/chief guests and management.jpeg'
      ],
      color: 'violet',
      count: 2
    }
  ];

  const colorClasses: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    amber: 'from-amber-500 to-amber-600',
    purple: 'from-purple-500 to-purple-600',
    red: 'from-red-500 to-red-600',
    indigo: 'from-indigo-500 to-indigo-600',
    teal: 'from-teal-500 to-teal-600',
    orange: 'from-orange-500 to-orange-600',
    pink: 'from-pink-500 to-pink-600',
    cyan: 'from-cyan-500 to-cyan-600',
    violet: 'from-violet-500 to-violet-600'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Explore our collection of memorable moments from RSK events and activities">
          Photo Gallery - {photoCategories.reduce((sum, cat) => sum + cat.count, 0)} Photos Available
        </SectionTitle>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Image Preview */}
                <div className="h-48 relative overflow-hidden">
                  {category.images && category.images.length > 0 ? (
                    <>
                      <img
                        src={category.images[0]}
                        alt={`${category.name} - RSK Public School`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                      {/* Image count badge */}
                      <div className="absolute top-3 right-3 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {category.count} {category.count === 1 ? 'Photo' : 'Photos'}
                      </div>
                      {/* Expand icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${colorClasses[category.color]} flex items-center justify-center`}>
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{category.count} {category.count === 1 ? 'Photo' : 'Photos'}</p>
                  
                  {/* Image Grid Preview */}
                  {category.images && category.images.length > 1 && (
                    <div className="grid grid-cols-4 gap-1 mt-3">
                      {category.images.slice(1, 5).map((image, imgIndex) => (
                        <div key={imgIndex} className="aspect-square bg-gray-100 rounded overflow-hidden">
                          <img
                            src={image}
                            alt={`${category.name} ${imgIndex + 2}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                      {category.count > 5 && (
                        <div className="aspect-square bg-gray-800 bg-opacity-75 rounded flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">+{category.count - 4}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Statistics */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-4">🖼️ Complete Photo Collection</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{photoCategories.reduce((sum, cat) => sum + cat.count, 0)}</div>
                  <div className="text-sm text-gray-600">Total Photos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{photoCategories.length}</div>
                  <div className="text-sm text-gray-600">Categories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">2024</div>
                  <div className="text-sm text-gray-600">Latest Year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-600">Live</div>
                  <div className="text-sm text-gray-600">Gallery Status</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





