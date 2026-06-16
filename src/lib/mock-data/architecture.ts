import {
  Activity,
  Bot,
  CloudCog,
  Database,
  FileInput,
  Fingerprint,
  KeyRound,
  Network,
  ScrollText,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

export const architectureBlocks = [
  {
    title: "Secure cloud infrastructure",
    detail:
      "Private networking, managed secrets, regional deployment, and resilient compute.",
    icon: CloudCog,
  },
  {
    title: "API gateway",
    detail:
      "Versioned APIs, rate limits, request validation, and tenant-aware routing.",
    icon: Network,
  },
  {
    title: "Auth & RBAC",
    detail:
      "SSO-ready identity, least-privilege roles, and policy-based approvals.",
    icon: Fingerprint,
  },
  {
    title: "Tenant data isolation",
    detail:
      "Tenant-scoped authorization, storage partitions, and separate vector namespaces.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable database design",
    detail:
      "Transactional relational data, object storage, caching, and vector retrieval.",
    icon: Database,
  },
  {
    title: "Encryption",
    detail: "Encryption in transit and at rest with managed key rotation.",
    icon: KeyRound,
  },
  {
    title: "AI service layer",
    detail:
      "Model routing, structured outputs, confidence checks, and deterministic guardrails.",
    icon: Bot,
  },
  {
    title: "RAG pipeline",
    detail:
      "Approved retrieval, source ranking, citations, and tenant-specific grounding.",
    icon: SearchCheck,
  },
  {
    title: "Document ingestion",
    detail:
      "Virus scan, classification, extraction, validation, and review queues.",
    icon: FileInput,
  },
  {
    title: "Integration layer",
    detail:
      "Isolated adapters for accounting, banking, CRM, storage, and communication.",
    icon: Network,
  },
  {
    title: "Audit logging",
    detail:
      "Immutable records for user actions, AI recommendations, approvals, and changes.",
    icon: ScrollText,
  },
  {
    title: "Monitoring & observability",
    detail:
      "Service health, traces, AI quality metrics, alerts, and operational dashboards.",
    icon: Activity,
  },
];

export const architectureFlow = [
  "Client applications",
  "API gateway + Auth/RBAC",
  "Domain services",
  "AI + RAG orchestration",
  "Tenant data + integrations",
];
