"use client";
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CheckCircle,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send
} from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AnimatedElement } from "../animatedElement";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";


const formSchema = z.object({
  firstName: z.string().min(3,{message: "Trop court"}).max(20, {message: "Trop long"}),
  lastName: z.string().min(3, {message: "Trop court"}).max(21, {message: "Trop long"}),
  email: z.email(),
  phone: z.string(),
  subject: z.string(),
  message: z.string().max(240, {message: "Trop long"})
});

export function ContactPage() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }
  });

  const onSubmit = (values:z.infer<typeof formSchema>)=>{
    console.log(values)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: [
        "Siège Social: Douala, Cameroun",
        "Deido Total Bonateki",
        "BP 1234 Douala",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: [
        "Service Client: +237 695 123 209",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["business@easy-transact.com"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Horaires",
      details: [
        "Lundi - Vendredi: 8h00 - 18h00",
        "Samedi: 9h00 - 15h00",
        "Dimanche: Fermé",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Chat en Direct",
      description: "Discutez avec notre équipe support en temps réel",
      action: "Démarrer Chat",
      color: "bg-[#BF1823]",
      features: ["Réponse immédiate", "Support technique", "Disponible 24/7"],
    },
    {
      icon: Headphones,
      title: "Support Téléphonique",
      description: "Appelez-nous pour une assistance immédiate",
      action: "Appeler Maintenant",
      color: "bg-[#084782]",
      features: ["Conseil personnalisé", "Assistance technique", "Formation"],
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Envoyez-nous vos questions détaillées par email",
      action: "Envoyer Email",
      color: "bg-gradient-to-r from-[#BF1823] to-[#084782]",
      features: [
        "Documentation complète",
        "Suivi de dossier",
        "Réponse sous 24h",
      ],
    },
  ];

  const faqs = [
    {
      question: "Comment intégrer l'API Easy Transact ?",
      answer:
        "Pour intégrer l'API Easy Transact, créez d'abord un compte développeur, obtenez vos clés API, testez en environnement sandbox puis passez en production. L'intégration prend généralement 1-3 jours.",
    },
    {
      question: "Quels sont les frais de transaction ?",
      answer:
        "Nos frais sont très compétitifs et varient selon le type de transaction. Consultez notre grille tarifaire détaillée sur notre site web ou contactez-nous directement.",
    },
    {
      question: "Easy Transact est-il sécurisé ?",
      answer:
        "Absolument. Nous utilisons les dernières technologies de cryptage et respectons toutes les réglementations financières camerounaises pour protéger vos données et transactions.",
    },
    {
      question: "Dans quelles régions Easy Transact est-il disponible ?",
      answer:
        "Easy Transact est disponible dans les 10 régions du Cameroun avec plus de 1000 points de service actifs.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedElement animation="fadeIn" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4 mr-2" />
                {"Support Client"}
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.2}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {"Contactez-Nous"}
                <span className="block text-white/90">
                  {"Nous sommes là pour vous"}
                </span>
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.4}>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                {`Notre équipe est disponible pour vous accompagner dans votre
                parcours fintech et répondre à toutes vos questions`}
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-50 to-red-50 rounded-full opacity-40 blur-3xl"></div>

        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <AnimatedElement animation="fadeIn" delay={0.1}>
                <div className="inline-flex items-center px-4 py-2 bg-red-50 border border-red-200 rounded-full text-[#BF1823] text-sm font-medium mb-6">
                  <Send className="w-4 h-4 mr-2" />
                  {"Envoyez-nous un Message"}
                </div>
              </AnimatedElement>
              <AnimatedElement animation="slideLeft" delay={0.2}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  {"Parlons de votre Projet"}
                </h2>
              </AnimatedElement>
              <AnimatedElement animation="slideLeft" delay={0.4}>
                <p className="text-lg text-gray-600 mb-8">
                  {`Vous avez une question ou besoin d'assistance ? Remplissez le
                  formulaire ci-dessous et nous vous répondrons dans les plus
                  brefs délais.`}
                </p>
              </AnimatedElement>

              <AnimatedElement animation="slideLeft" delay={0.6}>
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField control={form.control} name="firstName" render={({field})=>(
                            <FormItem>
                              <FormLabel>{"Nom"}</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Votre Nom"/>
                              </FormControl>
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="lastName" render={({field})=>(
                            <FormItem>
                              <FormLabel>{"Prénom"}</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="Votre prénom"/>
                              </FormControl>
                            </FormItem>
                          )} />
                        </div>
                          <FormField control={form.control} name="email" render={({field})=>(
                            <FormItem>
                              <FormLabel>{"Adresse mail"}</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="ex. jeanpierre@email.com"/>
                              </FormControl>
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="phone" render={({field})=>(
                            <FormItem>
                              <FormLabel>{"Numéro de téléphone"}</FormLabel>
                              <FormControl>
                                <Input {...field} placeholder="ex. +237 677"/>
                              </FormControl>
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="subject" render={({field})=>(
                            <FormItem>
                              <FormLabel>{"Sujet"}</FormLabel>
                              <FormControl>
                                <Select value={field.value} onValueChange={field.onChange}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Choisissez un sujet" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">
                                {"Question générale"}
                              </SelectItem>
                              <SelectItem value="api">{"Intégration API"}</SelectItem>
                              <SelectItem value="support">
                                {"Support technique"}
                              </SelectItem>
                              <SelectItem value="partnership">
                                {"Partenariat"}
                              </SelectItem>
                              <SelectItem value="other">{"Autre"}</SelectItem>
                            </SelectContent>
                          </Select>
                              </FormControl>
                            </FormItem>
                          )} />
                          <FormField control={form.control} name="message" render={({field})=>(
                            <FormItem>
                              <FormLabel>{"Message"}</FormLabel>
                              <FormControl>
                                <Textarea {...field} placeholder="Décrivez votre demande en détail..."/>
                              </FormControl>
                            </FormItem>
                          )} />
                        <Button
                          type="submit"
                          size="lg"
                        >
                          {"Envoyer le Message"}
                          <Send size={20} />
                        </Button>
                      </form>

                    </Form>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <AnimatedElement animation="slideRight" delay={0.2}>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    {"Informations de Contact"}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {"Plusieurs moyens de nous joindre selon vos préférences"}
                  </p>
                </div>
              </AnimatedElement>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <AnimatedElement
                    key={index}
                    animation="slideRight"
                    delay={0.4 + index * 0.1}
                  >
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, detailIndex) => (
                              <p
                                key={detailIndex}
                                className="text-gray-600 mb-1"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedElement>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedElement animation="fadeIn" delay={0.1}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-[#084782] text-sm font-medium mb-6">
                <Headphones className="w-4 h-4 mr-2" />
                {"Moyens de Contact"}
              </div>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.2}>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                {"Choisissez votre Canal Préféré"}
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {`Plusieurs options s'offrent à vous pour obtenir l'aide dont vous
                avez besoin`}
              </p>
            </AnimatedElement>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <AnimatedElement
                key={index}
                animation="fadeUp"
                delay={0.6 + index * 0.2}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div
                      className={`${channel.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <channel.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">
                      {channel.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{channel.description}</p>

                    <div className="space-y-2 mb-6">
                      {channel.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center justify-center"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button size={"lg"} variant={"secondary"}>
                      {channel.action}
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedElement animation="fadeUp" delay={0.2}>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                {"Questions Fréquentes"}
              </h2>
            </AnimatedElement>
            <AnimatedElement animation="fadeUp" delay={0.4}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {`Trouvez rapidement des réponses aux questions les plus courantes`}
              </p>
            </AnimatedElement>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedElement
                key={index}
                animation="fadeUp"
                delay={0.6 + index * 0.1}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-primary to-secondary w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-sm font-bold">?</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
