import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  ChartNoAxesCombined,
  FileCheck2,
  Globe2,
  LockKeyhole,
  RefreshCcw,
  Workflow,
} from "lucide-react";
import { MarketingNav } from "@/components/marketing";

const features = [
  [
    Boxes,
    "Multi-tenant by design",
    "Isolated workspaces, configurable policies, and a scalable foundation for complex enterprise portfolios.",
  ],
  [
    BrainCircuit,
    "Decision intelligence",
    "Explainable recommendations with confidence thresholds, deterministic guardrails, and human approval.",
  ],
  [
    Workflow,
    "Financial workflows",
    "Turn approvals, compliance checks, onboarding, and renewals into visible, accountable processes.",
  ],
  [
    ChartNoAxesCombined,
    "Live operating picture",
    "Revenue, risk, automation, and subscription health in one decision-ready reporting layer.",
  ],
  [
    RefreshCcw,
    "Subscription operations",
    "Usage, plan controls, payment status, and renewal signals connected to the operating workflow.",
  ],
  [
    FileCheck2,
    "Document intelligence",
    "Securely ingest, classify, extract, validate, and approve financial documents at scale.",
  ],
  [
    Globe2,
    "Connected ecosystem",
    "API-first integrations across accounting, banking, CRM, storage, communications, and e-signature.",
  ],
  [
    LockKeyhole,
    "US/EU readiness",
    "Role controls, encryption, tenant audit trails, and data governance designed for regulated markets.",
  ],
];
export default function Home() {
  return (
    <main className="marketing">
      <MarketingNav />
      <section className="hero container">
        <span className="eyebrow">
          <span
            style={{
              width: 5,
              height: 5,
              borderRadius: 9,
              background: "#d9ff77",
            }}
          />{" "}
          Built for financial operators
        </span>
        <h1>
          AI-enhanced financial <em>operations</em> platform
        </h1>
        <p>
          FinTech-AI 2026 unifies financial workflows, decision support,
          analytics, billing, document processing, and integrations in one
          enterprise operating layer.
        </p>
        <div className="hero-actions">
          <Link href="/dashboard" className="btn btn-lime">
            View product demo <ArrowRight size={15} />
          </Link>
          <Link href="/architecture" className="btn btn-outline">
            Explore architecture
          </Link>
        </div>
        <div className="trust">
          <span>Explainable AI</span>
          <span>Tenant isolation</span>
          <span>Human approval</span>
          <span>Complete auditability</span>
        </div>
      </section>
      <div className="product-window">
        <div className="window-top">
          <i className="dot" />
          <i className="dot" />
          <i className="dot" />
        </div>
        <div className="window-inner">
          <aside className="window-side">
            <b>FA</b>
            <div className="mini-nav active" />
            <div className="mini-nav" />
            <div className="mini-nav" />
            <div className="mini-nav" />
            <div className="mini-nav" />
          </aside>
          <div className="window-main">
            <small style={{ color: "#718078" }}>OPERATIONS OVERVIEW</small>
            <h3 style={{ fontSize: 22, margin: "7px 0" }}>
              Good morning, Alexandra
            </h3>
            <div className="mini-kpis">
              <div className="mini-card">
                <small>Monthly revenue</small>
                <b>$1.42M</b>
              </div>
              <div className="mini-card">
                <small>Open workflows</small>
                <b>24</b>
              </div>
              <div className="mini-card">
                <small>Automation rate</small>
                <b>78.4%</b>
              </div>
            </div>
            <div className="mini-grid">
              <div className="chart-mock">
                <b>Revenue performance</b>
                <div className="chart-fill" />
                <div className="chart-line" />
              </div>
              <div className="chart-mock">
                <b>AI recommendations</b>
                <div
                  style={{
                    marginTop: 20,
                    padding: 14,
                    background: "#eff9f3",
                    borderRadius: 8,
                    fontSize: 11,
                    lineHeight: 1.5,
                  }}
                >
                  3 invoices show timing patterns that may affect the Q3 cash
                  position.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="feature-section">
        <div className="container">
          <div className="section-head">
            <h2>
              One operational system.
              <br />
              Every financial signal.
            </h2>
            <p>
              Purpose-built for teams that need speed without losing control,
              context, or accountability.
            </p>
          </div>
          <div className="feature-grid">
            {features.map(([Icon, title, body]) => (
              <div className="feature" key={title as string}>
                <div className="feature-icon">
                  {typeof Icon !== "string" && <Icon size={18} />}
                </div>
                <h3>{title as string}</h3>
                <p>{body as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="dark-section">
        <div className="container">
          <span className="eyebrow">Platform architecture</span>
          <div className="section-head" style={{ marginTop: 20 }}>
            <h2>
              Intelligence with
              <br />
              enterprise boundaries.
            </h2>
            <p style={{ color: "#9fb2aa" }}>
              Every AI action runs inside a controlled pipeline: retrieve
              approved context, validate the output, apply policy, request
              approval, and log the result.
            </p>
          </div>
          <div className="arch-flow">
            {[
              "Connected data",
              "Ingestion & validation",
              "RAG + AI services",
              "Policy & approvals",
              "Auditable action",
            ].map((x, i) => (
              <div className="arch-node" key={x}>
                <small>Layer 0{i + 1}</small>
                <h3>{x}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
