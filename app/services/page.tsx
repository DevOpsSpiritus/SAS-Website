import Link from "next/link";
import { ArrowRight, Bot, Code, Cpu, Zap, BarChart3, Shield, CheckCircle2 } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";

const integrations = [
  { name: "WhatsApp", cat: "Messaging" },
  { name: "Sage 300", cat: "ERP" },
  { name: "Sage Intacct", cat: "Finance" },
  { name: "Xero", cat: "Accounting" },
  { name: "HubSpot", cat: "CRM" },
  { name: "Zoho CRM", cat: "CRM" },
  { name: "Paystack", cat: "Payments" },
  { name: "Flutterwave", cat: "Payments" },
  { name: "Stitch", cat: "Banking data" },
  { name: "Slack", cat: "Comms" },
  { name: "Microsoft Teams", cat: "Comms" },
  { name: "Google Workspace", cat: "Productivity" },
];

const differentiators = [
  { label: "Pilot-first", desc: "Every engagement starts with a 4–8 week pilot. You see ROI before committing to full deployment." },
  { label: "FDE on-site", desc: "Our Field Deployment Engineers go to your office. Real adoption, not just a tool hand-over." },
  { label: "Compliance by design", desc: "Every agent is built for your regulatory requirements from day one — GDPR, data sovereignty, sector-specific rules. Not bolted on after." },
  { label: "Tailor-fit", desc: "No off-the-rack software. Every agent is calibrated to your SOPs, your data, and your systems." },
];

const services = [
  {
    icon: Bot,
    title: "Agentic Workflows",
    tag: "Most Popular",
    desc: "Pre-built, custom-tuned autonomous digital employees that perceive → decide → act across Sales, Finance, and Operations. Lead qualification, 3-way invoice matching, pick/pack orchestration — with approvals and full audit trails by design.",
    points: ["Sales pipeline automation", "Finance reconciliation agents", "Operations & logistics agents"],
  },
  {
    icon: Zap,
    title: "Automation & Integration",
    tag: null,
    desc: "Plug into your existing CRM, ERP, and accounting stack. We connect WhatsApp, HubSpot, Sage, Xero, Zoho, bank feeds via Stitch, and payments via Paystack and Flutterwave — while enforcing maker-checker controls at every step.",
    points: ["Zero rip-and-replace required", "Maker-checker enforcement", "Full activity logs"],
  },
  {
    icon: Cpu,
    title: "AI Knowledge Ops",
    tag: null,
    desc: "Transform your enterprise knowledge into an active asset. We build systems that centralise, index, and structure your data so AI agents can retrieve, reason, and route information accurately — giving your teams instant, secure insights.",
    points: ["Document intelligence", "Internal search & routing", "Secure knowledge retrieval"],
  },
  {
    icon: Code,
    title: "Custom AI Development",
    tag: null,
    desc: "For challenges that need a tailored approach. We build bespoke agents, fine-tuned models, and custom algorithms calibrated to your SOPs, your data, and your regulatory context — starting with a 4–8 week pilot to prove KPIs.",
    points: ["SOP-calibrated agents", "Pilot-first approach", "Regulatory compliance built-in"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Observability",
    tag: null,
    desc: "Every agent action is tracked, logged, and surfaced through dashboards your ops and finance teams can actually use. Know exactly what your AI employees are doing, how often, and with what accuracy.",
    points: ["Real-time dashboards", "Accuracy & cost metrics", "Exception alerts"],
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    tag: null,
    desc: "Built for your regulatory environment — GDPR, data sovereignty rules, financial regulations, and sector-specific requirements. We embed data governance, access controls, and audit trails into every deployment from day one.",
    points: ["Compliance-first by design", "Role-based access controls", "End-to-end audit trails"],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 glow-blob pointer-events-none" />
        <div className="container relative z-10 text-center">
          <FadeInOnView>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              What We Build
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto">
              Autonomous agents.<br />
              <span className="text-primary">Your context.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every solution is measured against your workflows, cut to fit, and deployed
              by engineers who embed in your team and learn your context.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_32px_hsl(200_100%_41%/0.4)] transition-all"
              >
                Get a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground/70 hover:border-primary/50 hover:text-foreground transition-all"
              >
                Our Process
              </Link>
            </div>
          </FadeInOnView>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 border-t border-border/40">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <FadeInOnView
                key={s.title}
                className="relative flex flex-col gap-5 rounded-2xl border border-border/50 bg-card/50 p-7 hover:border-primary/30 hover:bg-card/80 transition-all group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {s.tag && (
                  <span className="absolute top-5 right-5 rounded-full bg-primary/15 border border-primary/30 px-2.5 py-0.5 text-[10px] font-bold text-primary uppercase tracking-wider">
                    {s.tag}
                  </span>
                )}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <ul className="mt-auto space-y-1.5 pt-4 border-t border-border/30">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 border-t border-border/40 bg-card/20">
        <div className="container">
          <FadeInOnView className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">The Spiritus difference</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Every AI consultancy says they build custom solutions. Here&apos;s what we
              actually mean.
            </p>
          </FadeInOnView>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((d, i) => (
              <FadeInOnView
                key={d.label}
                className="flex flex-col gap-3 rounded-2xl border border-border/50 bg-background/70 p-6 hover:border-primary/30 transition-all"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-semibold">{d.label}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Pilot Promise */}
      <section className="py-24 border-t border-border/40">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeInOnView className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                The Pilot Promise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Prove the ROI<br />
                <span className="text-primary">before you scale.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Every engagement starts with a fixed-scope, 4–8 week pilot. We pick one
                high-value workflow, build the agent, deploy it, and measure it against
                your KPIs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If the numbers don&apos;t stack up, you don&apos;t scale. Simple as that.
                This approach has meant every one of our pilots has converted to a
                full deployment.
              </p>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                See the full process <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeInOnView>
            <FadeInOnView className="grid grid-cols-2 gap-4">
              {[
                { stat: "4–8 wks", label: "Pilot duration" },
                { stat: "100%", label: "Pilot-to-deployment rate" },
                { stat: "3×", label: "Average efficiency gain" },
                { stat: "<8 wks", label: "Avg. time to first live agent" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border/50 bg-card/60 p-6 text-center"
                >
                  <div className="text-3xl font-bold text-primary">{s.stat}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              ))}
            </FadeInOnView>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-24 border-t border-border/40 bg-card/20">
        <div className="container">
          <FadeInOnView className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Systems we connect</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              We meet your stack where it is. Zero rip-and-replace. Zero migration.
              Our agents plug in and get to work.
            </p>
          </FadeInOnView>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {integrations.map((int, i) => (
              <FadeInOnView
                key={int.name}
                className="flex flex-col items-center gap-1.5 rounded-2xl border border-border/50 bg-background/70 px-4 py-5 hover:border-primary/30 hover:bg-card/80 transition-all text-center"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="text-sm font-semibold">{int.name}</span>
                <span className="text-[10px] text-muted-foreground">{int.cat}</span>
              </FadeInOnView>
            ))}
          </div>
          <FadeInOnView className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don&apos;t see your system?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Get in touch — we&apos;ll make it work.
              </Link>
            </p>
          </FadeInOnView>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-24 border-t border-border/40">
        <div className="container text-center">
          <FadeInOnView>
            <h2 className="text-3xl md:text-4xl font-bold">Not sure where to start?</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Book a free 30-minute discovery call. We&apos;ll map your biggest pain point
              to an agent that can own it end-to-end.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-3.5 text-sm font-semibold hover:bg-foreground/85 transition-all"
            >
              Book a discovery call <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInOnView>
        </div>
      </section>
    </div>
  );
}
