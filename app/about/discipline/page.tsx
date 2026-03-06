import { Metadata } from 'next';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody, CardHeader } from '@/app/components/Card';

export const metadata: Metadata = {
  title: "School Discipline & Code of Conduct",
  description: "Discipline policies, code of conduct, and behavioral expectations at RSK Public School for students and parents.",
};

export default function DisciplinePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Building Character Through Discipline">
          School Discipline & Code of Conduct
        </SectionTitle>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardBody className="p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                At R.S.K Public School, we believe that discipline is the foundation of character building and 
                academic success. Our disciplinary policies are designed to create a safe, respectful, and 
                conducive learning environment for all students.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We emphasize self-discipline, mutual respect, and responsibility. Our approach is constructive 
                rather than punitive, focusing on helping students understand the importance of proper conduct 
                and develop into well-rounded individuals.
              </p>
            </CardBody>
          </Card>

          {/* Core Values */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
            </CardHeader>
            <CardBody>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Integrity</h4>
                    <p className="text-gray-600 text-sm">Honesty and truthfulness in all actions and interactions</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Respect</h4>
                    <p className="text-gray-600 text-sm">Courtesy and consideration towards everyone</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Responsibility</h4>
                    <p className="text-gray-600 text-sm">Accountability for one&apos;s actions and duties</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Empathy</h4>
                    <p className="text-gray-600 text-sm">Understanding and caring for others&apos; feelings</p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Student Expectations */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Student Expectations</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                    Attendance & Punctuality
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-10">
                    <li>Students must attend school regularly and be punctual</li>
                    <li>Minimum 80% attendance is mandatory as per CBSE norms</li>
                    <li>Leave applications must be submitted in advance or immediately upon return</li>
                    <li>Habitual late-comers will face disciplinary action</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">2</span>
                    Uniform & Appearance
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-10">
                    <li>School uniform must be worn daily with pride and neatness</li>
                    <li>Hair should be neatly groomed; girls with long hair must tie it properly</li>
                    <li>Shoes must be polished and clean</li>
                    <li>Wearing jewelry or makeup is not permitted</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">3</span>
                    Academic Conduct
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-10">
                    <li>Complete all homework and assignments on time</li>
                    <li>Bring necessary books, notebooks, and stationery daily</li>
                    <li>Maintain silence during class and pay attention to lessons</li>
                    <li>Zero tolerance for copying, cheating, or plagiarism</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">4</span>
                    Behavioral Standards
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-10">
                    <li>Respect teachers, staff, and fellow students</li>
                    <li>Use polite language; abusive or offensive language is strictly prohibited</li>
                    <li>No bullying, fighting, or harassment of any kind</li>
                    <li>Take care of school property and keep the campus clean</li>
                    <li>Mobile phones and electronic gadgets are not allowed</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">5</span>
                    Safety & Security
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-10">
                    <li>Students must not leave the school premises without permission</li>
                    <li>Follow all safety protocols and emergency procedures</li>
                    <li>Report any suspicious activity or safety concerns immediately</li>
                    <li>Prohibited items: weapons, drugs, tobacco, or any harmful substances</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Disciplinary Actions */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Disciplinary Measures</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700 mb-4">
                Violations of school rules will result in progressive disciplinary action:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <span className="font-semibold text-yellow-700 min-w-[100px]">Level 1:</span>
                  <span className="text-gray-700">Verbal warning and counseling</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <span className="font-semibold text-orange-700 min-w-[100px]">Level 2:</span>
                  <span className="text-gray-700">Written warning and parent notification</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <span className="font-semibold text-red-700 min-w-[100px]">Level 3:</span>
                  <span className="text-gray-700">Parent-teacher meeting and behavioral contract</span>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-100 rounded-lg border-l-4 border-red-600">
                  <span className="font-semibold text-red-800 min-w-[100px]">Level 4:</span>
                  <span className="text-gray-700">Suspension or expulsion for serious offenses</span>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Parent Partnership */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Parent Partnership</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe that discipline is most effective when there is strong partnership between school 
                and home. We encourage parents to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Support and reinforce school rules at home</li>
                <li>Maintain regular communication with teachers</li>
                <li>Monitor your child&apos;s homework and academic progress</li>
                <li>Ensure your child gets adequate rest and nutrition</li>
                <li>Attend parent-teacher meetings and school events</li>
                <li>Address any concerns or issues promptly with school authorities</li>
              </ul>
            </CardBody>
          </Card>

          {/* Dress Code */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">School Dress Code</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700 leading-relaxed mb-6">
                A neat and proper uniform is mandatory for all students. It instills discipline, 
                creates equality, and builds school identity.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Boys Dress Code */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-4 text-lg flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Boys Uniform
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-blue-800 mb-1">Summer (April - September)</h5>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                        <li>Light blue shirt with school monogram</li>
                        <li>Navy blue shorts (Class I-V) / Navy blue trousers (Class VI-XII)</li>
                        <li>Navy blue tie with school logo</li>
                        <li>Navy blue belt</li>
                        <li>White socks</li>
                        <li>Black formal shoes</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-800 mb-1">Winter (October - March)</h5>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                        <li>White shirt with school monogram</li>
                        <li>Navy blue trousers</li>
                        <li>Navy blue sweater with school logo</li>
                        <li>Navy blue blazer (optional)</li>
                        <li>Navy blue tie</li>
                        <li>Black formal shoes</li>
                        <li>Navy blue socks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Girls Dress Code */}
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-pink-900 mb-4 text-lg flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Girls Uniform
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-pink-800 mb-1">Summer (April - September)</h5>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                        <li>Light blue shirt with school monogram</li>
                        <li>Navy blue skirt (knee-length)</li>
                        <li>Navy blue tie with school logo</li>
                        <li>White socks (below knee)</li>
                        <li>Black formal shoes</li>
                        <li>Navy blue ribbon for hair</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-pink-800 mb-1">Winter (October - March)</h5>
                      <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                        <li>White shirt with school monogram</li>
                        <li>Navy blue skirt (knee-length)</li>
                        <li>Navy blue sweater with school logo</li>
                        <li>Navy blue blazer (optional)</li>
                        <li>Navy blue tie</li>
                        <li>Black formal shoes</li>
                        <li>Navy blue socks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <h5 className="font-semibold text-amber-800 mb-2">Additional Guidelines:</h5>
                <ul className="list-disc list-inside text-amber-700 text-sm space-y-1 ml-4">
                  <li>Hair must be neatly combed; boys should have short, tidy hair</li>
                  <li>Girls with long hair must tie it with navy blue ribbon only</li>
                  <li>No makeup, nail polish, or jewelry (except small ear studs for girls)</li>
                  <li>School ID card must be worn at all times</li>
                  <li>Shoes must be polished and clean daily</li>
                  <li>Sports uniform for PE classes as per schedule</li>
                </ul>
              </div>
            </CardBody>
          </Card>

          {/* School Days and Timings */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">School Days & Timings</h3>
            </CardHeader>
            <CardBody>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Summer Timings */}
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-4 text-lg flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                    Summer Session (April - September)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-800">School Hours</span>
                      <span className="text-orange-700 font-semibold">7:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-800">Assembly</span>
                      <span className="text-orange-700 font-semibold">7:00 AM - 7:15 AM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-800">Classes</span>
                      <span className="text-orange-700 font-semibold">7:15 AM - 11:40 AM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-800">Recess</span>
                      <span className="text-orange-700 font-semibold">9:30 AM - 9:50 AM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-800">Dispersal</span>
                      <span className="text-orange-700 font-semibold">11:40 AM - 12:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Winter Timings */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-4 text-lg flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    Winter Session (October - March)
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-800">School Hours</span>
                      <span className="text-blue-700 font-semibold">8:00 AM - 1:30 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-800">Assembly</span>
                      <span className="text-blue-700 font-semibold">8:00 AM - 8:15 AM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-800">Classes</span>
                      <span className="text-blue-700 font-semibold">8:15 AM - 1:10 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-800">Recess</span>
                      <span className="text-blue-700 font-semibold">10:30 AM - 10:50 AM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span className="font-medium text-gray-800">Dispersal</span>
                      <span className="text-blue-700 font-semibold">1:10 PM - 1:30 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Working Days
                  </h5>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>Monday to Friday: Full working days</li>
                    <li>Saturday: Working day (half day)</li>
                    <li>Saturday Timing: 8:00 AM - 11:30 AM</li>
                    <li>Sunday: Weekly off</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Important Notes
                  </h5>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>Gates open 15 minutes before school</li>
                    <li>Late arrivals require gate pass</li>
                    <li>Parents must inform for early pickup</li>
                    <li>School transport available</li>
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





