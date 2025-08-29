import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import OurAdvisors from "@/components/OurAdvisors";
import OurTeamMember from "@/components/OurTeamMember";
import WhyJoin from "@/components/WhyJoin";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";
import EventPage from "./EventPage";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Counter />
      <AboutPage />
      <WhyJoin />
      <OurAdvisors />
      <OurTeamMember />
      <EventPage />
      <BlogPage />
      <ContactPage />
    </>
  );
};

export default HomePage;
