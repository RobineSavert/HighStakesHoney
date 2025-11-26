import { useEffect, useState } from 'react';

export function useImagesLoaded(urls: string[]) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let imagesLeft = urls.length;

    if (imagesLeft === 0) {
      setLoaded(true);
      return;
    }

    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = img.onerror = () => {
        imagesLeft--;
        if (imagesLeft === 0) setLoaded(true);
      };
    });
  }, [urls]);

  return loaded;
}
