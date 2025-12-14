import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Award, Globe, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import farmImage from "@/assets/farm.jpg";

const features = [
  {
    icon: Leaf,
    title: "Direct from Farmers",
    description: "Sourced directly from trusted farmers using traditional, sustainable practices",
  },
  {
    icon: Award,
    title: "FSSAI Certified",
    description: "Meeting the highest standards of food safety and quality",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving distributors, restaurants, and stores worldwide",
  },
  {
    icon: Truck,
    title: "Family Commitment",
    description: "Backed by our family's commitment to integrity and excellence",
  },
];

const AboutPreview = () => {
  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-deep">
              <img
                src={farmImage}
                alt="Indian spice farm at sunset"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spice-brown/40 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-xl shadow-deep border border-border">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-spice-gold to-spice-saffron flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-spice-brown">25</span>
                </div>
                <div>
                  <p className="font-display text-xl font-bold text-foreground">Years of</p>
                  <p className="text-spice-gold font-semibold">Excellence</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-spice-gold/30 rounded-2xl" />
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
              About RawBazar
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              About{" "}
              <span className="text-spice-gold">RawBazar</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              At RawBazar, we believe that the true essence of Indian spices lies in their journey from farm to table. 
              Based in Pune, India, we are a family-run spice export business built on generations of trust, quality, 
              and a deep respect for the farmers who nurture these treasures.
            </p>
            <p className="font-body text-muted-foreground text-lg mb-8 leading-relaxed">
              We work directly with farmers across India's rich spice-growing regions, building relationships that go 
              beyond transactions. By sourcing straight from the source, we ensure that every grain of turmeric, every 
              pod of cardamom, and every peppercorn carries the authentic flavors and aromas that have made Indian 
              spices legendary worldwide.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-spice-gold/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-spice-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <Link to="/about">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
