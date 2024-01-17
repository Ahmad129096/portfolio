import dynamic from "next/dynamic";
import { Suspense } from "react";
export default function Work() {
  const WorkComponent = dynamic(() => import("./WorkComponent"), {
    suspense: true,
  });
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <WorkComponent />
      </Suspense>
    </div>
  );
}
