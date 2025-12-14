import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const regions = [
  {
    name: "North America",
    countries: ["United States", "Canada", "Mexico"],
    description: "Strong presence with FDA-compliant exports and established distribution networks.",
  },
  {
    name: "Europe",
    countries: ["United Kingdom", "Germany", "France", "Netherlands", "Italy", "Spain"],
    description: "EU-certified exports meeting stringent European food safety standards.",
  },
  {
    name: "Middle East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain"],
    description: "Major export hub with strong relationships in the Gulf region.",
  },
  {
    name: "Asia Pacific",
    countries: ["Singapore", "Japan", "South Korea", "Malaysia", "Thailand", "Vietnam"],
    description: "Growing market with increasing demand for premium Indian spices.",
  },
  {
    name: "Oceania",
    countries: ["Australia", "New Zealand"],
    description: "Established partnerships with major importers and distributors.",
  },
  {
    name: "Africa",
    countries: ["South Africa", "Kenya", "Nigeria", "Egypt"],
    description: "Expanding presence with focus on quality and competitive pricing.",
  },
];

const GlobalPage = () => {
  return (
    <>
      <Helmet>
        <title>Global Presence | RawBazar Export to 50+ Countries</title>
        <meta
          name="description"
          content="RawBazar exports premium Indian spices to 50+ countries across 6 continents. Reliable logistics, sea & air freight options, and excellent customer support."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 bg-spice-brown">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
                  Global Presence
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-spice-cream mb-6">
                  From India to the World
                </h1>
                <p className="font-body text-lg text-spice-cream/80 leading-relaxed">
                  With a presence in over 50 countries, RawBazar has established 
                  itself as a trusted partner for spice importers worldwide.
                </p>
              </div>
            </div>
          </section>

          {/* Shipping & Logistics */}
          <GlobalPresenceSection />

          {/* Regional Presence */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
                  Regional Coverage
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Our Global Footprint
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regions.map((region) => (
                  <div
                    key={region.name}
                    className="bg-card rounded-xl p-8 shadow-card border border-border hover:border-spice-gold/30 transition-all duration-300"
                  >
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      {region.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {region.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {region.countries.map((country) => (
                        <span
                          key={country}
                          className="px-3 py-1 bg-spice-gold/10 text-spice-gold text-xs rounded-full"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Export Stats */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-spice-gold mb-2">50+</p>
                  <p className="text-muted-foreground">Countries Served</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-spice-gold mb-2">500+</p>
                  <p className="text-muted-foreground">Active Clients</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-spice-gold mb-2">1000+</p>
                  <p className="text-muted-foreground">Containers/Year</p>
                </div>
                <div className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold text-spice-gold mb-2">98%</p>
                  <p className="text-muted-foreground">On-time Delivery</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-spice-brown">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-spice-cream mb-6">
                Expand Your Spice Business
              </h2>
              <p className="text-spice-cream/80 max-w-2xl mx-auto mb-8">
                Whether you're an established importer or entering the spice market, 
                RawBazar is your trusted partner for premium Indian spices.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Become a Partner
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default GlobalPage;
