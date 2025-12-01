import { FileText, User, Send } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Provide Context",
    description: "Paste the job description, client brief, or company profile you want to target."
  },
  {
    icon: User,
    title: "Share Your Profile",
    description: "Upload your resume or input your background, skills, and key accomplishments."
  },
  {
    icon: Send,
    title: "Get the Perfect Draft",
    description: "Instantly receive a personalized, custom-written email ready to copy and send."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-zinc-800 font-primary tracking-tight">
          How It Works
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-zinc-300 to-transparent border-t-2 border-dashed border-zinc-300 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center gap-6 group">
              <div className="w-24 h-24 rounded-3xl bg-white shadow-lg border border-zinc-100 flex items-center justify-center text-yellow-500 group-hover:-translate-y-2 transition-transform duration-300">
                <step.icon className={`w-10 h-10 ${index === 2 ? "ml-1" : ""}`} />
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 text-white font-bold text-sm mb-2">{index + 1}</div>
                <h3 className="text-xl font-bold text-zinc-800 font-primary">{step.title}</h3>
                <p className="text-gray-600 font-secondary text-sm md:text-base leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
