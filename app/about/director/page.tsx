import { Metadata } from 'next';
import Image from 'next/image';
import SectionTitle from '@/app/components/SectionTitle';
import { Card, CardBody } from '@/app/components/Card';

export const metadata: Metadata = {
  title: "Director's Message",
  description: "Read the inspiring message from our Director about the vision and mission of RSK Public School.",
};

export default function DirectorPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <SectionTitle centered subtitle="Leadership and Vision">
          Director&apos;s Message
        </SectionTitle>

        <div className="max-w-5xl mx-auto">
          <Card>
            <CardBody className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-1">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/director RSK top school in dehri rohtas.jpg"
                      alt="Mr. Anand Singh - Director of RSK Public School"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-gray-900">Mr. Anand Singh</h3>
                    <p className="text-gray-600">Director</p>
                    <p className="text-sm text-gray-500 mt-1">M.A., B.Ed.</p>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <span className="text-5xl text-blue-600 float-left mr-3 mt-1 font-serif">&ldquo;</span>
                      It gives me immense pleasure to welcome you to R.S.K Public School, a premier educational institution 
                      committed to nurturing young minds and building future leaders.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Since our establishment in 1991, we have been on a remarkable journey of academic excellence and 
                      holistic development. Our vision has always been to create an environment where every child can 
                      discover their potential, develop their talents, and emerge as confident, compassionate individuals 
                      ready to face the challenges of tomorrow.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Education is not just about acquiring knowledge; it is about building character, fostering critical 
                      thinking, and developing a sense of social responsibility. At RSK Public School, we strive to provide 
                      a balanced education that combines academic rigor with co-curricular activities, ensuring our students 
                      grow into well-rounded individuals.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      We believe that every child is unique and deserves personalized attention. Our dedicated faculty, 
                      modern infrastructure, and innovative teaching methods create an ideal learning atmosphere. We 
                      encourage students to question, explore, and innovate, preparing them not just for examinations, 
                      but for life itself.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      I am proud of our achievements over the years, but we continue to evolve and adapt to the changing 
                      educational landscape. Our commitment to excellence remains unwavering, and we are dedicated to 
                      maintaining the highest standards in all aspects of school life.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      I extend my heartfelt gratitude to our teachers, parents, and staff for their unwavering support 
                      and dedication. Together, we will continue to build a school that stands as a beacon of quality 
                      education and values.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      I wish all our students success in their endeavors and encourage them to make the most of the 
                      opportunities provided to them. Remember, education is the most powerful tool you can use to 
                      change the world.
                      <span className="text-5xl text-blue-600 ml-1 font-serif">&rdquo;</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8 mt-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                    <div className="text-gray-700 font-medium">Years of Leadership</div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-2">Excellence</div>
                    <div className="text-gray-700 font-medium">In Education</div>
                  </div>
                  <div className="text-center p-6 bg-amber-50 rounded-lg">
                    <div className="text-3xl font-bold text-amber-600 mb-2">Vision</div>
                    <div className="text-gray-700 font-medium">For Future</div>
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

