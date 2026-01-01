import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <section className="w-full px-4 py-8 md:py-12 lg:py-16 bg-stone-50 flex-grow">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-bricolage-grotesque text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 text-center">
            Concept
          </h1>
        </div>
      </section>
      <Footer />
    </main>
  );
}
