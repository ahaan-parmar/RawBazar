import { useState } from "react";
import { Send, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/api";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      company_name: formData.get('company_name') as string,
      contact_person: formData.get('contact_person') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      country: formData.get('country') as string,
      product_required: formData.get('product_required') as string || undefined,
      quantity: formData.get('quantity') as string,
      additional_details: formData.get('additional_details') as string || undefined,
    };
    
    try {
      await api.submitInquiry(data);
      
      toast({
        title: "Inquiry Submitted!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="inline-block text-spice-gold text-sm font-body tracking-widest uppercase mb-4">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Partner?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-10">
              Whether you're looking for bulk spice exports, custom packaging, 
              or have specific requirements, our team is ready to assist you.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-spice-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-spice-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">
                    FLAT NO 401 MOHIRA RESIDENCY,<br />
                    SR NO 5A/A/1A/7/1,<br />
                    KARVENAGAR, KOTHRUD, PUNE,<br />
                    PUNE, MAHARASHTRA, 411052
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-spice-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-spice-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+91 98906 61550</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-spice-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-spice-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground">rawbazarofficial@gmail.com</p>
                </div>
              </div>
            </div>

            <Button variant="whatsapp" size="lg" asChild>
              <a href="https://wa.me/919890661550" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-deep border border-border">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Export Inquiry Form
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name *
                  </label>
                  <Input
                    name="company_name"
                    required
                    placeholder="Your company name"
                    className="bg-background border-border focus:border-spice-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Contact Person *
                  </label>
                  <Input
                    name="contact_person"
                    required
                    placeholder="Your name"
                    className="bg-background border-border focus:border-spice-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    name="email"
                    required
                    type="email"
                    placeholder="email@company.com"
                    className="bg-background border-border focus:border-spice-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <Input
                    name="phone"
                    required
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className="bg-background border-border focus:border-spice-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Country *
                  </label>
                  <Input
                    name="country"
                    required
                    placeholder="Your country"
                    className="bg-background border-border focus:border-spice-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Product Required
                  </label>
                  <Input
                    name="product_required"
                    placeholder="e.g., Turmeric, Cumin"
                    className="bg-background border-border focus:border-spice-gold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Quantity (kg) *
                </label>
                <Input
                  name="quantity"
                  required
                  placeholder="e.g., 500kg, 1 ton"
                  className="bg-background border-border focus:border-spice-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Details
                </label>
                <Textarea
                  name="additional_details"
                  placeholder="Tell us more about your requirements..."
                  rows={4}
                  className="bg-background border-border focus:border-spice-gold resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-spice-brown border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Inquiry
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
