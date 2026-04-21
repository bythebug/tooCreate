import { Infinity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-dark dark:bg-luxury-dark py-16 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 mb-8 md:mb-0">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Infinity className="w-5 h-5 text-accent-foreground animate-infinity" />
            </div>
            <div>
              <span className="text-xl font-serif font-bold text-foreground">
                tooCreate
              </span>
              <p className="text-sm text-muted-foreground">
                Built To Scale.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm mb-2">
              Ready to scale your brand?
            </p>
            <a 
              href="mailto:hello@toocreate.com" 
              className="text-accent hover:text-accent/80 transition-colors font-medium"
            >
              hello@toocreate.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 tooCreate. All rights reserved. Built for brands that scale.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;