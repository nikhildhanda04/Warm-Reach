import { Briefcase, TrendingUp, Palette, Handshake } from "lucide-react";

const useCases = [
  {
    icon: Briefcase,
    color: "yellow",
    title: "Job Seekers",
    description: "Instantly tailor cover emails to specific Job Descriptions. Stand out in the inbox."
  },
  {
    icon: TrendingUp,
    color: "blue",
    title: "Sales Pros",
    description: "Craft highly targeted cold emails to prospects. Increase your response rates."
  },
  {
    icon: Palette,
    color: "purple",
    title: "Freelancers",
    description: "Write persuasive outreach emails based on a client's project description."
  },
  {
    icon: Handshake,
    color: "green",
    title: "Networking",
    description: "Draft personalized follow-ups after industry events. Build stronger connections."
  }
];

export default function UseCases() {
  return (
    <section className="py-24 px-4 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 font-primary tracking-tight">
          Who Is This For?
        </h2>
        <p className="text-center text-zinc-400 mb-16 font-secondary text-lg">
          Versatile enough for any professional outreach scenario
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div key={index} className={`group p-8 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:border-${useCase.color}-500/50 hover:bg-zinc-800 transition-all duration-300`}>
              <div className={`w-12 h-12 rounded-xl bg-zinc-700 flex items-center justify-center mb-6 group-hover:bg-${useCase.color}-500/20 group-hover:text-${useCase.color}-500 transition-colors`}>
                <useCase.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-primary">{useCase.title}</h3>
              <p className="text-zinc-400 font-secondary text-sm leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

