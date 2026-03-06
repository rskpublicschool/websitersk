import Link from 'next/link';

interface SitemapSection {
  title: string;
  links: { label: string; href: string }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: "About RSK Public School",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Principal's Message", href: "/about/principal" },
      { label: "Director's Message", href: "/about/director" },
      { label: "School Discipline", href: "/about/discipline" },
    ]
  },
  {
    title: "Academics & Education",
    links: [
      { label: "Academics", href: "/academics" },
      { label: "CBSE Curriculum", href: "/academics" },
      { label: "Online Tuition Classes", href: "/online-tuition" },
      { label: "Teachers & Faculty", href: "/teachers" },
      { label: "Non-Academic Activities", href: "/non-academic" },
    ]
  },
  {
    title: "Admissions & Fees",
    links: [
      { label: "Admission Process", href: "/admissions" },
      { label: "Apply for Admission", href: "/admissions/apply" },
      { label: "Admission Process Details", href: "/admissions/process" },
      { label: "Fee Structure", href: "/admissions/fees" },
      { label: "Admission Enquiry", href: "/contact" },
    ]
  },
  {
    title: "School Facilities",
    links: [
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "Science Labs", href: "/infrastructure" },
      { label: "Computer Labs", href: "/infrastructure" },
      { label: "Library", href: "/infrastructure" },
      { label: "Sports Facilities", href: "/infrastructure" },
    ]
  },
  {
    title: "Gallery & Events",
    links: [
      { label: "Photo Gallery", href: "/gallery/photos" },
      { label: "Video Gallery", href: "/gallery/videos" },
      { label: "School Events", href: "/gallery" },
      { label: "Annual Day", href: "/gallery/photos" },
      { label: "Sports Day", href: "/gallery/photos" },
    ]
  },
  {
    title: "Information & Updates",
    links: [
      { label: "Notice Board", href: "/notice-board" },
      { label: "Mandatory Disclosure", href: "/disclosure" },
      { label: "Results & Announcements", href: "/results-announcements" },
      { label: "Parent Experience", href: "/parents" },
      { label: "Contact Us", href: "/contact" },
    ]
  }
];

export default function Sitemap() {
  return (
    <section className="py-8 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">School Sitemap</h2>
          <p className="text-gray-600 text-sm">Quick navigation to all pages of RSK Public School website</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sitemapData.map((section, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3 border-b border-blue-100 pb-2">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-700 hover:text-blue-600 hover:underline transition-colors flex items-center"
                    >
                      <svg className="w-3 h-3 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* SEO Keywords Section */}
        <div className="mt-8 text-center">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Find Us For</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Best CBSE School in Dehri on Sone • Top School in Dehri on Sone • Best School in Dehri on Sone • 
              CBSE Admission Dehri • Quality Education Bihar • School Admission 2026-27 • 
              English Medium School Dehri • Primary Education • Secondary Education • 
              Best School Rohtas District • Top 10 Schools Dehri on Sone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
