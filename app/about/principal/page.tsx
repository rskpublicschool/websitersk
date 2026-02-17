import { Metadata } from 'next';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody } from '@/app/components/Card';
import { schoolInfo } from '@/app/lib/schoolData';

export const metadata: Metadata = {
  title: "Principal's Message",
  description: `Message from ${schoolInfo.principalName}, Principal of RSK Public School, about academic excellence and student development.`,
};

export default function PrincipalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Academic Leadership and Excellence">
          Principal&apos;s Message
        </SectionTitle>

        <div className="max-w-5xl mx-auto">
          <Card>
            <CardBody className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-1">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                      <svg className="w-32 h-32 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-gray-900">{schoolInfo.principalName}</h3>
                    <p className="text-gray-600">Principal</p>
                    <p className="text-sm text-gray-500 mt-1">{schoolInfo.principalQualification}</p>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="text-5xl text-green-600 float-left mr-3 mt-1 font-serif">&ldquo;</span>
                      Dear Students, Parents, and Well-wishers,
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      It is with great pride and joy that I welcome you to R.S.K Public School, where we are committed 
                      to providing an enriching and transformative educational experience for every student.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Education is a journey of self-discovery and growth. At our school, we believe in nurturing not 
                      just academic excellence, but also the overall development of our students. Our curriculum is 
                      designed to challenge young minds, encourage creativity, and foster a love for learning that 
                      extends beyond textbooks.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      In today&apos;s rapidly changing world, we prepare our students to be adaptable, innovative, and 
                      compassionate leaders. We emphasize critical thinking, problem-solving, and collaboration - skills 
                      that are essential for success in the 21st century. Our dedicated faculty works tirelessly to 
                      create an engaging learning environment where every student feels valued and supported.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Character building is at the heart of our educational philosophy. We instill values of integrity, 
                      respect, responsibility, and empathy in our students. Through various co-curricular activities, 
                      sports, and community service programs, we provide opportunities for students to develop leadership 
                      skills and social consciousness.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Our state-of-the-art facilities, including well-equipped laboratories, a comprehensive library, 
                      and modern sports infrastructure, support our commitment to holistic education. We continuously 
                      upgrade our resources to ensure that our students have access to the best learning tools and 
                      opportunities.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      To our parents, I assure you that your children are in safe and capable hands. We maintain open 
                      communication and encourage parental involvement in our school community. Your partnership is 
                      invaluable in helping your children reach their full potential.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      To our students, I urge you to embrace every opportunity for learning and growth. Be curious, 
                      be disciplined, and be kind. Remember that success is not just about grades; it&apos;s about becoming 
                      the best version of yourself and making a positive difference in the world.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      Together, let us continue to build a school community that celebrates excellence, values diversity, 
                      and prepares our students for a bright and successful future.
                      <span className="text-5xl text-green-600 ml-1 font-serif">&rdquo;</span>
                    </p>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="font-semibold text-gray-900">With warm regards,</p>
                      <p className="text-gray-700 mt-2">{schoolInfo.principalName}</p>
                      <p className="text-gray-600 text-sm">Principal, {schoolInfo.name}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8 mt-8">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Our Academic Pillars</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <svg className="w-10 h-10 text-blue-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div className="text-sm font-semibold text-gray-700">Innovation</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <svg className="w-10 h-10 text-green-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    <div className="text-sm font-semibold text-gray-700">Excellence</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <svg className="w-10 h-10 text-amber-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div className="text-sm font-semibold text-gray-700">Collaboration</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <svg className="w-10 h-10 text-purple-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <div className="text-sm font-semibold text-gray-700">Compassion</div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}





