
'use client';

import { useState } from 'react';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody, CardHeader } from '@/app/components/Card';
import Button from '@/app/components/Button';
import QuickEnquirySection from './QuickEnquirySection';

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxekKe8wRT29Jen32OvvzYJcwj6sXlVVV-M8J4i26aMnlS0IljndO6EqjzYnRDrUUhR/exec';

const CLASSES = [
  'Nursery','LKG','UKG',
  ...Array.from({ length: 12 }, (_, i) => `Class ${['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'][i]}`),
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ApplyPage() {
  const [form, setForm] = useState({
    studentName: '', className: '', parentName: '',
    contact: '', email: '', message: '', consent: false,
  });
  const [status, setStatus] = useState<Status>('idle');

  const set = (field: string, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)));
      await fetch(APPS_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: fd });
      setStatus('success');
      setForm({ studentName: '', className: '', parentName: '', contact: '', email: '', message: '', consent: false });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none";

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

                {/* Banners */}
                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">✓ Enquiry submitted successfully!</p>
                    <p className="text-green-700 text-sm mt-0.5">We'll contact you within 24 hours.</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">Something went wrong. Please try again or call us directly.</p>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Student's Full Name *</label>
                      <input type="text" required value={form.studentName} onChange={e => set('studentName', e.target.value)}
                        className={inputClass} placeholder="Enter student's full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Class Applying For *</label>
                      <select required value={form.className} onChange={e => set('className', e.target.value)} className={inputClass}>
                        <option value="">Select Class</option>
                        {CLASSES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Parent/Guardian Name *</label>
                      <input type="text" required value={form.parentName} onChange={e => set('parentName', e.target.value)}
                        className={inputClass} placeholder="Enter parent/guardian name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number *</label>
                      <input type="tel" required value={form.contact} onChange={e => set('contact', e.target.value)}
                        className={inputClass} placeholder="+91 98765 43210" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" required value={form.email} onChange={e => set('email', e.target.value)}
                      className={inputClass} placeholder="parent@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message (Optional)</label>
                    <textarea rows={4} value={form.message} onChange={e => set('message', e.target.value)}
                      className={`${inputClass} resize-none`}
                      placeholder="Share any additional information, special requirements, or questions..." />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <label className="flex items-start gap-3">
                      <input type="checkbox" required checked={form.consent} onChange={e => set('consent', e.target.checked)}
                        className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-600" />
                      <span className="text-sm text-gray-700">
                        I agree to the terms and conditions and confirm that the information provided is accurate.
                      </span>
                    </label>
                  </div>

                  <div className={`flex flex-col sm:flex-row gap-4 pt-6 border-t ${status === 'loading' ? 'opacity-60 pointer-events-none' : ''}`}>
                    <Button type="submit" variant="primary" size="lg" className="flex-1">
                      {status === 'loading' ? 'Submitting...' : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Submit Quick Application
                        </>
                      )}
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