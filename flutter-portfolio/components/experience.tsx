import { ExternalLink } from "lucide-react";

type ExperienceType = {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
};

const experiences: ExperienceType[] = [
  {
    period: "Jan 2025 — May 2026",
    title: "Flutter Developer",
    company: "Infigrity IT Services",
    companyUrl: "https://infigrity.com",
    description:
      "Developed cross-platform mobile applications using Flutter and Dart for Android and iOS platforms. Built responsive and interactive user interfaces following Material Design and Cupertino guidelines. Integrated RESTful APIs, implemented state management solutions, and optimized app performance using Flutter DevTools.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Provider",
      "Bloc",
      "Responsive UI",
      "Flutter DevTools",
    ],
  },
  {
    period: "Oct 2024 — Dec 2024",
    title: "Flutter Developer Intern",
    company: "Infigrity IT Services",
    companyUrl: "https://infigrity.com",
    description:
      "Assisted in developing Flutter applications by building UI components, integrating APIs, fixing bugs, and collaborating with the development team. Gained practical experience in Flutter widgets, layouts, Git version control, and project workflows.",
    technologies: [
      "Flutter",
      "Dart",
      "REST API",
      "Git",
      "UI Development",
      "Bug Fixing",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-12 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />

          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Experience
          </h2>

          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-8">
          {experiences.map(
            (
              { period, title, company, companyUrl, description, technologies },
              index
            ) => (
              <div
                key={index}
                className="group grid md:grid-cols-[200px_1fr] gap-4 p-6 rounded-xl hover:bg-card border border-transparent hover:border-border/50 transition-all"
              >
                <div className="text-sm text-muted-foreground font-mono">
                  {period}
                </div>

                <div>
                  <h3 className="text-foreground font-semibold mb-1 flex items-center gap-2 flex-wrap">
                    {title} ·{" "}
                    <a
                      href={companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {company}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            View Full Resume
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}