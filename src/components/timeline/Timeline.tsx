import { Building, Building2, Calendar, Store } from "lucide-react";

const experiences = [
   {
    title: "Frontend Developer",
    company: "GEER IT SOLUTIONS (OJT)",
    period: "2025",
    description:
      "Contributed to the development of dynamic web applications, enhancing user experience and interface design.",
    technologies: ["Vue.js", "Nest.js", "TypeScript", "Quassar", "PostgreSQL"],
    icon: Building,
  },
  {
    title: "Frontend Developer",
    company: "GEER IT SOLUTIONS (OJT)",
    period: "2025",
    description:
      "Contributed to the development of dynamic web applications, enhancing user experience and interface design.",
    technologies: ["Vue.js", "Nest.js", "TypeScript", "Quassar", "PostgreSQL"],
    icon: Building,
  },
  {
    title: "Full Stack Developer",
    company: "CRISTOBAL RESERVATION (capstone)",
    period: "2024",
    description:
      "Developed a comprehensive reservation system for Cristobal Reservation, enabling users to book accommodations and manage their stays efficiently.",
    technologies: ["React", "Express.js", "MySQL", "Tailwind"],
    icon: Building2,
  },
  {
    title: "HELLO WORLD",
    company: "Bulacan State University (student)",
    period: "2023",
    description:
      "First time to code and learn programming languages. Learned the basics of HTML, CSS, and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    icon: Store,
  },
];

export default function Timeline() {
  return (
    <div className="max-w-(--breakpoint-sm)  ">
      <div className="relative ">
        {/* Timeline line */}
        <div className="absolute left-0 inset-y-0 border-l-2" />

        {experiences.map(
          (
            { company, description, period, technologies, title, icon: Icon },
            index
          ) => (
            <div key={index} className="relative pl-8 pb-5 last:pb-0">
              {/* Timeline Icon */}
              <div className="absolute left-px -translate-x-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-accent ring-8 ring-background">
                <Icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="pt-2 sm:pt-1 space-y-3">
                <p className="text-xs font-medium">{company}</p>
                <div>
                  <h3 className="text-xs font-semibold">{title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-xs">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-xs text-muted-foreground text-pretty">
                  {description}
                </p>
                {/* <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div> */}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
