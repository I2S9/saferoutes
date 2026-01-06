import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <section className="w-full px-4 py-8 md:py-12 lg:py-16 bg-stone-50 flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-bricolage-grotesque text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8">
            Demo
          </h1>
          <p className="font-bricolage-grotesque text-xl md:text-2xl lg:text-3xl text-black">
            Bientôt disponible!
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
