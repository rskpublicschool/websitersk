import SectionTitle from '../components/SectionTitle';
import { Card, CardBody } from '../components/Card';
import Button from '../components/Button';

export default function NonAcademicPage() {
  const lifeSkillsCourses = [
    {
      title: "Digital Safety & Fraud Prevention",
      emoji: "🔒",
      description: "Learn to protect yourself from online scams, cyberbullying, and digital fraud. Understand privacy settings, secure browsing, and safe online practices.",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      textColor: "text-red-600"
    },
    {
      title: "Emotional Intelligence",
      emoji: "💝",
      description: "Develop self-awareness, empathy, and emotional regulation skills. Learn to understand and manage emotions effectively in personal and social situations.",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      textColor: "text-pink-600"
    },
    {
      title: "Personal Finance",
      emoji: "💰",
      description: "Master budgeting, saving, investing, and financial planning. Understand banking, loans, taxes, and building wealth for a secure financial future.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      textColor: "text-green-600"
    },
    {
      title: "Startup & Entrepreneurship",
      emoji: "🚀",
      description: "Learn business fundamentals, idea validation, market research, and startup strategies. Develop entrepreneurial mindset and innovation skills.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      textColor: "text-purple-600"
    },
    {
      title: "Leadership & Responsibility",
      emoji: "👑",
      description: "Build leadership qualities, team management skills, and social responsibility. Learn to inspire others and make positive impact in community.",
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-50 to-amber-100",
      textColor: "text-amber-600"
    },
    {
      title: "AI & Digital Literacy in 2025",
      emoji: "🤖",
      description: "Understand artificial intelligence, machine learning, and digital tools. Learn to leverage technology effectively and adapt to the digital future.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-600"
    },
    {
      title: "Mental & Physical Health",
      emoji: "🧘‍♀️",
      description: "Learn stress management, mindfulness, nutrition, and fitness. Develop healthy habits for mental wellness and physical well-being.",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100",
      textColor: "text-teal-600"
    },
    {
      title: "False Marketing Prevention",
      emoji: "🛡️",
      description: "Identify misleading advertisements, fake news, and marketing manipulation. Develop critical thinking to make informed consumer decisions.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      textColor: "text-orange-600"
    },
    {
      title: "Personality & Communication",
      emoji: "🗣️",
      description: "Enhance public speaking, interpersonal skills, and personality development. Learn effective communication and confidence building techniques.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      textColor: "text-indigo-600"
    },
    {
      title: "Career & Domain Introduction",
      emoji: "🎯",
      description: "Explore various career paths, industry insights, and professional skills. Get guidance on career planning and domain-specific knowledge.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "from-cyan-50 to-cyan-100",
      textColor: "text-cyan-600"
    },
    {
      title: "Problem Solving & Critical Thinking",
      emoji: "🧠",
      description: "Develop analytical thinking, logical reasoning, and creative problem-solving skills. Learn systematic approaches to tackle complex challenges.",
      color: "from-violet-500 to-violet-600",
      bgColor: "from-violet-50 to-violet-100",
      textColor: "text-violet-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm sm:text-base font-medium">🌟 Life Skills & Practical Education</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Why Non-Academic Program?
            </h1>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-blue-200">
              Because every student's personal growth matters.
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              To Empower Next-Gen students with essential life skills, practical knowledge, and future-ready competencies beyond traditional academics, RSK has a different approach to practicality.
            </p>
            
            <div className="flex justify-center items-center">
              <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Call Program Coordinator
              </Button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#f9fafb"/>
          </svg>
        </div>
      </section>

      {/* Life Skills Courses Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50 -mt-1">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <SectionTitle centered subtitle="Essential skills for success in the modern world">
            Life Skills & Practical Courses
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {lifeSkillsCourses.map((course, index) => (
              <Card key={index} hover className="h-full">
                <div className={`h-20 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                  <span className="text-4xl">{course.emoji}</span>
                </div>
                <CardBody className="flex-1 flex flex-col">
                  <div className={`inline-block w-fit px-3 py-1 bg-gradient-to-r ${course.bgColor} rounded-full mb-4`}>
                    <span className={`text-xs font-semibold ${course.textColor}`}>LIFE SKILL</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {course.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Skills Matter Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <SectionTitle centered subtitle="Preparing students for real-world challenges">
            Why Life Skills Education Matters
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Future Ready</h3>
              <p className="text-gray-600 text-sm">
                Equipping students with skills needed for the evolving job market and digital economy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Practical Application</h3>
              <p className="text-gray-600 text-sm">
                Real-world skills that students can immediately apply in their daily lives and future careers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Critical Thinking</h3>
              <p className="text-gray-600 text-sm">
                Developing analytical and problem-solving abilities essential for success in any field.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-lg font-bold mb-3">Personal Growth</h3>
              <p className="text-gray-600 text-sm">
                Building confidence, leadership qualities, and emotional intelligence for holistic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Ready to Develop Essential Life Skills?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our comprehensive non-academic programs and prepare yourself for success in the modern world.
          </p>
          <div className="flex justify-center items-center">
            <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Know More About the Program
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
