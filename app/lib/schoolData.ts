import { SchoolInfo, NavItem, InfrastructureDetail, DocumentItem } from '../types/index';

export const schoolInfo: SchoolInfo = {
  name: "RSK Public School",
  affiliationNo: "331083",
  schoolCode: "66831",
  address: "BASTIPUR, DEHRI, BIHAR",
  pinCode: "821305",
  principalName: "Mr. Raj Narayan Singh",
  principalQualification: "M.A., B.Ed.",
  email: "rskpublicschooldehri@gmail.com",
  phone: "09911800967, 08210922434",
  establishedYear: "2007"
};

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Director's Message", href: "/about/director" },
      { label: "Principal's Message", href: "/about/principal" },
      { label: "School Discipline", href: "/about/discipline" }
    ]
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admission Process", href: "/admissions/process" },
      { label: "Fee Structure", href: "/admissions/fees" },
      { label: "Apply Online", href: "/admissions/apply" }
    ]
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Curriculum", href: "/academics/curriculum" },
      { label: "Academic Calendar", href: "/academics/calendar" },
      { label: "Best Practices", href: "/academics/practices" }
    ]
  },
  {
    label: "Infrastructure",
    href: "/infrastructure"
  },
  {
    label: "Mandatory Disclosure",
    href: "/disclosure"
  },
  {
    label: "Results & Announcements",
    href: "/results-announcements"
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photo Gallery", href: "/gallery/photos" },
      { label: "Video Gallery", href: "/gallery/videos" }
    ]
  },
  {
    label: "Contact",
    href: "/contact"
  }
];

export const infrastructureDetails: InfrastructureDetail[] = [
  { label: "Total Campus Area", value: "2.5 acres" },
  { label: "Number of Classrooms", value: "30 rooms (avg. 450 sq.ft each)" },
  { label: "Science Laboratories", value: "3 labs (Physics, Chemistry, Biology)" },
  { label: "Computer Labs", value: "2 labs with 60+ computers" },
  { label: "Library", value: "1000+ books, Reading room capacity: 50" },
  { label: "Playground", value: "Multi-purpose sports ground" },
  { label: "Audio-Visual Room", value: "1 smart classroom" },
  { label: "Girls' Toilets", value: "12 units" },
  { label: "Boys' Toilets", value: "12 units" }
];

export const mandatoryDocuments: DocumentItem[] = [
  // Academic Certificates
  {
    id: "1",
    title: "10+2 Level Certificate",
    category: "Academic Certificates",
    fileUrl: "/certificates/10+2 level certificate RSK public school best school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "2",
    title: "Recognition Certificate (Up to Class 8)",
    category: "Academic Certificates",
    fileUrl: "/certificates/recogunation cert upto 8 RSK public school best school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "3",
    title: "NOC Certificate by CBSE",
    category: "Academic Certificates",
    fileUrl: "/certificates/noc certificate by cbse RSK public school top 10 school in dehri.pdf",
    updatedAt: "2026-02-14"
  },

  // Legal & Trust Documents
  {
    id: "4",
    title: "Trust Deed",
    category: "Legal & Trust Documents",
    fileUrl: "/certificates/Trust deed RSK public school best school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "5",
    title: "Affidavit by Managing Committee",
    category: "Legal & Trust Documents",
    fileUrl: "/certificates/affdavit by managing committee RSK public school top cbse school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "6",
    title: "Affidavit Membership of the Trust",
    category: "Legal & Trust Documents",
    fileUrl: "/certificates/affdavit membership of the trust RSK public school top 10 school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "7",
    title: "Affidavit to Run School under IT",
    category: "Legal & Trust Documents",
    fileUrl: "/certificates/affdavit to run school under IT RSK public school best school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "8",
    title: "Self Certificate Performa",
    category: "Legal & Trust Documents",
    fileUrl: "/certificates/self cert performa RSK public school top 10 school in dehri.pdf",
    updatedAt: "2026-02-14"
  },

  // Property & Infrastructure
  {
    id: "9",
    title: "Certificate of Land",
    category: "Property & Infrastructure",
    fileUrl: "/certificates/certificate of land RSK public school top cbse school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "10",
    title: "Lease Deed",
    category: "Property & Infrastructure",
    fileUrl: "/certificates/lease deed RSK public school top cbse school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "11",
    title: "Details of Infrastructure",
    category: "Property & Infrastructure",
    fileUrl: "/certificates/Details of infrastructure RSK public school top 10 school in dehri.pdf",
    updatedAt: "2026-02-14"
  },

  // Safety & Security Certificates
  {
    id: "12",
    title: "Building Safety Certificate",
    category: "Safety & Security",
    fileUrl: "/certificates/building safety cert RSK public school best school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "13",
    title: "Fire Safety Certificate",
    category: "Safety & Security",
    fileUrl: "/certificates/Fire safety certificate RSK public school top cbse school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "14",
    title: "Drinking Water Certificate",
    category: "Safety & Security",
    fileUrl: "/certificates/drinking water cert RSK public school best school in dehri.pdf",
    updatedAt: "2026-02-14"
  },

  // Financial Documents
  {
    id: "15",
    title: "School FD Document",
    category: "Financial Documents",
    fileUrl: "/certificates/school fd document RSK public school top cbse school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "16",
    title: "Income Tax Return by Trust",
    category: "Financial Documents",
    fileUrl: "/certificates/Income tax return by trust RSK public school best school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "17",
    title: "Audit Report",
    category: "Financial Documents",
    fileUrl: "/certificates/Audit report RSK public school top 10 school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "18",
    title: "Audit Report (Last 3 Years)",
    category: "Financial Documents",
    fileUrl: "/certificates/AUDIT REPORT LAST 3 YEARS RSK public school top cbse school in dehri.pdf",
    updatedAt: "2026-02-14"
  },

  // Governance & Compliance
  {
    id: "19",
    title: "IC Recommendation",
    category: "Governance & Compliance",
    fileUrl: "/certificates/IC recommendation RSK public school top 10 school in dehri.pdf",
    updatedAt: "2026-02-14"
  }
];

export const quickLinks = [
  { label: "CBSE Official", url: "https://cbse.gov.in" },
  { label: "Admission Enquiry", url: "/admissions/apply" },
  { label: "Fee Payment", url: "/admissions/fees" },
  { label: "Results & Announcements", url: "/results-announcements" }
];

