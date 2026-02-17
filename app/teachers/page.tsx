import Link from 'next/link';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import { Card, CardBody } from '../components/Card';

export default function TeachersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-screen">
        {/* Hero Background Image */}
         <div className="absolute inset-0">
           <img 
             src="/teacherspage/best cbse school in Dehri RSK public school teachersgroup. .jpeg" 
             alt="RSK Teachers Community"
             className="w-full h-full object-cover"
           />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md rounded-full border border-blue-300/40 shadow-lg">
              <span className="text-sm sm:text-base font-semibold text-blue-100">Join Our Teaching Community • 50+ Dedicated Educators</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
              Experience Teaching Excellence at RSK
            </h1>
            
            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-slate-200 max-w-4xl mx-auto leading-relaxed font-light">
              Where passionate educators thrive, students flourish, and teaching dreams come true. Join a community that puts teachers first.
            </p>
            
             {/* Primary Action Button */}
             <div className="flex justify-center items-center mb-12">
               <Link href="/contact" className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                 <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
                 Apply to Join Us
               </Link>
             </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-slate-300">Expert Teachers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-sm text-slate-300">Years Experience</div>
              </div>
               <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                 <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
                 <div className="text-sm text-slate-300">Teacher Satisfaction</div>
               </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-slate-300">Student Success</div>
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

      {/* Why Teachers Love RSK */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Discover what makes RSK the perfect place for passionate educators">
            Why Teachers Choose RSK
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <Card hover className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Supportive Community</h3>
                <p className="text-gray-600">
                  Join a collaborative environment where teachers support each other, share resources, and grow together as a unified team.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Competitive Compensation</h3>
                <p className="text-gray-600">
                  Enjoy competitive salaries, performance bonuses, and comprehensive benefits that recognize your dedication and expertise.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Professional Growth</h3>
                <p className="text-gray-600">
                  Access continuous training, workshops, and career advancement opportunities to enhance your teaching skills and leadership.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Modern Infrastructure</h3>
                <p className="text-gray-600">
                  Teach with state-of-the-art facilities, smart classrooms, and advanced technology that enhances your teaching effectiveness.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Student-First Approach</h3>
                <p className="text-gray-600">
                  Be part of a mission-driven environment where every decision prioritizes student success and holistic development.
                </p>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 hover:shadow-lg transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Work-Life Balance</h3>
                <p className="text-gray-600">
                  Enjoy flexible schedules, generous leave policies, and a supportive management that values your personal well-being.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

       {/* Teacher Testimonials */}
       <section className="py-12 sm:py-16 lg:py-20 bg-white">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <SectionTitle centered subtitle="Hear from our dedicated educators about their journey at RSK">
             What Our Teachers Say
           </SectionTitle>

           {/* Teacher Interview Videos */}
           <div className="mb-12">
             <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Teacher Interview Videos</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
               <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                 <video 
                   className="w-full h-48 object-cover" 
                   controls 
                   poster="/teacher-interview-1-thumbnail.jpg"
                 >
                   <source src="/teacher-interview-1.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
                 <div className="p-4">
                   <h4 className="font-semibold text-gray-800">Priya Sharma - Mathematics Teacher</h4>
                   <p className="text-sm text-gray-600">"Why I love teaching at RSK"</p>
                 </div>
               </div>
               
               <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                 <video 
                   className="w-full h-48 object-cover" 
                   controls 
                   poster="/teacher-interview-2-thumbnail.jpg"
                 >
                   <source src="/teacher-interview-2.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
                 <div className="p-4">
                   <h4 className="font-semibold text-gray-800">Rajesh Kumar - Science Teacher</h4>
                   <p className="text-sm text-gray-600">"Innovation in teaching at RSK"</p>
                 </div>
               </div>
               
               <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                 <video 
                   className="w-full h-48 object-cover" 
                   controls 
                   poster="/teacher-interview-3-thumbnail.jpg"
                 >
                   <source src="/teacher-interview-3.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
                 <div className="p-4">
                   <h4 className="font-semibold text-gray-800">Anita Singh - English Teacher</h4>
                   <p className="text-sm text-gray-600">"Work-life balance at RSK"</p>
                 </div>
               </div>
             </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <Card hover className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-lg">
              <CardBody className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    PS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Priya Sharma</h4>
                    <p className="text-sm text-gray-600">Mathematics Teacher • 8 Years at RSK</p>
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
                  "RSK has given me the perfect platform to grow as an educator. The supportive management, collaborative colleagues, and student-first approach make every day fulfilling. I've never felt more valued as a teacher."
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  "Best decision of my teaching career!"
                </div>
              </CardBody>
            </Card>

            {/* Testimonial 2 */}
            <Card hover className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 shadow-lg">
              <CardBody className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    RK
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Rajesh Kumar</h4>
                    <p className="text-sm text-gray-600">Science Teacher • 12 Years at RSK</p>
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
                  "The modern labs and technology at RSK allow me to bring science to life for my students. The administration truly cares about both teacher and student success. The competitive salary and benefits are excellent too!"
                </p>
                <div className="text-sm text-green-600 font-medium">
                  "Innovation meets tradition perfectly here."
                </div>
              </CardBody>
            </Card>

            {/* Testimonial 3 */}
            <Card hover className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 shadow-lg">
              <CardBody className="px-6 py-8">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    AS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Anita Singh</h4>
                    <p className="text-sm text-gray-600">English Teacher • 6 Years at RSK</p>
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
                  "RSK provides the perfect work-life balance. The flexible schedules and generous leave policies allow me to be present for my family while pursuing my passion for teaching. The professional development opportunities are outstanding."
                </p>
                <div className="text-sm text-purple-600 font-medium">
                  "A place where teachers truly thrive."
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Teacher Benefits & Compensation */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Comprehensive benefits package designed for educator success" className="text-white">
            Teacher Benefits & Compensation
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {/* Salary & Compensation */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Competitive Salary</h3>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Market-leading compensation</li>
                  <li>• Performance bonuses</li>
                  <li>• Annual increments</li>
                  <li>• Festival bonuses</li>
                </ul>
              </CardBody>
            </Card>

            {/* Health & Wellness */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Health & Wellness</h3>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Comprehensive health insurance</li>
                  <li>• Annual health checkups</li>
                  <li>• Mental wellness support</li>
                  <li>• Fitness facilities access</li>
                </ul>
              </CardBody>
            </Card>

            {/* Leave & Time Off */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Flexible Time Off</h3>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Generous vacation days</li>
                  <li>• Sick leave benefits</li>
                  <li>• Maternity/Paternity leave</li>
                  <li>• Festival holidays</li>
                </ul>
              </CardBody>
            </Card>

            {/* Professional Development */}
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <CardBody className="text-center px-4 py-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-3">Growth Opportunities</h3>
                <ul className="text-sm text-slate-300 space-y-2">
                  <li>• Training workshops</li>
                  <li>• Conference attendance</li>
                  <li>• Leadership development</li>
                  <li>• Skill enhancement programs</li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Environment & Culture */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Experience a nurturing environment where teaching excellence flourishes">
            Our Teaching Environment
          </SectionTitle>

           {/* Teacher Community Pictures */}
           <div className="mb-12">
             <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Teaching Community</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
               <div className="relative overflow-hidden rounded-lg shadow-lg group">
                 <img 
                   src="/teacher-community-1.jpg" 
                   alt="Teachers collaborating in staff room"
                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                 <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Staff Collaboration</div>
               </div>
               
               <div className="relative overflow-hidden rounded-lg shadow-lg group">
                 <img 
                   src="/teacher-community-2.jpg" 
                   alt="Teachers in professional development workshop"
                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                 <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Training Workshop</div>
               </div>
               
               <div className="relative overflow-hidden rounded-lg shadow-lg group">
                 <img 
                   src="/teacher-community-3.jpg" 
                   alt="Teachers celebrating festival together"
                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                 <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Festival Celebration</div>
               </div>
               
               <div className="relative overflow-hidden rounded-lg shadow-lg group">
                 <img 
                   src="/teacher-community-4.jpg" 
                   alt="Teachers mentoring new joiners"
                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                 <div className="absolute bottom-2 left-2 text-white text-sm font-medium">Mentorship Program</div>
               </div>
             </div>
           </div>

           <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
               <div>
                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                   Student-First Philosophy
                 </h3>
                 <div className="space-y-4">
                   <div className="flex items-start">
                     <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-800 mb-1">Individual Attention</h4>
                       <p className="text-gray-600 text-sm">Every student receives personalized care and attention to reach their full potential.</p>
                     </div>
                   </div>
                   <div className="flex items-start">
                     <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-800 mb-1">Holistic Development</h4>
                       <p className="text-gray-600 text-sm">Focus on academic, emotional, and social growth of every child.</p>
                     </div>
                   </div>
                   <div className="flex items-start">
                     <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <div>
                       <h4 className="font-semibold text-gray-800 mb-1">Innovation in Teaching</h4>
                       <p className="text-gray-600 text-sm">Encouraged to use creative and modern teaching methodologies.</p>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 border border-blue-200">
                 <div className="text-center">
                   <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                     </svg>
                   </div>
                   <h4 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h4>
                   <p className="text-gray-700 italic">
                     "To create an environment where teachers are empowered to inspire, students are motivated to excel, and learning becomes a joyful journey of discovery."
                   </p>
                 </div>
               </div>
             </div>

             {/* Fun Activities & Events Pictures */}
             <div className="mb-12">
               <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Fun Activities & Teacher Events</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="relative overflow-hidden rounded-xl shadow-lg group">
                   <img 
                     src="/teacher-fun-activity-1.jpg" 
                     alt="Teachers participating in annual sports day"
                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                   <div className="absolute bottom-4 left-4 text-white">
                     <h4 className="font-semibold text-lg">Annual Sports Day</h4>
                     <p className="text-sm opacity-90">Teachers vs Students Cricket Match</p>
                   </div>
                 </div>
                 
                 <div className="relative overflow-hidden rounded-xl shadow-lg group">
                   <img 
                     src="/teacher-fun-activity-2.jpg" 
                     alt="Teachers cultural program performance"
                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                   <div className="absolute bottom-4 left-4 text-white">
                     <h4 className="font-semibold text-lg">Cultural Program</h4>
                     <p className="text-sm opacity-90">Teachers' Dance Performance</p>
                   </div>
                 </div>
                 
                 <div className="relative overflow-hidden rounded-xl shadow-lg group">
                   <img 
                     src="/teacher-fun-activity-3.jpg" 
                     alt="Teachers team building activity"
                     className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                   <div className="absolute bottom-4 left-4 text-white">
                     <h4 className="font-semibold text-lg">Team Building</h4>
                     <p className="text-sm opacity-90">Annual Teacher Retreat</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Supporting Staff & Management */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
               <Card hover className="bg-white border border-gray-200 shadow-lg">
                 <CardBody className="text-center px-4 py-6">
                   <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                     </svg>
                   </div>
                   <h3 className="text-lg font-bold mb-3 text-gray-800">Supportive Management</h3>
                   <p className="text-gray-600 text-sm">
                     Leadership that listens, supports, and empowers teachers to make meaningful decisions in their classrooms.
                   </p>
                 </CardBody>
               </Card>

               <Card hover className="bg-white border border-gray-200 shadow-lg">
                 <CardBody className="text-center px-4 py-6">
                   <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                     </svg>
                   </div>
                   <h3 className="text-lg font-bold mb-3 text-gray-800">Collaborative Staff</h3>
                   <p className="text-gray-600 text-sm">
                     Work alongside dedicated support staff who share resources, ideas, and create a positive work environment.
                   </p>
                 </CardBody>
               </Card>

               <Card hover className="bg-white border border-gray-200 shadow-lg">
                 <CardBody className="text-center px-4 py-6">
                   <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                     <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                     </svg>
                   </div>
                   <h3 className="text-lg font-bold mb-3 text-gray-800">Innovation Culture</h3>
                   <p className="text-gray-600 text-sm">
                     Encouraged to experiment with new teaching methods and technologies to enhance student learning experiences.
                   </p>
                 </CardBody>
               </Card>
             </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Ready to Shape Young Minds as a Teacher?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join our community of passionate educators and make a lasting impact on the next generation. 
            Your teaching journey at RSK starts here.
          </p>
           <div className="flex justify-center">
             <Button href="/contact" variant="secondary" size="lg" className="px-10 py-4">
               Apply Now
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
