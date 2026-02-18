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
        </div>
      </div>
    </div>
  );
}





