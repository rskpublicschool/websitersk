import { Metadata } from 'next';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody, CardHeader } from '@/app/components/Card';
import Button from '@/app/components/Button';
import QuickEnquirySection from './QuickEnquirySection';

export const metadata: Metadata = {
  title: "Quick Admission Enquiry",
  description: "Quick and easy admission enquiry form for RSK Public School. Just 5 simple fields - we'll handle the rest!",
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Get instant response on WhatsApp or fill our quick form">
          Quick Admission Enquiry
        </SectionTitle>

        <div className="max-w-4xl mx-auto">
          <QuickEnquirySection />
          <div id="enquiry-form">
            <Card>
            <CardHeader>
              <h3 className="text-xl font-bold text-gray-900">Quick Enquiry Form</h3>
              <p className="text-sm text-gray-600 mt-1">Just 5 simple fields - we'll collect detailed information when we call you!</p>
            </CardHeader>
            <CardBody>
              <form className="space-y-6">
                {/* Essential Information Only */}
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Student's Full Name *
                      </label>
                      <input
                        id="student-name"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="Enter student's full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Class Applying For *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      >
                        <option value="">Select Class</option>
                        <option value="nursery">Nursery</option>
                        <option value="lkg">LKG</option>
                        <option value="ukg">UKG</option>
                        <option value="1">Class I</option>
                        <option value="2">Class II</option>
                        <option value="3">Class III</option>
                        <option value="4">Class IV</option>
                        <option value="5">Class V</option>
                        <option value="6">Class VI</option>
                        <option value="7">Class VII</option>
                        <option value="8">Class VIII</option>
                        <option value="9">Class IX</option>
                        <option value="10">Class X</option>
                        <option value="11">Class XI</option>
                        <option value="12">Class XII</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Parent/Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="Enter parent/guardian name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                      placeholder="parent@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                      placeholder="Share any additional information, special requirements, or questions you may have..."
                    />
                  </div>
                </div>


                {/* Simple Declaration */}
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the terms and conditions and confirm that the information provided is accurate.
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
                  <Button type="submit" variant="primary" size="lg" className="flex-1">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Submit Quick Application
                  </Button>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                  <p className="text-sm text-gray-700">
                    <strong>What happens next?</strong> After submitting this quick form, we'll contact you within 24 hours to discuss the admission process, schedule a visit, and provide detailed information about required documents and next steps.
                  </p>
                </div>
              </form>
            </CardBody>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

