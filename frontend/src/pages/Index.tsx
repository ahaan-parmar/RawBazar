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
        <meta name="description" content="RawBazar is India's trusted premium spice exporter. We offer authentic turmeric, cumin, cardamom, red chili, and more. 25+ years of excellence, 50+ countries served." />
        <meta name="keywords" content="Indian spice exporter, premium spices, turmeric exporter, cumin seeds, cardamom export, wholesale spices, bulk spice supplier, spices from India" />
        <link rel="canonical" href="https://rawbazar.com" />
        <meta property="og:title" content="RawBazar - Premium Indian Spice Exporter" />
        <meta property="og:description" content="Authentic Indian spices from farm to world. 25+ years of export excellence, 50+ countries served." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rawbazar.com" />
        <meta property="og:image" content="https://rawbazar.com/favicon.png" />
        <meta property="og:site_name" content="RawBazar" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RawBazar" />
        <meta name="twitter:title" content="RawBazar - Premium Indian Spice Exporter" />
        <meta name="twitter:description" content="Authentic Indian spices from farm to world. 25+ years of export excellence, 50+ countries served." />
        <meta name="twitter:image" content="https://rawbazar.com/favicon.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "RawBazar",
          "url": "https://rawbazar.com",
          "logo": "https://rawbazar.com/favicon.png",
          "description": "Premium Indian spice exporter based in Pune, India. Supplying authentic turmeric, cumin, cardamom, and more to 50+ countries worldwide.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Pune",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "sales",
            "availableLanguage": ["English", "Hindi"]
          },
          "areaServed": "Worldwide",
          "knowsAbout": ["Indian Spices", "Spice Export", "Turmeric", "Cumin", "Cardamom", "Black Pepper", "Red Chili"]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "RawBazar",
          "url": "https://rawbazar.com"
        })}</script>
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
