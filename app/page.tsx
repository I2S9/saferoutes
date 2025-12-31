import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="w-full px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Left side: Logo and text */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start gap-4">
                <Image
                  src="/saferoute-logo.png"
                  alt="SafeRoutes Logo"
                  width={120}
                  height={120}
                  className="rounded-2xl"
                  priority
                />
                <div className="flex flex-col items-center md:items-start gap-2">
                  <h1 className="font-bricolage-grotesque text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                    SafeRoutes
                  </h1>
                  <p className="font-inter text-lg md:text-xl text-gray-700 text-center md:text-left">
                    Prévoir le danger avant qu'il n'existe.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Phones image - much smaller */}
            <div className="flex-1 flex justify-center md:justify-end">
              <Image
                src="/iphones-demo-saferoutes.png"
                alt="SafeRoutes - Démonstration de l'application mobile"
                width={400}
                height={600}
                className="w-full max-w-[300px] md:max-w-[400px] h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
