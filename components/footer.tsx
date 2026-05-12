import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Logo } from "./logo";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Integrations", href: "/services#integrations" },
    { label: "Process", href: "/process" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="col-span-2">
            <Logo size={36} />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground leading-relaxed">
              AI, custom-built for your business reality. We deploy autonomous digital
              employees that take decisive action — not just deliver insights.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com/company/spiritus-agentic-solutions"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/40 pt-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Spiritus Agentic Solutions. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            hello@spiritusagentic.com
          </p>
        </div>
      </div>
    </footer>
  );
}
