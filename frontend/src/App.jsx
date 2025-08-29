import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import EventPage from "./pages/EventPage";
import Faqs from "./pages/Faqs";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import Testimonials from "./pages/Testimonials";
import ViewBlogPage from "./pages/ViewBlogPage";

const App = () => {
  return (
    <AppLayout>
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AppLayout>
  );
};

export default App;
