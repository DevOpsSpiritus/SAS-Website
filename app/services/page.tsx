import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bot, Code, Cpu, Zap } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter font-display sm:text-5xl">
                  A Spectrum of Agentic Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a comprehensive suite of services to design, build,
                  and deploy intelligent agents that drive business value.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-2">
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Bot className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-display">
                      Agentic Workflows
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>
                    We architect and implement sophisticated, autonomous
                    agentic systems that orchestrate complex tasks, manage data
                    flows, and interact with various tools and APIs. Our focus
                    is on creating resilient and scalable workflows that
                    minimize human intervention and maximize efficiency.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-display">
                      Automation & Integration
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>
                    Our agents are designed to seamlessly integrate into your
                    existing technology stack. We connect with CRMs, ERPs,
                    ticketing systems, and data pipelines to automate manual
                    processes, reduce operational friction, and ensure data
                    consistency across your organization.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Cpu className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-display">
                      AI Knowledge Ops
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>
                    Transform your enterprise knowledge into an active asset.
                    We build systems that centralize, index, and structure your
                    data, enabling AI agents to retrieve, reason, and route
                    information accurately and securely, providing instant
                    insights for your teams.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-display">
                      Custom AI Development
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <CardDescription>
                    For unique challenges that require a tailored approach, we
                    offer bespoke AI development. Our team of researchers and
                    engineers can build custom models, agents, and algorithms
                    to address your specific business needs and unlock new
                    competitive advantages.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
