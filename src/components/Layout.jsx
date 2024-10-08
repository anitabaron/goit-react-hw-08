import { Suspense } from "react";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<p>loading fallback...</p>}>{children}</Suspense>
    </div>
  );
}
