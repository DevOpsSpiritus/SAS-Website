import Link from "next/link";
import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";

const tiers = [
  {
    name: "Pilot",
    price: "Custom",
    period: "",
    tagline: "Prove the value before you scale.",
    highlight: false,
    desc: "A focused 4–8 week engagement to build and deploy a single agent against your highest-impact workflow. You see measurable ROI before committing to a longer programme.",
    features: [
      "1 custom AI agent",
      "Single workflow focus",
      "Integration with 1–2 existing systems",
      "4–8 week delivery timeline",
      "On-site FDE support",
      "Performance dashboard",
      "Full audit trail",
      "30-day post-launch support",
    ],
    cta: "Start a pilot",
    ctaHref: "/contact",
    note: "Ideal for first-time deployments",
  },
  {
    name: "Growth",
    price: "Custom",
    period: "",
    tagline: "Scale across your operations.",
    highlight: true,
    desc: "Multi-agent deployment across Sales, Finance, and/or Operations. Expand from your pilot with confidence — each wave builds on what's already proven.",
    features: [
      "3–6 custom AI agents",
      "Cross-functional workflows",
      "Full stack integration (CRM, ERP, payments)",
      "Maker-checker and approval rules",
      "WhatsApp + email channel support",
      "Dedicated FDE on-site",
      "Real-time observability dashboard",
      "3-month optimisation programme",
      "Regulatory compliance review",
    ],
    cta: "Get a proposal",
    ctaHref: "/contact",
    note: "Most popular for growing businesses",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "Enterprise-grade. Globally deployable.",
    highlight: false,
    desc: "Full agentic transformation programme. Unlimited agents, dedicated engineering team, co-development, and strategic roadmap for businesses operating at scale across multiple entities.",
    features: [
      "Unlimited agents",
      "Multi-entity / multi-region deployment",
      "Dedicated engineering & FDE team",
      "Custom model fine-tuning",
      "SLA-backed uptime guarantees",
      "Executive-level analytics",
      "Multi-jurisdiction regulatory compliance",
      "Co-development & knowledge transfer",
      "24/7 monitoring & support",
    ],
    cta: "Talk to our team",
    ctaHref: "/contact",
    note: "For large organisations & groups",
  },
];

const faqs = [
  {
    q: "How is pricing determined?",
    a: "Every engagement is scoped based on the number of agents, integrations required, and the complexity of your workflows. We provide a fixed-fee proposal after a free discovery session — no surprises.",
  },
  {
    q: "Do I need to replace my existing systems?",
    a: "No. Our agents plug into your existing stack — Sage, Xero, HubSpot, WhatsApp, and more. We add intelligence without disruption.",
  },
  {
    q: "What's included in on-site FDE support?",
    a: "Our Field Deployment Engineers are local experts who work alongside your team during deployment. They ensure the agent works in your context, speaks your language, and fits your culture.",
  },
  {
    q: "How quickly can I see results?",
    a: "Pilot engagements are designed to prove measurable KPIs within 4–8 weeks. Most clients see tangible ROI (time saved, errors eliminated) within the first two weeks of go-live.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "Our Pilot tier is designed to be low-risk. After the pilot, you decide whether and how fast to scale — there's no obligation to expand.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 glow-blob pointer-events-none" />
        <div className="container relative z-10 text-center">
          <FadeInOnView>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Pricing
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto">
              Prove it first.<br />
              <span className="text-primary">Then scale it.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every engagement starts with a scoped pilot. No lock-in, no off-the-rack
              packages — just a proposal built around your specific workflows and goals.
            </p>
          </FadeInOnView>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-16 border-t border-border/40">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-5 items-stretch">
            {tiers.map((tier, i) => (
              <FadeInOnView
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                  tier.highlight
                    ? "border-primary/50 bg-primary/5 shadow-[0_0_60px_-15px_hsl(200_100%_41%/0.3)]"
                    : "border-border/50 bg-card/50 hover:border-border/80 hover:bg-card/80"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-3.5 py-1 text-xs font-bold text-primary-foreground">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className={`w-4 h-4 ${tier.highlight ? "text-primary" : "text-muted-foreground"}`} />
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{tier.name}</span>
                  </div>
                  <p className="text-2xl font-bold">{tier.price}</p>
                  <p className={`text-sm mt-1 font-medium ${tier.highlight ? "text-primary" : "text-muted-foreground"}`}>
                    {tier.tagline}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{tier.desc}</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlight ? "text-primary" : "text-muted-foreground"}`} />
                      <span className={tier.highlight ? "text-foreground/80" : "text-muted-foreground"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <p className="text-xs text-muted-foreground mb-3 text-center">{tier.note}</p>
                  <Link
                    href={tier.ctaHref}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all ${
                      tier.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_24px_hsl(200_100%_41%/0.4)]"
                        : "bg-foreground text-background hover:bg-foreground/85"
                    }`}
                  >
                    {tier.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 border-t border-border/40">
        <div className="container max-w-3xl">
          <FadeInOnView className="text-center mb-12">
            <h2 className="text-3xl font-bold">Common questions</h2>
          </FadeInOnView>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeInOnView
                key={faq.q}
                className="rounded-2xl border border-border/50 bg-card/50 p-6 hover:border-border/80 transition-all"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </FadeInOnView>
            ))}
          </div>

          <FadeInOnView className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10 transition-all"
            >
              Talk to our team <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInOnView>
        </div>
      </section>
    </div>
  );
}
