import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsShowcase from "@/components/ProductsShowcase";
import AboutPreview from "@/components/AboutPreview";
import QualitySection from "@/components/QualitySection";
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
          <QualitySection />
          <GlobalPresenceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
