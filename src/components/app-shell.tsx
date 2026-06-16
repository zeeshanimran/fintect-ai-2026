"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Waypoints,
  Sparkles,
  Library,
  Files,
  ChartNoAxesCombined,
  Plug,
  CreditCard,
  Users,
  Search,
  Bell,
  Menu,
  Settings,
  HelpCircle,
  X,
  ChevronDown,
  Check,
} from "lucide-react";
import { tenants } from "@/lib/mock-data/dashboard";
import { StatusBadge } from "@/components/ui";

const nav = [
  ["/dashboard", "Overview", LayoutDashboard],
  ["/dashboard/workflows", "Workflows", Waypoints],
  ["/dashboard/decisions", "AI Decision Support", Sparkles],
  ["/dashboard/knowledge", "Knowledge Hub", Library],
  ["/dashboard/documents", "Documents", Files],
  ["/dashboard/analytics", "Analytics", ChartNoAxesCombined],
  ["/dashboard/integrations", "Integrations", Plug],
  ["/dashboard/billing", "Subscription", CreditCard],
  ["/dashboard/team", "Team & Roles", Users],
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [tenantOpen, setTenantOpen] = useState(false);
  const [tenant, setTenant] = useState(tenants[0]);
  useEffect(() => setMenuOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="app-shell">
      <button
        aria-label="Close navigation"
        className={`sidebar-backdrop ${menuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <Link className="brand" href="/" onClick={closeMenu}>
            <span className="brandmark">FA</span> FinTech-AI{" "}
            <span style={{ color: "#789086", fontWeight: 500 }}>2026</span>
          </Link>
          <button
            className="sidebar-close"
            onClick={closeMenu}
            aria-label="Close navigation"
          >
            <X size={18} />
          </button>
        </div>
        <div className="tenant-wrap">
          <button
            className="tenant"
            onClick={() => setTenantOpen((value) => !value)}
            aria-expanded={tenantOpen}
          >
            <span className="tenant-logo">{tenant.initials}</span>
            <div>
              <b>{tenant.name}</b>
              <span>{tenant.plan}</span>
            </div>
            <ChevronDown size={14} />
          </button>
          {tenantOpen && (
            <div className="tenant-options">
              {tenants.map((option) => (
                <button
                  key={option.name}
                  onClick={() => {
                    setTenant(option);
                    setTenantOpen(false);
                  }}
                >
                  <span className="tenant-logo">{option.initials}</span>
                  <span>
                    <b>{option.name}</b>
                    <small>{option.plan}</small>
                  </span>
                  {option.name === tenant.name && <Check size={14} />}
                </button>
              ))}
            </div>
          )}
        </div>
        <span className="side-label">Workspace</span>
        {nav.slice(0, 6).map(([href, label, Icon]) => (
          <Link
            onClick={closeMenu}
            key={href}
            className={`side-link ${path === href ? "active" : ""}`}
            href={href}
          >
            <Icon size={15} />
            {label}
          </Link>
        ))}
        <span className="side-label">Manage</span>
        {nav.slice(6).map(([href, label, Icon]) => (
          <Link
            onClick={closeMenu}
            key={href}
            className={`side-link ${path === href ? "active" : ""}`}
            href={href}
          >
            <Icon size={15} />
            {label}
          </Link>
        ))}
        <div className="sidebar-foot">
          <Link onClick={closeMenu} className="side-link" href="/delivery">
            <HelpCircle size={15} />
            Delivery approach
          </Link>
          <Link onClick={closeMenu} className="side-link" href="/architecture">
            <Settings size={15} />
            Architecture
          </Link>
        </div>
      </aside>
      <main className="app-main">
        <header className="topbar">
          <div className="search">
            <button
              aria-label="Open navigation"
              className="icon-btn mobile-menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={16} />
            </button>
            <Search size={15} />
            <span>Search transactions, workflows, or documents...</span>
          </div>
          <div className="active-tenant">{tenant.name}</div>
          <div className="top-actions">
            <button className="icon-btn" aria-label="Notifications">
              <Bell size={15} />
            </button>
            <span className="avatar">AM</span>
          </div>
        </header>
        <div className="main-content">{children}</div>
      </main>
    </div>
  );
}

export function PageTitle({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle: string;
  action?: string;
}) {
  return (
    <div className="page-title">
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {action && <button className="btn btn-dark">{action}</button>}
    </div>
  );
}

export function Status({
  children,
  tone = "green",
}: {
  children: React.ReactNode;
  tone?: "green" | "amber" | "red" | "gray";
}) {
  return <StatusBadge tone={tone}>{children}</StatusBadge>;
}
