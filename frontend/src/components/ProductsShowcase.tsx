import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import turmericImg from "@/assets/turmeric.jpg";
import redChiliImg from "@/assets/red-chili.jpg";
import cuminImg from "@/assets/cumin.jpg";
import cardamomImg from "@/assets/cardamom.jpg";
import corianderImg from "@/assets/coriander.jpg";
import blackPepperImg from "@/assets/black-pepper.jpg";
import cinnamonImg from "@/assets/cinnamon.jpg";
import saffronImg from "@/assets/saffron.jpg";

const products = [
  {
    id: 1,
    name: "Turmeric Powder",
    description: "Golden healer with high curcumin content",
    image: turmericImg,
    sizes: ["25kg", "50kg", "Bulk"],
  },
  {
    id: 2,
    name: "Red Chili Powder",
    description: "Vibrant color and perfect heat",
    image: redChiliImg,
    sizes: ["25kg", "50kg", "Bulk"],
  },
  {
    id: 3,
    name: "Cumin Seeds",
    description: "Aromatic with intense earthy flavor",
    image: cuminImg,
    sizes: ["25kg", "50kg", "Bulk"],
  },
  {
    id: 4,
    name: "Green Cardamom",
    description: "Queen of spices, premium grade",
    image: cardamomImg,
    sizes: ["10kg", "25kg", "Bulk"],
  },
  {
    id: 5,
    name: "Coriander Seeds",
    description: "Fresh citrus notes, versatile use",
    image: corianderImg,
    sizes: ["25kg", "50kg", "Bulk"],
  },
  {
    id: 6,
    name: "Black Pepper",
    description: "King of spices, bold flavor",
    image: blackPepperImg,
    sizes: ["25kg", "50kg", "Bulk"],
  },
  {
    id: 7,
    name: "Cinnamon Sticks",
    description: "Ceylon quality, sweet warmth",
    image: cinnamonImg,
    sizes: ["10kg", "25kg", "Bulk"],
  },
  {
    id: 8,
    name: "Saffron",
    description: "Liquid gold, highest grade",
    image: saffronImg,
    sizes: ["1kg", "5kg", "10kg"],
  },
];

const ProductsShowcase = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary spice-texture">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
            Our Premium Collection
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Handpicked Indian Spices
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Sourced directly from the finest farms across India, our spices 
            undergo rigorous quality checks to ensure exceptional flavor and purity.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-deep transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-spice-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-card-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 bg-spice-gold/10 text-spice-gold text-xs rounded-full font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="elegant" size="lg" asChild>
            <Link to="/products">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
