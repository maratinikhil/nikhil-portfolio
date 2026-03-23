import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/maratinikhil", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/marati-nikhil9/", label: "LinkedIn" },
    // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:marati.nikhil9@gmail.com", label: "Email" },
  ];

  return (
    <footer className="border-t border-border/40 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-semibold">Nikhil Marati</span>
            <p className="text-sm text-muted-foreground">
              DevOps & Cloud Engineer specializing in infrastructure automation
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-muted text-muted-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-95"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Nikhil Marati. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
