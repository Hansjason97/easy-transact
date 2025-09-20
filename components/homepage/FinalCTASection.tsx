"use client";
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../imageWithFallBack";
import { AnimatedElement } from "../animatedElement";

interface FinalCTASectionProps {
  onNavigate?: (page: string) => void;
}

export function FinalCTASection({ onNavigate }: FinalCTASectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <AnimatedElement animation="fadeIn" delay={0.1}>
                <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Rejoignez notre réseau
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slideLeft" delay={0.2}>
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Prêt à intégrer
                  <span className="block text-transparent bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text">
                    l'API Gpay ?
                  </span>
                </h2>
              </AnimatedElement>

              <AnimatedElement animation="slideLeft" delay={0.4}>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Rejoignez plus de 100 institutions financières qui font déjà
                  confiance à l'API Gpay pour leurs solutions de paiement
                  digital.
                </p>
              </AnimatedElement>
            </div>

            {/* Benefits list */}
            <div className="space-y-4">
              {[
                "Intégration API en moins de 30 minutes",
                "Documentation complète et exemples",
                "Support technique 24/7 en français",
                "Sandbox pour tester vos intégrations",
              ].map((benefit, index) => (
                <AnimatedElement
                  key={index}
                  animation="slideLeft"
                  delay={0.6 + index * 0.1}
                >
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">{benefit}</span>
                  </div>
                </AnimatedElement>
              ))}
            </div>

            {/* CTA Buttons */}
            <AnimatedElement animation="slideLeft" delay={1.0}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => onNavigate?.("api-docs")}
                  className="!bg-gradient-to-r !from-orange-500 !to-orange-600 hover:!from-orange-600 hover:!to-orange-700 !text-white !border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl group"
                >
                  Intégrer l'API Gpay
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate?.("contact")}
                  className="!border-2 !border-white/30 !text-white !bg-white/10 hover:!bg-white hover:!text-gray-900 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-2xl"
                >
                  Contacter Support
                </Button>
              </div>
            </AnimatedElement>

            {/* Trust indicators */}
            <AnimatedElement animation="slideLeft" delay={1.2}>
              <div className="flex items-center space-x-8 pt-6 text-blue-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-sm">Note client</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-sm">Partenaires</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-sm">Disponibilité</div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Right image */}
          <div className="relative lg:pl-8">
            <AnimatedElement animation="slideRight" delay={0.3}>
              <div className="relative">
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-blue-500/30 rounded-3xl blur-2xl"></div>

                <ImageWithFallback
                  src={"Entrepreneur_africain.png"}
                  alt="Entrepreneur africain avec smartphone - Agent Gpay potentiel"
                  className="relative z-10 rounded-3xl shadow-2xl border border-white/20 w-full"
                  width={600}
                  height={800}
                />
              </div>
            </AnimatedElement>

            {/* Floating success notification */}
            <AnimatedElement animation="fadeUp" delay={0.8}>
              <div className="absolute top-8 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200 z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      API intégrée
                    </div>
                    <div className="text-gray-600 text-xs">
                      15,000 transactions/jour
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeUp" delay={1.1}>
              <div className="absolute bottom-8 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-gray-200 z-20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      API disponible
                    </div>
                    <div className="text-gray-600 text-xs">99.9% uptime</div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
}
