import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PhotographyProject } from '../../types/portfolio';

const PhotographyProjects = () => {
  const [selectedImage, setSelectedImage] = useState<PhotographyProject | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
    setSelectedImage(photos[currentIndex > 0 ? currentIndex - 1 : photos.length - 1]);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
    setSelectedImage(photos[currentIndex < photos.length - 1 ? currentIndex + 1 : 0]);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer group relative"
            onClick={() => {
              setSelectedImage(photo);
              setCurrentIndex(photos.findIndex((p) => p.id === photo.id));
            }}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center px-4">
                {photo.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-[#00ffff] transition-colors"
          >
            <X size={24} />
          </button>
          
          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-[#00ffff] transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-[#00ffff] transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div className="max-w-4xl max-h-[80vh] relative">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/75 text-white p-4">
              <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.location}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const photos: PhotographyProject[] = [
  {
    id: 1,
    title: 'Mountain Sunrise',
    description: 'Capturing the first light of dawn over the mountains',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
    location: 'Mount Kenya',
    category: 'photography'
  },
  {
    id: 2,
    title: 'Urban Wildlife',
    description: 'A peaceful moment in the city park',
    url: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&q=80&w=800',
    location: 'Nairobi National Park',
    category: 'photography'
  },
  {
    id: 3,
    title: 'Coastal Sunset',
    description: 'Golden hour at the beach',
    url: 'https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?auto=format&fit=crop&q=80&w=800',
    location: 'Diani Beach',
    category: 'photography'
  },
  {
    id: 4,
    title: 'Street Life',
    description: 'Capturing daily life in the city',
    url: 'https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?auto=format&fit=crop&q=80&w=800',
    location: 'Mombasa Old Town',
    category: 'photography'
  }
];

export default PhotographyProjects;