import { useEffect, useRef, useState, useCallback } from "react";

export function useAutoScroll(speed = 25) {
  const animationRef = useRef(null);
  const lastTimeRef = useRef(null);
  const playingRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);

  const stopScroll = useCallback(() => {
    playingRef.current = false;

    cancelAnimationFrame(animationRef.current);
    animationRef.current = null;
    lastTimeRef.current = null;

    setIsPlaying(false);
  }, []);

  const animate = useCallback(
    (time) => {
      if (!playingRef.current) return;

      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const nextPosition = Math.min(window.scrollY + speed * delta, maxScroll);

      window.scrollTo(0, nextPosition);

      if (nextPosition < maxScroll) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        stopScroll();
      }
    },
    [speed, stopScroll],
  );

  const startScroll = useCallback(() => {
    if (playingRef.current) return;

    playingRef.current = true;
    lastTimeRef.current = null;

    setIsPlaying(true);

    animationRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const toggleScroll = useCallback(() => {
    if (playingRef.current) {
      stopScroll();
    } else {
      startScroll();
    }
  }, [startScroll, stopScroll]);

  useEffect(() => {
    return () => {
      playingRef.current = false;
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return {
    startScroll,
    stopScroll,
    toggleScroll,
    isPlaying,
  };
}
