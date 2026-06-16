import Link from "next/link";
import { PageTitle, Status } from "@/components/app-shell";
import { RevenueChart } from "@/components/charts";
import { AlertTriangle, CalendarClock } from "lucide-react";
import { AIInsightCard, KpiCard } from "@/components/ui";
import {
  dashboardKpis,
  recentActivity,
  riskFlags,
  upcomingBilling,
  workflowHealth,
} from "@/lib/mock-data/dashboard";
export default function Dashboard() {
  return (
    <>
      <PageTitle
        title="Operations overview"
        subtitle="Monday, June 15 · Northstar Ventures"
        action="Create workflow"
      />
      <div className="kpi-grid">
        {dashboardKpis.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </div>
      <div className="dashboard-grid">
        <section className="card">
          <div className="card-head">
            <div>
              <h2>Revenue performance</h2>
              <span>Net recognized revenue · USD</span>
            </div>
            <button className="action">Last 7 months</button>
          </div>
          <div className="chart-wrap">
            <RevenueChart />
          </div>
        </section>
        <section className="card">
          <div className="card-head">
            <h2>AI decision brief</h2>
            <Status>3 new signals</Status>
          </div>
          <AIInsightCard />
        </section>
      </div>
      <div className="dashboard-grid">
        <section className="card">
          <div className="card-head">
            <h2>Workflow status summary</h2>
            <span>Across 6 active processes</span>
          </div>
          <div className="workflow-health">
            {workflowHealth.map((item) => (
              <div className="health-row" key={item.name}>
                <b>{item.name}</b>
                <div className="confidence-bar">
                  <i
                    style={{
                      width: `${item.progress}%`,
                      background:
                        item.tone === "red"
                          ? "#d4645c"
                          : item.tone === "amber"
                            ? "#dba746"
                            : "#25976c",
                    }}
                  />
                </div>
                <span>{item.count}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="card">
          <div className="card-head">
            <h2>Recent activity</h2>
            <span>Live audit stream</span>
          </div>
          <div className="activity">
            {recentActivity.map(({ title, detail, time, icon: Icon }) => (
              <div className="activity-row" key={title}>
                <span className="activity-icon">
                  <Icon size={14} />
                </span>
                <div>
                  <b>{title}</b>
                  <p>{detail}</p>
                </div>
                <time>{time}</time>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="dashboard-grid equal-grid">
        <section className="card">
          <div className="card-head">
            <div>
              <h2>Alerts & risk flags</h2>
              <span>Items requiring attention</span>
            </div>
            <AlertTriangle size={15} />
          </div>
          <div className="panel-list">
            {riskFlags.map((flag) => (
              <div className="panel-row" key={flag.title}>
                <span className={`panel-icon ${flag.tone}`}>
                  <AlertTriangle size={14} />
                </span>
                <div>
                  <b>{flag.title}</b>
                  <p>{flag.detail}</p>
                </div>
                <Status tone={flag.tone}>
                  {flag.tone === "red" ? "Critical" : "Review"}
                </Status>
              </div>
            ))}
          </div>
        </section>
        <section className="card">
          <div className="card-head">
            <div>
              <h2>Upcoming billing & subscription</h2>
              <span>Next 30 days</span>
            </div>
            <CalendarClock size={15} />
          </div>
          <div className="panel-list">
            {upcomingBilling.map((item) => (
              <div className="panel-row" key={item.title}>
                <span className="panel-icon green">
                  <CalendarClock size={14} />
                </span>
                <div>
                  <b>{item.title}</b>
                  <p>{item.detail}</p>
                </div>
                <Status
                  tone={item.status === "Action needed" ? "amber" : "gray"}
                >
                  {item.status}
                </Status>
              </div>
            ))}
          </div>
          <Link className="panel-link" href="/dashboard/billing">
            Open subscription center →
          </Link>
        </section>
      </div>
    </>
  );
}
