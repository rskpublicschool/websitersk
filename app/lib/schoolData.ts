import { SchoolInfo, NavItem, InfrastructureDetail, DocumentItem } from '../types/index';

export const schoolInfo: SchoolInfo = {
  name: "RSK Public School",
  affiliationNo: "331083",
  schoolCode: "66831",
  address: "Bastipur, Dehri, Bihar",
  pinCode: "821305",
  directorName: "Shri Anand Singh",
  principalName: "Shri Raj Narayan Singh",
  principalQualification: "M.A., B.Ed.",
  email: "rskpublicschooldehri@gmail.com",
  phone: "9631160967, 8210922434, 9934958096",
  establishedYear: "2007"
};

export const navigationItems: NavItem[] = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About Us",
    href: "/about"
  },
  {
    label: "Academics",
    href: "/academics"
  },
  {
    label: "Admission",
    href: "/admissions"
  },
  {
    label: "Facilities",
    href: "/infrastructure"
  },
  {
    label: "Mandatory Disclosure",
    href: "/disclosure"
  },
  {
    label: "Notice Board",
    href: "/notice-board"
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
    label: "Contact Us",
    href: "/contact"
  }
];

export const infrastructureDetails: InfrastructureDetail[] = [
  { label: "Total Campus Area", value: "2 acres" },
  { label: "Number of Classrooms", value: "52 classrooms (avg. 500 sq.ft each)" },
  { label: "Science Laboratories", value: "1 lab (Multi-purpose)" },
  { label: "Computer Labs", value: "1 lab with modern computers" },
  { label: "Library", value: "1000+ books, Reading room capacity: 50" },
  { label: "Playground", value: "Multi-purpose sports ground" },
  { label: "Smart Classroom", value: "1 smart classroom with digital boards" },
  { label: "Girls' Toilets", value: "10+ separate units" },
  { label: "Boys' Toilets", value: "10+ separate units" }
];

