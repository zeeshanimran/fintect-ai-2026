export type ApprovalState = "Needs review" | "Approved" | "Rejected";

export const knowledgeDocuments = [
  {
    name: "EU Data Privacy Policy",
    category: "Policy · PDF",
    updated: "Updated Jun 12",
  },
  {
    name: "Billing Rules 2026",
    category: "Finance SOP · DOCX",
    updated: "Updated Jun 10",
  },
  {
    name: "Client Onboarding Checklist",
    category: "Operations · PDF",
    updated: "Updated Jun 08",
  },
  {
    name: "Revenue Recognition SOP",
    category: "Finance SOP · PDF",
    updated: "Updated May 29",
  },
  {
    name: "Compliance Controls",
    category: "Policy · PDF",
    updated: "Updated May 20",
  },
];

export const documentQueue = [
  {
    name: "Atlas_Invoice_2408.pdf",
    state: "Needs review",
    tone: "amber" as const,
  },
  { name: "Kinetic_MSA_v4.pdf", state: "Needs review", tone: "amber" as const },
  { name: "June_Statement.csv", state: "Processing", tone: "gray" as const },
];

export const extractedFields = [
  { label: "Vendor", value: "Atlas Systems, Inc." },
  { label: "Invoice no.", value: "INV-2408" },
  { label: "Amount", value: "$186,420.00" },
  { label: "Due date", value: "June 30, 2026" },
  { label: "Purchase order", value: "PO-88214" },
  { label: "Payment terms", value: "Net 30" },
];

export const validationChecks = [
  "Vendor identity verified",
  "Purchase order matched",
  "Tax calculation validated",
  "No duplicate invoice found",
];
