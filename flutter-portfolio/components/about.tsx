import { Code2, Smartphone, Palette, Zap } from "lucide-react";

const skills = [
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Building cross-platform mobile apps with Flutter for iOS and Android with native performance.",
  },
  {
    icon: Code2,
    title: "Clean Architecture",
    description:
      "Implementing scalable, maintainable codebases using BLoC, Provider, and Riverpod patterns.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating beautiful, intuitive interfaces with custom animations and responsive layouts.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimizing apps for smooth 60fps animations, efficient memory usage, and fast load times.",
  },
];

const technologies = [
  "Flutter",
  "Dart",
  "Firebase",
  "REST APIs",
  "BLoC",
  "Provider",
  "Riverpod",
  "GetX",
  "Figma",
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
            About
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I&apos;m a passionate{" "}
              <span className="text-foreground font-medium">
                Flutter Developer
              </span>{" "}
              with 1.5+ years of experience building mobile applications. I
              specialize in creating performant, visually stunning apps that
              users love.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I&apos;m focused on building accessible, human-centered
              products at{" "}
              <span className="text-primary font-medium">Company Name</span>,
              where I develop mobile experiences used by thousands of users
              daily.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
