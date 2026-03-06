import { Metadata } from 'next';
import Link from 'next/link';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody, CardHeader } from '@/app/components/Card';
import Button from '@/app/components/Button';

export const metadata: Metadata = {
  title: "Admissions - Apply Now",
  description: "Admission information, process, fee structure, and application form for RSK Public School. Limited seats available.",
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Join our community of learners and leaders">
          Admissions 2026-27
        </SectionTitle>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Admission Open Banner */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl p-8 text-center shadow-lg">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <span className="font-semibold">🎓 Admissions Open</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Academic Year 2026-27
            </h2>
            <p className="text-xl text-green-100 mb-6">
              Limited seats available for all classes. Apply now!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/admissions/apply" variant="secondary" size="lg">
                Apply Online
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white hover:bg-white hover:text-green-700">
                Schedule Visit
              </Button>
            </div>
          </div>

          {/* Admission Process */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Admission Process</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Registration</h4>
                    <p className="text-gray-700">
                      Fill out the online application form or visit the school office to collect the admission form. 
                      Provide accurate information and required documents.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Document Submission</h4>
                    <p className="text-gray-700 mb-3">
                      Submit the following documents along with your application:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Birth certificate (original + photocopy)</li>
                      <li>Transfer certificate (for students from other schools)</li>
                      <li>Previous year's report card</li>
                      <li>Aadhar card (student & parent)</li>
                      <li>Recent passport-size photographs (4 copies)</li>
                      <li>Residential proof</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Interaction/Assessment</h4>
                    <p className="text-gray-700">
                      Students (for classes above KG) may be required to take a simple assessment test. 
                      Parent-principal interaction will be scheduled to discuss the child's academic needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Admission Confirmation</h4>
                    <p className="text-gray-700">
                      Upon selection, pay the admission fee to confirm your seat. Admission will be finalized 
                      only after fee payment and completion of all formalities.
                    </p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>


          {/* Important Dates */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Important Dates</h3>
            </CardHeader>
            <CardBody>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Admission Opens</h4>
                    <p className="text-gray-700">Open Now</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                  <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Assessment Dates</h4>
                    <p className="text-gray-700">As per schedule</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Session Starts</h4>
                    <p className="text-gray-700">As per academic calendar</p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Age Criteria */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Age Criteria</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700 mb-4">
                As per CBSE guidelines, the minimum age requirement for admission is as follows:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">Nursery</div>
                  <div className="text-gray-700">3 years as on 31st March</div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">LKG</div>
                  <div className="text-gray-700">4 years as on 31st March</div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">UKG</div>
                  <div className="text-gray-700">5 years as on 31st March</div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">Class I</div>
                  <div className="text-gray-700">6 years as on 31st March</div>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="font-semibold text-gray-900 mb-2">Class II onwards</div>
                  <div className="text-gray-700">Add 1 year for each class</div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white rounded-xl p-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Begin Your Child's Journey?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't miss the opportunity. Apply now and secure your child's future with quality education.
            </p>
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply Online Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

