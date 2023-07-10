import { useState, useEffect } from 'react';
import styles from './carousel.module.css';
interface CarouselProps {
  images: string[];
  names: string[];
  bodies: string[];
}

const Carousel: React.FC<CarouselProps> = ({images , names, bodies}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_container}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.carousel_slide} ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex bg-white h-80">
                <div className="w-full sm:w-2/5">
                    <div className="ml-4 sm:ml-6 mr-4 mt-2 text-center sm:text-left">
                        <p className="font-helvetica-neue font-bold text-blue-950 text-lg">{names[index]}</p>
                        <p className="mt-4 font-helvetica-neue text-blue-950 text-md">{bodies[index]}</p>
                    </div>
                </div>
                <img className="hidden sm:block sm:w-3/5 object-cover" src={image} alt={`Image ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
      <button className={styles.carousel_prev} onClick={prevSlide}>
         <svg viewBox="0 0 24 24" fill="#ffffff">
          <path d="M9 12l6-6v12z" />
        </svg>
      </button>
      <button className={styles.carousel_next} onClick={nextSlide}>
         <svg viewBox="0 0 24 24" fill="#ffffff">
          <path d="M15 12l-6 6V6z" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;