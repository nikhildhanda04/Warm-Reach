export default function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-zinc-700 font-primary">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-2xl font-bold text-black font-primary mb-2">
              1
            </div>
            <h3 className="text-xl font-semibold text-zinc-700 font-primary">Provide Context</h3>
            <p className="text-gray-600 font-secondary text-sm md:text-base">
              Paste Your Target - Input the Job Description, client brief, or target company profile.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-2xl font-bold text-black font-primary mb-2">
              2
            </div>
            <h3 className="text-xl font-semibold text-zinc-700 font-primary">Share Your Profile</h3>
            <p className="text-gray-600 font-secondary text-sm md:text-base">
              Upload Your Resume/CV - Input your background, skills, and accomplishments.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-2xl font-bold text-black font-primary mb-2">
              3
            </div>
            <h3 className="text-xl font-semibold text-zinc-700 font-primary">Get the Perfect Draft</h3>
            <p className="text-gray-600 font-secondary text-sm md:text-base">
              Generate & Send - Instantly receive a personalized, custom-written email draft ready to copy and send.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

