import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConceptPage() {
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <section className="w-full px-4 py-8 md:py-12 lg:py-16 bg-stone-50 flex-grow">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-bricolage-grotesque text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 md:mb-12 text-center">
            Concept
          </h1>
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-12">
            {/* Left side: Text content */}
            <div className="flex-1 flex flex-col">
              <h2 className="font-bricolage-grotesque text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6">
                Un projet inscrit dans une démarche d&apos;innovation en sécurité routière
              </h2>
              <div className="space-y-4 font-bricolage-grotesque text-lg md:text-xl text-black leading-relaxed">
                <p>
                  SafeRoutes s&apos;inscrit dans le cadre du Challenge Innovation Sécurité Routière 2026, un concours national destiné aux étudiants visant à encourager l&apos;émergence de projets innovants contribuant à l&apos;amélioration de la sécurité sur les routes.
                </p>
                <p>
                  Ce challenge met en avant des initiatives capables d&apos;apporter des réponses concrètes, réalistes et responsables aux enjeux actuels de prévention routière. SafeRoutes a été conçu dans cet esprit, avec l&apos;ambition de proposer une solution mobile accessible, évolutive et orientée vers l&apos;anticipation des risques.
                </p>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="rounded-2xl overflow-hidden w-full max-w-md">
                <Image
                  src="/challenge-securite-routiere.jpg"
                  alt="Challenge Innovation Sécurité Routière 2026"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section: Un manque d'anticipation au quotidien */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <h2 className="font-bricolage-grotesque text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 text-left">
              Un manque d&apos;anticipation au quotidien
            </h2>
            <div className="space-y-4 font-bricolage-grotesque text-lg md:text-xl text-black leading-relaxed text-left">
              <p>
                Les outils numériques actuels accompagnent principalement les usagers dans le choix d&apos;un itinéraire ou dans l&apos;optimisation du temps de trajet. En revanche, peu de solutions se concentrent sur l&apos;anticipation fine des dangers à court terme, en tenant compte du contexte réel de déplacement.
              </p>
              <p>
                En conséquence, l&apos;usager découvre souvent le danger tardivement, lorsque la marge de réaction est déjà réduite et que le risque est engagé.
              </p>
            </div>
          </div>

          {/* Section: L'idée derrière SafeRoutes */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <h2 className="font-bricolage-grotesque text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 text-left">
              L&apos;idée derrière SafeRoutes
            </h2>
            <div className="space-y-4 font-bricolage-grotesque text-lg md:text-xl text-black leading-relaxed text-left">
              <p>
                SafeRoutes est né de l&apos;idée que le danger routier peut être mieux perçu avant d&apos;être vécu. Le projet vise à rendre visibles des risques souvent invisibles, en analysant le contexte réel du déplacement plutôt qu&apos;un simple itinéraire.
              </p>
              <p>
                L&apos;application ne cherche pas à remplacer les outils existants, mais à proposer une couche de prévention complémentaire, centrée sur l&apos;anticipation des situations dangereuses et la sécurité des usagers.
              </p>
            </div>
          </div>

          {/* Section: Une application pensée pour la prévention */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <h2 className="font-bricolage-grotesque text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 text-left">
              Une application pensée pour la prévention
            </h2>
            <div className="space-y-4 font-bricolage-grotesque text-lg md:text-xl text-black leading-relaxed text-left">
              <p>
                SafeRoutes est une application mobile de prévention routière qui analyse le contexte de déplacement en temps réel à partir des capteurs du smartphone et de données contextuelles. Cette analyse permet d&apos;identifier des zones à risque récurrentes et d&apos;informer l&apos;usager en amont, de manière volontairement discrète.
              </p>
              <p>
                L&apos;objectif est d&apos;améliorer la perception du risque et d&apos;aider l&apos;usager à adapter son comportement, sans créer de distraction ni de surcharge d&apos;information.
              </p>
            </div>
          </div>

          {/* Section: Une approche inclusive et adaptée aux usagers */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <h2 className="font-bricolage-grotesque text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 text-left">
              Une approche inclusive et adaptée aux usagers
            </h2>
            <div className="space-y-4 font-bricolage-grotesque text-lg md:text-xl text-black leading-relaxed text-left">
              <p>
                SafeRoutes s&apos;adresse à l&apos;ensemble des usagers de la route. L&apos;application prend en compte la diversité des profils et adapte ses alertes en fonction du mode de déplacement et du niveau de vulnérabilité.
              </p>
              <p>
                Cette approche permet de proposer une prévention plus pertinente pour les conducteurs, les deux-roues, les piétons et les personnes à mobilité réduite, en tenant compte des contraintes spécifiques à chaque situation.
              </p>
            </div>
          </div>

          {/* Section: Les principes qui guident le projet */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <h2 className="font-bricolage-grotesque text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 text-left">
              Les principes qui guident le projet
            </h2>
            <div className="space-y-4 font-bricolage-grotesque text-lg md:text-xl text-black leading-relaxed text-left">
              <p>
                SafeRoutes repose sur des principes simples et essentiels : prévenir plutôt que réagir, informer sans distraire et respecter les données personnelles.
              </p>
              <p>
                Les données utilisées par l&apos;application sont anonymisées et exploitées uniquement dans un objectif de prévention routière. Le projet adopte une approche responsable, sobre et transparente, afin de garantir son acceptabilité par les usagers.
              </p>
            </div>
          </div>

          {/* Section: État d'avancement du projet */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <h2 className="font-bricolage-grotesque text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 text-left">
              État d&apos;avancement du projet
            </h2>
            <div className="space-y-4 font-bricolage-grotesque text-lg md:text-xl text-black leading-relaxed text-left">
              <p>
                SafeRoutes est actuellement au stade de prototype de conception, avec une interface et un parcours utilisateur complets réalisés sur Figma.
              </p>
              <p>
                La prochaine étape consiste à développer un prototype technique afin de tester l&apos;application en conditions réelles, d&apos;évaluer la pertinence des alertes et d&apos;engager des partenariats avec des acteurs de la sécurité routière.
              </p>
            </div>
          </div>

          {/* Section: Une approche pragmatique de la prévention */}
          <div className="mt-12 md:mt-16 lg:mt-20">
            <h2 className="font-bricolage-grotesque text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-6 text-left">
              Une approche pragmatique de la prévention
            </h2>
            <div className="space-y-4 font-bricolage-grotesque text-lg md:text-xl text-black leading-relaxed text-left">
              <p>
                SafeRoutes est un projet en cours de développement, porté par la volonté de transformer une idée de prévention en un outil concret, utile et responsable, au service de la sécurité routière.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
