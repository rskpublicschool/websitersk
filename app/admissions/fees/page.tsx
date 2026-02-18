import { Metadata } from 'next';
import Link from 'next/link';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody, CardHeader } from '@/app/components/Card';
import Button from '@/app/components/Button';

export const metadata: Metadata = {
  title: "Fee Structure - Detailed Breakdown",
  description: "Complete fee structure for all classes at RSK Public School. Transparent pricing with no hidden charges.",
};

export default function FeeStructurePage() {
  const feeStructure = [
    {
      class: "Nursery",
      admissionFee: 3000,
      annualFee: 8000,
      monthlyFee: 1200,
      examFee: 500,
      activityFee: 1000,
      total: 13700
    },
    {
      class: "LKG",
      admissionFee: 3000,
      annualFee: 8000,
      monthlyFee: 1200,
      examFee: 500,
      activityFee: 1000,
      total: 13700
    },
    {
      class: "UKG",
      admissionFee: 3000,
      annualFee: 8000,
      monthlyFee: 1200,
      examFee: 500,
      activityFee: 1000,
      total: 13700
    },
    {
      class: "Class I",
      admissionFee: 3500,
      annualFee: 10000,
      monthlyFee: 1500,
      examFee: 800,
      activityFee: 1200,
      total: 17000
    },
    {
      class: "Class II",
      admissionFee: 3500,
      annualFee: 10000,
      monthlyFee: 1500,
      examFee: 800,
      activityFee: 1200,
      total: 17000
    },
    {
      class: "Class III",
      admissionFee: 3500,
      annualFee: 10000,
      monthlyFee: 1500,
      examFee: 800,
      activityFee: 1200,
      total: 17000
    },
    {
      class: "Class IV",
      admissionFee: 3500,
      annualFee: 10000,
      monthlyFee: 1500,
      examFee: 800,
      activityFee: 1200,
      total: 17000
    },
    {
      class: "Class V",
      admissionFee: 3500,
      annualFee: 10000,
      monthlyFee: 1500,
      examFee: 800,
      activityFee: 1200,
      total: 17000
    },
    {
      class: "Class VI",
      admissionFee: 4000,
      annualFee: 12000,
      monthlyFee: 1800,
      examFee: 1000,
      activityFee: 1500,
      total: 20300
    },
    {
      class: "Class VII",
      admissionFee: 4000,
      annualFee: 12000,
      monthlyFee: 1800,
      examFee: 1000,
      activityFee: 1500,
      total: 20300
    },
    {
      class: "Class VIII",
      admissionFee: 4000,
      annualFee: 12000,
      monthlyFee: 1800,
      examFee: 1000,
      activityFee: 1500,
      total: 20300
    },
    {
      class: "Class IX",
      admissionFee: 5000,
      annualFee: 15000,
      monthlyFee: 2200,
      examFee: 1500,
      activityFee: 2000,
      total: 25700
    },
    {
      class: "Class X",
      admissionFee: 5000,
      annualFee: 15000,
      monthlyFee: 2200,
      examFee: 1500,
      activityFee: 2000,
      total: 25700
    },
    {
      class: "Class XI (Science)",
      admissionFee: 6000,
      annualFee: 18000,
      monthlyFee: 2500,
      examFee: 2000,
      activityFee: 2500,
      total: 31000
    },
    {
      class: "Class XI (Commerce)",
      admissionFee: 6000,
      annualFee: 18000,
      monthlyFee: 2500,
      examFee: 2000,
      activityFee: 2500,
      total: 31000
    },
    {
      class: "Class XI (Arts)",
      admissionFee: 6000,
      annualFee: 18000,
      monthlyFee: 2500,
      examFee: 2000,
      activityFee: 2500,
      total: 31000
    },
    {
      class: "Class XII (Science)",
      admissionFee: 6000,
      annualFee: 18000,
      monthlyFee: 2500,
      examFee: 2000,
      activityFee: 2500,
      total: 31000
    },
    {
      class: "Class XII (Commerce)",
      admissionFee: 6000,
      annualFee: 18000,
      monthlyFee: 2500,
      examFee: 2000,
      activityFee: 2500,
      total: 31000
    },
    {
      class: "Class XII (Arts)",
      admissionFee: 6000,
      annualFee: 18000,
      monthlyFee: 2500,
      examFee: 2000,
      activityFee: 2500,
      total: 31000
    }
  ];

  const additionalFees = [
    {
      service: "School Bus (Within 5 km)",
      fee: "₹800/month",
      description: "Safe and reliable transportation service"
    },
    {
      service: "School Bus (5-10 km)",
      fee: "₹1,200/month",
      description: "Extended route coverage"
    },
    {
      service: "School Bus (Above 10 km)",
      fee: "₹1,500/month",
      description: "Long distance transportation"
    },
    {
      service: "Hostel Accommodation",
      fee: "₹8,000/month",
      description: "Boarding facility with meals"
    },
    {
      service: "Lunch Program",
      fee: "₹1,500/month",
      description: "Nutritious meals prepared in-house"
    },
    {
      service: "Computer Lab Fee",
      fee: "₹500/year",
      description: "Access to computer lab and software"
    },
    {
      service: "Science Lab Fee",
      fee: "₹800/year",
      description: "Laboratory experiments and materials"
    },
    {
      service: "Library Fee",
      fee: "₹300/year",
      description: "Access to books and digital resources"
    },
    {
      service: "Sports Fee",
      fee: "₹600/year",
      description: "Sports equipment and coaching"
    },
    {
      service: "Late Fee (per day)",
      fee: "₹50",
      description: "Penalty for late fee payment"
    }
  ];

  const paymentMethods = [
    {
      method: "Online Payment",
      description: "Pay through our secure online portal using debit/credit cards, net banking, or UPI",
      icon: "💳"
    },
    {
      method: "Bank Transfer",
      description: "Direct bank transfer to school account with fee receipt as reference",
      icon: "🏦"
    },
    {
      method: "Cash/Cheque",
      description: "Visit school office for cash payment or submit cheque in favor of RSK Public School",
      icon: "💵"
    },
    {
      method: "EMI Options",
      description: "Flexible EMI options available for annual fees (conditions apply)",
      icon: "📅"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Transparent pricing with no hidden charges">
          Fee Structure 2025-26
        </SectionTitle>

        {/* Fee Overview */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <CardBody>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">₹3,000</div>
                  <div className="text-blue-100">Starting Admission Fee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">₹1,200</div>
                  <div className="text-blue-100">Starting Monthly Fee</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">0%</div>
                  <div className="text-blue-100">Hidden Charges</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-blue-100">Transparency</div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Detailed Fee Structure */}
        <div className="max-w-7xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Detailed Fee Structure</h3>
              <p className="text-gray-600 mt-2">All fees are in Indian Rupees (₹). First year total includes admission fee.</p>
            </CardHeader>
            <CardBody>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">Class</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Admission Fee</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Annual Fee</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Monthly Fee</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Exam Fee</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">Activity Fee</th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-blue-50">First Year Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className={`border-b border-gray-100 hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                        <td className="py-4 px-4 font-medium text-gray-900">{fee.class}</td>
                        <td className="py-4 px-4 text-center text-gray-700">₹{fee.admissionFee.toLocaleString()}</td>
                        <td className="py-4 px-4 text-center text-gray-700">₹{fee.annualFee.toLocaleString()}</td>
                        <td className="py-4 px-4 text-center text-gray-700">₹{fee.monthlyFee.toLocaleString()}</td>
                        <td className="py-4 px-4 text-center text-gray-700">₹{fee.examFee.toLocaleString()}</td>
                        <td className="py-4 px-4 text-center text-gray-700">₹{fee.activityFee.toLocaleString()}</td>
                        <td className="py-4 px-4 text-center font-bold text-blue-700 bg-blue-50">₹{fee.total.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Important Notes:</h4>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• Monthly fees are to be paid by 10th of each month</li>
                  <li>• Annual fees can be paid in 2-3 installments</li>
                  <li>• Late payment attracts penalty charges</li>
                  <li>• Fees once paid are non-refundable</li>
                  <li>• Fee structure is subject to annual revision</li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Additional Services */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Additional Services & Fees</h3>
              <p className="text-gray-600 mt-2">Optional services to enhance your child's school experience</p>
            </CardHeader>
            <CardBody>
              <div className="grid md:grid-cols-2 gap-6">
                {additionalFees.map((service, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-900 mb-1">{service.service}</h4>
                      <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                      <div className="font-bold text-blue-600">{service.fee}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Payment Methods</h3>
              <p className="text-gray-600 mt-2">Multiple convenient ways to pay your fees</p>
            </CardHeader>
            <CardBody>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all">
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h4 className="font-semibold text-gray-900 mb-3">{method.method}</h4>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Fee Payment Schedule */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900">Payment Schedule</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium text-gray-900">Admission Fee</span>
                    <span className="text-green-700 font-semibold">At the time of admission</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium text-gray-900">Annual Fee</span>
                    <span className="text-blue-700 font-semibold">April (or in installments)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium text-gray-900">Monthly Fee</span>
                    <span className="text-purple-700 font-semibold">By 10th of each month</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-amber-50 rounded-lg">
                    <span className="font-medium text-gray-900">Exam Fee</span>
                    <span className="text-amber-700 font-semibold">Before each examination</span>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900">Fee Concessions</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-green-500 bg-green-50">
                    <h4 className="font-semibold text-green-800 mb-2">Sibling Discount</h4>
                    <p className="text-green-700 text-sm">10% discount on monthly fees for second child onwards</p>
                  </div>
                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                    <h4 className="font-semibold text-blue-800 mb-2">Merit Scholarship</h4>
                    <p className="text-blue-700 text-sm">Up to 30% fee waiver for academically excellent students</p>
                  </div>
                  <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                    <h4 className="font-semibold text-purple-800 mb-2">Staff Ward</h4>
                    <p className="text-purple-700 text-sm">Special concessions for children of school staff</p>
                  </div>
                  <div className="p-4 border-l-4 border-amber-500 bg-amber-50">
                    <h4 className="font-semibold text-amber-800 mb-2">Financial Assistance</h4>
                    <p className="text-amber-700 text-sm">Need-based support for economically weaker sections</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Bank Details */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <h3 className="text-2xl font-bold">Bank Account Details</h3>
              <p className="text-gray-300 mt-2">For direct bank transfers and online payments</p>
            </CardHeader>
            <CardBody>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Account Name</label>
                    <div className="font-semibold text-lg">RSK Public School</div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Account Number</label>
                    <div className="font-semibold text-lg">1234567890123456</div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Bank Name</label>
                    <div className="font-semibold text-lg">State Bank of India</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">IFSC Code</label>
                    <div className="font-semibold text-lg">SBIN0001234</div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Branch</label>
                    <div className="font-semibold text-lg">Dehri-on-Sone</div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Account Type</label>
                    <div className="font-semibold text-lg">Current Account</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-white/10 rounded-lg">
                <p className="text-sm text-gray-300">
                  <strong>Note:</strong> Please mention student's name and class in the payment reference. 
                  Keep the transaction receipt for fee payment verification.
                </p>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-green-600 to-green-700 text-white text-center">
            <CardBody>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Secure Your Child's Future?
              </h3>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Quality education at affordable fees. Join our community of learners and leaders today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button href="/admissions/apply" variant="secondary" size="lg">
                  Apply Now
                </Button>
                <Button href="/admissions/process" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white hover:bg-white hover:text-green-700">
                  View Admission Process
                </Button>
              </div>
              <div className="mt-8 text-center">
                <p className="text-green-100 mb-2">Have questions about fees?</p>
                <div className="flex flex-wrap gap-6 justify-center text-sm">
                  <span>📞 +91-9431234567</span>
                  <span>✉️ fees@rskschool.edu.in</span>
                  <span>🕒 Mon-Sat: 9 AM - 4 PM</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
