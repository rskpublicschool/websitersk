import { Metadata } from 'next';
import Link from 'next/link';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody, CardHeader } from '@/app/components/Card';
import Button from '@/app/components/Button';

export const metadata: Metadata = {
  title: "Admission Process - Step by Step Guide",
  description: "Complete step-by-step admission process for RSK Public School. From counselling to final admission confirmation.",
};

export default function AdmissionProcessPage() {
  const processSteps = [
    {
      id: 1,
      title: "Counselling",
      description: "Initial consultation to understand your child's needs and our educational approach",
      icon: "💬",
      details: [
        "Meet with our admission counselor",
        "Discuss your child's academic background",
        "Learn about our curriculum and facilities",
        "Get answers to all your questions",
        "Receive admission guidelines and forms"
      ],
      duration: "30-45 minutes",
      color: "blue"
    },
    {
      id: 2,
      title: "Entrance Test",
      description: "Age-appropriate assessment to understand your child's current academic level",
      icon: "📝",
      details: [
        "Written test for classes I and above",
        "Oral assessment for nursery to UKG",
        "Subject-wise evaluation (Math, English, General Knowledge)",
        "No negative marking policy",
        "Results shared within 2 working days"
      ],
      duration: "1-2 hours",
      color: "green"
    },
    {
      id: 3,
      title: "Student & Parent Interview",
      description: "Personal interaction to ensure the right fit for our school community",
      icon: "👥",
      details: [
        "Student interaction with teachers",
        "Parent meeting with Principal/Vice Principal",
        "Discussion about child's interests and goals",
        "Understanding of school policies and expectations",
        "Assessment of family values alignment"
      ],
      duration: "45-60 minutes",
      color: "purple"
    },
    {
      id: 4,
      title: "Background Check",
      description: "Verification of documents and previous academic records",
      icon: "🔍",
      details: [
        "Document verification (certificates, ID proofs)",
        "Previous school record verification",
        "Character certificate validation",
        "Medical fitness confirmation",
        "Address and identity verification"
      ],
      duration: "2-3 working days",
      color: "amber"
    },
    {
      id: 5,
      title: "Registration",
      description: "Complete the admission formalities and secure your child's seat",
      icon: "📋",
      details: [
        "Fill out detailed admission form",
        "Submit all required documents",
        "Choose optional services (transport, meals)",
        "Provide emergency contact information",
        "Sign school policies agreement"
      ],
      duration: "30 minutes",
      color: "indigo"
    },
    {
      id: 6,
      title: "Final Admission",
      description: "Fee payment and final confirmation of admission",
      icon: "🎓",
      details: [
        "Pay admission and first installment fees",
        "Receive fee receipt and admission confirmation",
        "Get student ID and school handbook",
        "Schedule orientation session",
        "Receive class schedule and book list"
      ],
      duration: "20 minutes",
      color: "emerald"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-500 border-blue-200 text-blue-700",
      green: "bg-green-500 border-green-200 text-green-700",
      purple: "bg-purple-500 border-purple-200 text-purple-700",
      amber: "bg-amber-500 border-amber-200 text-amber-700",
      indigo: "bg-indigo-500 border-indigo-200 text-indigo-700",
      emerald: "bg-emerald-500 border-emerald-200 text-emerald-700"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Your step-by-step guide to joining our school community">
          Admission Process
        </SectionTitle>

        {/* Process Overview */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Process Overview</h3>
            </CardHeader>
            <CardBody>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Timeline</h4>
                  <p className="text-gray-700 mb-4">
                    The complete admission process typically takes 5-7 working days from initial counselling to final admission confirmation.
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• All original documents for verification</li>
                    <li>• Recent passport-size photographs</li>
                    <li>• Previous academic records</li>
                    <li>• Medical fitness certificate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Important Notes</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Admission is subject to seat availability</li>
                    <li>• All steps must be completed in sequence</li>
                    <li>• Fee payment confirms final admission</li>
                    <li>• Late applications may be considered on case-by-case basis</li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Visual Process Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
            
            {processSteps.map((step, index) => (
              <div key={step.id} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-10"></div>
                
                {/* Step Card */}
                <div className={`${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className={`bg-gradient-to-r ${step.color === 'blue' ? 'from-blue-500 to-blue-600' : 
                      step.color === 'green' ? 'from-green-500 to-green-600' :
                      step.color === 'purple' ? 'from-purple-500 to-purple-600' :
                      step.color === 'amber' ? 'from-amber-500 to-amber-600' :
                      step.color === 'indigo' ? 'from-indigo-500 to-indigo-600' :
                      'from-emerald-500 to-emerald-600'} text-white`}>
                      <div className="flex items-center gap-4">
                        <div className="text-4xl">{step.icon}</div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Step {step.id}
                            </span>
                            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                          <p className="text-white/90 mt-1">{step.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <h4 className="font-semibold text-gray-900 mb-3">What to Expect:</h4>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card>
            <CardHeader>
              <h3 className="text-2xl font-bold text-gray-900">Required Documents Checklist</h3>
            </CardHeader>
            <CardBody>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Student Documents
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Birth Certificate (Original + 2 copies)",
                      "Transfer Certificate (if applicable)",
                      "Previous year's Report Card",
                      "Character Certificate from previous school",
                      "Aadhar Card (Original + 2 copies)",
                      "Recent passport-size photographs (6 copies)",
                      "Medical fitness certificate",
                      "Caste certificate (if applicable)"
                    ].map((doc, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Parent/Guardian Documents
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Father's Aadhar Card (Copy)",
                      "Mother's Aadhar Card (Copy)",
                      "Income Certificate (if applicable)",
                      "Residential Proof (Electricity/Water bill)",
                      "Parent's passport-size photographs (2 each)",
                      "Employment certificate/Business proof",
                      "Bank account details",
                      "Emergency contact information"
                    ].map((doc, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500" />
                        <span className="text-gray-700">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
            <CardBody>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Need Help with the Admission Process?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Our admission team is here to guide you through every step. Contact us for personalized assistance.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button href="/contact" variant="secondary" size="lg">
                    Contact Admission Office
                  </Button>
                  <Button href="/admissions/apply" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white hover:bg-white hover:text-blue-900">
                    Start Application
                  </Button>
                </div>
                <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl mb-2">📞</div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-blue-200">+91-9431234567</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">✉️</div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-blue-200">admissions@rskschool.edu.in</div>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">🕒</div>
                    <div className="font-semibold">Office Hours</div>
                    <div className="text-blue-200">Mon-Sat: 9 AM - 4 PM</div>
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
