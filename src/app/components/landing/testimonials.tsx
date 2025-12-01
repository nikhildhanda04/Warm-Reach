import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I saved 4 hours writing cold emails this week. The AI found connections between my past experience and the JD I would have missed.",
    initials: "SK",
    name: "Sarah K.",
    role: "Product Manager",
    color: "yellow"
  },
  {
    quote: "As a freelancer, I used to spend hours crafting each proposal. Now I generate personalized emails in minutes that actually get responses.",
    initials: "MJ",
    name: "Mike J.",
    role: "Freelance Designer",
    color: "blue"
  },
  {
    quote: "The personalization is incredible. My response rate increased by 3x after switching to Warm Reach. It's a game changer.",
    initials: "AL",
    name: "Alex L.",
    role: "Sales Executive",
    color: "purple"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-zinc-800 font-primary tracking-tight">
          What Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative p-8 bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <Quote className={`absolute top-6 right-6 w-8 h-8 text-${testimonial.color}-100 rotate-180`} />
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 tracking-tighter font-secondary mb-8 text-lg leading-relaxed relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-${testimonial.color}-100 flex items-center justify-center text-${testimonial.color}-700 font-bold font-primary text-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-bold text-zinc-800 font-primary">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

