import { Shield, Award, Leaf, FileCheck, Microscope, BadgeCheck } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    name: "FSSAI Certified",
    description: "Food Safety and Standards Authority of India",
  },
  {
    icon: Award,
    name: "ISO 22000:2018",
    description: "Food Safety Management System",
  },
  {
    icon: Leaf,
    name: "Organic Certified",
    description: "USDA & EU Organic Standards",
  },
  {
    icon: FileCheck,
    name: "APEDA Registered",
    description: "Agricultural Export Council of India",
  },
  {
    icon: Microscope,
    name: "Lab Tested",
    description: "Pesticide & Heavy Metal Free",
  },
  {
    icon: BadgeCheck,
    name: "HACCP Certified",
    description: "Hazard Analysis Critical Control",
  },
];

const QualitySection = () => {
  return (
    <section className="py-20 md:py-32 bg-spice-brown relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-spice-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-spice-saffron rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
            Quality Assurance
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-spice-cream mb-6">
            Certified Excellence
          </h2>
          <p className="font-body text-spice-cream/70 max-w-2xl mx-auto text-lg">
            Every batch of our spices undergoes rigorous testing and quality 
            checks. We maintain the highest international standards to ensure 
            you receive only the purest, safest products.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="group bg-spice-cream/5 backdrop-blur-sm border border-spice-gold/20 rounded-xl p-6 text-center hover:bg-spice-gold/10 hover:border-spice-gold/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-spice-gold to-spice-saffron flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <cert.icon className="w-7 h-7 text-spice-brown" />
              </div>
              <h4 className="font-display text-sm font-semibold text-spice-cream mb-2">
                {cert.name}
              </h4>
              <p className="text-spice-cream/60 text-xs leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quality Promise */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-spice-gold/10 border border-spice-gold/30 rounded-full">
            <div className="w-3 h-3 bg-spice-gold rounded-full animate-pulse" />
            <span className="text-spice-gold font-display text-lg font-semibold">
              100% Quality Guarantee on Every Shipment
            </span>
            <div className="w-3 h-3 bg-spice-gold rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
