"use client";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Clock,
  CreditCard,
  Globe,
  Shield,
  Smartphone,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { AnimatedElement } from "../animatedElement";
import { ImageWithFallback } from "../imageWithFallBack";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: "Agency Banking",
      description:
        "Transformez votre commerce en point de service bancaire et financier. Offrez des services de dépôt, retrait, et transfert à votre communauté.",
      features: [
        "Dépôts et retraits",
        "Ouverture de comptes",
        "Microcrédits",
        "Services aux entreprises",
      ],
      color: "from-[#084782] to-[#064070]",
      bgColor: "bg-blue-50",
      textColor: "text-[#084782]",
      image: "bankingServiceImage.png",
    },
    {
      icon: Smartphone,
      title: "Mobile Payments",
      description:
        "Facilitez les paiements pour vos clients avec notre solution mobile complète. Acceptez tous types de paiements numériques.",
      features: [
        "Paiements QR Code",
        "NFC/Sans contact",
        "Paiements en ligne",
        "Facturation numérique",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      image: "mobilePaymentImage.png",
    },
    {
      icon: CreditCard,
      title: "Bill Payments",
      description:
        "Proposez le paiement de factures à vos clients. Électricité, eau, internet, télécommunications - tout en un seul endroit.",
      features: [
        "Factures ENEO",
        "Canal+/DStv",
        "Orange/MTN",
        "Factures d'eau",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      image: "digitalServiceImage.png",
    },
    {
      icon: Users,
      title: "Transferts P2P",
      description:
        "Permettez à vos clients d'envoyer et recevoir de l'argent instantanément, partout au Cameroun et à l'international.",
      features: [
        "Transferts nationaux",
        "Transferts internationaux",
        "Transferts instantanés",
        "Historique détaillé",
      ],
      color: "from-[#BF1823] to-[#A01419]",
      bgColor: "bg-red-50",
      textColor: "text-[#BF1823]",
      image: "p2pTransferImage.png",
    },
    {
      icon: Globe,
      title: "Virements Internationaux",
      description:
        "Connectez vos clients au monde entier avec nos services de transfert international sécurisés et rapides.",
      features: [
        "Europe & Amérique",
        "Afrique de l'Ouest",
        "Taux compétitifs",
        "Suivi en temps réel",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      image: "internationalTransferImage.png",
    },
    {
      icon: TrendingUp,
      title: "Épargne & Investissement",
      description:
        "Aidez vos clients à faire fructifier leur argent avec nos solutions d'épargne et d'investissement adaptées.",
      features: [
        "Comptes d'épargne",
        "Placements à terme",
        "Micro-investissements",
        "Conseils financiers",
      ],
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      image: "savingsImage.png",
    },
  ];

  const benefits = [
    {
      icon: Star,
      title: "Commissions Attractives",
      description: "Gagnez jusqu'à 15% de commission sur chaque transaction",
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Plateforme certifiée avec assurance complète",
    },
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Assistance technique et commerciale en permanence",
    },
    {
      icon: Users,
      title: "Formation Continue",
      description: "Accompagnement et mise à jour des compétences",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#BF1823] to-[#084782] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement animation="fadeIn" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                {"Services Complets"}
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.2}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {"Tous nos Services"}
                <span className="block text-white/90">{"pour votre Réussite"}</span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.4}>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                {`Découvrez notre gamme complète de services financiers
                numériques, conçus pour transformer votre activité et servir
                votre communauté`}
              </p>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant={"outline"}
                >
                  {"Télécharger l'App"}
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-50 to-red-50 rounded-full opacity-40 blur-3xl"></div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <AnimatedElement animation="fadeUp" delay={0.2}>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                {"Notre Gamme de Services"}
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {`Des solutions adaptées à tous vos besoins financiers et
                commerciaux`}
              </p>
            </AnimatedElement>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <AnimatedElement
                  key={index}
                  animation="fadeUp"
                  delay={0.6 + index * 0.2}
                >
                  <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 h-full">
                        <div className="p-8 lg:p-10 flex flex-col justify-center">
                          <div
                            className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent
                              className={`h-8 w-8 ${service.textColor}`}
                            />
                          </div>

                          <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                            {service.title}
                          </h3>

                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="space-y-2 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <div
                                key={featureIndex}
                                className="flex items-center"
                              >
                                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>

                          <Button
                            variant="ghost"
                            className={`${service.textColor} hover:${service.bgColor} p-0 h-auto group/btn font-semibold w-fit`}
                          >
                            {"En savoir plus"}
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>

                        <div className="relative min-h-[300px]">
                          <ImageWithFallback
                            src={service.image}
                            alt={`Service ${service.title}`}
                            className="w-full h-full object-cover"
                            width={400}
                            height={300}
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20`}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedElement animation="fadeUp" delay={0.2}>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                {"Pourquoi Choisir Gpay ?"}
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {`Les avantages qui font de Gpay le partenaire idéal pour votre
                activité`}
              </p>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedElement
                key={index}
                animation="fadeUp"
                delay={0.6 + index * 0.1}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-[#BF1823] to-[#084782] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#BF1823] to-[#084782] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <AnimatedElement animation="fadeUp" delay={0.2}>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              {"Prêt à Commencer ?"}
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fadeUp" delay={0.4}>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              {`Rejoignez des milliers d'agents qui ont transformé leur activité
              avec Gpay`}
            </p>
          </AnimatedElement>
          <AnimatedElement animation="fadeUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant={"outline"}
                className="bg-white text-primary"
              >
                {"Télécharger l'App"}
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}
