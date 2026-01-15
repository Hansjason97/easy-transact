"use client";
import { Button } from "../ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../imageWithFallBack";
import { AnimatedElement } from "../animatedElement";

interface HeroSectionProps {
  onNavigate?: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-100 rounded-full opacity-40 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 pt-20 pb-24">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          {/* Badge */}
          <AnimatedElement animation="fadeIn" delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-primary text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2" />
              {"Solution fintech #1 au Cameroun"}
            </div>
          </AnimatedElement>

          {/* Main Heading */}
          <div className="space-y-6">
            <AnimatedElement animation="fadeUp" delay={0.2}>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                {"Révolutionnez vos"}
                <span className="block bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  {"transactions financières"}
                </span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.4}>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {`Intégrez facilement l'API EasyTransact dans vos systèmes bancaires et
                fintech. Une solution complète pour les paiements digitaux au
                Cameroun.`}
              </p>
            </AnimatedElement>
          </div>

          {/* CTA Buttons */}
          <AnimatedElement animation="fadeUp" delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => onNavigate?.("api-docs")}
                className="!bg-gradient-to-r !from-primary !to-secondary hover:!from-primary hover:!to-primary/80 !text-white !border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 px-8 py-6 text-lg font-semibold rounded-2xl group"
              >
                {"Documentation API"}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="!border-2 !border-gray-300 !text-gray-700 hover:!bg-gray-50 hover:!border-gray-400 px-8 py-6 text-lg font-semibold rounded-2xl group"
              >
                <Play className="mr-2 h-5 w-5" />
                {"Voir la démo"}
              </Button>
            </div>
          </AnimatedElement>

          {/* Trust indicators */}
          <AnimatedElement animation="fadeUp" delay={0.8}>
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">
                  {"+50,000 utilisateurs actifs"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#084782] rounded-full"></div>
                <span className="text-sm font-medium">
                  {"Transactions sécurisées 24/7"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-[#BF1823] rounded-full"></div>
                <span className="text-sm font-medium">
                  {"Support client dédié"}
                </span>
              </div>
            </div>
          </AnimatedElement>
        </div>

        {/* Hero Image */}
        <AnimatedElement animation="clipMask" delay={1.0}>
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#084782]/20 to-[#BF1823]/20 rounded-3xl blur-2xl transform rotate-1"></div>
              <ImageWithFallback
                src={"Interface_moderne.png"}
                alt="Interface moderne Gpay"
                className="relative z-10 rounded-3xl shadow-2xl border border-gray-200 w-full"
                width={1200}
                height={600}
              />
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
