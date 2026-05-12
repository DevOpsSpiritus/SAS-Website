// app/process/page.tsx
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, BarChart2, Users } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    duration: "Week 1–2",
    description:
      "We start by diving deep into your business — your workflows, your systems, your pain points, and your goals. We map every handoff, identify the highest-value automation opportunities, and define a strategic roadmap with clear KPIs before writing a single line of code.",
    deliverables: ["Workflow audit", "Opportunity map", "ROI forecast", "Agent roadmap"],
  },
  {
    step: "02",
    title: "Design & Architecture",
    duration: "Week 2–3",
    description:
      "Our engineers design the agent's decision logic, integration touchpoints, and approval flows. We define how it perceives, decides, and acts — including every exception case, escalation path, and audit trail requirement.",
    deliverables: ["Agent architecture doc", "Integration plan", "Approval flow design", "Security & compliance review"],
  },
  {
    step: "03",
    title: "Build & Integrate",
    duration: "Week 3–6",
    description:
      "We build the agent and connect it to your systems — Sage, Xero, HubSpot, WhatsApp, payment gateways, and more. Our iterative build cycles include you at every stage so nothing is a surprise at launch.",
    deliverables: ["Live agent in staging", "Integration testing", "UAT sessions", "Performance benchmarks"],
  },
  {
    step: "04",
    title: "Field Deployment",
    duration: "Week 6–8",
    description:
      "Our FDEs go on-site. They train your team, walk through every scenario with your staff, and make sure the agent works in your context — not just in a demo environment. We don't hand over a tool and leave.",
    deliverables: ["On-site FDE support", "Staff enablement", "Go-live checklist", "Hypercare period"],
  },
  {
    step: "05",
    title: "Optimise & Scale",
    duration: "Ongoing",
    description:
      "Once live, we monitor performance against your KPIs and tune continuously. Accuracy, resolution rate, cost-per-transaction — everything is tracked. When the pilot proves ROI, we move fast to scale across the next workflow.",
    deliverables: ["Performance dashboard", "Monthly reviews", "Continuous tuning", "Scale planning"],
  },
];

export default function ProcessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 glow-blob pointer-events-none" />
        <div className="container relative z-10 text-center">
          <FadeInOnView>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              How We Work
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto">
              Measured. Cut.<br />
              <span className="text-primary">Deployed on-site.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We don&apos;t deliver off-the-rack software. Every agent is tailored to your
              workflows, integrated with your systems, and launched with our engineers
              physically in your office.
            </p>
          </FadeInOnView>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 border-t border-border/40">
        <div className="container max-w-4xl">
          <div className="space-y-4">
            {processSteps.map((s, i) => (
              <FadeInOnView
                key={s.step}
                className="grid md:grid-cols-5 gap-6 rounded-2xl border border-border/50 bg-card/50 p-7 hover:border-primary/30 hover:bg-card/80 transition-all"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* Left */}
                <div className="md:col-span-2 flex flex-col gap-1">
                  <span className="text-5xl font-bold text-primary/15 leading-none">{s.step}</span>
                  <h3 className="text-xl font-semibold mt-1">{s.title}</h3>
                  <span className="inline-block rounded-full border border-border/60 bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground mt-1 w-fit">
                    {s.duration}
                  </span>
                </div>
                {/* Right */}
                <div className="md:col-span-3 space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {s.deliverables.map((d) => (
                      <span
                        key={d}
                        className="rounded-lg border border-border/50 bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 border-t border-border/40 bg-card/20">
        <div className="container">
          <FadeInOnView className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Included in every engagement</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Regardless of scope or service, these four commitments come standard.
            </p>
          </FadeInOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: MapPin,
                title: "On-site FDE support",
                desc: "Our Field Deployment Engineers attend your office during go-live. Real handoff — not a Zoom call.",
              },
              {
                icon: ShieldCheck,
                title: "Compliance by design",
                desc: "Data governance, access controls, and audit trails are built into every agent from architecture stage.",
              },
              {
                icon: BarChart2,
                title: "KPI-first scoping",
                desc: "We define what success looks like before writing code. Accuracy, resolution rate, cost-per-transaction — all tracked.",
              },
              {
                icon: Users,
                title: "Staff enablement",
                desc: "Your team learns to work with the agent, monitor it, and escalate edge cases. We don't leave dependencies.",
              },
            ].map((item, i) => (
              <FadeInOnView
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-background/70 p-6 hover:border-primary/30 transition-all"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">{item.desc}</p>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot guarantee */}
      <section className="py-20 border-t border-border/40">
        <div className="container">
          <FadeInOnView>
            <div className="rounded-3xl border border-primary/25 bg-primary/5 p-8 md:p-12 text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                The Pilot Promise
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">
                Prove the value in 4–8 weeks.<br />
                <span className="text-primary">Then decide if you scale.</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl mx-auto">
                We scope one high-value workflow, build the agent, deploy it on-site,
                and measure it against KPIs you set. Every single pilot we&apos;ve run
                has converted to a full deployment — because we only propose
                workflows where the numbers stack up.
              </p>
              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_32px_hsl(200_100%_41%/0.4)] transition-all"
              >
                Start your pilot <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInOnView>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/40">
        <div className="container text-center">
          <FadeInOnView>
            <h2 className="text-3xl md:text-4xl font-bold">Ready to start the process?</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Book a free discovery session. We&apos;ll walk through your workflows
              and map out exactly what a pilot would look like for your business.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_32px_hsl(200_100%_41%/0.4)] transition-all"
            >
              Book a discovery session <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInOnView>
        </div>
      </section>
    </div>
  );
}