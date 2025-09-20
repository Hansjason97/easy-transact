"use client";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "../imageWithFallBack";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useEffect, useState } from "react";
import type { CarouselApi } from "../ui/carousel";
import { AnimatedElement } from "../animatedElement";

const testimonials = [
  {
    quote:
      "Avec Gpay, je peux envoyer de l'argent à ma famille en toute sécurité et payer mes factures sans me déplacer. C'est vraiment révolutionnaire !",
    name: "Marie Ngono",
    role: "Entrepreneuse, Douala",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b332c5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
  },
  {
    quote:
      "Depuis que j'utilise Gpay, mes transactions sont plus rapides et sécurisées. Le service client est excellent et toujours disponible.",
    name: "Paul Mbarga",
    role: "Commerçant, Yaoundé",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
  },
  {
    quote:
      "Grâce à Gpay, je peux facilement recevoir les virements de mes enfants à l'étranger. L'interface est simple et intuitive.",
    name: "Mama Françoise",
    role: "Retraitée, Bafoussam",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
  },
];

const partners = [
  {
    name: "Orange Money",
    image: "Orange_Money.png",
  },
  {
    name: "MTN",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80&q=80",
  },
  {
    name: "Western Union",
    image: "Western_Union.png",
  },
  {
    name: "Ria",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80&q=80",
  },
  {
    name: "Visa",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80&q=80",
  },
  {
    name: "Mastercard",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80&q=80",
  },
  {
    name: "ENEO",
    image:
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80&q=80",
  },
  {
    name: "CAMWATER",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&h=80&q=80",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50 rounded-full opacity-60 blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-8">
        {/* Testimonials Carousel */}
        <div className="text-center mb-20">
          <AnimatedElement animation="fadeIn" delay={0.1}>
            <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2 fill-current" />
              {"Témoignages Clients"}
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fadeUp" delay={0.2}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {"Des milliers de"}
              <span className="block text-transparent bg-gradient-to-r from-green-500 to-[#084782] bg-clip-text">
                {"clients satisfaits"}
              </span>
            </h2>
          </AnimatedElement>

          <AnimatedElement animation="fadeUp" delay={0.4}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              {`Découvrez comment Gpay transforme la vie financière des
              Camerounais au quotidien.`}
            </p>
          </AnimatedElement>

          <AnimatedElement animation="clipMask" delay={0.6}>
            <Carousel
              className="max-w-5xl mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="text-center px-8">
                      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 max-w-4xl mx-auto">
                        <Quote className="h-16 w-16 text-[#084782] mx-auto mb-8 opacity-20" />
                        <blockquote className="text-2xl lg:text-3xl text-gray-900 mb-10 leading-relaxed font-light">
                          {`"${testimonial.quote}"`}
                        </blockquote>
                        <div className="flex items-center justify-center space-x-6 mb-6">
                          <ImageWithFallback
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-100"
                            width={80}
                            height={80}
                          />
                          <div className="text-left">
                            <div className="font-bold text-gray-900 text-lg">
                              {testimonial.name}
                            </div>
                            <div className="text-gray-600">
                              {testimonial.role}
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-6 w-6 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="!border-blue-300 !text-[#084782] hover:!bg-blue-50 !w-12 !h-12 !-left-16" />
              <CarouselNext className="!border-blue-300 !text-[#084782] hover:!bg-blue-50 !w-12 !h-12 !-right-16" />
            </Carousel>
          </AnimatedElement>
        </div>

        {/* Partners Carousel */}
        <div className="border-t border-gray-200 pt-16">
          <AnimatedElement animation="fadeUp" delay={0.8}>
            <h3 className="text-center text-2xl font-semibold text-gray-900 mb-4">
              {"Nos Partenaires de Confiance"}
            </h3>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {`Nous collaborons avec les leaders du marché pour vous offrir les
              meilleurs services financiers.`}
            </p>
          </AnimatedElement>

          <AnimatedElement animation="fadeIn" delay={1.0}>
            <AutoScrollCarousel partners={partners} />
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}

function AutoScrollCarousel({
  partners,
}: {
  partners: {
    name: string;
    image: string;
  }[];
}) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 2000); // Défile toutes les 2 secondes

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      className="mx-auto"
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        skipSnaps: false,
        dragFree: true,
      }}
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {[...partners, ...partners].map((partner, index) => (
          <CarouselItem
            key={index}
            className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6"
          >
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-xl transition-all duration-300 w-[120px] h-[80px] flex items-center justify-center group hover:scale-105 p-4">
                <ImageWithFallback
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  className="w-full h-full object-contain transition-all duration-300"
                  width={120}
                  height={80}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
