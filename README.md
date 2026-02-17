# RSK Public School Website

A modern, SEO-optimized educational website built with Next.js 16, React 19, and Tailwind CSS v4 for R.S.K Public School, a CBSE affiliated institution in Buxar, Bihar.

## 🎯 Project Overview

This is a complete redesign of the school's 5-year-old website, transformed into a modern, user-friendly edtech platform. The website is designed with a focus on the primary user personas: **Parents** and **Teachers**, providing easy navigation and quick access to essential information.

## ✨ Key Features

### 🎨 Modern Design
- **Clean & Professional UI**: Contemporary design following modern web design principles
- **Responsive Layout**: Fully responsive across all devices (mobile, tablet, desktop)
- **Consistent Design System**: Unified color scheme, typography, and component styling
- **Smooth Animations**: Subtle animations and transitions for enhanced UX
- **Accessibility**: WCAG compliant with proper semantic HTML

### 🔍 SEO Optimized
- **Meta Tags**: Comprehensive meta tags for all pages
- **Structured Data**: JSON-LD schema markup for better search engine understanding
- **Semantic HTML**: Proper HTML5 semantic elements
- **Performance Optimized**: Fast loading times with optimized assets
- **Mobile-First**: Mobile-optimized for better mobile search rankings

### 🚀 User Experience
- **Intuitive Navigation**: Simplified menu structure with organized dropdowns
- **Quick Actions**: Easy access to admission forms and important documents
- **Clear CTAs**: Strategic placement of call-to-action buttons
- **Easy Content Discovery**: Well-structured information architecture
- **Fast Loading**: Optimized for performance with Next.js 16

## 📁 Website Structure

### Main Pages

1. **Home** (`/`)
   - Hero section with school introduction
   - Quick stats and achievements
   - Why choose us section
   - Latest news and events
   - Call-to-action sections

2. **About** (`/about`)
   - Director's Message (`/about/director`)
   - Principal's Message (`/about/principal`)
   - School Discipline & Code of Conduct (`/about/discipline`)

3. **Admissions** (`/admissions`)
   - Admission process overview
   - Fee structure
   - Important dates
   - Age criteria
   - Online application form (`/admissions/apply`)

4. **Academics** (`/academics`)
   - CBSE curriculum details
   - Teaching methodology
   - Co-curricular activities
   - Best practices

5. **Infrastructure** (`/infrastructure`)
   - Campus facilities
   - Laboratories
   - Library and sports facilities
   - Safety and security measures

6. **Mandatory Disclosure** (`/disclosure`)
   - School information
   - CBSE compliance documents
   - Legal certificates
   - Financial documents
   - Governance information

7. **Gallery** (`/gallery`)
   - Photo Gallery (`/gallery/photos`)
   - Video Gallery (`/gallery/videos`)

8. **Contact** (`/contact`)
   - Contact information
   - Contact form
   - Location map
   - Office hours

## 🛠️ Technology Stack

- **Framework**: Next.js 16.1.1
- **React**: 19.2.3
- **Styling**: Tailwind CSS v4.1.18
- **Language**: TypeScript 5
- **Node**: v20+

## 📦 Project Structure

```
websitersk/
├── app/
│   ├── about/
│   │   ├── director/page.tsx
│   │   ├── principal/page.tsx
│   │   └── discipline/page.tsx
│   ├── admissions/
│   │   ├── page.tsx
│   │   └── apply/page.tsx
│   ├── academics/page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── SectionTitle.tsx
│   ├── contact/page.tsx
│   ├── disclosure/page.tsx
│   ├── gallery/
│   │   ├── page.tsx
│   │   ├── photos/page.tsx
│   │   └── videos/page.tsx
│   ├── infrastructure/page.tsx
│   ├── lib/
│   │   └── schoolData.ts
│   ├── types/
│   │   └── index.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   └── page.tsx
├── public/
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd websitersk
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design Principles

### Color Scheme
- **Primary**: Blue (#1e40af) - Trust, professionalism, education
- **Secondary**: Amber (#f59e0b) - Energy, optimism, warmth
- **Accent**: Green (#10b981) - Growth, success, achievement

### Typography
- System font stack for optimal performance
- Clear hierarchy with consistent sizing
- Readable line heights and spacing

### Component Design
- Reusable components for consistency
- Card-based layouts for content organization
- Icon integration for visual communication
- Hover effects for interactivity

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- High contrast text
- Alt text for images
- Focus indicators

## 🔧 Customization

### Update School Information

Edit `app/lib/schoolData.ts` to update:
- School name and contact details
- Navigation items
- Infrastructure details
- Mandatory documents

### Styling

Modify `app/globals.css` to customize:
- Color variables
- Font families
- Custom animations
- Global styles

## 📈 SEO Features

- Dynamic meta tags per page
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Sitemap (to be generated)
- robots.txt configuration
- Structured data (JSON-LD)

## 🔐 Security Considerations

- No sensitive data in client-side code
- Form validation
- Secure external links (rel="noopener noreferrer")
- Environment variables for sensitive config

## 📝 Content Management

Currently, content is managed through:
- TypeScript configuration files (`schoolData.ts`)
- MDX support can be added for blog/news
- CMS integration ready (Sanity/Contentful)

## 🚧 Future Enhancements

- [ ] Student/Parent login portal
- [ ] Online fee payment integration
- [ ] Real-time announcements system
- [ ] Interactive virtual tour
- [ ] Blog/News section
- [ ] Alumni section
- [ ] Event calendar with notifications
- [ ] Download section for study materials
- [ ] Live chat support

## 📄 License

This project is proprietary and confidential. All rights reserved by R.S.K Public School.

## 👥 Support

For support, email: rskpublicschool@gmail.com
Phone: +91-9931915254

## 🙏 Acknowledgments

- CBSE for educational standards
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- The education community for inspiration

---

**Built with ❤️ for R.S.K Public School**

*Transforming education through technology*
