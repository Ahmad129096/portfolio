"use client";
import dynamic from "next/dynamic";
import { useWebGLEnabled } from "@/lib/webgl";

const PageBackground = dynamic(() => import("./PageBackground"), {
  ssr: false,
});

/**
 * Mounts the WebGL aurora only on wide, hardware-GPU viewports (see
 * `useWebGLEnabled`). On phones and software-rendered environments the
 * three.js chunk is never requested at all; the `body::before` gold glow
 * carries the background instead.
 */
export default function PageBackgroundLoader() {
  const webgl = useWebGLEnabled();
  return webgl ? <PageBackground /> : null;
}
