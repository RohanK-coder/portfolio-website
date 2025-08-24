import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import OpenSource from "./pages/OpenSource";
import ReachOut from "./pages/ReachOut";
import Education from "./pages/Education";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

export default function App() {
  const location = useLocation();

  // Check if current route is home
  const isHome = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="h-full">
        <ResponsiveAppBar />
      </div>

      {/* Content */}
      <div
        className={
          isHome
            ? "flex-1 overflow-hidden" // no scroll on home
            : "flex-1 overflow-y-auto" // scrollable on other pages
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/reach-out" element={<ReachOut />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </div>
  );
}
