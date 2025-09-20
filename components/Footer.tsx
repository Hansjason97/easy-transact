import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { ImageWithFallback } from "./imageWithFallBack";
import gpayLogo from "figma:asset/c56bb8147fefae5e2c8204074109f676a94c7f99.png";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(30deg, transparent 40%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 60%)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <ImageWithFallback
                src="/images/logo.png"
                alt="Gpay Logo"
                className="h-12 w-auto"
                width={120}
                height={48}
              />
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              L'API fintech de référence au Cameroun. Intégrez nos services de
              paiement dans vos applications et développez vos solutions
              financières.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                { icon: Twitter, href: "#", color: "hover:text-blue-300" },
                { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center transition-all duration-300 hover:bg-gray-700 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Services</h3>
            <ul className="space-y-3">
              {[
                "Agency Banking",
                "Mobile Payments",
                "Bill Payments",
                "Transferts P2P",
                "Virements Internationaux",
                "Épargne & Investissement",
              ].map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate?.("services")}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Quartier Bonanjo</div>
                  <div>Douala, Cameroun</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">+237 6 XX XX XX XX</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">contact@gpay.cm</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Newsletter</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Gpay Cameroun. Tous droits réservés.
            </div>

            <div className="flex space-x-6 text-sm">
              <button
                onClick={() => onNavigate?.("contact")}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Politique de confidentialité
              </button>
              <button
                onClick={() => onNavigate?.("contact")}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Conditions d'utilisation
              </button>
              <button
                onClick={() => onNavigate?.("contact")}
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Mentions légales
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
