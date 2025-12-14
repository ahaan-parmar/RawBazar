import { Sparkles, Leaf, Flame } from "lucide-react";

const catalogData = {
  powders: [
    "Mehendi powder",
    "Multani powder",
    "Castor oil powder",
    "Saunf powder",
    "Gond powder",
    "Heladi [kumathiya] powder",
    "Con starch powder",
    "Camel milk powder",
    "Goat milk powder",
  ],
  spices: [
    "Turmeric powder",
    "Chilli powder",
    "Cumin [jeera] powder",
    "Coriander powder",
    "Black pepper",
    "Cardamom powder",
    "Dalchini powder",
    "Nutmeg powder",
  ],
  vegetablePowders: [
    "Dry mango powder",
    "Tomato powder",
    "Onion powder",
    "Garlic powder",
    "Ginger powder",
    "Methi powder",
    "Beetroot powder",
    "Mint powder",
    "Curry leaves powder",
    "Spinach powder",
    "Dehydrated vegetable powder",
  ],
};

const ProductCatalog = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-3">
            Complete Catalog
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Product Range
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of powders, spices, and vegetable powders. 
            All products are FSSAI certified and available for bulk export.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Powders */}
          <div className="relative bg-gradient-to-br from-spice-gold/5 via-card to-card rounded-2xl p-6 shadow-card hover:shadow-deep transition-all duration-300 border-2 border-spice-gold/20 hover:border-spice-gold/40 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-spice-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-spice-gold/10 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-spice-gold/30">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-spice-gold to-spice-saffron flex items-center justify-center shadow-warm">
                  <Sparkles className="w-5 h-5 text-spice-brown" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Powders
                </h3>
              </div>
              <ul className="space-y-2.5">
                {catalogData.powders.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-muted-foreground hover:text-foreground transition-colors group/item"
                  >
                    <span className="text-spice-gold mt-1.5 text-lg leading-none">✦</span>
                    <span className="flex-1 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Spices */}
          <div className="relative bg-gradient-to-br from-red-500/5 via-card to-card rounded-2xl p-6 shadow-card hover:shadow-deep transition-all duration-300 border-2 border-red-500/20 hover:border-red-500/40 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/10 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-red-500/30">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-warm">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Spices
                </h3>
              </div>
              <ul className="space-y-2.5">
                {catalogData.spices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-muted-foreground hover:text-foreground transition-colors group/item"
                  >
                    <span className="text-red-500 mt-1.5 text-lg leading-none">✦</span>
                    <span className="flex-1 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Vegetable Powders */}
          <div className="relative bg-gradient-to-br from-green-500/5 via-card to-card rounded-2xl p-6 shadow-card hover:shadow-deep transition-all duration-300 border-2 border-green-500/20 hover:border-green-500/40 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/10 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-green-500/30">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-warm">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Vegetable Powders
                </h3>
              </div>
              <ul className="space-y-2.5">
                {catalogData.vegetablePowders.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-muted-foreground hover:text-foreground transition-colors group/item"
                  >
                    <span className="text-green-500 mt-1.5 text-lg leading-none">✦</span>
                    <span className="flex-1 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            All products are available in various packaging sizes. Contact us for pricing and bulk order inquiries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
