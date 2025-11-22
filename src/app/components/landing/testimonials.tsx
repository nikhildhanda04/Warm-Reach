export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-zinc-700 font-primary">
          What Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-700 font-secondary mb-4 italic">
              &quot;I saved 4 hours writing cold emails this week. The AI found connections between my past experience and the JD I would have missed.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold font-primary">
                SK
              </div>
              <div>
                <p className="font-semibold text-zinc-700 font-primary">Sarah K.</p>
                <p className="text-sm text-gray-500 font-secondary">Product Manager</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-700 font-secondary mb-4 italic">
              &quot;As a freelancer, I used to spend hours crafting each proposal. Now I generate personalized emails in minutes that actually get responses.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold font-primary">
                MJ
              </div>
              <div>
                <p className="font-semibold text-zinc-700 font-primary">Mike J.</p>
                <p className="text-sm text-gray-500 font-secondary">Freelance Designer</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg border-2 border-gray-200 shadow-sm">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 text-yellow-500" />
              ))}
            </div>
            <p className="text-gray-700 font-secondary mb-4 italic">
              &quot;The personalization is incredible. My response rate increased by 3x after switching to Warm Reach.&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold font-primary">
                AL
              </div>
              <div>
                <p className="font-semibold text-zinc-700 font-primary">Alex L.</p>
                <p className="text-sm text-gray-500 font-secondary">Sales Executive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`icon icon-tabler icons-tabler-filled icon-tabler-star ${props.className ?? ""}`}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.09 -.085a1 1 0 0 0 -.121 -1.623l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
  </svg>
);

