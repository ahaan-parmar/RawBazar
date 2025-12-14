import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Quality", path: "/quality" },
  { name: "Global Presence", path: "/global" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-spice-brown/95 backdrop-blur-md shadow-deep py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Raw Bazaar Logo" 
              className="h-24 md:h-28 lg:h-32 w-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative font-body text-sm font-medium transition-colors duration-300 py-2",
                  location.pathname === link.path
                    ? "text-spice-gold"
                    : "text-spice-cream/90 hover:text-spice-gold",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-spice-gold after:origin-left after:transition-transform after:duration-300",
                  location.pathname === link.path
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="whatsapp" size="sm" asChild>
              <a href="https://wa.me/919890661550" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Get Quote
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-spice-cream hover:text-spice-gold transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500",
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-spice-brown/90 backdrop-blur-md rounded-lg p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block py-2 px-4 rounded-md font-body transition-colors duration-300",
                  location.pathname === link.path
                    ? "bg-spice-gold/20 text-spice-gold"
                    : "text-spice-cream hover:bg-spice-gold/10 hover:text-spice-gold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a href="https://wa.me/919890661550" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
