import { useEffect, useRef, useState } from 'react';

export function useImageSequence(frameCount, getFrameUrl) {
  const imagesRef = useRef([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let isCancelled = false;
    const loadedImages = new Array(frameCount);
    let count = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFrameUrl(i);
      
      const handleLoad = () => {
        if (isCancelled) return;
        loadedImages[i] = img;
        count++;
        if (count % 10 === 0 || count === frameCount) {
          setProgress(Math.min(1, count / frameCount));
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad; // Increment even on error to not block progress indefinitely
    }

    imagesRef.current = loadedImages;

    return () => {
      isCancelled = true;
    };
  }, [frameCount, getFrameUrl]);

  return { images: imagesRef.current, progress };
}
