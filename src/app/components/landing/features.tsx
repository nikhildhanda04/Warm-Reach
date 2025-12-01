import { Zap, Target, Sliders, History } from "lucide-react";

const features = [
    {
        icon: Zap,
        color: "yellow",
        title: "Lightning Fast",
        description: "Draft perfect emails in seconds, not hours. Save time for what matters."
    },
    {
        icon: Target,
        color: "blue",
        title: "Hyper-Personalization",
        description: "AI cross-references your skills with the target context for maximum relevance."
    },
    {
        icon: Sliders,
        color: "purple",
        title: "Control the Tone",
        description: "Choose from various tones (Formal, Enthusiastic, Direct) to fit any situation."
    },
    {
        icon: History,
        color: "green",
        title: "Built-in History",
        description: "Never lose a great email. Access and reuse your previous drafts anytime."
    }
];

export default function Features() {
    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-zinc-800 font-primary tracking-tight">
                    Why Choose Warm Reach?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                            <div className={`p-4 rounded-full bg-${feature.color}-100/50 text-${feature.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-800 font-primary">{feature.title}</h3>
                            <p className="font-secondary text-gray-600 text-sm md:text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
