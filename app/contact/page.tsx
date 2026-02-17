import { Metadata } from 'next';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody, CardHeader } from '@/app/components/Card';
import Button from '@/app/components/Button';
import { schoolInfo } from '@/app/lib/schoolData';
import QuickContactSection from './QuickContactSection';

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${schoolInfo.name}. Contact details, location, and enquiry form for admissions and general queries.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="We're here to help and answer any questions">
          Contact Us
        </SectionTitle>

        <div className="max-w-6xl mx-auto">
          <QuickContactSection />
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">Get in Touch</h3>
                </CardHeader>
                <CardBody className="space-y-6">
                  {/* Address */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                    </div>
                    <p className="text-gray-700 ml-[3.25rem]">
                      {schoolInfo.address}<br />
                      PIN: {schoolInfo.pinCode}
                    </p>
                  </div>

                  {/* Phone */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                    </div>
                    <a href={`tel:${schoolInfo.phone}`} className="text-gray-700 hover:text-blue-600 ml-[3.25rem]">
                      {schoolInfo.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                    </div>
                    <a href={`mailto:${schoolInfo.email}`} className="text-gray-700 hover:text-blue-600 ml-[3.25rem] break-all">
                      {schoolInfo.email}
                    </a>
                  </div>

                  {/* Office Hours */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900">Office Hours</h4>
                    </div>
                    <div className="ml-[3.25rem] text-gray-700 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 3:00 PM</p>
                      <p>Saturday: 8:00 AM - 12:00 PM</p>
                      <p className="text-sm text-gray-500">Sunday: Closed</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
                </CardHeader>
                <CardBody className="space-y-4">
                  <Button href="/admissions/apply" variant="primary" className="w-full">
                    Apply for Admission
                  </Button>
                  <Button href="/disclosure" variant="outline" className="w-full">
                    View Documents
                  </Button>
                </CardBody>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div id="contact-form">
                <Card>
                <CardHeader>
                  <h3 className="text-2xl font-bold text-gray-900">Send us a Message</h3>
                  <p className="text-gray-600 mt-1">Fill out the form below and we'll get back to you soon</p>
                </CardHeader>
                <CardBody>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="admission">Admission Enquiry</option>
                          <option value="general">General Enquiry</option>
                          <option value="academic">Academic Information</option>
                          <option value="infrastructure">Infrastructure & Facilities</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us more about your enquiry..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        required
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-600"
                      />
                      <label htmlFor="consent" className="text-sm text-gray-700">
                        I agree to the collection and processing of my personal data for the purpose of responding to my enquiry.
                      </label>
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send Message
                    </Button>
                  </form>

                  {/* Note */}
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> For urgent matters, please call us directly at {schoolInfo.phone}. 
                      We typically respond to enquiries within 24-48 hours during working days.
                    </p>
                  </div>
                </CardBody>
              </Card>
              </div>

              {/* Map */}
              <Card className="mt-8">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">Location Map</h3>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="w-full h-96 rounded-b-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.123456789!2d84.123456789!3d25.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRSK%20Public%20School%20Dehri!5e0!3m2!1sen!2sin!4v1645123456789!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="RSK Public School Location - Dehri"
                    />
                  </div>
                  <div className="p-4 bg-gray-50 border-t">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">
                          {schoolInfo.address}, {schoolInfo.pinCode}
                        </p>
                        <p className="text-xs text-gray-500">RSK Public School, Dehri</p>
                      </div>
                      <a
                        href="https://share.google/cZgZBVHTF5lf2sPnh"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm px-3 py-2 bg-white rounded-lg border hover:bg-blue-50 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Open in Maps
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

