import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QualitySection from "@/components/QualitySection";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Microscope, Factory, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

const processes = [
  {
    icon: Microscope,
    title: "Laboratory Testing",
    description: "Every batch is tested in our in-house laboratory for moisture content, color value, volatile oil content, and contamination.",
    points: ["Microbiological analysis", "Pesticide residue testing", "Heavy metal testing", "Aflatoxin analysis"],
  },
  {
    icon: Factory,
    title: "Processing Standards",
    description: "Our state-of-the-art facilities maintain the highest hygiene and processing standards.",
    points: ["Temperature controlled storage", "Automated sorting systems", "Steam sterilization", "Metal detection"],
  },
  {
    icon: Truck,
    title: "Export Compliance",
    description: "All shipments comply with international food safety regulations and importing country requirements.",
    points: ["FSSAI compliance", "FDA registration", "EU standards", "Country-specific requirements"],
  },
];

const QualityPage = () => {
  return (
    <>
      <Helmet>
        <title>Quality & Certifications | RawBazar Export Standards</title>
        <meta
          name="description"
          content="RawBazar maintains the highest quality standards with ISO 22000, FSSAI, HACCP, and organic certifications. Learn about our rigorous quality control process."
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
                  Quality Assurance
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-spice-cream mb-6">
                  Uncompromising Quality Standards
                </h1>
                <p className="font-body text-lg text-spice-cream/80 leading-relaxed">
                  At RawBazar, quality isn't just a promise—it's our foundation. 
                  Every spice we export undergoes rigorous testing and quality 
                  checks to ensure you receive only the finest products.
                </p>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <QualitySection />

          {/* Quality Processes */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
                  Our Process
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Quality at Every Step
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {processes.map((process) => (
                  <div
                    key={process.title}
                    className="bg-card rounded-xl p-8 shadow-card border border-border"
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-spice-gold to-spice-saffron flex items-center justify-center mb-6">
                      <process.icon className="w-8 h-8 text-spice-brown" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      {process.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {process.description}
                    </p>
                    <ul className="space-y-3">
                      {process.points.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-spice-gold flex-shrink-0" />
                          <span className="text-foreground text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quality Guarantee */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Quality Guarantee
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  We stand behind every product we export. If any shipment doesn't 
                  meet the agreed specifications, we'll make it right—no questions asked.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                    <p className="font-display text-4xl font-bold text-spice-gold mb-2">100%</p>
                    <p className="text-foreground font-medium">Quality Tested</p>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                    <p className="font-display text-4xl font-bold text-spice-gold mb-2">0%</p>
                    <p className="text-foreground font-medium">Adulteration</p>
                  </div>
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                    <p className="font-display text-4xl font-bold text-spice-gold mb-2">24/7</p>
                    <p className="text-foreground font-medium">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-spice-brown">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-spice-cream mb-6">
                Request Quality Documentation
              </h2>
              <p className="text-spice-cream/80 max-w-2xl mx-auto mb-8">
                Need COA, test reports, or certification documents? Our team can 
                provide all necessary documentation for your imports.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Documents
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

export default QualityPage;
