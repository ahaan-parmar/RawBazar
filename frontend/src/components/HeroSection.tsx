import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-spices.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium Indian Spices arranged artistically"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-spice-brown/95 via-spice-brown/80 to-spice-brown/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-spice-brown via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-spice-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-spice-saffron/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-spice-gold/10 border border-spice-gold/30 rounded-full mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-spice-gold rounded-full animate-pulse" />
            <span className="text-spice-gold text-sm font-body tracking-wide">
              Trusted by 500+ Global Importers
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-spice-cream leading-tight mb-6 animate-fade-up animation-delay-100">
            Authentic{" "}
            <span className="text-gradient-gold">Indian Spices</span>
            <br />
            From Farm to World
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-spice-cream/80 leading-relaxed mb-10 max-w-2xl animate-fade-up animation-delay-200">
            Experience the rich heritage of Indian spices. Premium quality, 
            direct sourcing from farms across India, and reliable global export 
            to bring authentic flavors to your table.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Request Export Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/919890661550" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-spice-gold/20 animate-fade-up animation-delay-400">
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-spice-gold">25+</p>
              <p className="text-spice-cream/60 text-sm mt-1">Years Experience</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-spice-gold">50+</p>
              <p className="text-spice-cream/60 text-sm mt-1">Countries Served</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-spice-gold">100%</p>
              <p className="text-spice-cream/60 text-sm mt-1">Pure Quality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-spice-cream/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-spice-cream/30 flex justify-center p-2">
          <div className="w-1 h-2 bg-spice-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
