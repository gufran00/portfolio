"use client";

import { Github, Linkedin, Mail, MapPin, ArrowDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "www.linkedin.com/in/gufran-sundrani", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gufransundrani@gmail.com", label: "Email" },
  {
    icon: Phone,
    href: "tel:+917861994768",
    label: "Contact",
  },
];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 py-20">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-muted-foreground mb-6">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">Ahmedabad, Gujarat, India</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-foreground">Gufran Sundrani</span>
        </h1>

        <p className="text-xl md:text-2xl text-primary font-medium mb-6">
          Flutter Developer
        </p>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
          I build{" "}
          <span className="text-foreground font-medium">
            beautiful, performant mobile applications
          </span>{" "}
          with Flutter & Dart. Passionate about crafting pixel-perfect UIs and
          delivering seamless user experiences across iOS and Android.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-secondary"
            asChild
          >
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={label}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce hidden md:block"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
