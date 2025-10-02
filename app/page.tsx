import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Bot, Code, Zap } from "lucide-react";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative py-20 md:py-32 lg:py-40 bg-grid-small-white/[0.05]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter font-display sm:text-5xl md:text-6xl lg:text-7xl text-glow">
                  Spiritus Agentic Solutions
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We build and deploy autonomous AI agents to automate complex
                  business processes and drive transformative results.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="group">
                    Request a Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="secondary" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute w-full h-full bg-primary/10 rounded-full blur-3xl" />
                <Bot className="relative w-48 h-48 md:w-64 md:h-64 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter font-display sm:text-5xl">
                  Accelerate Your Business with AI
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From automating repetitive tasks to unlocking new strategic
                  insights, our AI agents are designed to integrate seamlessly
                  into your operations.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Agentic Workflows</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We design and implement autonomous agentic systems that
                    streamline complex workflows, from data processing to
                    customer service.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Automation & Integration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our agents seamlessly integrate with your existing tools
                    and platforms, automating manual processes and boosting
                    efficiency.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>Custom AI Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We offer bespoke AI solutions, building custom models and
                    agents tailored to your unique business challenges and
                    goals.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted/20">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter font-display md:text-4xl/tight">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how our agentic solutions can help you achieve
                your goals.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button size="lg" className="w-full group">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
