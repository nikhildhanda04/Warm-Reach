export default function UseCases() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-zinc-700 font-primary">
          Who Is This For?
        </h2>
        <p className="text-center text-gray-600 mb-16 font-secondary text-lg">
          Versatile enough for any professional outreach scenario
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 transition-colors bg-gray-50">
            <div className="text-3xl mb-3">💼</div>
            <h3 className="text-xl font-semibold text-zinc-700 font-primary mb-2">Job Seekers</h3>
            <p className="text-gray-600 font-secondary text-sm">
              Instantly tailor cover emails to specific Job Descriptions.
            </p>
          </div>

          <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 transition-colors bg-gray-50">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="text-xl font-semibold text-zinc-700 font-primary mb-2">Sales Professionals</h3>
            <p className="text-gray-600 font-secondary text-sm">
              Craft highly targeted cold emails to prospects.
            </p>
          </div>

          <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 transition-colors bg-gray-50">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-xl font-semibold text-zinc-700 font-primary mb-2">Freelancers</h3>
            <p className="text-gray-600 font-secondary text-sm">
              Write persuasive outreach emails based on a client&apos;s project description.
            </p>
          </div>

          <div className="p-6 border-2 border-gray-200 rounded-lg hover:border-yellow-500 transition-colors bg-gray-50">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-xl font-semibold text-zinc-700 font-primary mb-2">Networking</h3>
            <p className="text-gray-600 font-secondary text-sm">
              Draft personalized follow-ups after industry events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

