import Link from 'next/link';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { Card, CardBody } from '../components/Card';

export default function StudentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-screen">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/activitiesandevent/rsk public school dehri annuals day celebration.jpg" 
            alt="RSK students showcasing talents in annual day celebration"
            className="w-full h-full object-cover"
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-indigo-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md rounded-full border border-purple-300/40 shadow-lg">
              <span className="text-sm sm:text-base font-semibold text-purple-100">Where Dreams Take Flight • 1200+ Happy Students</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Your Amazing Journey Starts Here!
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              Discover endless opportunities, make lifelong friends, and create unforgettable memories at RSK Public School.
            </p>
            
            {/* Primary Action Button */}
            <div className="flex justify-center items-center mb-12">
              <Link href="/contact" className="px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Join Our Family
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-sm text-slate-300">Fun Activities</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">10+</div>
                <div className="text-sm text-slate-300">Student Clubs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-sm text-slate-300">Events Per Year</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2500+</div>
                <div className="text-sm text-slate-300">Happy Students</div>
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

      {/* Fun Activities & Events */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Every day is an adventure filled with exciting activities and events">
            Fun Activities & Events
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            <Card hover className="bg-gradient-to-br from-pink-50 to-rose-100 border border-pink-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/activitiesandevent/rsk public school dehri annuals day celebration.jpg" 
                    alt="Students performing in annual day celebration at RSK Public School"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Annual Day Celebration</h3>
                  <p className="text-gray-600 text-sm">
                    Showcase your talents in our grand annual celebration with dance, drama, music, and cultural performances.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-blue-50 to-cyan-100 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/activitiesandevent/rsk public school dehri science fair innovation.jpg" 
                    alt="Students presenting innovative projects at RSK science fair"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Science Fair & Innovation</h3>
                  <p className="text-gray-600 text-sm">
                    Present your innovative projects, conduct experiments, and explore the wonders of science and technology.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-orange-50 to-red-100 border border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/schoolimages/rsk public school dehri kids parate 26th jan.jpeg" 
                    alt="RSK students celebrating Republic Day with patriotic parade"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Republic Day (26th Jan)</h3>
                  <p className="text-gray-600 text-sm">
                    Celebrate our nation's pride with flag hoisting, patriotic performances, and cultural programs.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/schoolimages/rsk public school dehri students stunt formations activities  (1).jpeg" 
                    alt="RSK students celebrating Independence Day with group formations"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Independence Day (15th Aug)</h3>
                  <p className="text-gray-600 text-sm">
                    Honor our freedom fighters with patriotic songs, speeches, and inspiring cultural performances.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-yellow-50 to-amber-100 border border-yellow-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/activitiesandevent/rsk public school dehri saraswati pooja celebration.jpg" 
                    alt="Students celebrating Saraswati Pooja at RSK Public School"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Saraswati Pooja</h3>
                  <p className="text-gray-600 text-sm">
                    Seek blessings of Goddess Saraswati for knowledge and wisdom with traditional rituals and celebrations.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-emerald-50 to-green-100 border border-emerald-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/activitiesandevent/rsk public school dehri sports day celebration.jpg" 
                    alt="Students participating in sports day events at RSK"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Sports Day Extravaganza</h3>
                  <p className="text-gray-600 text-sm">
                    Compete in exciting sports events, win medals, and show your athletic prowess in our annual sports carnival.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-indigo-50 to-blue-100 border border-indigo-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/schoolimages/rsk public school dehri students NCC cadet march.jpeg" 
                    alt="RSK students in NCC cadet training and march"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">NCC Training</h3>
                  <p className="text-gray-600 text-sm">
                    Build discipline, leadership, and patriotism through National Cadet Corps training and parades.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/activitiesandevent/rsk public school dehri horse riding.jpg" 
                    alt="RSK students learning horse riding with professional trainers"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Horse Riding</h3>
                  <p className="text-gray-600 text-sm">
                    Learn the royal art of horse riding with professional trainers in a safe and supervised environment.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-rose-50 to-pink-100 border border-rose-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/schoolimages/rsk public school dehri food stall students bal mela (1).jpeg" 
                    alt="RSK students enjoying fun-filled Bal Mela activities and food stalls"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Bal Mela</h3>
                  <p className="text-gray-600 text-sm">
                    Enjoy fun-filled children's fair with games, food stalls, cultural performances, and exciting prizes.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-amber-50 to-orange-100 border border-amber-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/activitiesandevent/rsk public school dehri educational trips students.jpg" 
                    alt="RSK students enjoying educational field trips and learning adventures"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Educational & Industry Exposure Trips</h3>
                  <p className="text-gray-600 text-sm">
                    Explore museums, historical sites, nature parks, and gain real-world industry exposure through visits to companies, factories, and professional establishments.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-teal-50 to-cyan-100 border border-teal-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/activitiesandevent/rsk public school dehri inter school competitions.jpg" 
                    alt="RSK students excelling in inter-school competitions"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Inter-School Competitions</h3>
                  <p className="text-gray-600 text-sm">
                    Represent RSK in debates, quiz competitions, art contests, and win laurels for your school and yourself.
                  </p>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-violet-50 to-purple-100 border border-violet-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="p-6">
                <div className="mb-4">
                  <img 
                    src="/students-ai-workshop.jpg" 
                    alt="Students in AI innovation workshop"
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">Career Workshops & AI Innovation</h3>
                  <p className="text-gray-600 text-sm">
                    Professional career guidance workshops, AI innovation sessions, machine learning projects, and cutting-edge technology training for future readiness.
                  </p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Exhibitions & Project Demonstrations */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Witness our students' creativity, innovation, and academic excellence through their amazing projects">
            Student Exhibitions & Projects
          </SectionTitle>

          {/* Project Demonstration Videos */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Student Project Demonstrations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <video 
                  className="w-full h-64 object-cover" 
                  controls
                >
                  <source src="/schoolvideos/rsk public school dehri exhibition day student feedback and project demostration isro .mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">ISRO Space Science Project</h4>
                  <p className="text-sm text-gray-600">Students showcasing their innovative space science project with detailed explanations and demonstrations during exhibition day</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <video 
                  className="w-full h-64 object-cover" 
                  controls
                >
                  <source src="/schoolvideos/rsk public school dehri exhibition day student feedback and project demostration srk school model.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">School Model Project</h4>
                  <p className="text-sm text-gray-600">Creative school model demonstration showing architectural design skills and innovative thinking by our talented students</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exhibition Images Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Model Exhibition Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/schoolimages/rsk public school dehri food stall students model exhibition (1).jpeg" 
                  alt="Students presenting creative models at science exhibition"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Science Models Exhibition</h4>
                  <p className="text-sm text-gray-600">Creative scientific models demonstrating physics, chemistry, and biology concepts</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/schoolimages/rsk public school dehri food stall students model exhibition (3).jpeg" 
                  alt="Innovative project displays by students"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Innovation Showcase</h4>
                  <p className="text-sm text-gray-600">Students presenting innovative solutions and creative engineering projects</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/schoolimages/rsk public school dehri food stall students model exhibition (5).jpeg" 
                  alt="Educational models and experiments display"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Educational Models</h4>
                  <p className="text-sm text-gray-600">Hands-on learning through interactive educational models and experiments</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/schoolimages/rsk public school dehri food stall students model exhibition 1.jpeg" 
                  alt="Student creativity in project exhibitions"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Creative Projects</h4>
                  <p className="text-sm text-gray-600">Artistic and creative projects showcasing students' diverse talents and skills</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/schoolimages/rsk public school dehri food stall students model exhibition (6).jpeg" 
                  alt="Technology and engineering projects"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Technology Projects</h4>
                  <p className="text-sm text-gray-600">Advanced technology and engineering projects by our tech-savvy students</p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/schoolimages/rsk public school dehri food stall students model exhibition 11.jpeg" 
                  alt="Interactive learning displays"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Interactive Learning</h4>
                  <p className="text-sm text-gray-600">Interactive displays that make learning fun and engaging for all students</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials with Videos */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Hear directly from our amazing students about their RSK experience">
            What Our Students Say
          </SectionTitle>

          {/* Student Video Testimonials */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Student Video Stories</h3>
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
                  <h4 className="font-semibold text-gray-800">Karate Student - Body Mind Connection</h4>
                  <p className="text-sm text-gray-600">"Hum khelte hain, seekhte hain, jeette hain!"</p>
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
                  <h4 className="font-semibold text-gray-800">Karate Student Girl - Confidence</h4>
                  <p className="text-sm text-gray-600">"Discipline and strength through martial arts"</p>
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
                  <h4 className="font-semibold text-gray-800">Karate Student Girl 2 - Leadership</h4>
                  <p className="text-sm text-gray-600">"Mind-body balance through martial arts training"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Written Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            <Card hover className="bg-gradient-to-br from-purple-50 to-pink-100 border border-purple-200 shadow-lg">
              <CardBody className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    AS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Aarav Sharma</h4>
                    <p className="text-sm text-gray-600">Class 10 • Science Stream</p>
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
                  "RSK is not just a school, it's my second home! The teachers are super cool and always help us. I love the science lab experiments and playing cricket with my friends during breaks."
                </p>
                <div className="text-sm text-purple-600 font-medium">
                  "Best school ever! 🚀"
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-blue-50 to-cyan-100 border border-blue-200 shadow-lg">
              <CardBody className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    PG
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Priya Gupta</h4>
                    <p className="text-sm text-gray-600">Class 12 • Arts Stream</p>
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
                  "I've been at RSK for 6 years and it's been amazing! The annual day performances, dance competitions, and art exhibitions have helped me discover my passion for creative arts."
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  "Dreams come true here! ✨"
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 shadow-lg">
              <CardBody className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    AS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Arjun Singh</h4>
                    <p className="text-sm text-gray-600">Class 9 • All Subjects</p>
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
                  "The sports facilities are awesome! I'm part of the football team and we practice every day. The coaches are really supportive and my teammates are like brothers to me."
                </p>
                <div className="text-sm text-green-600 font-medium">
                  "Team spirit rocks! ⚽"
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Join exciting clubs and societies to explore your interests and make new friends" className="text-white">
            Clubs & Societies
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Debate Club</h3>
                <p className="text-sm text-slate-300">
                  Improve your speaking skills and confidence through exciting debates and discussions.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Science Club</h3>
                <p className="text-sm text-slate-300">
                  Conduct cool experiments and explore the fascinating world of science and technology.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Music Club</h3>
                <p className="text-sm text-slate-300">
                  Comprehensive music education with instruments, vocal training, choir participation, and regular performances in school concerts and cultural events.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Art Club</h3>
                <p className="text-sm text-slate-300">
                  Express your creativity through painting, drawing, and various art forms and exhibitions.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Robotics Club</h3>
                <p className="text-sm text-slate-300">
                  Build robots, learn programming, and participate in exciting robotics competitions.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Drama Club</h3>
                <p className="text-sm text-slate-300">
                  Act in plays, develop stage presence, and showcase your dramatic talents in performances.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Sports Club</h3>
                <p className="text-sm text-slate-300">
                  Join various sports teams including swimming, cricket, football, badminton. Train regularly and compete in inter-school tournaments.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Literary Club</h3>
                <p className="text-sm text-slate-300">
                  Write stories, poems, and articles for the school magazine and literary competitions.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Photography Club</h3>
                <p className="text-sm text-slate-300">
                  Capture beautiful moments, learn photography techniques, and create stunning visual stories.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Environment Club</h3>
                <p className="text-sm text-slate-300">
                  Promote eco-friendly practices, organize tree plantation drives, and create environmental awareness.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Quiz Club</h3>
                <p className="text-sm text-slate-300">
                  Test your knowledge, participate in quiz competitions, and enhance your general awareness.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Take a visual journey through our vibrant campus life and memorable moments">
            Campus Life Gallery
          </SectionTitle>

          {/* Main Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-12">
            <div className="relative overflow-hidden rounded-lg shadow-lg group col-span-2 row-span-2">
              <img 
                src="/gallery-main-campus.jpg" 
                alt="Beautiful RSK campus overview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold text-lg">Our Beautiful Campus</h4>
                <p className="text-sm opacity-90">Modern facilities in a green environment</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/gallery-classroom.jpg" 
                alt="Modern smart classrooms"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Smart Classrooms</div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/gallery-library.jpg" 
                alt="Well-equipped library"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Modern Library</div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/gallery-playground.jpg" 
                alt="Spacious playground and sports facilities"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Sports Ground</div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/gallery-lab.jpg" 
                alt="Science and computer labs"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Science Labs</div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group col-span-2">
              <img 
                src="/gallery-cafeteria.jpg" 
                alt="Clean and hygienic cafeteria"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Hygienic Cafeteria</div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/gallery-auditorium.jpg" 
                alt="School auditorium for events"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Auditorium</div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img 
                src="/gallery-transport.jpg" 
                alt="Safe school transport system"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Safe Transport</div>
            </div>
          </div>

          {/* View More Gallery Button */}
          <div className="text-center">
            <Link href="/gallery" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Complete Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Student Achievements */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Celebrating the outstanding achievements of our talented students">
            Student Achievements & Success Stories
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card hover className="bg-gradient-to-br from-yellow-50 to-orange-100 border border-yellow-200 shadow-lg">
              <CardBody className="p-6 text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Academic Excellence</h3>
                <p className="text-3xl font-bold text-yellow-600 mb-2">100%</p>
                <p className="text-gray-600 text-sm mb-4">Board Exam Pass Rate</p>
                <p className="text-gray-700 text-sm">
                  Our students consistently achieve outstanding results in CBSE board examinations with many securing top ranks.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 shadow-lg">
              <CardBody className="p-6 text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sports Champions</h3>
                <p className="text-3xl font-bold text-green-600 mb-2">50+</p>
                <p className="text-gray-600 text-sm mb-4">Medals Won This Year</p>
                <p className="text-gray-700 text-sm">
                  Our athletes excel in district and state level competitions in cricket, football, athletics, and more.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-purple-50 to-violet-100 border border-purple-200 shadow-lg">
              <CardBody className="p-6 text-center">
                <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Cultural Stars</h3>
                <p className="text-3xl font-bold text-purple-600 mb-2">25+</p>
                <p className="text-gray-600 text-sm mb-4">Awards in Arts & Culture</p>
                <p className="text-gray-700 text-sm">
                  Students shine in music, dance, drama, and art competitions at regional and national levels.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Ready to Start Your Amazing Journey?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of happy students who are living their dreams, making best friends, and creating unforgettable memories at RSK Public School.
          </p>
          <div className="flex justify-center">
            <Button href="/contact" variant="secondary" size="lg" className="px-10 py-4">
              Join RSK Family Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}