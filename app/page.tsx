import Link from 'next/link';
import Button from './components/Button';
import SectionTitle from './components/SectionTitle';
import { Card, CardBody } from './components/Card';
import CounterStat from './components/CounterStat';
import VisitorCounterRobust from './components/VisitorCounterRobust';
import { schoolInfo } from './lib/schoolData';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative text-white overflow-hidden min-h-screen">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/Rsk public school dehri model image.webp" 
            alt="RSK Public School Campus"
            className="w-full h-full object-cover"
          />
          {/* Enhanced gradient overlay for better distinction */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-blue-900/60 to-indigo-900/70"></div>
          {/* Additional overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* CBSE Badge - Enhanced */}
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md rounded-full border border-blue-300/40 shadow-lg">
              <span className="text-sm sm:text-base font-semibold text-blue-100">CBSE Affiliated School • Est. {schoolInfo.establishedYear}</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 animate-fade-in leading-tight">
              Welcome to RSK, the best CBSE school in Dehri.
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              Real Progress, Measurable Performance Outcome, Building Future Leaders through Quality Education and Holistic Development
            </p>
            
       
            
            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 max-w-3xl mx-auto">
              <Link href="/admissions/apply" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[200px] group">
                <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Apply for Admission
              </Link>
              <Link href="/online-tuition" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-base sm:text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[200px] group">
                <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Want Online Tuition
              </Link>
            </div>

            {/* Explore School Section */}
            <div className="border-t border-white/30 pt-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Let's Explore Our School
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Discover what makes RSK Public School the perfect choice for your child's future
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-4xl mx-auto px-4">
                {/* Teacher's Experience Button */}
                <Link href="/teachers" className="group relative w-full sm:w-auto min-w-[200px] px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer">
                  <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">Teacher's Experience</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Parents Experience Button */}
                <Link href="/parents" className="group relative w-full sm:w-auto min-w-[200px] px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer">
                  <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">Parents Experience</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                {/* Student's Experience Button */}
                <Link href="/academics" className="group relative w-full sm:w-auto min-w-[200px] px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer">
                  <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <span className="text-base sm:text-lg font-semibold">Student's Experience</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
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

      {/* Quick Stats */}
      <section className="py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 -mt-1 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Achievements
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
            <CounterStat
              endValue={20}
              suffix="+"
              label="Years of Excellence"
              colorClass="from-blue-50 to-blue-100"
              iconClass="text-blue-600"
              duration={10000}
            />
            <CounterStat
              endValue={2500}
              suffix="+"
              label="Students"
              colorClass="from-green-50 to-green-100"
              iconClass="text-green-600"
              duration={10000}
            />
            <CounterStat
              endValue={50}
              suffix="+"
              label="Qualified Teachers"
              colorClass="from-amber-50 to-amber-100"
              iconClass="text-amber-600"
              duration={10000}
            />
            <CounterStat
              endValue={100}
              suffix="%"
              label="Results"
              colorClass="from-purple-50 to-purple-100"
              iconClass="text-purple-600"
              duration={10000}
            />
            <CounterStat
              endValue={60}
              suffix="%"
              label="Visible Change in 1 Year"
              colorClass="from-rose-50 to-rose-100"
              iconClass="text-rose-600"
              duration={10000}
            />
            <CounterStat
              endValue={80}
              suffix="%"
              label="Confidence Increase"
              colorClass="from-teal-50 to-teal-100"
              iconClass="text-teal-600"
              duration={10000}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="What makes us the preferred choice for quality education">
            Why Choose RSK Public School?
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <Card hover className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-5">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">CBSE Curriculum</h3>
                <p className="text-gray-600 text-sm">
                  Following the latest CBSE guidelines with focus on holistic development and practical learning.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-5">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Safe Environment</h3>
                <p className="text-gray-600 text-sm">
                  Secured campus with CCTV surveillance, safe transport, and trained staff ensuring student safety.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-5">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Modern Infrastructure</h3>
                <p className="text-gray-600 text-sm">
                  Well-equipped labs, digital classrooms, library, and sports facilities for comprehensive learning.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-5">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Experienced Faculty</h3>
                <p className="text-gray-600 text-sm">
                  Dedicated and qualified teachers committed to nurturing each student's potential and growth.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-5">
                <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Co-Curricular Activities</h3>
                <p className="text-gray-600 text-sm">
                  Sports, arts, music, and cultural programs to develop well-rounded personalities.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-5">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Excellent Results</h3>
                <p className="text-gray-600 text-sm">
                  Consistent outstanding performance in board exams and competitive examinations.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>


      {/* Latest News & Events */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Stay updated with our latest announcements and activities">
            Latest News & Events
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            <Card hover className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-lg">
              <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <CardBody className="px-4 py-4">
                <div className="text-xs text-blue-700 font-semibold mb-1">Academic Year 2025-26</div>
                <h3 className="text-base font-bold mb-2 text-blue-800">Admissions Open</h3>
                <p className="text-blue-700 text-xs mb-3">
                  New admissions for all classes are now open. Limited seats available.
                </p>
                <Link href="/admissions/apply" className="text-blue-600 font-medium text-xs hover:underline hover:text-blue-800 transition-colors">
                  Apply Now →
                </Link>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 shadow-lg">
              <div className="h-32 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <CardBody className="px-4 py-4">
                <div className="text-xs text-green-700 font-semibold mb-1">Results 2023-24</div>
                <h3 className="text-base font-bold mb-2 text-green-800">100% Pass Percentage</h3>
                <p className="text-green-700 text-xs mb-3">
                  Congratulations to all students for achieving excellent results in board exams.
                </p>
                <Link href="/results-announcements" className="text-green-600 font-medium text-xs hover:underline hover:text-green-800 transition-colors">
                  View Details →
                </Link>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 shadow-lg">
              <div className="h-32 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <CardBody className="px-4 py-4">
                <div className="text-xs text-purple-700 font-semibold mb-1">Online Learning</div>
                <h3 className="text-base font-bold mb-2 text-purple-800">Online Tuition Classes</h3>
                <p className="text-purple-700 text-xs mb-3">
                  Expert online tutoring sessions for all subjects with personalized attention and flexible timings.
                </p>
                <Link href="/online-tuition" className="text-purple-600 font-medium text-xs hover:underline hover:text-purple-800 transition-colors">
                  Learn More →
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* The Confidence and Student-teacher Coordination at RSK */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <video 
                className="w-full h-64 object-cover" 
                controls
              >
                <source src="/schoolvideos/rsk public school dehri Sports teacher demostrating fitness with karate with kids in backgound.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-2">The Confidence and Student-teacher Coordination at RSK</h4>
                <p className="text-gray-600">Our sports teacher demonstrating karate and fitness with students learning discipline and strength</p>
              </div>
            </div>
          </div>

          {/* Student Activities Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Student Activities & Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/schoolimages/rsk public school dehri students NCC cadet stunt girls and boys (1).jpeg" 
                  alt="NCC cadet activities developing discipline and leadership"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">NCC Training</h4>
                  <p className="text-xs text-gray-600">Building discipline, leadership, and patriotic values through NCC activities</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/activitiesandevent/rsk public school dehri annuals day celebration.jpg" 
                  alt="Students showcasing talents in annual day celebration at RSK"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Annual Day Celebration</h4>
                  <p className="text-xs text-gray-600">Grand annual celebration with dance, drama, music, and cultural performances</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/activitiesandevent/rsk public school dehri sports day celebration.jpg" 
                  alt="Students participating in exciting sports day events and competitions"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Sports Day Events</h4>
                  <p className="text-xs text-gray-600">Exciting sports competitions fostering teamwork, fitness, and healthy competition</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/activitiesandevent/rsk public school dehri science fair innovation.jpg" 
                  alt="Students presenting innovative science projects and experiments"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Science Fair & Innovation</h4>
                  <p className="text-xs text-gray-600">Encouraging scientific thinking and innovation through hands-on project exhibitions</p>
                </div>
              </div>
            </div>
            
            {/* Explore More CTA */}
            <div className="text-center mt-12">
              <a 
                href="#hero"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Explore More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Ready to Join Our School Community?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Give your child the gift of quality education and holistic development. 
            Start their journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/admissions/apply" variant="secondary" size="lg" className="w-full sm:w-auto">
              Apply for Admission
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
              Schedule a Visit
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating CTA */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <a
          href="https://wa.me/919431234567?text=Hey%20RSK%2C%20I%20wanted%20to%20enquire"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse"
          title="Chat with us on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          
          {/* Text overlay */}
          <div className="absolute -top-8 right-0 bg-green-600 text-white text-xs px-2 py-1 rounded-md shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            talk on whatsapp!
            <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600"></div>
          </div>
        </a>
      </div>

      {/* Hidden Visitor Counter - tracks visitors on landing page */}
      <div className="hidden">
        <VisitorCounterRobust showIcon={false} />
      </div>
    </div>
  );
}
