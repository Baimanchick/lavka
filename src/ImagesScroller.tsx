import React, { useRef, useEffect, useState } from "react";
import styles from "./InfiniteScroll.module.css";

interface InfiniteScrollProps {
  images: string[]; // Принимаем массив изображений как пропс
}

const ImagesScroller: React.FC<InfiniteScrollProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        if (
          container.scrollTop + container.clientHeight >=
          container.scrollHeight
        ) {
          // Здесь вы можете загружать еще изображения и добавлять их в массив images
          // Например, после загрузки новых изображений, обновите images с использованием пропсов
        }
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default ImagesScroller;
