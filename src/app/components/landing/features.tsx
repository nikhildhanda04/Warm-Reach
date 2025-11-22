export default function Features(){
    return(
        <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-zinc-700 font-primary">
                    Why Choose Warm Reach?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center gap-4 p-6 rounded-lg hover:bg-white transition-colors">
                        <div>
                            <Lightning className="size-8 md:size-10 text-yellow-500"/>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-700 font-primary">⚡️ Lightning Fast</h3>
                        <p className="font-secondary text-gray-600 text-balance tracking-tight text-sm md:text-base">
                            Draft perfect emails in seconds, not hours.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4 p-6 rounded-lg hover:bg-white transition-colors">
                        <div>
                            <Target className="size-8 md:size-10 text-yellow-500"/>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-700 font-primary">🎯 Hyper-Personalization</h3>
                        <p className="font-secondary text-gray-600 text-balance tracking-tight text-sm md:text-base">
                            Our AI cross-references your skills with the target context, ensuring maximum relevance.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4 p-6 rounded-lg hover:bg-white transition-colors">
                        <div>
                            <Tone className="size-8 md:size-10 text-yellow-500"/>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-700 font-primary">✍️ Control the Tone</h3>
                        <p className="font-secondary text-gray-600 text-balance tracking-tight text-sm md:text-base">
                            Choose from various tones (Formal, Enthusiastic, Direct) to fit the situation.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center gap-4 p-6 rounded-lg hover:bg-white transition-colors">
                        <div>
                            <History className="size-8 md:size-10 text-yellow-500"/>
                        </div>
                        <h3 className="text-lg font-semibold text-zinc-700 font-primary">💾 Built-in History</h3>
                        <p className="font-secondary text-gray-600 text-balance tracking-tight text-sm md:text-base">
                            Never lose a great email—access and reuse previous drafts anytime.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
const Pen = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`icon icon-tabler icons-tabler-outline icon-tabler-writing ${props.className ?? ""}`}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
            <path d="M16 7h4" />
            <path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" />
        </svg>
    )
}

const Ai = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`icon icon-tabler icons-tabler-outline icon-tabler-robot-face ${props.className ?? ""}`}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" />
        <path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1" />
        <path d="M9 7l-1 -4" />
        <path d="M15 7l1 -4" />
        <path d="M9 12v-1" />
        <path d="M15 12v-1" />
    </svg>
);

const Rating = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`icon icon-tabler icons-tabler-outline icon-tabler-comet ${props.className ?? ""}`}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M15.5 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
        <path d="M4 4l7 7" />
        <path d="M9 4l3.5 3.5" />
        <path d="M4 9l3.5 3.5" />
    </svg>
);

const Lightning = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`icon icon-tabler icons-tabler-outline icon-tabler-bolt ${props.className ?? ""}`}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11z" />
    </svg>
);

const Target = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`icon icon-tabler icons-tabler-outline icon-tabler-target ${props.className ?? ""}`}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
);

const Tone = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`icon icon-tabler icons-tabler-outline icon-tabler-adjustments ${props.className ?? ""}`}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M6 4v4" />
        <path d="M6 12v8" />
        <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M12 4v10" />
        <path d="M12 18v2" />
        <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M18 4v1" />
        <path d="M18 9v11" />
    </svg>
);

const History = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`icon icon-tabler icons-tabler-outline icon-tabler-history ${props.className ?? ""}`}
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 8l0 4l2 2" />
        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
    </svg>
);
