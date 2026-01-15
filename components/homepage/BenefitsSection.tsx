import {
  Shield,
  Clock,
  DollarSign,
  Users,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { ImageWithFallback } from "../imageWithFallBack";
import { AnimatedElement } from "../animatedElement";

const benefits = [
  {
    icon: Shield,
    title: "Sécurité maximale",
    description:
      "Vos transactions sont protégées par un chiffrement de niveau bancaire et une authentification à deux facteurs.",
  },
  {
    icon: Clock,
    title: "Transactions instantanées",
    description:
      "Effectuez vos paiements et transferts en quelques secondes, 24h/24 et 7j/7.",
  },
  {
    icon: DollarSign,
    title: "Frais réduits",
    description:
      "Bénéficiez des tarifs les plus compétitifs du marché camerounais pour tous vos services financiers.",
  },
  {
    icon: Users,
    title: "Réseau d'agents",
    description:
      "Accédez à nos services via notre vaste réseau d'agents répartis dans tout le Cameroun.",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <AnimatedElement animation="fadeIn" delay={0.1}>
                <div className="inline-flex items-center px-4 py-2 bg-sky-50 border border-sky-200 rounded-full text-primary text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  {"Pourquoi choisir Easy Transact ?"}
                </div>
              </AnimatedElement>

              <AnimatedElement animation="slideLeft" delay={0.2}>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {"Une expérience"}
                  <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                    {"révolutionnaire"}
                  </span>
                </h2>
              </AnimatedElement>

              <AnimatedElement animation="slideLeft" delay={0.4}>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {`Découvrez pourquoi plus de 50,000 Camerounais font confiance à
                  Easy Transact pour leurs transactions financières quotidiennes.`}
                </p>
              </AnimatedElement>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <AnimatedElement
                    key={index}
                    animation="slideLeft"
                    delay={0.6 + index * 0.1}
                  >
                    <div className="group">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-6 w-6 text-[#084782]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </AnimatedElement>
                );
              })}
            </div>

            {/* Stats */}
            <AnimatedElement animation="slideLeft" delay={1.0}>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {"50K+"}
                  </div>
                  <div className="text-sm text-gray-600">
                    {"Utilisateurs actifs"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {"99.9%"}
                  </div>
                  <div className="text-sm text-gray-600">{"Disponibilité"}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {"24/7"}
                  </div>
                  <div className="text-sm text-gray-600">{"Support client"}</div>
                </div>
              </div>
            </AnimatedElement>
          </div>

          {/* Right image */}
          <div className="relative">
            <AnimatedElement animation="slideRight" delay={0.3}>
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-[#084782]/20 to-primary/20 rounded-3xl blur-2xl transform rotate-3"></div>
                <ImageWithFallback
                  src={"cassier_paiment.png"}
                  alt="Caissier Easy Transact professionnel avec terminal de paiement"
                  className="relative z-10 rounded-3xl shadow-2xl border border-gray-200 w-full"
                  width={600}
                  height={800}
                />
              </div>
            </AnimatedElement>

            {/* Floating elements */}
            <AnimatedElement animation="fadeUp" delay={0.8}>
              <div className="absolute top-10 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-20">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {"Transaction réussie"}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {"1,250 FCFA envoyés"}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>

            <AnimatedElement animation="fadeUp" delay={1.1}>
              <div className="absolute bottom-10 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100 z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-[#084782]" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">
                      {"100% Sécurisé"}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {"Chiffrement bancaire"}
                    </div>
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
