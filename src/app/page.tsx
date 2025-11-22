import Navbar from "./components/common/navbar";
import Hero from "./components/landing/hero";
import HowItWorks from "./components/landing/how-it-works";
import Features from "./components/landing/features";
import UseCases from "./components/landing/use-cases";
import Testimonials from "./components/landing/testimonials";
import FinalCTA from "./components/landing/final-cta";

export default function Home() {
  return (
        <>
          <div className="flex flex-col min-h-screen">
            
            <div>
              <Navbar />
            </div>
            
            <Hero/>
            
            <HowItWorks />
            
            <Features />
            
            <UseCases />
            
            <Testimonials />
            
            <FinalCTA />

          </div>        
        </>
  );
}
