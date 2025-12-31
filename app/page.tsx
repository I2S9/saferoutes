import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      <section className="w-full px-4 py-8 md:py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12 lg:gap-16">
            {/* Left side: Logo and text */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start gap-4">
                <Image
                  src="/saferoute-logo.png"
                  alt="SafeRoutes Logo"
                  width={180}
                  height={180}
                  className="rounded-2xl"
                  priority
                />
                <div className="flex flex-col items-center md:items-start gap-2">
                  <h1 className="font-bricolage-grotesque text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                    SafeRoutes
                  </h1>
                  <p className="font-bricolage-grotesque text-lg md:text-xl text-black">
                    Prévoir le danger avant qu'il n'existe.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Phones image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <Image
                src="/iphones-demo-saferoutes.png"
                alt="SafeRoutes - Démonstration de l'application mobile"
                width={500}
                height={700}
                className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
