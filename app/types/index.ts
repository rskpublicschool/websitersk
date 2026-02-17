export interface SchoolInfo {
  name: string;
  affiliationNo: string;
  schoolCode: string;
  address: string;
  pinCode: string;
  principalName: string;
  principalQualification: string;
  email: string;
  phone: string;
  establishedYear: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  thumbnail: string;
  title: string;
  description?: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  category: string;
  fileUrl: string;
  updatedAt: string;
}

export interface InfrastructureDetail {
  label: string;
  value: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  link?: string;
}





