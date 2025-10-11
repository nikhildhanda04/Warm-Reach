import { cn } from "@/lib/utils";
import Features from "./features";

export default function Hero(){
  return(
    <>
    
      <div className="flex flex-row tracking-tight w-full  text-center justify-center overflow-hidden bg-gradient-to-b from-gray-50 pt-20 max-h-screen to-white ">
        <Mail className="absolute size-190 -right-50 -top-40 -rotate-125 overflow-hidden text-neutral-400/[0.2]"/>
        <Mailbox className="absolute size-140 -left-30 top-90 rotate-30 overflow-hidden text-neutral-400/[0.2]"/>
        <div 
          className="absolute top-[-20%] right-[40%] w-[200px] h-[140%] opacity-100 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(229, 231, 235, 0) 0%, rgba(229, 231, 235, 0.6) 10%, rgba(229, 231, 235, 0.6) 20%, rgba(229, 231, 235, 0.4) 90%, rgba(229, 231, 235, 0) 100%)',
            transform: 'rotate(-45deg)'
          }}
        />
        <BackgroundGrids />
        <div className="flex flex-col gap-6 max-w-6xl relative z-10">
          <h1 className="text-4xl sm:text-5xl text-shadow-lg md:text-6xl lg:text-7xl text-zinc-700 font-primary font-bold tracking-tight leading-tight">
            Converting cold mails <br /> to <span className="text-black underline decoration-4 md:decoration-7 underline-offset-3 font-logo font-extrabold decoration-yellow-400">warm letters</span>.
          </h1>
          <p className="font-secondary text-balance text-gray-800 text-xs sm:text-sm md:text-md max-w-3xl px-4">
            We help you convert your emails, from ones which will never have any effect on <br className="hidden md:block" />the people to ones that leave a huge impact and helps you confirm your job title.
          </p>
        </div>
      </div>

      <div>
        <Features/>
      </div>

    </>
  )
}

const BackgroundGrids = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 grid h-screen w-full -rotate-45 transform select-none grid-cols-2 gap-10 md:grid-cols-4">
      <div className="relative h-screen w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
      <div className="relative h-full w-full">
        <GridLineVertical className="left-0" />
        <GridLineVertical className="left-auto right-0" />
      </div>
    </div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px", 
          "--color-dark": "rgba(255, 255, 255, 0.3)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "",
        className
      )}
    ></div>
  );
};

const Mail = (props: React.SVGProps<SVGSVGElement>) => {

  return(
    <svg {...props} 
    xmlns="http://www.w3.org/2000/svg"  
    width="24"  
    height="24"  
    viewBox="0 0 24 24"  
    fill="currentColor"  
    className={`icon icon-tabler icons-tabler-filled icon-tabler-mail ${props.className ?? ""}`}
    >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
    <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
    </svg>
  )
}

const Mailbox = (props: React.SVGProps<SVGSVGElement>) => {
  return (
        <svg  {...props}
        xmlns="http://www.w3.org/2000/svg"  
        width="24"  
        height="24"  
        viewBox="0 0 24 24"  
        fill="none"  
        stroke="currentColor"  
        stroke-width="2"  
        stroke-linecap="round"  
        stroke-linejoin="round"  
          className={`icon icon-tabler icons-tabler-filled icon-tabler-mail ${props.className ?? ""}`}
    >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
    <path d="M12 11v-8h4l2 2l-2 2h-4" />
    <path d="M6 15h1" />
    </svg>
  )
}
