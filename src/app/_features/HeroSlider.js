import { useState } from 'react';


export const HeroImageSlider = () ={
  
const HeroImageSlider = () => {
  const images = [
    '/images/head.jpg',
    '/images/Gladiotar.jpg',
    '/images/moana.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '500px' }}>
      <div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div key={index} style={{ minWidth: '100%', height: '100%', flexShrink: 0 }}>
            <img
              src={src}
              alt={`Hero ${index + 1}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        style={{ position: 'absolute', top: '50%', left: '10px', zIndex: 10 }}
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        style={{ position: 'absolute', top: '50%', right: '10px', zIndex: 10 }}
      >
        Next
      </button>
    </div>
  );
};
}

