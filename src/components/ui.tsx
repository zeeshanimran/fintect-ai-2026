import type { LucideIcon } from "lucide-react";
import { Check, FileText, Inbox, LoaderCircle, Sparkles } from "lucide-react";
import type { Integration } from "@/lib/mock-data/integrations";
import type { PlanName } from "@/lib/mock-data/billing";
import type { Workflow } from "@/lib/mock-data/workflows";

export type StatusTone = "green" | "amber" | "red" | "gray";

export function StatusBadge({ children, tone = "green" }: { children: React.ReactNode; tone?: StatusTone }) {
  return <span className={`status ${tone}`}>{children}</span>;
}

export function RiskBadge({ level }: { level: "High" | "Medium" | "Low" }) {
  const tone = level === "High" ? "red" : level === "Medium" ? "amber" : "gray";
  return <StatusBadge tone={tone}>{level}</StatusBadge>;
}

export function KpiCard({ label, value, trend, icon: Icon }: { label: string; value: string; trend: string; icon?: LucideIcon }) {
  return <div className="card kpi"><div className="kpi-top"><span>{label}</span>{Icon && <Icon size={15} />}</div><div className="kpi-value">{value}</div><span className="trend">{trend}</span></div>;
}

export function FeatureCard({ eyebrow, title, body, icon: Icon }: { eyebrow?: string; title: string; body: string; icon?: LucideIcon }) {
  return <div className="module">{Icon && <div className="feature-icon"><Icon size={18} /></div>}{eyebrow && <span>{eyebrow}</span>}<h3>{title}</h3><p>{body}</p></div>;
}

export function AIInsightCard({ status, onReview }: { status?: string; onReview?: () => void }) {
  return <div className="insight"><span className="insight-label"><Sparkles size={12} /> Liquidity insight</span><h3>Move the Atlas invoice review forward today.</h3><p>A six-day approval delay would move forecast cash below the configured operating buffer in early July.</p><div className="confidence"><span>92% confidence</span><div className="confidence-bar"><i style={{ width: "92%" }} /></div></div><button className="btn btn-dark full-button" onClick={onReview}>{status ?? "Review recommendation"}</button></div>;
}

export function WorkflowCard({ workflow, onReview }: { workflow: Workflow; onReview: (workflow: Workflow) => void }) {
  const tone = workflow.status === "At risk" ? "red" : workflow.status === "In review" ? "amber" : workflow.status === "Completed" ? "gray" : "green";
  return <article className="card workflow-card"><div><small>{workflow.id} · {workflow.type}</small><h3>{workflow.name}</h3></div><StatusBadge tone={tone}>{workflow.status}</StatusBadge><dl><div><dt>Owner</dt><dd>{workflow.owner}</dd></div><div><dt>Priority</dt><dd><RiskBadge level={workflow.priority} /></dd></div><div><dt>Due</dt><dd>{workflow.due}</dd></div></dl><p>{workflow.recommendation}</p><button className="action" onClick={() => onReview(workflow)}>Review workflow</button></article>;
}

export function IntegrationCard({ integration, onToggle }: { integration: Integration; onToggle: () => void }) {
  return <div className="card integration"><span className="integration-logo">{integration.initials}</span><h3>{integration.name}</h3><p>{integration.category} · Secure API connection</p><div className="integration-foot"><StatusBadge tone={integration.connected ? "green" : "gray"}>{integration.connected ? "● Connected" : "Available"}</StatusBadge><button className="action" onClick={onToggle}>{integration.connected ? "Manage" : "Connect"}</button></div></div>;
}

export function PricingCard({ name, price, description, features, selected, current, onSelect }: { name: PlanName; price: string; description: string; features: string[]; selected: boolean; current: boolean; onSelect: () => void }) {
  return <div className={`card price ${selected ? "featured" : ""}`}><div className="price-labels">{current && <StatusBadge>Current plan</StatusBadge>}{selected && !current && <StatusBadge tone="amber">Selected</StatusBadge>}</div><h3>{name}</h3><p>{description}</p><div className="price-value">{price}<small>/mo</small></div><ul>{features.map(feature => <li key={feature}><Check size={12} />{feature}</li>)}</ul><button className={`btn ${selected ? "btn-dark" : "btn-soft"} full-button`} onClick={onSelect}>{current ? "Current plan" : name === "Enterprise" ? "Upgrade" : "Downgrade"}</button></div>;
}

export function DocumentPreviewCard({ approval, onApprove, onReject, fields, checks }: { approval: string; onApprove: () => void; onReject: () => void; fields: { label: string; value: string }[]; checks: string[] }) {
  const tone = approval === "Approved" ? "green" : approval === "Rejected" ? "red" : "amber";
  return <section className="card"><div className="card-head"><div><h2>Atlas_Invoice_2408.pdf</h2><span>Parsed in 2.4 seconds · 98% extraction confidence</span></div><StatusBadge tone={tone}>{approval}</StatusBadge></div><div className="document-preview"><FileText size={36} /><span>Parsed invoice preview</span></div><div className="fields">{fields.map(field => <div className="field" key={field.label}><span>{field.label}</span><b>{field.value}</b></div>)}</div><div className="validation-list"><b>Validation checklist</b>{checks.map(check => <span key={check}><Check size={12} />{check}</span>)}</div><div className="insight"><span className="insight-label"><Sparkles size={12} /> AI summary</span><p>Enterprise software services for Q2. Amount and terms match the active order. No duplicate invoice detected.</p></div><div className="document-actions"><button className="btn btn-dark" onClick={onApprove}>Approve document</button><button className="btn btn-soft danger-button" onClick={onReject}>Reject</button></div></section>;
}

export function ArchitectureDiagramBlock({ items }: { items: string[] }) {
  return <div className="architecture-diagram">{items.map((item, index) => <div className="architecture-step" key={item}><small>0{index + 1}</small><b>{item}</b></div>)}</div>;
}

export function PermissionsTable({ roles, permissions }: { roles: string[]; permissions: string[] }) {
  return <div className="card table-card"><div className="card-head"><h2>Permissions matrix</h2><span>Tenant-level role policy</span></div><table className="data-table"><thead><tr><th>Role</th>{permissions.map(permission => <th key={permission}>{permission}</th>)}</tr></thead><tbody>{roles.map((role, roleIndex) => <tr key={role}><td><b>{role}</b><small>{roleIndex === 0 ? "4 members" : `${roleIndex + 3} members`}</small></td>{permissions.map((permission, permissionIndex) => <td key={permission}>{(roleIndex === 0 || permissionIndex >= roleIndex - 1) && !(role === "Client User" && permissionIndex < 3) ? <span className="permission-dot"><Check size={10} /></span> : <span className="permission-empty">—</span>}</td>)}</tr>)}</tbody></table></div>;
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return <div className="empty-state"><Inbox size={25} /><b>{title}</b><p>{body}</p></div>;
}

export function LoadingState({ label = "Loading secure workspace..." }: { label?: string }) {
  return <div className="empty-state"><LoaderCircle className="spin" size={24} /><b>{label}</b><p>Applying tenant policies and validating data.</p></div>;
}
