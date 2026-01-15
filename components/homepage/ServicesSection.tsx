"use client";
import {
  Building2,
  Smartphone,
  CreditCard,
  Users,
  Globe,
  TrendingUp,
  ArrowRight,
  Zap,
} from "lucide-react";
import { Button } from "../ui/button";
import { AnimatedElement } from "../animatedElement";
import Link from "next/link";

const services = [
  {
    icon: Building2,
    title: "Agency Banking",
    description:
      "Intégrez nos services bancaires via notre API pour votre application ou plateforme",
    color: "from-[#084782] to-[#064070]",
    bgColor: "bg-blue-50",
    textColor: "text-[#084782]",
  },
  {
    icon: Smartphone,
    title: "Mobile Payments",
    description:
      "Payez vos factures et effectuez des transactions directement depuis votre téléphone",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
  },
  {
    icon: CreditCard,
    title: "Bill Payments",
    description:
      "Réglez vos factures d'électricité, d'eau, d'internet et de télécommunications",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    icon: Users,
    title: "Transferts P2P",
    description:
      "Envoyez et recevez de l'argent instantanément entre particuliers",
    color: "from-[#BF1823] to-[#A01419]",
    bgColor: "bg-red-50",
    textColor: "text-[#BF1823]",
  },
  /* {
    icon: Globe,
    title: "Virements Internationaux",
    description:
      "Transférez de l'argent vers l'étranger en toute sécurité et rapidité",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
  },
  {
    icon: TrendingUp,
    title: "Épargne & Investissement",
    description:
      "Faites fructifier votre argent avec nos solutions d'épargne et d'investissement",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
  }, */
];

export function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-50 to-red-50 rounded-full opacity-40 blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <AnimatedElement animation="fadeIn" delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-[#084782] text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              {"Services Complets"}
            </div>
          </AnimatedElement>
          <AnimatedElement animation="fadeUp" delay={0.2}>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {"Tout ce dont vous avez besoin"}
              <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                {"en un seul endroit"}
              </span>
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fadeUp" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {`Découvrez notre écosystème complet de services financiers
              numériques, conçu spécialement pour les besoins des Camerounais
              modernes.`}
            </p>
          </AnimatedElement>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <AnimatedElement
                key={index}
                animation="fadeUp"
                delay={0.6 + index * 0.1}
              >
                <div className="group relative bg-white p-8 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Background gradient on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent
                        className={`h-8 w-8 ${service.textColor}`}
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Link href={"/services"}>
                      <Button
                        variant="ghost"
                        className={`${service.textColor} hover:${service.bgColor} p-0 h-auto group/btn font-semibold`}
                      >
                        {"En savoir plus"}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <AnimatedElement animation="fadeUp" delay={1.2}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {"Prêt à transformer vos finances ?"}
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                {`Rejoignez des milliers de Camerounais qui ont déjà choisi Easy Transact
                pour simplifier leur vie financière.`}
              </p>
              <Link href={"/services"}>
                <Button
                  size="lg"
                  className="!bg-gradient-to-r !from-[#084782] !to-[#064070] hover:!from-[#064070] hover:!to-[#053866] !text-white !border-0 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl"
                >
                  {"Découvrir tous nos services"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
