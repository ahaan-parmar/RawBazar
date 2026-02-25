import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import AboutPreview from "@/components/AboutPreview";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>RawBazar - Premium Indian Spice Exporter | Authentic Spices from Farm to World</title>
        <meta
          name="description"
          content="RawBazar is India's trusted premium spice exporter. We offer authentic turmeric, cumin, cardamom, red chili, and more. 25+ years of excellence, 50+ countries served."
        />
        <meta
          name="keywords"
          content="Indian spice exporter, premium spices, turmeric exporter, cumin seeds, cardamom export, wholesale spices, bulk spice supplier"
        />
        <link rel="canonical" href="https://rawbazar.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ProductsShowcase />
          <AboutPreview />
          <section className="py-12 md:py-16 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-card rounded-2xl p-6 border border-border shadow-card">
                  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <img
                    src="/fssai.webp"
                    alt="FSSAI Certification Logo"
                    className="w-28 h-28 md:w-32 md:h-32 object-contain mix-blend-multiply"
                  />
                  <div className="text-center md:text-left">
                    <p className="text-spice-gold text-sm font-body tracking-widest uppercase mb-2">
                      Certification
                    </p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                      FSSAI Certified
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      FSSAI License Number: 11526996000163
                    </p>
                  </div>
                </div>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border shadow-card text-center md:text-left">
                  <p className="text-spice-gold text-sm font-body tracking-widest uppercase mb-2">
                    GST
                  </p>
                  <p className="text-muted-foreground text-lg">
                    27AAHCJ0180C1ZX
                  </p>
                </div>
              </div>
            </div>
          </section>
          <GlobalPresenceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
