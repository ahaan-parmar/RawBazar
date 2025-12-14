import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";
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
    description: "Known as the 'Golden Healer', our turmeric boasts high curcumin content (4-5%) and vibrant golden color. Sourced from the finest farms in Andhra Pradesh and Maharashtra.",
    image: turmericImg,
    sizes: ["25kg Bags", "50kg Bags", "Bulk (Container)"],
    origin: "Andhra Pradesh, India",
    uses: "Culinary, Medicinal, Cosmetics",
  },
  {
    id: 2,
    name: "Red Chili Powder",
    description: "Premium quality red chili powder with perfect heat level and vibrant color. Available in various grades from mild to extra hot. Sourced from Gujarat and Rajasthan.",
    image: redChiliImg,
    sizes: ["25kg Bags", "50kg Bags", "Bulk (Container)"],
    origin: "Gujarat, India",
    uses: "Culinary, Food Processing",
  },
  {
    id: 3,
    name: "Cumin Seeds",
    description: "Aromatic cumin seeds with intense earthy flavor and distinctive aroma. High volatile oil content ensuring maximum flavor. Sourced from Gujarat and Rajasthan.",
    image: cuminImg,
    sizes: ["25kg Bags", "50kg Bags", "Bulk (Container)"],
    origin: "Gujarat, India",
    uses: "Culinary, Essential Oils",
  },
  {
    id: 4,
    name: "Green Cardamom",
    description: "The 'Queen of Spices' - premium grade green cardamom with intense aroma and flavor. Hand-picked and carefully sorted. Sourced from Kerala and Karnataka.",
    image: cardamomImg,
    sizes: ["10kg Bags", "25kg Bags", "Bulk"],
    origin: "Kerala, India",
    uses: "Culinary, Beverages, Medicinal",
  },
  {
    id: 5,
    name: "Coriander Seeds",
    description: "Fresh citrus notes and versatile flavor profile. Clean, uniform seeds with excellent aroma. Sourced from Rajasthan and Madhya Pradesh.",
    image: corianderImg,
    sizes: ["25kg Bags", "50kg Bags", "Bulk (Container)"],
    origin: "Rajasthan, India",
    uses: "Culinary, Essential Oils",
  },
  {
    id: 6,
    name: "Black Pepper",
    description: "The 'King of Spices' - bold flavor with high piperine content. Available in various grades including TGEB, FAQ, and specialty grades. Sourced from Kerala.",
    image: blackPepperImg,
    sizes: ["25kg Bags", "50kg Bags", "Bulk (Container)"],
    origin: "Kerala, India",
    uses: "Culinary, Food Processing",
  },
  {
    id: 7,
    name: "Cinnamon Sticks",
    description: "Ceylon-quality cinnamon with sweet warmth and delicate aroma. Available in various quill sizes. Sourced from Kerala and Tamil Nadu.",
    image: cinnamonImg,
    sizes: ["10kg Bags", "25kg Bags", "Bulk"],
    origin: "Kerala, India",
    uses: "Culinary, Beverages, Cosmetics",
  },
  {
    id: 8,
    name: "Saffron",
    description: "Liquid gold - highest grade Kashmiri saffron with intense color and aroma. Hand-picked and sun-dried. The finest saffron from the Kashmir Valley.",
    image: saffronImg,
    sizes: ["1kg", "5kg", "10kg"],
    origin: "Kashmir, India",
    uses: "Culinary, Medicinal, Cosmetics",
  },
];

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Premium Indian Spices Collection | RawBazar Export Products</title>
        <meta
          name="description"
          content="Explore our premium collection of Indian spices: Turmeric, Red Chili, Cumin, Cardamom, Black Pepper, Cinnamon, Saffron. Available for bulk export worldwide."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-12 md:pb-16 bg-spice-brown">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-3">
                  Our Products
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-spice-cream mb-4">
                  Premium Indian Spices
                </h1>
                <p className="font-body text-lg text-spice-cream/80 leading-relaxed">
                  Discover our extensive range of export-quality spices, sourced directly 
                  from the finest farms across India. Each product meets international 
                  quality standards.
                </p>
              </div>
            </div>
          </section>

          {/* Product Catalog */}
          <ProductCatalog />

          {/* Special Requests Section */}
          <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Looking for Something Unique?
                </h2>
                <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                  We accept special product requests based on your market needs.
                  <br />
                  If it's not listed, just ask — we're happy to source and supply it for you!
                </p>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Request Special Product
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Featured Products List */}
          <section className="py-12 md:py-16 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="space-y-12">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="relative rounded-2xl overflow-hidden shadow-deep group">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-spice-brown/40 to-transparent" />
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                        {product.name}
                      </h2>
                      <p className="text-muted-foreground text-lg mb-5 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-sm font-semibold text-spice-gold mb-1">Origin</p>
                          <p className="text-foreground">{product.origin}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-spice-gold mb-1">Uses</p>
                          <p className="text-foreground">{product.uses}</p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm font-semibold text-spice-gold mb-2">Available Packaging</p>
                        <div className="flex flex-wrap gap-2">
                          {product.sizes.map((size) => (
                            <span
                              key={size}
                              className="px-4 py-2 bg-secondary text-foreground text-sm rounded-full border border-border"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button variant="hero" asChild>
                        <Link to="/contact">
                          Request Quote
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-12 md:py-16 bg-spice-brown">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-spice-cream mb-4">
                Looking for Custom Products?
              </h2>
              <p className="text-spice-cream/80 max-w-2xl mx-auto mb-6">
                We also offer custom spice blends, private labeling, and specialized 
                packaging to meet your specific requirements.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact for Custom Orders
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

export default ProductsPage;
