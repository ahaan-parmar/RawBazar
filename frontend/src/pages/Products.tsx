import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Premium Indian Spices Collection | RawBazar Export Products</title>
        <meta name="description" content="Explore our premium collection of Indian spices: Turmeric, Red Chili, Cumin, Cardamom, Black Pepper, Cinnamon, Saffron. Available for bulk export worldwide." />
        <meta name="keywords" content="buy Indian spices, turmeric wholesale, cumin export, cardamom supplier, red chili powder, black pepper exporter, bulk spice order, Indian spice catalog" />
        <link rel="canonical" href="https://raw-bazar.vercel.app/products" />
        <meta property="og:title" content="Premium Indian Spices Collection | RawBazar" />
        <meta property="og:description" content="Explore our premium collection of Indian spices available for bulk export worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raw-bazar.vercel.app/products" />
        <meta property="og:image" content="https://raw-bazar.vercel.app/favicon.png" />
        <meta property="og:site_name" content="RawBazar" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Indian Spices Collection | RawBazar" />
        <meta name="twitter:description" content="Explore our premium collection of Indian spices available for bulk export worldwide." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://raw-bazar.vercel.app" },
            { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://raw-bazar.vercel.app/products" }
          ]
        })}</script>
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

        </main>
        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
