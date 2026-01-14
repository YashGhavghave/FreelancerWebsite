import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Smartphone, Monitor, BrainCircuit, BotMessageSquare, Globe } from "lucide-react";

const services = [
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Android Development",
    description: "Crafting high-performance, custom Android applications tailored to your business needs.",
  },
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "Desktop App Development",
    description: "Building powerful and intuitive cross-platform desktop applications for Windows, macOS, and Linux.",
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "AI/ML Model Development",
    description: "Developing and deploying intelligent machine learning models to solve complex problems and drive growth.",
  },
  {
    icon: <BotMessageSquare className="h-8 w-8 text-primary" />,
    title: "LLM Development",
    description: "Leveraging Large Language Models to create advanced conversational AI, content generation, and more.",
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Web Development",
    description: "Creating modern, responsive, and scalable websites and web applications with exceptional user experiences.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We deliver top-tier development services with a focus on quality and affordability.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4">{service.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
