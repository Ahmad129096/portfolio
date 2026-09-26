"use client";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

/**
 * Re-renders a `frameloop="demand"` canvas on a fixed cadence. Rendering
 * every rAF frame kept the main thread saturated under CPU throttling (33 s
 * of the 39 s main-thread time was unclassified "other", all from this
 * loop); 30 fps is invisible for slow-moving scenes and halves that cost,
 * which matters most on phones where the canvas shares the main thread
 * with scrolling.
 */
const FrameThrottle = ({ fps }: { fps: number }) => {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    const id = window.setInterval(() => invalidate(), 1000 / fps);
    return () => window.clearInterval(id);
  }, [invalidate, fps]);

  return null;
};

export default FrameThrottle;
