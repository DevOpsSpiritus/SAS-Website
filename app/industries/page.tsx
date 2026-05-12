import Link from "next/link";
import { ArrowRight, Building2, HeartPulse, ShoppingCart, Truck, Briefcase, Landmark } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";

const industries = [
  {
    icon: Landmark,
    name: "Financial Services & Fintech",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    challenge: "Manual reconciliation, compliance overhead, slow onboarding",
    agents: [
      "3-way invoice matching & reconciliation agents",
      "KYC document verification & onboarding automation",
      "Fraud triage and alert routing",
      "Regulatory reporting preparation",
    ],
    stat: "40% reduction in reconciliation time",
  },
  {
    icon: HeartPulse,
    name: "Healthcare & MedTech",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    challenge: "Patient query overload, appointment no-shows, billing errors",
    agents: [
      "Patient intake and appointment scheduling agents",
      "Medical aid pre-authorisation automation",
      "Post-discharge follow-up workflows",
      "Clinical document summarisation",
    ],
    stat: "60% of patient queries resolved without human",
  },
  {
    icon: ShoppingCart,
    name: "Retail & E-commerce",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    challenge: "Stock discrepancies, returns processing, supplier communication delays",
    agents: [
      "Order management and fulfilment agents",
      "Supplier PO and invoice matching",
      "Returns and refund processing",
      "Demand forecasting data prep",
    ],
    stat: "3× faster order processing cycle",
  },
  {
    icon: Truck,
    name: "Logistics & Distribution",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    challenge: "Route inefficiencies, proof of delivery disputes, driver comms",
    agents: [
      "Delivery confirmation and POD capture agents",
      "Route exception handling",
      "Driver WhatsApp communication automation",
      "Carrier invoice reconciliation",
    ],
    stat: "25% reduction in disputed deliveries",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
    border: "border-rose-400/20",
    challenge: "Manual timesheets, proposal generation delays, client update overhead",
    agents: [
      "Timesheet and project cost tracking agents",
      "Proposal drafting and pricing automation",
      "Client status update and reporting agents",
      "Contract renewal alerts",
    ],
    stat: "8 hrs/week saved per consultant",
  },
  {
    icon: Building2,
    name: "Property & Real Estate",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
    challenge: "Tenant queries, lease renewals, maintenance scheduling",
    agents: [
      "Tenant query triage and resolution agents",
      "Lease renewal and document preparation",
      "Maintenance ticket routing and SLA tracking",
      "Utility billing reconciliation",
    ],
    stat: "50% fewer unresolved maintenance tickets",
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 glow-blob pointer-events-none" />
        <div className="absolute -top-1/4 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-accent/5 blur-[140px] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <FadeInOnView>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Industries We Serve
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto">
              Your industry.<br />
              <span className="text-primary">Our speciality.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We don&apos;t build generic AI. Every agent is shaped by the operational
              realities, regulatory context, and growth pressures of your specific sector.
            </p>
          </FadeInOnView>
        </div>
      </section>

      {/* Industry cards */}
      <section className="py-16 border-t border-border/40">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((ind, i) => (
              <FadeInOnView
                key={ind.name}
                className="flex flex-col gap-6 rounded-2xl border border-border/50 bg-card/50 p-8 hover:border-border/80 hover:bg-card/80 transition-all"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${ind.bg} border ${ind.border}`}>
                    <ind.icon className={`w-6 h-6 ${ind.color}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{ind.name}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      <span className="font-medium text-foreground/60">Challenge: </span>
                      {ind.challenge}
                    </p>
                  </div>
                </div>

                {/* Agent list */}
                <ul className="space-y-2">
                  {ind.agents.map((a) => (
                    <li key={a} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${ind.color} opacity-70`} />
                      {a}
                    </li>
                  ))}
                </ul>

                {/* Stat */}
                <div className={`mt-auto rounded-xl ${ind.bg} border ${ind.border} px-4 py-3`}>
                  <p className={`text-sm font-semibold ${ind.color}`}>{ind.stat}</p>
                </div>
              </FadeInOnView>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 border-t border-border/40">
        <div className="container text-center">
          <FadeInOnView>
            <h2 className="text-3xl md:text-4xl font-bold">Don&apos;t see your industry?</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Our agents are designed to adapt. If you have a workflow, we can likely automate it.
              Let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_32px_hsl(200_100%_41%/0.4)] transition-all"
            >
              Book a discovery call <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInOnView>
        </div>
      </section>
    </div>
  );
}
