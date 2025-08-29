import { ourAdvisors } from "@/assets/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionTitle from "./SectionTitle";

const OurAdvisors = () => {
  return (
    <section className="mt-20">
      <SectionTitle
        title={"Meet Our Advisors 🌟🧑‍💼"}
        paragraph={`Learn from experienced mentors 💡 who guide you every step. Gain knowledge 📚, inspiration ✨, and support 🚀 to grow your skills and career.`}
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
          {ourAdvisors.map((advisor) => (
            <CarouselItem
              key={advisor.id}
              className="pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex flex-col items-center p-6 rounded-2xl text-center border border-gray-400/50 dark:border-gray-500/50 backdrop-blur-sm">
                <img
                  className="w-28 h-28 object-cover rounded-full border-4 border-blue-500 shadow-md mb-4"
                  src={advisor.image}
                  alt={advisor.name}
                />
                {/* Name + Role */}
                <h1 className="text-lg font-semibold uppercase">
                  {advisor.name}.
                </h1>
                <span>{advisor.role}</span>
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

export default OurAdvisors;
