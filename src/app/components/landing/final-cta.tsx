import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-yellow-50 to-yellow-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-zinc-700 font-primary">
          Stop Guessing. Start Converting.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-8 font-secondary max-w-2xl mx-auto">
          Ready to upgrade your outreach? Try the most intelligent email generator today.
        </p>
        <Link 
          href="/generate"
          className="inline-block px-8 py-4 bg-yellow-500 hover:-top-1 active:top-0 active:shadow-[0px_0px_rgba(0,0,0,0)] transition-all duration-100 relative hover:shadow-[0px_5px_1px_rgba(0,0,0,0.9)] text-black font-medium rounded-full text-lg font-primary"
        >
          Start Generating Now
        </Link>
      </div>
    </section>
  );
}

