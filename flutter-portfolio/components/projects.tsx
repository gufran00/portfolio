"use client";

import { useState } from "react";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  featured: boolean;
  playStore?: string;
  appStore?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "TVARIX",
    description:
      "OTT streaming application developed using Flutter with responsive UI, REST API integration, video streaming features, and smooth cross-platform performance for Android devices.",
    image: "/projects/tvarix.png",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Provider",
      "Responsive UI",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.tvarix.app",
    featured: true,
  },
  {
    title: "TVARIX Seller",
    description:
      "Seller management application for TVARIX platform enabling vendors to manage products, orders, and business operations with real-time data synchronization.",
    image: "/projects/tvarix-seller.png",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "State Management",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.tvarix.seller",
    featured: true,
  },
  {
    title: "TVARIX Delivery",
    description:
      "Delivery partner application with order tracking, delivery management, live updates, and optimized workflow for delivery operations.",
    image: "/projects/tvarix-delivery.png",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Google Maps",
      "Responsive UI",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.tvarix.delivery",
    featured: true,
  },
  {
    title: "BNI Prometheus",
    description:
      "Business networking mobile application developed for BNI with user management, event features, networking tools, and responsive Flutter UI implementation.",
    image: "/projects/bni.png",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Provider",
      "Firebase",
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.bni.prometheus",
    featured: true,
  },
  {
    title: "TCC (The Cleaning Company)",
    description:
      "Service-based mobile application for cleaning services with booking functionality, responsive UI, API integration, and smooth customer experience.",
    image: "/projects/tcc.png",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Responsive UI",
    ],
    featured: true,
  },
  {
    title: "METROLETTS",
    description:
      "Modern mobile application built using Flutter focusing on responsive design, optimized performance, and user-friendly experience.",
    image: "/projects/metroletts.png",
    technologies: [
      "Flutter",
      "Dart",
      "API Integration",
      "UI/UX",
    ],
    featured: true,
  },
  
];

export function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll
    ? projects
    : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />

          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Projects
          </h2>

          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedProjects.map(
            ({
              title,
              description,
              technologies,
              appStore,
              playStore,
              github,
            }) => (
              <div
                key={title}
                className="group relative flex flex-col p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg"
              >
                {/* Phone Mockup */}
                <div className="aspect-[9/16] mb-6 rounded-xl bg-secondary/50 border border-border/30 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-4">
                    <Smartphone className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />

                    <span className="text-xs text-muted-foreground">
                      App Preview
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-foreground font-semibold text-lg mb-2">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}

                  {appStore && (
                    <a
                      href={appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View on App Store"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}

                  {playStore && (
                    <a
                      href={playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="View on Play Store"
                    >
                      <Smartphone className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            )
          )}
        </div>

        {/* Button */}
        <div className="text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll(!showAll)}
            className="border-border hover:bg-secondary"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
}