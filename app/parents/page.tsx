import Link from 'next/link';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { Card, CardBody } from '../components/Card';

export default function ParentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-screen">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/schoolimages/rsk public school dehri students stunt formations activities  (3).jpeg" 
            alt="RSK students engaged in group activities and learning experiences"
            className="w-full h-full object-cover"
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-green-900/70 to-teal-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-md rounded-full border border-emerald-300/40 shadow-lg">
              <span className="text-sm sm:text-base font-semibold text-emerald-100">Trusted by 1000+ Parents • 20+ Years of Excellence</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Your Child's Success is Our Promise
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              Discover why parents choose RSK for their child's holistic development, academic excellence, and bright future.
            </p>
            
            {/* Primary Action Button */}
            <div className="flex justify-center items-center mb-12">
              <Link href="/contact" className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Schedule a Visit
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">1000+</div>
                <div className="text-sm text-slate-300">Happy Parents</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-300">Results</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-300">Parent Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">1:40</div>
                <div className="text-sm text-slate-300">Student-Teacher Ratio</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* RSK's Unique Value Proposition */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="What makes RSK the preferred choice for your child's future">
            Why Parents Trust RSK
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <Card hover className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="px-4 py-6">
                <div className="mb-4">
                  <img 
                    src="/parents-trust-results.jpg" 
                    alt="Students celebrating 100% results"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">100% Results</h3>
                  <p className="text-gray-600 text-sm">
                    Consistent outstanding performance in board exams with personalized attention to every child's academic needs.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="px-4 py-6">
                <div className="mb-4">
                  <img 
                    src="/student-performance-dashboard.svg" 
                    alt="Modern student performance tracking dashboard showing grades, attendance, and progress analytics"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Individual Progress Tracking</h3>
                  <p className="text-gray-600 text-sm">
                    Real-time monitoring of your child's academic and personal development with regular parent updates.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="px-4 py-6">
                <div className="mb-4">
                  <img 
                    src="/parents-trust-holistic.jpg" 
                    alt="Students in various holistic development activities"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Holistic Development</h3>
                  <p className="text-gray-600 text-sm">
                    Focus on academics, sports, arts, and character building to develop well-rounded personalities.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="px-4 py-6">
                <div className="mb-4">
                  <img 
                    src="/parents-trust-safety.jpg" 
                    alt="Safe and secure school environment with CCTV"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Safe & Secure Environment</h3>
                  <p className="text-gray-600 text-sm">
                    CCTV surveillance, trained staff, safe transport, and a nurturing environment for your child's safety.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="px-4 py-6">
                <div className="mb-4">
                  <img 
                    src="/parents-trust-communication.jpg" 
                    alt="Parent-teacher meeting and communication"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Regular Communication</h3>
                  <p className="text-gray-600 text-sm">
                    Weekly updates, parent-teacher meetings, and open communication channels to keep you informed.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="px-4 py-6">
                <div className="mb-4">
                  <img 
                    src="/parents-trust-cbse.jpg" 
                    alt="Modern CBSE curriculum and teaching methods"
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">CBSE Excellence & Future Vision</h3>
                  <p className="text-gray-600 text-sm">
                    Latest CBSE curriculum with innovative teaching methods and modern infrastructure. Our future aspiration includes implementing university-level education so students can graduate with degrees from RSK itself.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Teachers in Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Meet our dedicated educators who make the difference" className="text-white">
            Our Teachers in Action
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Director Video */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-xl">
              <video 
                className="w-full h-48 object-cover" 
                controls
                key="director-video"
              >
                <source src="/schoolvideos/rsk public school dehri director sir briefing about school.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Director Sir</h4>
                    <p className="text-slate-300 text-xs">School Vision & Leadership</p>
                  </div>
                </div>
                <p className="text-slate-200 text-xs">
                  Our Director shares insights about RSK Public School's educational philosophy and future vision.
                </p>
              </div>
            </div>

            {/* Principal Video */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-xl">
              <video 
                className="w-full h-48 object-cover" 
                controls
                key="principal-video"
              >
                <source src="/schoolvideos/rsk public school dehri principal sir briefing about school and mangement.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Principal Sir</h4>
                    <p className="text-slate-300 text-xs">Academic Excellence & Management</p>
                  </div>
                </div>
                <p className="text-slate-200 text-xs">
                  Principal discusses academic standards, teaching excellence, and comprehensive school management.
                </p>
              </div>
            </div>

            {/* Female Teacher Video */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-xl">
              <video 
                className="w-full h-48 object-cover" 
                controls
              >
                <source src="/schoolvideos/rsk public school dehri female teacher feedback and management feedback.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Female Teacher</h4>
                    <p className="text-slate-300 text-xs">Teaching Experience & Support</p>
                  </div>
                </div>
                <p className="text-slate-200 text-xs">
                  Our dedicated female teacher shares her teaching experience and management support at RSK.
                </p>
              </div>
            </div>

            {/* Sports Teacher Video */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-xl">
              <video 
                className="w-full h-48 object-cover" 
                controls
              >
                <source src="/schoolvideos/rsk public school dehri Sports teacher demostrating fitness with karate with kids in backgound.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Sports Teacher</h4>
                    <p className="text-slate-300 text-xs">Fitness & Karate Training</p>
                  </div>
                </div>
                <p className="text-slate-200 text-xs">
                  Watch our sports teacher motivate students through fitness and karate, building character and leadership skills.
                </p>
              </div>
            </div>

            {/* Science Teacher Video */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-xl">
              <video 
                className="w-full h-48 object-cover" 
                controls
              >
                <source src="/schoolvideos/rsk public school dehri Kushal Sir science teacher feedback and management feedback.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white">Kushal Sir - Science Teacher</h4>
                    <p className="text-slate-300 text-xs">Innovative Science Education</p>
                  </div>
                </div>
                <p className="text-slate-200 text-xs">
                  Discover how Kushal Sir uses innovative experiments to spark curiosity and scientific thinking in students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Improvement Data Center */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Measurable transformation in every child who joins RSK">
            Student Improvement Statistics
          </SectionTitle>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Average Improvement After Joining RSK</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Based on comprehensive assessment of students before and after joining RSK Public School
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-emerald-200 text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">90%</div>
                <h4 className="font-semibold text-gray-800 mb-2">Confidence Level Increase</h4>
                <p className="text-sm text-gray-600">Increase in self-confidence and public speaking abilities</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200 text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                <h4 className="font-semibold text-gray-800 mb-2">Communication Skill Increase</h4>
                <p className="text-sm text-gray-600">Improvement in English communication and fluency</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-200 text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
                <h4 className="font-semibold text-gray-800 mb-2">Leadership Skills Increase</h4>
                <p className="text-sm text-gray-600">Development in leadership and team management abilities</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200 text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <h4 className="font-semibold text-gray-800 mb-2">Happiness Level Increase</h4>
                <p className="text-sm text-gray-600">Overall satisfaction and joy in learning environment</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 italic">
                *Data collected from parent surveys and student assessments over the past 3 years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Witness real transformations: from dreams to achievements at RSK Public School">
            Student Success Stories - Real Results, Real Students
          </SectionTitle>

          {/* Student Achievement Showcase */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/schoolimages/rsk public school dehri students performance song.jpeg" 
                  alt="RSK students showcasing musical talents and confidence"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Musical Excellence</div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/activitiesandevent/rsk public school dehri science fair innovation.jpg" 
                  alt="RSK students winning at science fair with innovative projects"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Science Champions</div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/activitiesandevent/rsk public school dehri sports day celebration.jpg" 
                  alt="RSK students celebrating victories in sports competitions"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Sports Excellence</div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <img 
                  src="/activitiesandevent/rsk public school dehri inter school competitions.jpg" 
                  alt="RSK students representing school in inter-school competitions"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Competition Winners</div>
              </div>
            </div>
          </div>

          {/* Success Stories Grid */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Real Student Success Stories</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              {/* Success Story 1 - Academic Excellence */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/schoolimages/rsk public school dehri food stall students model exhibition (1).jpeg" 
                  alt="Student showcasing innovative science project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-sm font-semibold text-green-600">ACADEMIC SUCCESS</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">From Shy to Science Star</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Priya joined RSK as a quiet student in Class 6. Through our personalized attention and science fair programs, she developed confidence and won the state-level science exhibition.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>95% improvement in confidence • State-level winner</span>
                  </div>
                </div>
              </div>

              {/* Success Story 2 - Sports Achievement */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/schoolimages/rsk public school dehri students NCC cadet stunt girls and boys (1).jpeg" 
                  alt="NCC cadet demonstrating discipline and leadership"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-sm font-semibold text-blue-600">LEADERSHIP SUCCESS</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">NCC Cadet to District Leader</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Arjun's journey from Class 7 to becoming the NCC District Youth Leader showcases how RSK's discipline training shapes future leaders.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>District NCC Leader • 90% discipline improvement</span>
                  </div>
                </div>
              </div>

              {/* Success Story 3 - Creative Excellence */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/schoolimages/rsk public school dehri kids dance.jpeg" 
                  alt="Student performing in cultural program"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-sm font-semibold text-purple-600">CREATIVE SUCCESS</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Dancing Dreams Come True</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Ananya discovered her passion for dance at RSK's cultural programs. She now represents Bihar in national dance competitions.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>National competitor • Cultural program star</span>
                  </div>
                </div>
              </div>
              
              {/* Success Story 4 - Communication Skills */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/schoolimages/rsk public school dehri kids parate 26th jan.jpeg" 
                  alt="Student confidently leading Republic Day parade"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-amber-500 rounded-full mr-3"></div>
                    <span className="text-sm font-semibold text-amber-600">COMMUNICATION SUCCESS</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">From Silent to School Speaker</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Rohan couldn't speak in front of his class in Grade 5. Today, he confidently leads Republic Day speeches and debate competitions.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Public speaking champion • 100% confidence boost</span>
                  </div>
                </div>
              </div>

              {/* Success Story 5 - Academic Transformation */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/activitiesandevent/rsk public school dehri educational trips students.jpg" 
                  alt="Students learning through educational field trips"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-sm font-semibold text-red-600">ACADEMIC TURNAROUND</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Struggling to Straight A's</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Kiran was failing in mathematics when he joined RSK. Through personalized tutoring and educational trips, he now scores 95%+ consistently.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>40% → 95% in Mathematics • Academic excellence</span>
                  </div>
                </div>
              </div>

              {/* Success Story 6 - Innovation & Technology */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img 
                  src="/schoolimages/rsk public school dehri food stall students model exhibition (5).jpeg" 
                  alt="Student presenting innovative technology project"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mr-3"></div>
                    <span className="text-sm font-semibold text-indigo-600">INNOVATION SUCCESS</span>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Young Inventor at 14</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Sania's innovative water purification model at RSK's science fair caught the attention of IIT professors and won national recognition.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>National innovation award • IIT recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Statistics */}
          <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 mb-12 border border-emerald-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">🌟 Student Success Impact</h3>
              <p className="text-gray-600">Real measurable results from RSK students</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">Students show improved confidence within 6 months</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Parents report positive behavioral changes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">78%</div>
                <div className="text-sm text-gray-600">Students develop new talents & hobbies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-amber-600 mb-2">92%</div>
                <div className="text-sm text-gray-600">Academic improvement in first year</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-700 text-sm italic">
                "These aren't just numbers - they represent real children whose lives have been transformed through quality education at RSK Public School."
              </p>
            </div>
          </div>

          {/* Performance Tracking Showcase */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 border border-blue-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                Individual Performance Tracking
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Real-time monitoring of your child's progress with detailed analytics and personalized feedback
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/student-performance-dashboard.svg" 
                  alt="Comprehensive student performance dashboard showing real-time academic progress, attendance tracking, and detailed analytics for RSK students"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Weekly Progress Reports</h4>
                    <p className="text-gray-600 text-sm">Detailed subject-wise performance analysis sent to parents every week</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Personalized Learning Path</h4>
                    <p className="text-gray-600 text-sm">Customized study plans based on individual strengths and improvement areas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Parent Portal Access</h4>
                    <p className="text-gray-600 text-sm">24/7 access to attendance, grades, assignments, and teacher feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Services & Programs */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Comprehensive programs designed for complete development">
            Our Services & Programs
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Curriculum Subjects */}
            <Card className="bg-white shadow-xl border border-gray-200">
              <CardBody className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">CBSE Curriculum Subjects</h3>
                  <p className="text-gray-600 text-sm mb-4">Comprehensive academic foundation</p>
                </div>
                
                {/* Image Carousel Placeholder */}
                <div className="mb-4">
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg overflow-hidden">
                    <img 
                      src="/rsk public school dehri cbse building image.webp" 
                      alt="CBSE building and comprehensive curriculum for grades 1-12"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      1 / 5
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {/* Primary Classes (1-5) */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-800 mb-2 uppercase tracking-wide">Primary (Classes 1-5)</h4>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        English
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Hindi
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Mathematics
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        EVS
                      </div>
                    </div>
                  </div>

                  {/* Middle Classes (6-8) */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-800 mb-2 uppercase tracking-wide">Middle (Classes 6-8)</h4>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        English
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Hindi
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Mathematics
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Science
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Social Science
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Sanskrit/Urdu
                      </div>
                    </div>
                  </div>

                  {/* Secondary Classes (9-10) */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-gray-800 mb-2 uppercase tracking-wide">Secondary (Classes 9-10)</h4>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        English
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Hindi
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Mathematics
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Science
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Social Science
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        IT/Computer
                      </div>
                    </div>
                  </div>

                  {/* Senior Secondary Classes (11-12) */}
                  <div>
                    <h4 className="text-xs font-semibold text-gray-800 mb-2 uppercase tracking-wide">Senior Secondary (Classes 11-12)</h4>
                    <div className="grid grid-cols-1 gap-1">
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Science: Physics, Chemistry, Biology, Mathematics
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Commerce: Accountancy, Business Studies, Economics
                      </div>
                      <div className="flex items-center text-xs text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                        Arts: History, Political Science, Geography, Psychology
                      </div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Co-curricular Activities */}
            <Card className="bg-white shadow-xl border border-gray-200">
              <CardBody className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Co-curricular Activities</h3>
                  <p className="text-gray-600 text-sm mb-4">Beyond academics development</p>
                </div>
                
                {/* Image Carousel Placeholder */}
                <div className="mb-4">
                  <div className="relative h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg overflow-hidden">
                    <img 
                      src="/activitiesandevent/rsk public school dehri sports day celebration.jpg" 
                      alt="Students participating in sports day and co-curricular activities"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      1 / 8
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Sports & Athletics
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Music & Dance
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Drama & Theatre
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Art & Craft
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Science Fair
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      NCC Training
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Annual Day
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      Educational Trips
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Skill-based Learning Workshops */}
            <Card className="bg-white shadow-xl border border-gray-200">
              <CardBody className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Skill-based Workshops</h3>
                  <p className="text-gray-600 text-sm mb-4">Future-ready skill development</p>
                </div>
                
                {/* Image Carousel Placeholder */}
                <div className="mb-4">
                  <div className="relative h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg overflow-hidden">
                    <img 
                      src="/skill-workshops-carousel.jpg" 
                      alt="Students in skill development workshops"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      1 / 6
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Robotics & Coding
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Public Speaking
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Leadership Training
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Life Skills & Ethics
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Hear from parents who trust RSK with their child's future">
            What Parents Say About RSK
          </SectionTitle>

          {/* Parent Video Testimonials */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Parent Video Testimonials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <video 
                  className="w-full h-48 object-cover" 
                  controls
                >
                  <source src="/schoolvideos/rsk public school dehri parent feedback female with kids.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">Parent Feedback</h4>
                  <p className="text-sm text-gray-600">"Why we chose RSK for our children"</p>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <video 
                  className="w-full h-48 object-cover" 
                  controls
                >
                  <source src="/schoolvideos/rsk public school dehri parent feedback male with kids very satisfied.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">Satisfied Parent</h4>
                  <p className="text-sm text-gray-600">"Very satisfied with our child's progress at RSK"</p>
                </div>
              </div>
              
              <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                <video 
                  className="w-full h-48 object-cover" 
                  controls
                >
                  <source src="/schoolvideos/rsk public school dehri parent feedback 2 female with kids about school and managment.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800">Parents Share Their Experience</h4>
                  <p className="text-sm text-gray-600">"About school quality and management"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Student Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">What Our Students Say</h3>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
              Hear directly from our students about their journey of growth, discipline, and success at RSK Public School
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-xl overflow-hidden shadow-lg border border-orange-200">
                <video 
                  className="w-full h-48 object-cover" 
                  controls
                >
                  <source src="/schoolvideos/rsk public school dehri karate student saying boy.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Karate Student - Body Mind Connection</h4>
                  </div>
                  <p className="text-sm text-gray-600">"Hum khelte hain, seekhte hain, jeette hain!" - Learning discipline through martial arts</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl overflow-hidden shadow-lg border border-pink-200">
                <video 
                  className="w-full h-48 object-cover" 
                  controls
                >
                  <source src="/schoolvideos/rsk public school dehri karate student saying girl.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Confident Student - Self Defense</h4>
                  </div>
                  <p className="text-sm text-gray-600">Building confidence, strength, and character through karate training at RSK</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-xl overflow-hidden shadow-lg border border-purple-200">
                <video 
                  className="w-full h-48 object-cover" 
                  controls
                >
                  <source src="/schoolvideos/rsk public school dehri karate student saying girl 2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Empowered Student - Leadership</h4>
                  </div>
                  <p className="text-sm text-gray-600">Mind-body balance and leadership skills through dedicated martial arts practice</p>
                </div>
              </div>

            </div>
          </div>

          {/* Student Activities Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">What Your Child Experiences at RSK</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              {/* Model Exhibition Activities */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/schoolimages/rsk public school dehri food stall students model exhibition.jpeg" 
                  alt="Students showcasing their creative projects at model exhibition"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Science & Model Exhibitions</h4>
                  <p className="text-sm text-gray-600">Students develop creativity and scientific thinking through hands-on project exhibitions</p>
                </div>
              </div>

              {/* Kids Dance Performance */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/schoolimages/rsk public school dehri kids dance.jpeg" 
                  alt="Children performing dance at cultural events"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Cultural Performances</h4>
                  <p className="text-sm text-gray-600">Dance, music, and cultural activities help develop confidence and artistic skills</p>
                </div>
              </div>

              {/* NCC Cadet Activities */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/schoolimages/rsk public school dehri students NCC cadet march.jpeg" 
                  alt="NCC cadets marching - developing discipline and leadership"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">NCC & Discipline Training</h4>
                  <p className="text-sm text-gray-600">NCC activities build discipline, leadership, and patriotic values</p>
                </div>
              </div>

              {/* Horse Riding Activities */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/activitiesandevent/rsk public school dehri horse riding.jpg" 
                  alt="Students learning horse riding at RSK Public School"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Horse Riding Classes</h4>
                  <p className="text-sm text-gray-600">Unique opportunity for students to learn horse riding and develop courage and confidence</p>
                </div>
              </div>

              {/* Educational Trips */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/activitiesandevent/rsk public school dehri educational trips students.jpg" 
                  alt="RSK students on exciting educational field trips"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Educational Field Trips</h4>
                  <p className="text-sm text-gray-600">Exciting learning adventures to museums, historical sites, and educational destinations</p>
                </div>
              </div>

              {/* Inter-School Competitions */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/activitiesandevent/rsk public school dehri inter school competitions.jpg" 
                  alt="RSK students excelling in inter-school competitions"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Competition Excellence</h4>
                  <p className="text-sm text-gray-600">Students representing RSK with pride in various inter-school competitions and events</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <Card hover className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 shadow-lg">
              <CardBody className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    SK
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Sunita Kumari</h4>
                    <p className="text-sm text-gray-600">Parent of Aarav (Class 10)</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "My son's confidence has grown tremendously at RSK. The teachers provide individual attention and the regular progress updates help me stay connected with his learning journey. Best school in Dehri!"
                </p>
                <div className="text-sm text-emerald-600 font-medium">
                  "Excellent academic and personal development"
                </div>
              </CardBody>
            </Card>

            {/* Testimonial 2 */}
            <Card hover className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-lg">
              <CardBody className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    RG
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Rajesh Gupta</h4>
                    <p className="text-sm text-gray-600">Parent of Priya (Class 8)</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The safety measures and caring environment at RSK give me complete peace of mind. My daughter loves going to school and has developed excellent values along with academic excellence."
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  "Safe environment with quality education"
                </div>
              </CardBody>
            </Card>

            {/* Testimonial 3 */}
            <Card hover className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 shadow-lg">
              <CardBody className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    MS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Meera Singh</h4>
                    <p className="text-sm text-gray-600">Parent of Arjun (Class 12)</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "RSK has prepared my son excellently for board exams and future challenges. The co-curricular activities have made him well-rounded. Grateful for choosing RSK for his education."
                </p>
                <div className="text-sm text-purple-600 font-medium">
                  "Complete preparation for future success"
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Ready to Give Your Child the Best Future?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the RSK family and watch your child excel academically, grow personally, and prepare for a bright future. 
            Schedule a visit to experience the RSK difference.
          </p>
          <div className="flex justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="px-10 py-4">
              Schedule a School Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
