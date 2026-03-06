import { Metadata } from 'next';
import { schoolInfo } from '../lib/schoolData';

export const metadata: Metadata = {
  title: 'Terms and Conditions - RSK Public School Dehri on Sone',
  description: 'Terms and Conditions for RSK Public School, best CBSE school in Dehri on Sone. Read our policies and guidelines for students and parents.',
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
            <p className="text-gray-600">{schoolInfo.name} - Best CBSE School in Dehri on Sone</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: March 2026</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the RSK Public School website, enrolling your child, or engaging with our 
                educational services, you agree to comply with and be bound by these Terms and Conditions. 
                If you do not agree with these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Admission Terms</h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.1 Admission Process</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All admissions are subject to availability and merit</li>
                <li>Admission forms must be completed accurately and truthfully</li>
                <li>Required documents must be submitted within specified deadlines</li>
                <li>The school reserves the right to verify all submitted information</li>
                <li>Admission decisions are final and at the discretion of the school management</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">2.2 Age Requirements</h3>
              <p className="text-gray-700 mb-4">
                Students must meet the age requirements as per CBSE guidelines for their respective classes. 
                Age proof documents are mandatory for admission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Fee Structure and Payment</h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.1 Fee Payment</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>School fees must be paid within the specified due dates</li>
                <li>Late payment may result in additional charges</li>
                <li>Fee defaulters may have their child's admission cancelled</li>
                <li>All fees are non-refundable except in specific circumstances</li>
                <li>Fee structure may be revised annually with prior notice</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">3.2 Refund Policy</h3>
              <p className="text-gray-700 mb-4">
                Refunds are considered only in exceptional circumstances and are subject to school management approval. 
                Processing fees and administrative charges are non-refundable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Academic Policies</h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">4.1 Attendance</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Minimum 75% attendance is mandatory as per CBSE guidelines</li>
                <li>Students with insufficient attendance may not be allowed to appear for exams</li>
                <li>Medical certificates are required for extended absences</li>
                <li>Regular attendance is essential for academic progress</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">4.2 Academic Performance</h3>
              <p className="text-gray-700 mb-4">
                Students are expected to maintain satisfactory academic performance. The school provides 
                additional support for students who need academic assistance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Code of Conduct</h2>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">5.1 Student Behavior</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Students must follow the school's discipline policy</li>
                <li>Respectful behavior towards teachers, staff, and fellow students is mandatory</li>
                <li>Bullying, harassment, or violence will not be tolerated</li>
                <li>Students must wear the prescribed school uniform</li>
                <li>Use of mobile phones during school hours is restricted</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">5.2 Parent Responsibilities</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Parents must cooperate with school policies and procedures</li>
                <li>Regular communication with teachers about child's progress</li>
                <li>Ensure child's punctuality and regular attendance</li>
                <li>Support the school's disciplinary measures when necessary</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Safety and Security</h2>
              <p className="text-gray-700 mb-4">
                The school prioritizes student safety and maintains:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>CCTV surveillance throughout the campus</li>
                <li>Trained security personnel</li>
                <li>Safe transportation facilities</li>
                <li>Emergency response procedures</li>
                <li>Regular safety drills and awareness programs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Health and Medical</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Students with medical conditions must inform the school</li>
                <li>Medical certificates are required for extended sick leave</li>
                <li>The school maintains basic first aid facilities</li>
                <li>Parents are responsible for their child's medical expenses</li>
                <li>Vaccination records must be up to date</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Transportation</h2>
              <p className="text-gray-700 mb-4">
                School transportation services are subject to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Additional transportation fees</li>
                <li>Adherence to bus rules and regulations</li>
                <li>Designated pickup and drop-off points</li>
                <li>Punctuality at bus stops</li>
                <li>Respectful behavior during transportation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content on the RSK Public School website, including text, images, logos, and educational 
                materials, are the intellectual property of the school and are protected by copyright laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                While the school takes all reasonable precautions for student safety and security, 
                the school's liability is limited to the extent permitted by law. Parents acknowledge 
                that certain activities involve inherent risks.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Termination of Services</h2>
              <p className="text-gray-700 mb-4">
                The school reserves the right to terminate a student's enrollment for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Serious misconduct or disciplinary issues</li>
                <li>Non-payment of fees</li>
                <li>Violation of school policies</li>
                <li>Providing false information during admission</li>
                <li>Behavior detrimental to the school environment</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For any questions regarding these Terms and Conditions, please contact:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-800 font-semibold">{schoolInfo.name}</p>
                <p className="text-gray-700">{schoolInfo.address}</p>
                <p className="text-gray-700">Phone: {schoolInfo.phone}</p>
                <p className="text-gray-700">Email: {schoolInfo.email}</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                RSK Public School reserves the right to modify these Terms and Conditions at any time. 
                Changes will be communicated through the school website and official notices. 
                Continued use of our services constitutes acceptance of the modified terms.
              </p>
            </section>

            <div className="bg-gray-100 p-4 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                These Terms and Conditions are effective as of March 2026 and govern your relationship with 
                RSK Public School, the best CBSE school in Dehri on Sone, Bihar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
