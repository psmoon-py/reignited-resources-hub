import React, { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./button";

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ children, className }) => {
  return (
    <div className={cn("min-w-full overflow-hidden", className)}>
      {children}
    </div>
  );
};

const Carousel: React.FC<CarouselProps> & {
  Item: React.FC<CarouselItemProps>;
} = ({
  children,
  autoplay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const childrenArray = React.Children.toArray(children);
  const itemCount = childrenArray.length;
  
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
  }, [itemCount]);
  
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
  }, [itemCount]);
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isPaused) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    
    return () => clearInterval(timer);
  }, [autoplay, interval, nextSlide, isPaused]);
  
  return (
    <div 
      className={cn("relative w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>
      
      {showArrows && itemCount > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full p-2 text-gray-800 dark:text-gray-200 shadow-md focus:outline-none z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 rounded-full p-2 text-gray-800 dark:text-gray-200 shadow-md focus:outline-none z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
      
      {showDots && itemCount > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
          {childrenArray.map((_, index) => (
            <Button
              key={index}
              variant={index === currentIndex ? "primary" : "ghost"}
              size="sm"
              className={cn(
                "w-2 h-2 rounded-full p-0 min-w-0 min-h-0",
                index === currentIndex ? "bg-brand-blue" : "bg-gray-300 dark:bg-gray-600"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// For a more comprehensive carousel implementation, additional props like:
// - infinite scrolling
// - responsiveness controls
// - custom transition effects
// could be added

Carousel.Item = CarouselItem;

export { Carousel, CarouselItem };
export default Carousel;
