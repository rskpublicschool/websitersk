import { Metadata } from 'next';
import PhotoGalleryClient from './PhotoGalleryClient';

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Browse through our collection of high-resolution photos from school events, activities, and campus life at RSK Public School.",
};

export default function PhotoGalleryPage() {
  return <PhotoGalleryClient />;
}






