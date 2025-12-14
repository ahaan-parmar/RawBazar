import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact RawBazar | Export Inquiry & Business Partnership</title>
        <meta
          name="description"
          content="Get in touch with RawBazar for export inquiries, bulk orders, and business partnerships. Quick response within 24 hours. WhatsApp support available."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 bg-spice-brown">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl">
                <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
                  Contact Us
                </span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-spice-cream mb-6">
                  Let's Start a Conversation
                </h1>
                <p className="font-body text-lg text-spice-cream/80 leading-relaxed">
                  Ready to source premium Indian spices? Our export team is here 
                  to help you with pricing, samples, and shipping arrangements.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <ContactSection />

          {/* Map Section */}
          <section className="py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Visit Our Office
                </h2>
                <p className="text-muted-foreground">
                  FLAT NO 401 MOHIRA RESIDENCY, SR NO 5A/A/1A/7/1,<br />
                  KARVENAGAR, KOTHRUD, PUNE, PUNE, MAHARASHTRA, 411052
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-deep h-96 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123456789!2d73.7890123456789!3d18.5123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1234567890%3A0x1234567890abcdef!2sKothrud%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RawBazar Office Location"
                />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
