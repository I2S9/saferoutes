export default function Footer() {
  return (
    <footer className="w-full mt-auto">
      <div 
        className="rounded-t-[4rem] px-6 py-8 md:px-8 md:py-12 w-full bg-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Navigation */}
            <div>
              <h3 className="font-bricolage-grotesque text-white text-xl font-bold mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#concept" className="font-bricolage-grotesque text-white text-base hover:text-green-100 transition-colors">
                    Concept
                  </a>
                </li>
                <li>
                  <a href="#fonctionnalites" className="font-bricolage-grotesque text-white text-base hover:text-green-100 transition-colors">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#demo" className="font-bricolage-grotesque text-white text-base hover:text-green-100 transition-colors">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#contact" className="font-bricolage-grotesque text-white text-base hover:text-green-100 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* À propos */}
            <div>
              <h3 className="font-bricolage-grotesque text-white text-xl font-bold mb-4">
                À propos
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#qui-sommes-nous" className="font-bricolage-grotesque text-white text-base hover:text-green-100 transition-colors">
                    Qui sommes-nous
                  </a>
                </li>
                <li>
                  <a href="#partenaires" className="font-bricolage-grotesque text-white text-base hover:text-green-100 transition-colors">
                    Partenaires
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="font-bricolage-grotesque text-white text-base hover:text-green-100 transition-colors">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="#confidentialite" className="font-bricolage-grotesque text-white text-base hover:text-green-100 transition-colors">
                    Confidentialité
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bricolage-grotesque text-white text-xl font-bold mb-4">
                Contact
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:contact@saferoutes.fr" className="font-bricolage-grotesque text-white text-base hover:text-green-100 transition-colors">
                    contact@saferoutes.fr
                  </a>
                </li>
                <li>
                  <p className="font-bricolage-grotesque text-white text-base">
                    Projet en développement
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Slogan et copyright */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="font-bricolage-grotesque text-white text-base md:text-lg mb-2">
              SafeRoutes - Prévoir le danger avant qu&apos;il n&apos;existe.
            </p>
            <p className="font-bricolage-grotesque text-white text-sm opacity-90">
              © {new Date().getFullYear()} SafeRoutes. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
