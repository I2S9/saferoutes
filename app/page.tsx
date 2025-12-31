import Image from "next/image";
import Navbar from "@/components/Navbar";
import ScrollCard from "@/components/ScrollCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col">
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
                    Prévoir le danger avant qu&apos;il n&apos;existe.
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
      <section className="w-full px-4 py-8 md:py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bricolage-grotesque text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 md:mb-8 text-center">
            Pourquoi SafeRoutes est nécessaire aujourd&apos;hui
          </h2>
          <p className="font-bricolage-grotesque text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed text-center mb-8">
            Chaque année, une grande partie des accidents de la route survient sur des portions déjà connues pour leur dangerosité : virages mal négociés, chaussées dégradées, zones urbaines complexes ou conditions météorologiques défavorables. Pourtant, ces risques restent souvent invisibles pour l&apos;usager jusqu&apos;au moment critique. SafeRoutes a été pensé pour combler ce manque, en rendant le danger perceptible avant qu&apos;il ne survienne.
          </p>
          <div className="max-w-2xl mx-auto mt-8">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/accident.jpg"
                alt="Accident de la route"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-8 md:py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bricolage-grotesque text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12 text-center">
            Comment fonctionne SafeRoutes ?
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Left side: Phone image */}
            <div className="flex-1 flex justify-center md:justify-start">
              <Image
                src="/iphones-demo-saferoutes.png"
                alt="SafeRoutes - Application mobile"
                width={400}
                height={600}
                className="w-full max-w-[300px] md:max-w-[350px] h-auto"
              />
            </div>

            {/* Right side: Information blocks */}
            <div className="flex-1 flex flex-col gap-6 md:gap-8">
              <ScrollCard delay={0}>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-300">
                  <h3 className="font-bricolage-grotesque text-xl md:text-2xl font-bold text-black mb-3">
                    Analyse en temps réel
                  </h3>
                  <p className="font-bricolage-grotesque text-base md:text-lg text-black leading-relaxed">
                    SafeRoutes utilise les capteurs du smartphone (géolocalisation, mouvements, variations de vitesse) pour analyser le contexte de déplacement en continu, sans nécessiter de matériel supplémentaire.
                  </p>
                </div>
              </ScrollCard>
              <ScrollCard delay={100}>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-300">
                  <h3 className="font-bricolage-grotesque text-xl md:text-2xl font-bold text-black mb-3">
                    Détection des zones à risque
                  </h3>
                  <p className="font-bricolage-grotesque text-base md:text-lg text-black leading-relaxed">
                    En croisant ces données avec des informations contextuelles (conditions de circulation, météo, récurrence des incidents), l&apos;application identifie des zones présentant un risque accru pour l&apos;usager.
                  </p>
                </div>
              </ScrollCard>
              <ScrollCard delay={200}>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-300">
                  <h3 className="font-bricolage-grotesque text-xl md:text-2xl font-bold text-black mb-3">
                    Alertes utiles et discrètes
                  </h3>
                  <p className="font-bricolage-grotesque text-base md:text-lg text-black leading-relaxed">
                    Lorsqu&apos;une zone à risque est détectée, SafeRoutes informe l&apos;usager en amont par des alertes sobres, conçues pour ne jamais détourner l&apos;attention de la route.
                  </p>
                </div>
              </ScrollCard>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-8 md:py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bricolage-grotesque text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 md:mb-8 text-center">
            Une prévention adaptée à chaque usager
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 md:space-y-6 mb-8">
              <li className="font-bricolage-grotesque text-lg md:text-xl text-black">
                <strong className="font-bold">Conducteurs :</strong> anticipation des zones accidentogènes et amélioration de la perception du risque
              </li>
              <li className="font-bricolage-grotesque text-lg md:text-xl text-black">
                <strong className="font-bold">Deux-roues :</strong> prise en compte des chaussées dégradées et des conditions de faible adhérence
              </li>
              <li className="font-bricolage-grotesque text-lg md:text-xl text-black">
                <strong className="font-bold">Piétons et personnes à mobilité réduite :</strong> vigilance accrue dans les zones complexes ou peu visibles
              </li>
              <li className="font-bricolage-grotesque text-lg md:text-xl text-black">
                <strong className="font-bold">Jeunes conducteurs :</strong> accompagnement pédagogique et non culpabilisant
              </li>
            </ul>
            <p className="font-bricolage-grotesque text-lg md:text-xl text-black text-center leading-relaxed">
              SafeRoutes adapte ses alertes et ses seuils de vigilance en fonction du profil, afin de proposer une prévention pertinente et personnalisée.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-4 py-8 md:py-12 lg:py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-bricolage-grotesque text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12 text-center">
            Les engagements de SafeRoutes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto items-stretch">
            <ScrollCard delay={0}>
              <div className="rounded-lg p-6 md:p-8 transition-transform duration-300 hover:scale-105 h-full flex flex-col" style={{ backgroundColor: "#78D05F" }}>
                <h3 className="font-bricolage-grotesque text-xl md:text-2xl font-bold text-white mb-4">
                  Prévention avant tout
                </h3>
                <p className="font-bricolage-grotesque text-base md:text-lg text-white leading-relaxed flex-grow">
                  L&apos;objectif n&apos;est pas de surveiller ou sanctionner, mais d&apos;anticiper et de prévenir.
                </p>
              </div>
            </ScrollCard>
            <ScrollCard delay={100}>
              <div className="rounded-lg p-6 md:p-8 transition-transform duration-300 hover:scale-105 h-full flex flex-col" style={{ backgroundColor: "#78D05F" }}>
                <h3 className="font-bricolage-grotesque text-xl md:text-2xl font-bold text-white mb-4">
                  Sobriété et non-distraction
                </h3>
                <p className="font-bricolage-grotesque text-base md:text-lg text-white leading-relaxed flex-grow">
                  Les alertes sont conçues pour être rares, utiles et discrètes.
                </p>
              </div>
            </ScrollCard>
            <ScrollCard delay={200}>
              <div className="rounded-lg p-6 md:p-8 transition-transform duration-300 hover:scale-105 h-full flex flex-col" style={{ backgroundColor: "#78D05F" }}>
                <h3 className="font-bricolage-grotesque text-xl md:text-2xl font-bold text-white mb-4">
                  Accessibilité
                </h3>
                <p className="font-bricolage-grotesque text-base md:text-lg text-white leading-relaxed flex-grow">
                  Une solution utilisable par tous, sans véhicule spécifique ni équipement supplémentaire.
                </p>
              </div>
            </ScrollCard>
            <ScrollCard delay={300}>
              <div className="rounded-lg p-6 md:p-8 transition-transform duration-300 hover:scale-105 h-full flex flex-col" style={{ backgroundColor: "#78D05F" }}>
                <h3 className="font-bricolage-grotesque text-xl md:text-2xl font-bold text-white mb-4">
                  Respect des données personnelles
                </h3>
                <p className="font-bricolage-grotesque text-base md:text-lg text-white leading-relaxed flex-grow">
                  Les données sont anonymisées, minimisées et utilisées uniquement à des fins de prévention.
                </p>
              </div>
            </ScrollCard>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
