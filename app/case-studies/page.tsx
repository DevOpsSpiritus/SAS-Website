import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeInOnView } from "@/components/FadeInOnView";

const stories = [
  {
    company: "A leading fintech company",
    industry: "Financial Services",
    industryColor: "text-primary bg-primary/10 border-primary/20",
    challenge:
      "The company's finance team spent 3 days per week manually matching supplier invoices against purchase orders and GRNs across 12 entities. Errors led to duplicate payments and audit risk.",
    solution:
      "Spiritus deployed a 3-way matching agent integrated directly with their Sage 300 instance. The agent automatically reconciles, flags exceptions, and routes approvals via WhatsApp — all with a full audit trail.",
    results: [
      { value: "97%", label: "Match accuracy" },
      { value: "3 days → 2 hrs", label: "Weekly reconciliation time" },
      { value: "$60k+", label: "Duplicate payments prevented (first 6 months)" },
    ],
    quote:
      "We went from dreading month-end to barely noticing it. The agent handles the routine; our team handles the exceptions.",
    author: "Finance Director",
  },
  {
    company: "A private healthcare network",
    industry: "Healthcare",
    industryColor: "text-accent bg-accent/10 border-accent/20",
    challenge:
      "With 4 clinics and a growing patient base, the admin team was overwhelmed with appointment requests, medical aid queries, and post-consultation follow-ups coming in via WhatsApp, email, and phone.",
    solution:
      "Spiritus built a patient concierge agent that triages incoming messages, books appointments in their practice management system, handles medical aid pre-auth status lookups, and sends automated follow-up reminders.",
    results: [
      { value: "65%", label: "Patient queries resolved without staff" },
      { value: "18 min → < 2 min", label: "Average query response time" },
      { value: "4.8 / 5", label: "Patient satisfaction score" },
    ],
    quote:
      "Our front desk used to spend 4 hours a day just answering WhatsApps. Now they focus on patients who are physically in the clinic.",
    author: "Chief Operating Officer",
  },
  {
    company: "A mid-size FMCG distributor",
    industry: "Logistics & Distribution",
    industryColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    challenge:
      "The distributor had 60+ drivers and 400+ daily deliveries. Proof-of-delivery disputes, missed signatures, and driver communication delays were creating billing backlogs and customer complaints.",
    solution:
      "Spiritus deployed a delivery operations agent that prompts drivers via WhatsApp for POD capture, cross-checks deliveries against dispatch records, auto-generates invoices on confirmed delivery, and escalates disputes to the accounts team.",
    results: [
      { value: "98%", label: "On-time POD capture rate" },
      { value: "3× faster", label: "Invoice generation cycle" },
      { value: "Zero", label: "Manual billing backlog within 60 days" },
    ],
    quote:
      "We used to invoice a week after delivery. Now it&apos;s same day. Our cash flow improved immediately.",
    author: "Operations Manager",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 glow-blob pointer-events-none" />
        <div className="container relative z-10 text-center">
          <FadeInOnView>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Case Studies
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl mx-auto">
              Real businesses.<br />
              <span className="text-primary">Real results.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every number on this page comes from a live deployment. No demos,
              no simulations — these are outcomes from real businesses running
              Spiritus agents today.
            </p>
          </FadeInOnView>
        </div>
      </section>

      {/* Story cards */}
      <section className="py-16 border-t border-border/40">
        <div className="container space-y-8">
          {stories.map((s, i) => (
            <FadeInOnView
              key={s.company}
              className="rounded-2xl border border-border/50 bg-card/50 overflow-hidden hover:border-border/80 transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="grid md:grid-cols-5">
                {/* Left — story */}
                <div className="md:col-span-3 p-8 md:p-10 flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${s.industryColor}`}>
                      {s.industry}
                    </span>
                    <span className="text-sm text-muted-foreground">{s.company}</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">The Challenge</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1.5">The Solution</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.solution}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-auto border-l-2 border-primary pl-4">
                    <p className="text-sm italic text-foreground/80">&ldquo;{s.quote}&rdquo;</p>
                    <cite className="mt-1.5 block text-xs text-muted-foreground not-italic">— {s.author}</cite>
                  </blockquote>
                </div>

                {/* Right — results */}
                <div className="md:col-span-2 bg-card/80 border-t md:border-t-0 md:border-l border-border/40 p-8 md:p-10 flex flex-col gap-4 justify-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Results</p>
                  {s.results.map((r) => (
                    <div key={r.label} className="space-y-0.5">
                      <p className="text-3xl font-bold text-primary">{r.value}</p>
                      <p className="text-sm text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInOnView>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/40">
        <div className="container text-center">
          <FadeInOnView>
            <h2 className="text-3xl md:text-4xl font-bold">Your business could be next.</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
              Book a free discovery session. We&apos;ll identify your highest-impact
              automation opportunity in 30 minutes.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_32px_hsl(200_100%_41%/0.4)] transition-all"
            >
              Start your pilot <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInOnView>
        </div>
      </section>
    </div>
  );
}