export const mandatoryDocuments: DocumentItem[] = [
  // Academic Certificates
  {
    id: "1",
    title: "Extension of Affiliation Up to 2031",
    category: "Academic Certificates",
    fileUrl: "/mandatorydisclosures/EXTENSION OF AFFILIATION UP TO 2031.pdf",
    updatedAt: "2026-08-17"
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
    title: "NOC Certificate",
    category: "Academic Certificates",
    fileUrl: "/mandatorydisclosures/NOC_compressed.pdf",
    updatedAt: "2026-05-19"
  },
  {
    id: "23",
    title: "RTE (Right to Education)",
    category: "Academic Certificates",
    fileUrl: "/mandatorydisclosures/RTE QR.pdf",
    updatedAt: "2026-05-19"
  },
  {
    id: "24",
    title: "Annual Academic Calendar 2026-27",
    category: "Academic Certificates",
    fileUrl: "/mandatorydisclosures/ANNUAL ACADEMIC CALENDER 2026-27.pdf",
    updatedAt: "2026-05-19"
  },
  {
    id: "27",
    title: "CBSE Mandatory Disclosure (Official)",
    category: "Academic Certificates",
    fileUrl: "/mandatorydisclosures/CBSE Mandatory disclosure official.pdf",
    updatedAt: "2026-05-19"
  },

  // Legal & Trust Documents
  {
    id: "4",
    title: "Ramjag Singh Trust Deed",
    category: "Legal & Trust Documents",
    fileUrl: "/mandatorydisclosures/RAMJAG SINGH TRUST DEED.pdf",
    updatedAt: "2026-08-17"
  },
  {
    id: "5",
    title: "Affidavit by Trust",
    category: "Legal & Trust Documents",
    fileUrl: "/mandatorydisclosures/Affidavit by trust.pdf",
    updatedAt: "2026-05-19"
  },
  {
    id: "25",
    title: "Affidavit",
    category: "Legal & Trust Documents",
    fileUrl: "/mandatorydisclosures/AFFIDAVIT.pdf",
    updatedAt: "2026-05-19"
  },
  {
    id: "6",
    title: "Self Declaration Document",
    category: "Legal & Trust Documents",
    fileUrl: "/mandatorydisclosures/SELF DECLARATION DOCUMENT.pdf",
    updatedAt: "2026-05-19"
  },
  {
    id: "7",
    title: "Affidavit to Run School under IT",
    category: "Legal & Trust Documents",
    fileUrl: "/certificates/affdavit to run school under IT RSK public school best school in dehri.pdf",
    updatedAt: "2026-02-14"
  },

  // Property & Infrastructure
  {
    id: "8",
    title: "Land Certificate",
    category: "Property & Infrastructure",
    fileUrl: "/mandatorydisclosures/LAND CERTIFICATE.pdf",
    updatedAt: "2026-05-19"
  },
  {
    id: "9",
    title: "Ramjag Singh Lease Deed",
    category: "Property & Infrastructure",
    fileUrl: "/mandatorydisclosures/RAMJAG SINGH LEASE DEED.pdf",
    updatedAt: "2026-08-17"
  },
  {
    id: "28",
    title: "Built Up Area Certificate",
    category: "Property & Infrastructure",
    fileUrl: "/mandatorydisclosures/BUILT UP AREA CERTIFICATE.pdf",
    updatedAt: "2026-08-17"
  },
  {
    id: "10",
    title: "Details of Infrastructure",
    category: "Property & Infrastructure",
    fileUrl: "/certificates/Details of infrastructure RSK public school top 10 school in dehri.pdf",
    updatedAt: "2026-02-14"
  },

  // Safety & Security Certificates
  {
    id: "11",
    title: "Building Safety Certificate",
    category: "Safety & Security",
    fileUrl: "/mandatorydisclosures/BUILDING SAFETY CERTIFICATE.pdf",
    updatedAt: "2026-08-17"
  },
  {
    id: "12",
    title: "Fire Safety Certificate 2026-27",
    category: "Safety & Security",
    fileUrl: "/mandatorydisclosures/FIRE SAFETY CERTIFICATE 2026-27.pdf",
    updatedAt: "2026-08-17"
  },
  {
    id: "13",
    title: "Drinking Water and Sanitation Certificate",
    category: "Safety & Security",
    fileUrl: "/mandatorydisclosures/DRINKING WATER AND SANITATION CERTIFICATE.pdf",
    updatedAt: "2026-08-17"
  },
  {
    id: "14",
    title: "Drinking Water Sample Report",
    category: "Safety & Security",
    fileUrl: "/mandatorydisclosures/DRINKING WATER SAMPLE REPORT.pdf",
    updatedAt: "2026-08-17"
  },

  // Financial Documents
  {
    id: "15",
    title: "Fee Structure 2026-27",
    category: "Financial Documents",
    fileUrl: "/mandatorydisclosures/FEE STRUCTURE 2026-27.pdf",
    updatedAt: "2026-08-17"
  },
  {
    id: "16",
    title: "School FD Document",
    category: "Financial Documents",
    fileUrl: "/certificates/school fd document RSK public school top cbse school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "17",
    title: "Income Tax Return by Trust",
    category: "Financial Documents",
    fileUrl: "/certificates/Income tax return by trust RSK public school best school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "18",
    title: "Audit Report",
    category: "Financial Documents",
    fileUrl: "/certificates/Audit report RSK public school top 10 school in dehri.pdf",
    updatedAt: "2026-02-14"
  },
  {
    id: "19",
    title: "Audit Report (Last 3 Years)",
    category: "Financial Documents",
    fileUrl: "/certificates/AUDIT REPORT LAST 3 YEARS RSK public school top cbse school in dehri.pdf",
    updatedAt: "2026-02-14"
  },

  // Governance & Compliance
  {
    id: "20",
    title: "School Management Committee",
    category: "Governance & Compliance",
    fileUrl: "/mandatorydisclosures/SCHOOL MANAGEMENT COMMITTEE.pdf",
    updatedAt: "2026-08-17"
  },
  {
    id: "21",
    title: "Parents Teachers Association",
    category: "Governance & Compliance",
    fileUrl: "/mandatorydisclosures/PARENTS TEACHERS ASSOCIATION.pdf",
    updatedAt: "2026-08-17"
  },
  {
    id: "26",
    title: "Prevention Against Sexual Harassment Committee",
    category: "Governance & Compliance",
    fileUrl: "/mandatorydisclosures/PREVENTION AGAINST SEXUAL HARASSMENT COMMITTEE.pdf",
    updatedAt: "2026-08-17"
  },
  {
    id: "22",
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
  { label: "Notice Board", url: "/notice-board" }
];

