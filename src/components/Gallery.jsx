import React from 'react';
import { Camera } from 'lucide-react';
import '../Stylesheet/Gallery.css'; // This points out of components and into your Stylesheet folder

const Gallery = () => {
  // Array mapping to your 10 local images in the public folder
  const galleryImages = [
    { id: 1, url: "/1.jpeg" },
    { id: 2, url: "/2.jpeg" },
    { id: 3, url: "/3.jpeg" },
    { id: 4, url: "/4.jpeg" },
    { id: 5, url: "/5.jpeg" },
    { id: 6, url: "/6.jpeg" },
    { id: 7, url: "/7.jpeg" },
    { id: 8, url: "/8.jpeg" },
    { id: 9, url: "/9.jpeg" },
    { id: 10, url: "/10.jpeg" },
    { id: 11, url: "/11.jpeg"},
    { id: 12, url: "/12.jpeg"},
  ];

  return (
    <section id="gallery" className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1a56db] font-bold uppercase text-sm mb-2 tracking-wider">Our Work Portfolio</p>
          <h2 className="text-4xl font-bold text-[#0A1E3F] flex items-center justify-center gap-2">
            <Camera className="text-[#1a56db]" size={32} />
            Recent Projects in Kathmandu
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Take a look at some of our recent plumbing installations, repairs, and water purification setups completed by our expert team in Tusal.
          </p>
        </div>

        {/* Grid Layout - Clean image frame display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-xl shadow-md h-72 bg-gray-100 cursor-pointer"
            >
              {/* Image with zoom effect */}
              <img 
                src={image.url} 
                alt={`AquaPro Project ${image.id}`}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              
              {/* Pure visual hover gradient overlay matching custom brand colors (No Text) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/70 via-[#0A1E3F]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
