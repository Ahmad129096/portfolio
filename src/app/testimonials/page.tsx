import dynamic from "next/dynamic";
import { Suspense } from "react";
export default function Testimonials() {
  const TestimonialComponent = dynamic(() => import("./TestimonialComponent"), {
    suspense: true,
  });
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TestimonialComponent />
      </Suspense>
    </div>
  );
}
