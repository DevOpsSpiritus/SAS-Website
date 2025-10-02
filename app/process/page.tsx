import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle, Milestone } from "lucide-react";

const processSteps = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We start by diving deep into your business to understand your goals, challenges, and opportunities. Together, we define a strategic roadmap for implementing agentic solutions that align with your objectives and deliver measurable ROI.",
  },
  {
    step: 2,
    title: "Design & Architecture",
    description:
      "Our team designs a robust and scalable architecture for your AI agents. This includes defining agent roles, data flows, integration points with existing systems, and safety protocols to ensure reliable and secure operation.",
  },
  {
    step: 3,
    title: "Development & Integration",
    description:
      "We build, train, and fine-tune your AI agents, integrating them seamlessly into your workflows. Our iterative development process includes rigorous testing and human-in-the-loop validation to ensure high performance and accuracy.",
  },
  {
    step: 4,
    title: "Deployment & Optimization",
    description:
      "Once deployed, we continuously monitor and optimize your agents' performance. We use advanced observability and analytics to track key metrics, gather feedback, and make data-driven improvements to enhance their effectiveness over time.",
  },
  {
    step: 5,
    title: "Support & Evolution",
    description:
      "We provide ongoing support and maintenance to ensure your agentic systems evolve with your business. Our partnership includes regular check-ins, performance reviews, and strategic guidance to help you stay ahead of the curve.",
  },
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter font-display sm:text-5xl">
                  A Partnership for Transformation
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our collaborative process ensures that we deliver solutions
                  that are not only technologically advanced but also perfectly
                  aligned with your strategic goals.
                </p>
              </div>
            </div>
            <div className="relative mt-12">
              <div
                className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-border"
                aria-hidden="true"
              />
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div
                    key={step.step}
                    className="relative grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div
                      className={`flex flex-col gap-4 ${
                        index % 2 === 0 ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20">
                          <span className="text-xl font-bold font-display text-primary">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold font-display">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                    <div
                      className={`hidden md:flex items-center justify-center ${
                        index % 2 === 0 ? "md:order-2" : "md:order-1"
                      }`}
                    >
                      <div className="w-32 h-32 bg-muted/20 rounded-full flex items-center justify-center">
                        <Milestone className="w-16 h-16 text-primary/50" />
                      </div>
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted/20">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter font-display md:text-4xl/tight">
                Ready to Build the Future?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's start the conversation and explore how agentic AI can
                revolutionize your business.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button size="lg" className="w-full group">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
