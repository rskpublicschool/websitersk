import Link from 'next/link';
import { schoolInfo, quickLinks } from '../lib/schoolData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* CTA Buttons Section */}
        <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-lg p-6 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-2">Ready to Join RSK Public School?</h3>
            <p className="text-blue-100">Best CBSE School in Dehri on Sone - Start Your Child's Journey Today!</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/admissions/apply" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Apply for Admission 2026-27
            </Link>
            <Link href="/online-tuition" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Online Tuition Classes
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Us
            </Link>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src="/logo RSK best shcool in dehri rohtas.png" 
                  alt="RSK Public School Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{schoolInfo.name}</h3>
            </div>
            <p className="text-sm mb-4">
              <span className="text-blue-400 font-semibold">Best CBSE School in Dehri on Sone</span><br />
              Affiliation No: {schoolInfo.affiliationNo}<br />
              School Code: {schoolInfo.schoolCode}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Excellence in Education Since {schoolInfo.establishedYear}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{schoolInfo.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href={`tel:${schoolInfo.phone}`} className="hover:text-blue-400 transition-colors">
                  {schoolInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {schoolInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* About & Academics */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About & Academics</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/about/principal" className="hover:text-blue-400 transition-colors">Principal's Message</Link></li>
              <li><Link href="/academics" className="hover:text-blue-400 transition-colors">CBSE Curriculum</Link></li>
              <li><Link href="/teachers" className="hover:text-blue-400 transition-colors">Our Teachers</Link></li>
              <li><Link href="/online-tuition" className="hover:text-purple-400 transition-colors">Online Tuition</Link></li>
              <li><Link href="/non-academic" className="hover:text-blue-400 transition-colors">Activities</Link></li>
            </ul>
          </div>

          {/* Admissions & Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Admissions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/admissions" className="hover:text-emerald-400 transition-colors font-semibold">Admission 2026-27</Link></li>
              <li><Link href="/admissions/apply" className="hover:text-emerald-400 transition-colors">Apply Now</Link></li>
              <li><Link href="/admissions/process" className="hover:text-blue-400 transition-colors">Process</Link></li>
              <li><Link href="/admissions/fees" className="hover:text-blue-400 transition-colors">Fee Structure</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Enquiry</Link></li>
              <li><Link href="/teachers#careers" className="hover:text-yellow-400 transition-colors">Teaching Jobs</Link></li>
            </ul>
          </div>

          {/* Facilities & Infrastructure */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Facilities & Infrastructure</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/infrastructure" className="hover:text-blue-400 transition-colors font-semibold">🏫 School Infrastructure</Link></li>
              <li><Link href="/infrastructure" className="hover:text-blue-400 transition-colors">Science Labs</Link></li>
              <li><Link href="/infrastructure" className="hover:text-blue-400 transition-colors">Computer Labs</Link></li>
              <li><Link href="/infrastructure" className="hover:text-blue-400 transition-colors">Library & Sports</Link></li>
              <li><Link href="/gallery/photos" className="hover:text-blue-400 transition-colors">Photo Gallery</Link></li>
              <li><Link href="/gallery/videos" className="hover:text-blue-400 transition-colors">Video Gallery</Link></li>
            </ul>
          </div>

          {/* Important Links & Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Important Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/disclosure" className="hover:text-yellow-400 transition-colors font-semibold">📋 Mandatory Disclosure</Link></li>
              <li><Link href="/notice-board" className="hover:text-blue-400 transition-colors">Notice Board</Link></li>
              <li><Link href="/results-announcements" className="hover:text-yellow-400 transition-colors">Results & Announcements</Link></li>
              <li><Link href="/parents" className="hover:text-blue-400 transition-colors">Parent Experience</Link></li>
              <li><Link href="/about/discipline" className="hover:text-blue-400 transition-colors">School Rules</Link></li>
              <li><a href="https://cbse.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors font-semibold">🌐 CBSE Official Website</a></li>
            </ul>
          </div>

          {/* Careers & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Careers & Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/teachers#careers" className="hover:text-emerald-400 transition-colors font-semibold">💼 Teaching Careers</Link></li>
              <li><Link href="/teachers#careers" className="hover:text-emerald-400 transition-colors">Job Opportunities</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-gray-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/rskpublicschoolcbse/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@rskpublicschooldehrionsone" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/rskpublicschool/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.012.388a6.5 6.5 0 0 0-2.346 1.267c-.905.6-1.267 1.36-1.267 2.246 0 .264.037.513.088.747C1.343 5.878 1.017 7.17 1.017 8.999v6.002c0 1.829.326 3.121.47 4.351a6.5 6.5 0 0 0 1.267 2.246c.6.905 1.36 1.267 2.246 1.267.264 0 .513-.037.747-.088 1.23-.144 2.522-.47 4.351-.47h6.002c1.829 0 3.121.326 4.351.47.234.051.483.088.747.088.886 0 1.646-.362 2.246-1.267a6.5 6.5 0 0 0 1.267-2.246c.051-.234.088-.483.088-.747.144-1.23.47-2.522.47-4.351V8.999c0-1.829-.326-3.121-.47-4.351-.051-.234-.088-.483-.088-.747a6.5 6.5 0 0 0-1.267-2.246A6.5 6.5 0 0 0 18.759.388C18.251.204 17.677.082 16.73.048 15.782.013 15.375 0 11.754 0h.263zm-3.44 2.2c.929 0 1.072.004 1.447.02.348.016.537.07.663.117.166.065.285.142.41.267.125.125.202.244.267.41.047.126.101.315.117.663.016.375.02.518.02 1.447v8.706c0 .929-.004 1.072-.02 1.447-.016.348-.07.537-.117.663-.065.166-.142.285-.267.41-.125.125-.244.202-.41.267-.126.047-.315.101-.663.117-.375.016-.518.02-1.447.02H8.553c-.929 0-1.072-.004-1.447-.02-.348-.016-.537-.07-.663-.117a1.106 1.106 0 0 1-.41-.267 1.106 1.106 0 0 1-.267-.41c-.047-.126-.101-.315-.117-.663-.016-.375-.02-.518-.02-1.447V8.553c0-.929.004-1.072.02-1.447.016-.348.07-.537.117-.663.065-.166.142-.285.267-.41.125-.125.244-.202.41-.267.126-.047.315-.101.663-.117.375-.016.518-.02 1.447-.02h6.894zm0 3.678a3.722 3.722 0 1 0 0 7.444 3.722 3.722 0 0 0 0-7.444zM12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm5.5-3.5a.875.875 0 1 0 0 1.75.875.875 0 0 0 0-1.75z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Our School Section */}
        <div className="border-t border-gray-800 pt-6 mb-6">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-gray-400 mb-3">Why Choose RSK Public School?</h4>
            <p className="text-sm text-gray-400 leading-relaxed max-w-5xl mx-auto">
              Recognized as the best CBSE school in Dehri on Sone, RSK Public School has earned its reputation among the top CBSE schools in Dehri through 
              exceptional academic excellence and holistic development programs. When parents search for quality schools in Dehri on Sone, 
              they consistently choose us for our comprehensive English medium curriculum, state-of-the-art science laboratories, modern computer facilities, 
              and innovative online tuition programs. Serving families across Rohtas District in Bihar, we provide outstanding primary and secondary education 
              with excellent CBSE results, while also creating rewarding opportunities for teaching professionals. 
              With admission now open for 2026-27, we invite you to join our community of educational excellence.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p className="text-gray-400">
            © {currentYear} {schoolInfo.name}. All Rights Reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Best CBSE School in Dehri on Sone - Excellence in Education Since {schoolInfo.establishedYear}
          </p>
        </div>
      </div>
    </footer>
  );
}

