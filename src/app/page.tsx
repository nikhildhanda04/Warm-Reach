import Navbar from "./components/common/navbar";
import Hero from "./components/landing/hero";

export default function Home() {
  return (
        <>
          <div className="flex flex-col gap-36 max-w-9xl">
            
            <div>
              <Navbar />
            </div>
            <div>
              <Hero/>
            </div>

          </div>        
        </>
  );
}
