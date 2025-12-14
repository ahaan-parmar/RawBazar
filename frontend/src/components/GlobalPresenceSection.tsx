import { Plane, Ship, Truck } from "lucide-react";

const countries = [
  { name: "United States", region: "North America" },
  { name: "United Kingdom", region: "Europe" },
  { name: "Germany", region: "Europe" },
  { name: "UAE", region: "Middle East" },
  { name: "Singapore", region: "Asia Pacific" },
  { name: "Australia", region: "Oceania" },
  { name: "Canada", region: "North America" },
  { name: "Netherlands", region: "Europe" },
  { name: "Saudi Arabia", region: "Middle East" },
  { name: "Japan", region: "Asia Pacific" },
  { name: "New Zealand", region: "Oceania" },
  { name: "France", region: "Europe" },
];

const GlobalPresenceSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
            Global Reach
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Delivering Worldwide
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            From India to your doorstep. Our reliable logistics network ensures 
            timely delivery of premium spices to over 50 countries worldwide.
          </p>
        </div>

        {/* Shipping Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-xl p-8 text-center shadow-card hover:shadow-deep transition-all duration-300 border border-border">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-spice-gold to-spice-saffron flex items-center justify-center">
              <Ship className="w-8 h-8 text-spice-brown" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Sea Freight</h3>
            <p className="text-muted-foreground text-sm">
              Cost-effective bulk shipping with FCL & LCL options for large orders
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 text-center shadow-card hover:shadow-deep transition-all duration-300 border border-border">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-spice-gold to-spice-saffron flex items-center justify-center">
              <Plane className="w-8 h-8 text-spice-brown" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Air Freight</h3>
            <p className="text-muted-foreground text-sm">
              Express delivery for urgent orders with door-to-door service
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 text-center shadow-card hover:shadow-deep transition-all duration-300 border border-border">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-spice-gold to-spice-saffron flex items-center justify-center">
              <Truck className="w-8 h-8 text-spice-brown" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">Road Transport</h3>
            <p className="text-muted-foreground text-sm">
              Regional delivery across neighboring countries with tracking
            </p>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="bg-secondary rounded-2xl p-8 md:p-12">
          <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">
            Countries We Export To
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {countries.map((country) => (
              <div
                key={country.name}
                className="bg-card rounded-lg p-4 text-center hover:bg-spice-gold/10 hover:border-spice-gold/30 border border-transparent transition-all duration-300"
              >
                <p className="font-semibold text-foreground text-sm">{country.name}</p>
                <p className="text-muted-foreground text-xs">{country.region}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8">
            And 40+ more countries globally
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
