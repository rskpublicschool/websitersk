import Link from 'next/link';
import SectionTitle from '../components/SectionTitle';
import { Card, CardBody } from '../components/Card';
import Button from '../components/Button';

export default function ResultsAnnouncementsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Results & Announcements
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Stay updated with the latest exam results, school announcements, and upcoming events
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Breaking news and important updates from RSK Public School">
            Latest News
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card hover className="border-l-4 border-red-500 shadow-lg">
              <CardBody>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-red-600 font-semibold mb-1">URGENT • 2 hours ago</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      Class X & XII Board Exam Schedule Released
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      CBSE has released the official examination schedule for Class X and XII board exams. Students are advised to check their roll numbers and exam centers.
                    </p>
                    <Link href="#" className="text-red-600 font-medium text-sm hover:underline">
                      View Schedule →
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card hover className="border-l-4 border-green-500 shadow-lg">
              <CardBody>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-green-600 font-semibold mb-1">ACHIEVEMENT • 1 day ago</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      100% Pass Rate in Class XII Results
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      RSK Public School achieves remarkable 100% pass percentage in CBSE Class XII examinations with 85% students scoring above 80%.
                    </p>
                    <Link href="#" className="text-green-600 font-medium text-sm hover:underline">
                      View Results →
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card hover className="border-l-4 border-blue-500 shadow-lg">
              <CardBody>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-blue-600 font-semibold mb-1">ADMISSION • 3 days ago</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      New Session 2025-26 Admissions Open
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      Admissions are now open for all classes from Nursery to Class XI. Limited seats available. Apply now to secure your child's future.
                    </p>
                    <Link href="/admissions/apply" className="text-blue-600 font-medium text-sm hover:underline">
                      Apply Now →
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Notifications Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Important notifications and circulars for students and parents">
            Notifications
          </SectionTitle>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card className="border border-amber-200 bg-amber-50">
              <CardBody className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-amber-800 mb-1">Fee Payment Reminder</h4>
                  <p className="text-amber-700 text-sm">
                    Last date for quarterly fee payment is March 15, 2026. Late fee charges will apply after the due date.
                  </p>
                </div>
                <div className="text-xs text-amber-600 font-medium">
                  Mar 10, 2026
                </div>
              </CardBody>
            </Card>

            <Card className="border border-blue-200 bg-blue-50">
              <CardBody className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-blue-800 mb-1">Parent-Teacher Meeting</h4>
                  <p className="text-blue-700 text-sm">
                    Monthly parent-teacher meeting scheduled for March 20, 2026, from 10:00 AM to 2:00 PM. Please confirm your attendance.
                  </p>
                </div>
                <div className="text-xs text-blue-600 font-medium">
                  Mar 8, 2026
                </div>
              </CardBody>
            </Card>

            <Card className="border border-green-200 bg-green-50">
              <CardBody className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-green-800 mb-1">Health Check-up Camp</h4>
                  <p className="text-green-700 text-sm">
                    Free health check-up camp for all students on March 18, 2026. Dental and eye check-up included.
                  </p>
                </div>
                <div className="text-xs text-green-600 font-medium">
                  Mar 5, 2026
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Official announcements and important communications">
            Official Announcements
          </SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 shadow-lg">
              <CardBody>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-purple-900 mb-3">
                      Academic Excellence Awards 2024-25
                    </h3>
                    <p className="text-purple-800 mb-4">
                      We are proud to announce that RSK Public School has been awarded the "Academic Excellence Award" by the District Education Department for outstanding performance in CBSE board examinations and overall student development.
                    </p>
                    <div className="text-sm text-purple-700">
                      <strong>Date:</strong> March 1, 2026 | <strong>By:</strong> Principal's Office
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 shadow-lg">
              <CardBody>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-indigo-900 mb-3">
                      New Infrastructure Development
                    </h3>
                    <p className="text-indigo-800 mb-4">
                      Construction of new science laboratories and computer lab has been completed. The state-of-the-art facilities will be inaugurated on March 25, 2026. These additions will enhance our students' practical learning experience significantly.
                    </p>
                    <div className="text-sm text-indigo-700">
                      <strong>Date:</strong> February 28, 2026 | <strong>By:</strong> Management
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle centered subtitle="Mark your calendar for these important upcoming events">
            Upcoming Events
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card hover className="bg-gradient-to-br from-rose-50 to-rose-100 border border-rose-200 shadow-lg">
              <CardBody>
                <div className="text-center">
                  <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-rose-900 mb-2">Annual Sports Day</h3>
                  <p className="text-rose-800 text-sm mb-3">
                    Inter-house sports competition with athletics, games, and cultural performances.
                  </p>
                  <div className="bg-rose-200 rounded-lg p-3 mb-3">
                    <div className="text-rose-900 font-semibold">March 22, 2026</div>
                    <div className="text-rose-700 text-sm">9:00 AM - 4:00 PM</div>
                  </div>
                  <div className="text-rose-600 text-xs">School Playground</div>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200 shadow-lg">
              <CardBody>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-teal-900 mb-2">Science Exhibition</h3>
                  <p className="text-teal-800 text-sm mb-3">
                    Student projects and experiments showcase with interactive demonstrations.
                  </p>
                  <div className="bg-teal-200 rounded-lg p-3 mb-3">
                    <div className="text-teal-900 font-semibold">March 28, 2026</div>
                    <div className="text-teal-700 text-sm">10:00 AM - 3:00 PM</div>
                  </div>
                  <div className="text-teal-600 text-xs">Science Block</div>
                </div>
              </CardBody>
            </Card>

            <Card hover className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 shadow-lg">
              <CardBody>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-orange-900 mb-2">Cultural Fest</h3>
                  <p className="text-orange-800 text-sm mb-3">
                    Annual cultural program featuring music, dance, drama, and art competitions.
                  </p>
                  <div className="bg-orange-200 rounded-lg p-3 mb-3">
                    <div className="text-orange-900 font-semibold">April 5, 2026</div>
                    <div className="text-orange-700 text-sm">6:00 PM - 9:00 PM</div>
                  </div>
                  <div className="text-orange-600 text-xs">Main Auditorium</div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stay Connected with RSK Public School
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Never miss important updates, results, or announcements. Join our community and be the first to know about everything happening at RSK Public School.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/admissions/apply" variant="secondary" size="lg" className="w-full sm:w-auto">
                Apply for Admission
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-700">
              <p className="text-blue-200 text-sm mb-4">
                Get instant notifications on your phone
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="https://wa.me/919431234567?text=Subscribe%20to%20RSK%20updates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp Updates
                </a>
                <a
                  href="mailto:info@rskpublicschool.com?subject=Subscribe to Newsletter"
                  className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Newsletter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
