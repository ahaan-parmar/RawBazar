import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Award, Globe, Truck, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import turmericImage from "@/assets/aboutuspic.jpeg";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We're committed to sustainable farming practices that protect the environment and support local communities.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Every spice undergoes rigorous testing to meet international food safety and quality standards.",
  },
  {
    icon: Users,
    title: "Fair Trade",
    description: "We work directly with farmers, ensuring fair prices and fostering long-term partnerships.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for Indian spices drives us to deliver only the finest products to our customers.",
  },
];

const milestones = [
  { year: "1998", event: "RawBazar founded in Mumbai" },
  { year: "2005", event: "First international export to UAE" },
  { year: "2010", event: "Expanded to 20+ countries" },
  { year: "2015", event: "ISO 22000 certification achieved" },
  { year: "2020", event: "Launched organic product line" },
  { year: "2024", event: "Serving 50+ countries globally" },
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About RawBazar | Family-Run Spice Export Business from Pune, India</title>
        <meta
          name="description"
          content="RawBazar is a family-run spice export business based in Pune, India. We work directly with farmers, ensuring FSSAI certified premium spices with authentic flavors from farm to table."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 bg-spice-brown relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-spice-gold rounded-full blur-3xl" />
            </div>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
              <div className="max-w-3xl">
                <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
                  About Us
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-spice-cream mb-6">
                  About RawBazar
                </h1>
                <p className="font-body text-lg text-spice-cream/80 leading-relaxed">
                  At RawBazar, we believe that the true essence of Indian spices lies in their journey from farm to table. 
                  Based in Pune, India, we are a family-run spice export business built on generations of trust, quality, 
                  and a deep respect for the farmers who nurture these treasures.
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-deep">
                    <img
                      src={turmericImage}
                      alt="Premium turmeric - the golden spice"
                      className="w-full h-96 lg:h-[500px] object-cover"
                    />
                  </div>  
                </div>

                <div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Our story is simple yet meaningful. We work directly with farmers across India's rich spice-growing 
                      regions, building relationships that go beyond transactions. By sourcing straight from the source, 
                      we ensure that every grain of turmeric, every pod of cardamom, and every peppercorn carries the 
                      authentic flavors and aromas that have made Indian spices legendary worldwide.
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                      What Makes Us Different
                    </h3>
                    <p>
                      We're not just exporters—we're storytellers of India's spice heritage. When you partner with 
                      RawBazar, you're getting more than premium spices. You're getting products that are:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Sourced directly from trusted farmers who use traditional, sustainable practices</li>
                      <li>FSSAI certified, meeting the highest standards of food safety and quality</li>
                      <li>Carefully selected, processed, and packed to preserve their natural goodness</li>
                      <li>Backed by our family's commitment to integrity and excellence</li>
                    </ul>
                    <h3 className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                      Our Promise
                    </h3>
                    <p>
                      Whether you're a distributor in Vietnam, a restaurant owner in Europe, or a specialty store in 
                      the USA, we treat every client like family. We understand that your business depends on consistent 
                      quality, reliable supply, and authentic products. That's the RawBazar promise—honest spices, honest 
                      relationships, and a taste of India that never disappoints.
                    </p>
                    <p className="font-semibold text-foreground mt-6">
                      From our family to yours, we invite you to experience the difference that care, quality, and 
                      authenticity make.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
                  Our Values
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  What Drives Us
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value) => (
                  <div key={value.title} className="bg-card rounded-xl p-8 shadow-card hover:shadow-deep transition-all duration-300 border border-border">
                    <div className="w-14 h-14 rounded-xl bg-spice-gold/10 flex items-center justify-center mb-6">
                      <value.icon className="w-7 h-7 text-spice-gold" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-16">
                <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
                  Our Journey
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Key Milestones
                </h2>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-spice-gold/30" />
                  <div className="space-y-8">
                    {milestones.map((milestone) => (
                      <div key={milestone.year} className="flex gap-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-spice-gold to-spice-saffron flex items-center justify-center flex-shrink-0 shadow-warm z-10">
                          <span className="font-display text-sm font-bold text-spice-brown">
                            {milestone.year}
                          </span>
                        </div>
                        <div className="bg-card rounded-xl p-6 shadow-card border border-border flex-1">
                          <p className="text-foreground font-medium">{milestone.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 bg-spice-brown">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-spice-cream mb-6">
                Partner With Us
              </h2>
              <p className="text-spice-cream/80 max-w-2xl mx-auto mb-8">
                Join our network of global partners and experience the RawBazar difference.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get In Touch
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

export default AboutPage;
