"use client";
import { useState } from "react";
import { useIsoLayoutEffect } from "@/lib/motion";

/**
 * True when it is worth mounting one of the WebGL canvases (the page aurora
 * and the hero jewel). Checked once, after hydration, so the server-rendered
 * HTML is identical either way.
 *
 * Two conditions, both short-circuiting before any WebGL work happens:
 *
 * 1. Wide viewport (>= 901px, the same breakpoint HeroScene already uses to
 *    pick its "simple" mode). Phones skip three.js entirely: the chunk is
 *    never even downloaded, which keeps seconds of script evaluation and
 *    continuous rendering out of the main thread during load (this was the
 *    dominant PageSpeed mobile metric), avoids scroll jank on touch devices
 *    and saves battery. The `body::before` gold glow remains as the mobile
 *    background.
 *
 * 2. A hardware GPU. Software rasterizers (SwiftShader, llvmpipe, WARP,
 *    "Microsoft Basic Render Driver"... what headless CI and PageSpeed
 *    Insights run with) execute every fragment on the CPU: the full-viewport
 *    aurora would saturate the main thread there for the entire page load
 *    for no visual gain, since those environments have no GPU to show it on
 *    anyway. Unknown or unavailable renderer strings are treated as
 *    hardware (fail open) so a real GPU is never wrongly excluded.
 */
export function useWebGLEnabled(): boolean {
  const [enabled, setEnabled] = useState(false);

  useIsoLayoutEffect(() => {
    const wide = window.matchMedia("(min-width: 901px)").matches;
    setEnabled(wide && hasHardwareGpu());
  }, []);

  return enabled;
}

function hasHardwareGpu(): boolean {
  try {
    const probe = document.createElement("canvas");
    const gl = (probe.getContext("webgl2") ??
      probe.getContext("webgl")) as WebGLRenderingContext | null;
    if (!gl) return false;

    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    const renderer = debugInfo
      ? String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL))
      : "";

    // Release the throwaway context immediately.
    gl.getExtension("WEBGL_lose_context")?.loseContext();

    if (!renderer) return true;
    return !/swiftshader|llvmpipe|softpipe|software|basic render|warp/i.test(
      renderer
    );
  } catch {
    return true;
  }
}
