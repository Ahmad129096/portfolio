import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Kiran M",
    position: "Client",
    message:
      "Did my project with Ahmad. He is friendly, fast, and efficient, and he understood the brief quickly. I’d hire him again without hesitation.",
  },
  {
    image: "/t-avt-2.png",
    name: "Md. Shibly S",
    position: "Client",
    message:
      "10/10 service. He went above and beyond to make sure every requirement was met and delivered comfortably ahead of deadline.",
  },
  {
    image: "/t-avt-3.png",
    name: "Aight619",
    position: "Client",
    message:
      "Very good. He delivered exactly what I wanted in a short time and stayed responsive throughout the process.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonialData.map((person) => (
        <div
          key={person.name}
          className="glass-card flex flex-col p-6 text-left"
        >
          <FaQuoteLeft className="mb-4 text-2xl text-muted/60" />
          <p className="mb-4 flex-1 text-sm text-muted">
            {person.message}
          </p>
          <div className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/30 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-accent">
            {person.position} review
          </div>
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-full border border-overlay/10">
              <Image
                alt={person.name}
                src={person.image}
                width={44}
                height={44}
                className="h-11 w-11 object-cover"
              />
            </div>
            <div className="text-sm font-semibold text-text">
              {person.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
