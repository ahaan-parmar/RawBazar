import { Sparkles, Leaf, Flame, Wheat, Droplets, ChefHat } from "lucide-react";

const catalogData = {
  spices: [
    "Kashmiri Mirchi Powder",
    "Mirchi Powder",
    "Dhania Powder",
    "Haldi Powder",
    "Goda Masala",
    "Kanda Lasoon Masala",
    "Garam Masala",
    "Chaat Masala",
  ],
  powder: [
    "Dalchini Powder",
    "Moringa Powder",
    "Black Pepper Powder",
    "Jeera Powder",
    "Elaichi Powder",
    "Dry Ginger Powder",
  ],
  seeds: [
    "Mohari",
    "Jeera",
    "Methi",
    "Ajwain",
    "Sauf",
    "Sunflower Seeds",
    "Pumpkin Seeds",
    "Chia Seeds",
    "Flax Seeds",
    "Sesame Seeds",
    "Mix Seeds",
  ],
  millets: [
    "Jowar",
    "Ragira",
    "Bajra",
    "Raagi",
    "Quinoa",
    "Rolled Oats",
    "Oats",
    "Bhagar",
    "Makhana Plain",
    "Makhana Flavoured",
  ],
  salt: [
    "Black Salt",
    "Rock Salt",
    "Pink Salt",
    "Citric Acid",
  ],
  seasoning: [
    "Peri Peri Powder",
    "Garlic Powder",
    "Onion Powder",
    "Tomato Powder",
    "Oregano",
    "Chilli Flakes",
    "Pizza Pasta Seasoning",
    "Nutmeg Powder",
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
            Explore our comprehensive range of spices, powders, seeds, millets, salts and seasonings.
            All products are FSSAI certified and available for bulk export.
          </p>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

          {/* Powder */}
          <div className="relative bg-gradient-to-br from-spice-gold/5 via-card to-card rounded-2xl p-6 shadow-card hover:shadow-deep transition-all duration-300 border-2 border-spice-gold/20 hover:border-spice-gold/40 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-spice-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-spice-gold/10 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-spice-gold/30">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-spice-gold to-spice-saffron flex items-center justify-center shadow-warm">
                  <Sparkles className="w-5 h-5 text-spice-brown" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Powder
                </h3>
              </div>
              <ul className="space-y-2.5">
                {catalogData.powder.map((item, index) => (
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

          {/* Seeds */}
          <div className="relative bg-gradient-to-br from-green-500/5 via-card to-card rounded-2xl p-6 shadow-card hover:shadow-deep transition-all duration-300 border-2 border-green-500/20 hover:border-green-500/40 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/10 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-green-500/30">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-warm">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Seeds
                </h3>
              </div>
              <ul className="space-y-2.5">
                {catalogData.seeds.map((item, index) => (
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

          {/* Millets */}
          <div className="relative bg-gradient-to-br from-amber-500/5 via-card to-card rounded-2xl p-6 shadow-card hover:shadow-deep transition-all duration-300 border-2 border-amber-500/20 hover:border-amber-500/40 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/10 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-amber-500/30">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center shadow-warm">
                  <Wheat className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Millets
                </h3>
              </div>
              <ul className="space-y-2.5">
                {catalogData.millets.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-muted-foreground hover:text-foreground transition-colors group/item"
                  >
                    <span className="text-amber-500 mt-1.5 text-lg leading-none">✦</span>
                    <span className="flex-1 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Salt */}
          <div className="relative bg-gradient-to-br from-slate-500/5 via-card to-card rounded-2xl p-6 shadow-card hover:shadow-deep transition-all duration-300 border-2 border-slate-500/20 hover:border-slate-500/40 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-slate-500/10 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-slate-500/30">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center shadow-warm">
                  <Droplets className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Salt
                </h3>
              </div>
              <ul className="space-y-2.5">
                {catalogData.salt.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-muted-foreground hover:text-foreground transition-colors group/item"
                  >
                    <span className="text-slate-500 mt-1.5 text-lg leading-none">✦</span>
                    <span className="flex-1 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Seasoning */}
          <div className="relative bg-gradient-to-br from-orange-500/5 via-card to-card rounded-2xl p-6 shadow-card hover:shadow-deep transition-all duration-300 border-2 border-orange-500/20 hover:border-orange-500/40 group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/10 transition-colors" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-5 pb-4 border-b-2 border-orange-500/30">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-400 flex items-center justify-center shadow-warm">
                  <ChefHat className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Seasoning
                </h3>
              </div>
              <ul className="space-y-2.5">
                {catalogData.seasoning.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-muted-foreground hover:text-foreground transition-colors group/item"
                  >
                    <span className="text-orange-500 mt-1.5 text-lg leading-none">✦</span>
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
