export default function Navbar() {
    return(
        <>
        <div className="flex flex-row w-full justify-between tracking-tight px-24 py-6">

            <div className="flex flex-row gap-4">
                <div>
                    
                </div>
                <div className="font-logo tracking-tigher text-2xl">
                    warm reach
                </div>
            </div>

            <div className="flex flex-row gap-8 text-base font-secondary">

                <div className="px-6 py-2 border border-dark hover:-top-1 active:top-0 active:shadow-[0px_0px_rgba(0,0,0,0)] transtion-all duration-100 relative hover:shadow-[0px_5px_1px_rgba(0,0,0,0.9)] dark:border-light font-medium rounded-full">
                    Log in
                </div>
                <div className="px-6 py-2 bg-primary/[0.9] hover:-top-1 active:top-0 active:shadow-[0px_0px_rgba(0,0,0,0)] transtion-all duration-100 relative hover:shadow-[0px_5px_1px_rgba(0,0,0,0.9)]  text-light font-medium rounded-full">
                    Register
                </div>

            </div>

        </div>
        </>
    )
}