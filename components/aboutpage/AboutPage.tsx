"use client";
import { Footer } from "../Footer";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ImageWithFallback } from "../imageWithFallBack";
import {
  Target,
  Heart,
  Shield,
  Users,
  TrendingUp,
  Globe,
  Award,
  ArrowRight,
  Zap,
  CheckCircle,
  Star,
} from "lucide-react";
import { AnimatedElement } from "../animatedElement";
import Link from "next/link";

export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Sécurité",
      description:
        "La protection de vos données et transactions est notre priorité absolue",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Heart,
      title: "Inclusion",
      description:
        "Nous rendons les services financiers accessibles à tous les Camerounais",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "Nous développons des solutions technologiques adaptées au marché local",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Communauté",
      description:
        "Nous créons un écosystème qui profite à tous nos partenaires",
      color: "from-purple-500 to-violet-500",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Création de Gpay",
      description:
        "Lancement de la première solution de paiement mobile au Cameroun",
      icon: Target,
    },
    {
      year: "2021",
      title: "Expansion Nationale",
      description: "Déploiement dans les 10 régions du Cameroun",
      icon: Globe,
    },
    {
      year: "2022",
      title: "1000+ Agents",
      description: "Atteinte du millier d'agents partenaires actifs",
      icon: Users,
    },
    {
      year: "2023",
      title: "Services Diversifiés",
      description:
        "Lancement de l'agency banking et des services aux entreprises",
      icon: TrendingUp,
    },
    {
      year: "2024",
      title: "Leader du Marché",
      description: "Plus de 500,000 utilisateurs actifs à travers le pays",
      icon: Award,
    },
  ];

  const stats = [
    { number: "500K+", label: "Utilisateurs Actifs", icon: Users },
    { number: "1000+", label: "Agents Partenaires", icon: Star },
    { number: "10", label: "Régions Couvertes", icon: Globe },
    { number: "24/7", label: "Support Client", icon: Shield },
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
                <Heart className="w-4 h-4 mr-2" />
                Notre Histoire
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.2}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                À Propos de Gpay
                <span className="block text-white/90">
                  Pionnier de la Fintech
                </span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.4}>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Nous démocratisons l'accès aux services financiers pour tous les
                Camerounais, en alliant innovation technologique et
                compréhension des besoins locaux
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-50 to-red-50 rounded-full opacity-40 blur-3xl"></div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <AnimatedElement animation="fadeIn" delay={0.1}>
                <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-[#BF1823] text-sm font-medium mb-6">
                  <Target className="w-4 h-4 mr-2" />
                  Notre Mission
                </div>
              </AnimatedElement>
              <AnimatedElement animation="slideLeft" delay={0.2}>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  Transformer l'écosystème financier camerounais
                </h2>
              </AnimatedElement>
              <AnimatedElement animation="slideLeft" delay={0.4}>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  Chez Gpay, nous croyons que chaque Camerounais mérite un accès
                  équitable aux services financiers modernes. Notre mission est
                  de transformer l'écosystème financier camerounais en proposant
                  des solutions innovantes, sécurisées et adaptées aux réalités
                  locales.
                </p>
              </AnimatedElement>
              <AnimatedElement animation="slideLeft" delay={0.6}>
                <p className="text-lg text-gray-600 mb-8">
                  Nous accompagnons les entrepreneurs, commerçants et
                  particuliers dans leur développement économique grâce à des
                  technologies de pointe et un réseau de partenaires de
                  confiance.
                </p>
              </AnimatedElement>
              <AnimatedElement animation="slideLeft" delay={0.8}>
                <Link href={"/contact"}>
                  <Button
                    size="lg"
                    className="!bg-[#BF1823] hover:!bg-[#A01419] !text-white !border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contacter Nous
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </AnimatedElement>
            </div>
            <AnimatedElement animation="slideRight" delay={0.3}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#BF1823] to-[#084782] rounded-3xl transform rotate-6 opacity-20"></div>
                <ImageWithFallback
                  src={"gpay_team.png"}
                  alt="Équipe Gpay travaillant ensemble"
                  className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
                  width={600}
                  height={400}
                />
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedElement animation="fadeIn" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-[#084782] text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Nos Valeurs
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.2}>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Les Principes qui nous Guident
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Chaque décision que nous prenons est guidée par ces valeurs
                fondamentales
              </p>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedElement
                key={index}
                animation="fadeUp"
                delay={0.6 + index * 0.1}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedElement animation="fadeUp" delay={0.2}>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Notre Parcours
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                De startup innovante à leader de la fintech camerounaise
              </p>
            </AnimatedElement>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <AnimatedElement
                key={index}
                animation="slideLeft"
                delay={0.6 + index * 0.2}
              >
                <div className="flex items-start mb-12 last:mb-0 group">
                  <div className="flex-shrink-0 w-32 text-center">
                    <div className="bg-gradient-to-br from-[#BF1823] to-[#084782] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="font-bold">{milestone.year}</span>
                    </div>
                    <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto shadow-lg border-4 border-gray-100">
                      <milestone.icon className="h-6 w-6 text-[#BF1823]" />
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="w-0.5 h-20 bg-gradient-to-b from-gray-300 to-transparent mx-auto mt-4"></div>
                    )}
                  </div>
                  <Card className="ml-8 flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-[#BF1823] to-[#084782] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedElement animation="fadeUp" delay={0.2}>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Gpay en Chiffres
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.4}>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                L'impact de notre plateforme sur l'écosystème financier
                camerounais
              </p>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedElement
                key={index}
                animation="fadeUp"
                delay={0.6 + index * 0.1}
              >
                <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl lg:text-6xl mb-4 font-bold text-white">
                      {stat.number}
                    </div>
                    <p className="text-xl text-white opacity-90">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <AnimatedElement animation="fadeUp" delay={0.2}>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Rejoignez l'Aventure Gpay
            </h2>
          </AnimatedElement>
          <AnimatedElement animation="fadeUp" delay={0.4}>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Que vous soyez un particulier, un commerçant ou un entrepreneur,
              Gpay a une solution pour vous
            </p>
          </AnimatedElement>
          <AnimatedElement animation="fadeUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="!bg-[#BF1823] hover:!bg-[#A01419] !text-white !border-0 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Contacter Nous
                </Button>
              </Link>
              <Button
                size="lg"
                className="!bg-[#BF1823] hover:!bg-[#A01419] !text-white !border-0 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Devenir Agent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="!border-[#BF1823] !text-[#BF1823] hover:!bg-[#BF1823] hover:!text-white text-lg px-8 py-6"
                >
                  Nos Services
                </Button>
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}
