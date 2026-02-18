import { Metadata } from 'next';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody, CardHeader } from '@/app/components/Card';
import VisitorCounterRobust from '@/app/components/VisitorCounterRobust';
import { mandatoryDocuments, schoolInfo } from '@/app/lib/schoolData';

export const metadata: Metadata = {
  title: "Mandatory Disclosure - CBSE Requirements",
  description: "Complete mandatory disclosure information as per CBSE norms including documents, certificates, and compliance reports.",
};

export default function DisclosurePage() {
  // Group documents by category
  const documentsByCategory = mandatoryDocuments.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = [];
    }
    acc[doc.category].push(doc);
    return acc;
  }, {} as Record<string, typeof mandatoryDocuments>);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Complete Information as per CBSE Norms">
          Mandatory Disclosure
        </SectionTitle>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* School Information */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">School Information</h3>
            </CardHeader>
            <CardBody>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 font-medium mb-1">Name of School</div>
                    <div className="text-gray-900 font-semibold">{schoolInfo.name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium mb-1">Affiliation Number</div>
                    <div className="text-gray-900 font-semibold">{schoolInfo.affiliationNo}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium mb-1">School Code</div>
                    <div className="text-gray-900 font-semibold">{schoolInfo.schoolCode}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium mb-1">Complete Address</div>
                    <div className="text-gray-900">{schoolInfo.address}</div>
                    <div className="text-gray-900">PIN: {schoolInfo.pinCode}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600 font-medium mb-1">Principal Name</div>
                    <div className="text-gray-900 font-semibold">{schoolInfo.principalName}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium mb-1">Principal Qualification</div>
                    <div className="text-gray-900">{schoolInfo.principalQualification}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium mb-1">Email Address</div>
                    <div className="text-gray-900">{schoolInfo.email}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium mb-1">Contact Number</div>
                    <div className="text-gray-900">{schoolInfo.phone}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 font-medium mb-1">Year of Establishment</div>
                    <div className="text-gray-900">{schoolInfo.establishedYear}</div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Documents by Category */}
          {Object.entries(documentsByCategory).map(([category, docs]) => (
            <Card key={category}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                </div>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  {docs.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <svg className="w-8 h-8 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <div className="font-medium text-gray-900">{doc.title}</div>
                          <div className="text-sm text-gray-500">
                            Last Updated: {new Date(doc.updatedAt).toLocaleDateString('en-IN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        </div>
                      </div>
                      <a
                        href={doc.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Additional Information</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Faculty & Staff</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                      <div className="text-sm text-gray-700">Total Faculty Members</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                      <div className="text-sm text-gray-700">Qualified Teachers</div>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-amber-600 mb-1">20+</div>
                      <div className="text-sm text-gray-700">Support Staff</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">School Timings</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Summer Session</div>
                      <div className="text-gray-900 font-medium">7:30 AM - 1:30 PM</div>
                      <div className="text-xs text-gray-500 mt-1">(April to September)</div>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Winter Session</div>
                      <div className="text-gray-900 font-medium">8:30 AM - 2:30 PM</div>
                      <div className="text-xs text-gray-500 mt-1">(October to March)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Student Enrollment</h4>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="grid md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-gray-900">750+</div>
                        <div className="text-sm text-gray-600">Primary (I-V)</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">1000+</div>
                        <div className="text-sm text-gray-600">Middle (VI-VIII)</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">500+</div>
                        <div className="text-sm text-gray-600">Secondary (IX-X)</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-gray-900">250+</div>
                        <div className="text-sm text-gray-600">Sr. Sec. (XI-XII)</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Facilities Summary</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Library with 1000+ books</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Computer Labs (60+ systems)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Science Laboratories (3 labs)</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Sports Ground & Facilities</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Medical Room with First Aid</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>24/7 CCTV Surveillance</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Important Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
            <div className="flex gap-3">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Important Notice</h4>
                <p className="text-gray-700">
                  All documents are updated as per CBSE mandatory disclosure requirements. For any queries or 
                  to request physical copies of documents, please contact the school office during working hours.
                </p>
              </div>
            </div>
          </div>

          {/* Website Visitor Statistics */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 p-6 rounded-lg">
            <div className="flex gap-3 items-center">
              <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <div className="w-full">
                <h4 className="font-semibold text-gray-900 mb-2">Website Statistics</h4>
                <VisitorCounterRobust className="text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





