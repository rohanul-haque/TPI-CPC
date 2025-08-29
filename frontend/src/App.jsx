import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import EventPage from "./pages/EventPage";
import Faqs from "./pages/Faqs";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import TeamPage from "./pages/TeamPage";
import Testimonials from "./pages/Testimonials";
import ViewBlogPage from "./pages/ViewBlogPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AppLayout>
      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 w-10 h-10 bg-indigo-500 shadow-lg rounded-md flex items-center justify-center hover:bg-indigo-600"
          aria-label="Scroll to top"
        >
          <ChevronUp className="text-white" />
        </button>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/teams" element={<TeamPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<ViewBlogPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={< SignupPage/>} />
        <Route path="/login" element={< LoginPage/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
