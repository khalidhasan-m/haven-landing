import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let lenis;
    let refreshFrame;

    const updateScrollTrigger = () => ScrollTrigger.update();
    const updateLenis = (time) => lenis?.raf(time * 1000);

    const stop = () => {
      cancelAnimationFrame(refreshFrame);
      gsap.ticker.remove(updateLenis);

      if (lenis) {
        lenis.off('scroll', updateScrollTrigger);
        lenis.destroy();
        lenis = undefined;
      }
    };

    const start = () => {
      if (reducedMotion.matches || lenis) return;

      lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        anchors: true,
      });

      lenis.on('scroll', updateScrollTrigger);
      gsap.ticker.add(updateLenis);
      gsap.ticker.lagSmoothing(0);
      refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const handleMotionPreference = () => {
      stop();
      start();
    };

    start();
    reducedMotion.addEventListener('change', handleMotionPreference);

    return () => {
      reducedMotion.removeEventListener('change', handleMotionPreference);
      stop();
    };
  }, []);

  return null;
}
