"use client";
import dynamic from "next/dynamic";

const PageBackgroundLoader = dynamic(() => import("./PageBackground"), {
  ssr: false,
});

export default PageBackgroundLoader;
