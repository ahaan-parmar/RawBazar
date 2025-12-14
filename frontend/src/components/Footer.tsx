import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-spice-brown text-spice-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Raw Bazaar Logo" 
                className="h-28 md:h-32 lg:h-36 w-auto object-contain"
              />
            </div>
            <p className="text-spice-cream/70 text-sm leading-relaxed">
              Bringing the authentic taste of India to the world. Premium quality spices sourced directly from Indian farms, processed with care, and delivered globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-spice-gold/10 flex items-center justify-center hover:bg-spice-gold/20 transition-colors">
                <Facebook className="w-5 h-5 text-spice-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-spice-gold/10 flex items-center justify-center hover:bg-spice-gold/20 transition-colors">
                <Instagram className="w-5 h-5 text-spice-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-spice-gold/10 flex items-center justify-center hover:bg-spice-gold/20 transition-colors">
                <Linkedin className="w-5 h-5 text-spice-gold" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-spice-gold/10 flex items-center justify-center hover:bg-spice-gold/20 transition-colors">
                <Twitter className="w-5 h-5 text-spice-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-spice-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Products", "Quality", "Global Presence", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-").replace(" us", "")}`}
                    className="text-spice-cream/70 hover:text-spice-gold transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg font-semibold text-spice-gold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {["Turmeric Powder", "Red Chili Powder", "Cumin Seeds", "Coriander Seeds", "Black Pepper", "Cardamom", "Cinnamon", "Saffron"].map((product) => (
                <li key={product}>
                  <Link to="/products" className="text-spice-cream/70 hover:text-spice-gold transition-colors text-sm">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold text-spice-gold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-spice-gold flex-shrink-0 mt-0.5" />
                <span className="text-spice-cream/70 text-sm">
                  FLAT NO 401 MOHIRA RESIDENCY,<br />
                  SR NO 5A/A/1A/7/1,<br />
                  KARVENAGAR, KOTHRUD, PUNE,<br />
                  PUNE, MAHARASHTRA, 411052
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-spice-gold flex-shrink-0" />
                <a href="tel:+919890661550" className="text-spice-cream/70 hover:text-spice-gold transition-colors text-sm">
                  +91 98906 61550
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-spice-gold flex-shrink-0" />
                <a href="mailto:rawbazarofficial@gmail.com" className="text-spice-cream/70 hover:text-spice-gold transition-colors text-sm">
                  rawbazarofficial@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-spice-gold flex-shrink-0" />
                <a href="https://wa.me/919890661550" target="_blank" rel="noopener noreferrer" className="text-spice-cream/70 hover:text-spice-gold transition-colors text-sm">
                  WhatsApp: +91 98906 61550
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-spice-gold/20">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-spice-cream/60 text-sm">
              © {new Date().getFullYear()} RawBazar. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-spice-cream/60 hover:text-spice-gold transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-spice-cream/60 hover:text-spice-gold transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
