import { ourTeams } from "@/assets/assets";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionTitle from "./SectionTitle";

const OurTeamMember = () => {
  return (
    <section className="mt-20">
      <SectionTitle
        title={"Meet Our Team Members 👥✨"}
        paragraph={`Meet our talented team 🤝. Each member brings passion, creativity 🎨, and dedication 🚀. Together, we learn, collaborate, and create amazing things 🌟!`}
      />
      <Carousel
        className="w-full mt-10"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {ourTeams.map((team) => (
            <CarouselItem
              key={team.id}
              className="pl-6  md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex flex-col items-center p-6 rounded-2xl text-center border border-gray-400/50 dark:border-gray-500/50 backdrop-blur-sm">
                <img
                  className="w-28 h-28 object-cover rounded-full border-4 border-blue-500 shadow-md mb-4"
                  src={team.image}
                  alt={team.name}
                />
                {/* Name + Role */}
                <h1 className="text-lg font-semibold uppercase">
                  {team.name}.
                </h1>
                <span>{team.role}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={"hidden lg:flex"} />
        <CarouselNext className={"hidden lg:flex"} />
      </Carousel>
    </section>
  );
};

export default OurTeamMember;
