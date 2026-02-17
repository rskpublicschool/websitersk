import { Metadata } from 'next';
import SectionTitle from '@/app/components/SectionTitle';

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Browse through our collection of photos from school events, activities, and campus life.",
};

export default function PhotoGalleryPage() {
  // Sample photo categories - in real implementation, this would come from a CMS or database
  const photoCategories = [
    { name: 'Annual Function 2024', count: 45, color: 'blue' },
    { name: 'Sports Day 2024', count: 38, color: 'green' },
    { name: 'Independence Day Celebration', count: 25, color: 'amber' },
    { name: 'Science Exhibition', count: 32, color: 'purple' },
    { name: 'Cultural Festival', count: 50, color: 'red' },
    { name: 'Campus Life', count: 60, color: 'indigo' }
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
        <SectionTitle centered subtitle="Explore our collection of memorable moments">
          Photo Gallery
        </SectionTitle>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoCategories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className={`h-48 bg-gradient-to-br ${colorClasses[category.color]} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                  <svg className="w-16 h-16 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.count} Photos</p>
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
                <h4 className="font-semibold text-gray-900 mb-2">Photo Gallery Coming Soon</h4>
                <p className="text-gray-700">
                  We are currently organizing our photo collection. The complete gallery will be available soon.
                  For immediate access to event photos, please contact the school office.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





