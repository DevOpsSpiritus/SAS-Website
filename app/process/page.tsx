import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CheckCircle, Milestone } from "lucide-react";
import Link from "next/link";

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
              {/* center line */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-border" aria-hidden="true" />

              <ol className="space-y-10">
                {processSteps.map((step) => (
                  <li key={step.step} className="relative">
                    {/* dot on the line */}
                    <div className="absolute left-1/2 top-3 -translate-x-1/2 z-10 h-4 w-4 rounded-full bg-background border-2 border-primary" />

                    {/* card */}
                    <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[auto,1fr] items-start">
                      <div className="hidden md:block pt-1 text-sm font-semibold text-primary w-20 text-right">
                        Step {step.step}
                      </div>
                      <div className="rounded-2xl border border-border bg-muted/10 p-6 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="md:hidden inline-block text-sm font-semibold text-primary">
                            Step {step.step}
                          </span>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
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
              <Button
                size="lg"
                className="w-full group transition-all duration-300 will-change-transform hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-12px_rgba(31,176,255,0.45)] hover:brightness-110"
                asChild
              >
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
