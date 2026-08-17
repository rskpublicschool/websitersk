import { Metadata } from 'next';
import { schoolInfo } from '../lib/schoolData';

export const metadata: Metadata = {
  title: 'Privacy Policy - RSK Public School Dehri on Sone',
  description: 'Privacy Policy of RSK Public School, best CBSE school in Dehri on Sone. Learn how we protect and handle your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
            <p className="text-gray-600">{schoolInfo.name} - Best CBSE School in Dehri on Sone</p>
            <p className="text-sm text-gray-500 mt-2">Last updated: March 2026</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                RSK Public School collects information that you provide directly to us, such as when you:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Apply for admission or enquire about our school</li>
                <li>Fill out contact forms or admission forms</li>
                <li>Subscribe to our newsletters or updates</li>
                <li>Participate in school events or activities</li>
                <li>Contact us via phone, email, or WhatsApp</li>
              </ul>
              <p className="text-gray-700">
                The information may include: name, address, phone number, email address, student details, 
                parent/guardian information, academic records, and other relevant educational information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the collected information to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Process admission applications and enquiries</li>
                <li>Communicate with students and parents about school matters</li>
                <li>Provide educational services and support</li>
                <li>Send important notifications and updates</li>
                <li>Improve our educational services and website</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Maintain academic records and student progress</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>To CBSE and other educational authorities as required</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect the safety and security of our students and staff</li>
                <li>With your explicit consent for specific purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Secure storage of physical and digital records</li>
                <li>Limited access to personal information on a need-to-know basis</li>
                <li>Regular security assessments and updates</li>
                <li>Staff training on data protection and privacy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Student Records</h2>
              <p className="text-gray-700 mb-4">
                Student academic records are maintained in accordance with CBSE guidelines and Indian educational 
                regulations. Parents/guardians have the right to access their child's educational records and 
                request corrections if necessary.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Website Cookies</h2>
              <p className="text-gray-700 mb-4">
                Our website may use cookies to enhance user experience and analyze website traffic. 
                You can choose to disable cookies in your browser settings, though this may affect 
                some website functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access your personal information we hold</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Withdraw consent for non-essential communications</li>
                <li>File a complaint about our privacy practices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-800 font-semibold">{schoolInfo.name}</p>
                <p className="text-gray-700">{schoolInfo.address}, {schoolInfo.pinCode}</p>
                <p className="text-gray-700">Phone: {schoolInfo.phone}</p>
                <p className="text-gray-700">Email: {schoolInfo.email}</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </section>

            <div className="bg-gray-100 p-4 rounded-lg mt-8">
              <p className="text-sm text-gray-600 text-center">
                This Privacy Policy is effective as of March 2026 and applies to all information collected by 
                RSK Public School, the best CBSE school in Dehri on Sone, Bihar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
