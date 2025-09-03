import { Suspense, lazy } from "react";
import LoadingSpinner from "./Components/LoadingSpinner";

// Lazy load heavy components with progressive loading
const ThreeBackground = lazy(() => import("./Components/ThreeBackground"));
const NavBar = lazy(() => import("./Components/NavBar"));
const HeroSection = lazy(() => import("./Components/HeroSection"));

// Group related sections together for better chunking
const MainContent = lazy(() => import("./Components/MainContent"));
const ContactAndFooter = lazy(() => import("./Components/ContactAndFooter"));

function App() {
  return (
    <>
      {/* Critical above-the-fold content */}
      <Suspense fallback={<LoadingSpinner />}>
        <ThreeBackground />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <NavBar />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <HeroSection />
      </Suspense>

      {/* Main content sections */}
      <Suspense fallback={<LoadingSpinner />}>
        <MainContent />
      </Suspense>

      {/* Contact and footer */}
      <Suspense fallback={<LoadingSpinner />}>
        <ContactAndFooter />
      </Suspense>
    </>
  );
}

export default App;
