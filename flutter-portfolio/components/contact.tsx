"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  // { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "www.linkedin.com/in/gufran-sundrani", label: "LinkedIn" },
  // { icon: Twitter, href: "https://twitter.com", label: "Twitter / X" },
  { icon: Mail, href: "mailto:gufransundrani@gmail.com", label: "Email" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-12 bg-card/30">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Contact
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
          Let&apos;s Build Something Together
        </h3>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          I&apos;m currently open to new opportunities and would love to hear
          about your project. Whether you have a question or just want to say
          hi, I&apos;ll do my best to get back to you!
        </p>

        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 mb-12"
          asChild
        >
          <a href="mailto:hello@example.com">Say Hello</a>
        </Button>

        <div className="flex items-center justify-center gap-4">
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
    </section>
  );
}
