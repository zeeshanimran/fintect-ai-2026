import { PageHero } from "@/components/marketing";
const phases = [
  [
    "Discover",
    "Align outcomes, users, workflows, risk constraints, and integration assumptions.",
  ],
  [
    "Shape",
    "Break requirements into demonstrable slices with acceptance signals and architecture notes.",
  ],
  [
    "Deliver",
    "Ship the V1 in weekly increments with continuous design, engineering, and stakeholder review.",
  ],
  [
    "Evolve",
    "Measure adoption, harden priority services, and expand the platform through a durable roadmap.",
  ],
];
export default function Delivery() {
  return (
    <main className="marketing">
      <PageHero
        tag="Delivery approach"
        title="Rapid V1 delivery, without disposable architecture."
        body="FinTech-AI 2026 is proposed as a focused product engagement: validate the highest-value workflows early, establish trustworthy foundations, and scale investment as evidence grows."
      />
      <section className="content-light">
        <div className="container">
          <div className="timeline">
            {phases.map((x) => (
              <div className="module" key={x[0]}>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </div>
            ))}
          </div>
          <div className="module-grid" style={{ marginTop: 14 }}>
            {[
              [
                "Suggested core team",
                "Product lead, product designer, two full-stack engineers, AI engineer, and fractional QA/security support.",
              ],
              [
                "Timeline estimation",
                "A discovery sprint establishes scope; workflow slices are estimated by UX, domain, data, integration, and assurance complexity.",
              ],
              [
                "Budget model",
                "A transparent team-based monthly range, with milestones tied to demonstrable product outcomes rather than document handoffs.",
              ],
              [
                "Long-term model",
                "Move from V1 squad to a stable product pod that owns reliability, adoption, integrations, and AI quality over time.",
              ],
              [
                "Maintainability",
                "Domain boundaries, reusable UI, typed contracts, testable policies, and observability are established where they protect future speed.",
              ],
              [
                "Commercial readiness",
                "Usage telemetry, tenant administration, billing controls, support surfaces, and compliance evidence are part of product planning.",
              ],
            ].map((x) => (
              <div className="module" key={x[0]}>
                <span>ENGAGEMENT</span>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
