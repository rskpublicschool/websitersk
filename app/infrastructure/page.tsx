import { Metadata } from 'next';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody, CardHeader } from '@/app/components/Card';
import { infrastructureDetails, schoolInfo } from '@/app/lib/schoolData';

export const metadata: Metadata = {
  title: "Infrastructure & Facilities",
  description: "Modern infrastructure and world-class facilities at RSK Public School including labs, library, sports grounds, and smart classrooms.",
};

export default function InfrastructurePage() {
  // Function to get appropriate image for each infrastructure detail
  const getInfrastructureImage = (label: string) => {
    const imageMap: { [key: string]: string } = {
      "Total Campus Area": "/experienceimages/cbse school in dehri on sone RSK public school playgroud.jpeg",
      "Number of Classrooms": "/experienceimages/cbse school in dehri on sone RSK public school dehri on sone classroom.jpeg",
      "Science Laboratories": "/schoolimages/science lab rsk public school dehri on sone best cbse school in dehri on sone.jpg",
      "Computer Labs": "/schoolimages/computer lab rsk public school dehri on sone cbse school in dehri on sone.webp",
      "Library": "/schoolimages/library rsk public school dehri on sone best cbse school in dehri on sone.jpg",
      "Playground": "/experienceimages/cbse school in dehri on sone RSK public school playgroud.jpeg",
      "Smart Classroom": "/schoolimages/smart classroom rsk public school dehri on sone best cbse school in dehri on sone.jpeg",
      "Girls' Toilets": "/schoolimages/school premises rsk public school dehri on sone best cbse school in dehri on sone.jpg",
      "Boys' Toilets": "/schoolimages/school premises rsk public school dehri on sone best cbse school in dehri on sone.jpg"
    };
    return imageMap[label] || "/Rsk public school dehri model image.webp";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="World-Class Facilities for Holistic Learning">
          Infrastructure & Facilities
        </SectionTitle>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardBody className="p-8 text-center">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                At {schoolInfo.name}, we believe that a conducive learning environment is essential for 
                academic excellence. Our campus is equipped with modern infrastructure and facilities that 
                support comprehensive education and overall student development.
              </p>
            </CardBody>
          </Card>

          {/* Campus Highlights */}
          <Card className="mb-12">
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900 text-center">Our Beautiful Campus - 2 Acres</h3>
            </CardHeader>
            <CardBody>
              <div className="w-full h-64 sm:h-80 rounded-lg overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                <img 
                  src="/Rsk public school dehri model image.webp" 
                  alt="RSK Public School Beautiful Campus - 2 Acres Campus Area"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Our modern 2-acre campus provides a safe and conducive learning environment
              </p>
            </CardBody>
          </Card>

          {/* Key Infrastructure Details */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {infrastructureDetails.map((detail, index) => (
              <Card key={index} hover>
                <CardBody className="p-6">
                  {/* Image for each infrastructure detail */}
                  <div className="mb-4">
                    <div className="w-full h-36 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1">
                      <img 
                        src={getInfrastructureImage(detail.label)} 
                        alt={`${detail.label} - ${detail.value}`}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-2">{detail.label}</h3>
                    <p className="text-blue-600 font-medium">{detail.value}</p>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Detailed Facilities */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Classrooms */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Smart Classrooms</h3>
                </div>
              </CardHeader>
              <CardBody>
                {/* Image for Smart Classrooms */}
                <div className="mb-6">
                  <div className="w-full h-52 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1">
                    <img 
                      src="/schoolimages/smart classroom rsk public school dehri on sone best cbse school in dehri on sone.jpeg" 
                      alt="RSK Public School Smart Classroom with modern facilities"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Spacious and well-ventilated rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Smart interactive boards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Ergonomic furniture for comfortable seating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Audio-visual teaching aids</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            {/* Science Labs */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Science Laboratories</h3>
                </div>
              </CardHeader>
              <CardBody>
                {/* Image for Science Laboratory */}
                <div className="mb-6">
                  <div className="w-full h-52 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1">
                    <img 
                      src="/schoolimages/science lab rsk public school dehri on sone best cbse school in dehri on sone.jpg" 
                      alt="RSK Public School Science Laboratory with modern equipment"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Multi-purpose science lab for Physics, Chemistry & Biology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Modern equipment and apparatus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Safety equipment and protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Hands-on practical learning</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            {/* Computer Labs */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Computer Laboratories</h3>
                </div>
              </CardHeader>
              <CardBody>
                {/* Image for Computer Laboratories */}
                <div className="mb-6">
                  <div className="w-full h-52 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1">
                    <img 
                      src="/schoolimages/computer lab rsk public school dehri on sone cbse school in dehri on sone.webp" 
                      alt="RSK Public School Computer Laboratory with modern computers"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Modern computers with latest software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>High-speed internet connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Coding and programming courses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Trained IT instructors</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            {/* Library */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Library & Reading Room</h3>
                </div>
              </CardHeader>
              <CardBody>
                {/* Image for Library & Reading Room */}
                <div className="mb-6">
                  <div className="w-full h-52 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1">
                    <img 
                      src="/schoolimages/library rsk public school dehri on sone best cbse school in dehri on sone.jpg" 
                      alt="RSK Public School Library with reading room and books collection"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>1000+ books across various subjects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Reference books and encyclopedias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Quiet reading area with seating for 50</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Newspapers and magazines</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            {/* Sports Facilities */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sports & Recreation</h3>
                </div>
              </CardHeader>
              <CardBody>
                {/* Image placeholder for Sports & Recreation */}
                <div className="mb-6">
                  <div className="w-full h-52 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1">
                    <img 
                      src="/experienceimages/cbse school in dehri on sone RSK public school playgroud.jpeg" 
                      alt="RSK Public School Playground and Sports Ground"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Multi-purpose sports ground</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Basketball, volleyball, and badminton courts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Indoor games facility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Qualified physical education instructors</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            {/* Safety & Security */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Safety & Security</h3>
                </div>
              </CardHeader>
              <CardBody>
                {/* Image placeholder for Safety & Security */}
                <div className="mb-6">
                  <div className="w-full h-52 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-1">
                    <img 
                      src="/schoolimages/school premises rsk public school dehri on sone best cbse school in dehri on sone.jpg" 
                      alt="RSK Public School Safe and Secure Campus Premises"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 CCTV surveillance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Trained security personnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Fire safety equipment and drills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>First aid and medical facilities</span>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>

          {/* School Inspection Details */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">School Inspection & Compliance</h3>
            </CardHeader>
            <CardBody>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Sanitation Facilities</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Separate toilet facilities for girls and boys</li>
                    <li>• 10+ units each with proper maintenance</li>
                    <li>• Clean drinking water facilities</li>
                    <li>• Regular cleaning and hygiene protocols</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Safety Certifications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Valid building safety certificate</li>
                    <li>• Fire safety clearance</li>
                    <li>• Water quality certification</li>
                    <li>• Regular safety audits and inspections</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}





