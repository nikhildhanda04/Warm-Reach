export default function Features(){
    return(
        <>
        <div className="flex flex-col sm:flex-row gap-8 mt-32 justify-between text-center w-full items-center px-4 sm:px-12 md:px-40 lg:px-56">
            
            <div className="flex flex-col items-center gap-4 z-99">
                <div>
                    <Pen className="size-6 md:size-7 lg:size-10 text-pink-500"/>
                </div>
                <div className="font-secondary text-gray-700 text-balance tracking-tight text-xs md:text-sm ">
                    rewrite any email in a manner that gets replies, in just one click.
                </div>
            </div>

            <div className="flex flex-col items-center gap-4 z-99">
                <div>
                    <Ai className="size-6 md:size-7 lg:size-10 text-pink-500"/>
                </div>
                <div className="font-secondary text-gray-700 text-balance tracking-tight text-xs md:text-sm  ">
                    use our latest AI to write the best cold email for you, tailored to your needs.

                </div>
            </div>

            <div className="flex flex-col items-center gap-4 z-99">
                <div>
                    <Rating className="size-6 md:size-7 lg:size-10 text-pink-500"/>
                </div>
                <div className="font-secondary text-gray-700 text-balance tracking-tight text-xs md:text-sm ">
                    check the rating of your email before sending it out, and improve it if needed.
                </div>
            </div>
            
        </div>
        </>
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