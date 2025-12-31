"use client";

import { useState } from "react";
import Image from "next/image";
import ClickableCard from "./ClickableCard";

export default function HowItWorksSection() {
  const [selectedCard, setSelectedCard] = useState<number>(0);

  // Map cards to images
  const getImageSrc = () => {
    switch (selectedCard) {
      case 0:
        return "/analysez-les-routes.png";
      case 1:
        return "/detectez-les-zones-a-risque.png";
      case 2:
        return "/recevez-alertes.png";
      default:
        return "/analysez-les-routes.png";
    }
  };

  return (
    <section id="fonctionnalites" className="w-full px-4 py-8 md:py-12 lg:py-16 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-bricolage-grotesque text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-8 md:mb-12 text-center">
          Comment fonctionne SafeRoutes ?
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-2">
          {/* Left side: Phone image */}
          <div className="flex-1 flex flex-col items-center">
            <Image
              src={getImageSrc()}
              alt="SafeRoutes - Application mobile"
              width={300}
              height={450}
              className="w-full max-w-[200px] md:max-w-[250px] h-auto transition-opacity duration-300"
            />
            {/* Pagination dots */}
            <div className="flex gap-2 mt-4 justify-center">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedCard === index
                      ? "bg-black"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right side: Information blocks */}
          <div className="flex-1 flex flex-col gap-4 md:gap-5">
            <ClickableCard 
              delay={0} 
              isSelected={selectedCard === 0}
              onClick={() => setSelectedCard(0)}
            >
              <h3 className="font-bricolage-grotesque text-lg md:text-xl font-bold text-black mb-2">
                Analyse en temps réel
              </h3>
              <p className="font-bricolage-grotesque text-sm md:text-base text-black leading-relaxed">
                SafeRoutes utilise les capteurs du smartphone (géolocalisation, mouvements, variations de vitesse) pour analyser le contexte de déplacement en continu, sans nécessiter de matériel supplémentaire.
              </p>
            </ClickableCard>
            <ClickableCard 
              delay={100} 
              isSelected={selectedCard === 1}
              onClick={() => setSelectedCard(1)}
            >
              <h3 className="font-bricolage-grotesque text-lg md:text-xl font-bold text-black mb-2">
                Détection des zones à risque
              </h3>
              <p className="font-bricolage-grotesque text-sm md:text-base text-black leading-relaxed">
                En croisant ces données avec des informations contextuelles (conditions de circulation, météo, récurrence des incidents), l&apos;application identifie des zones présentant un risque accru pour l&apos;usager.
              </p>
            </ClickableCard>
            <ClickableCard 
              delay={200} 
              isSelected={selectedCard === 2}
              onClick={() => setSelectedCard(2)}
            >
              <h3 className="font-bricolage-grotesque text-lg md:text-xl font-bold text-black mb-2">
                Alertes utiles et discrètes
              </h3>
              <p className="font-bricolage-grotesque text-sm md:text-base text-black leading-relaxed">
                Lorsqu&apos;une zone à risque est détectée, SafeRoutes informe l&apos;usager en amont par des alertes sobres, conçues pour ne jamais détourner l&apos;attention de la route.
              </p>
            </ClickableCard>
          </div>
        </div>
      </div>
    </section>
  );
}
