export type Integration = { initials: string; name: string; category: string; connected: boolean };
export const integrations: Integration[] = [
  { initials: "S", name: "Stripe", category: "Payments", connected: true },
  { initials: "Q", name: "QuickBooks", category: "Accounting", connected: true },
  { initials: "X", name: "Xero", category: "Accounting", connected: false },
  { initials: "P", name: "Plaid", category: "Banking", connected: true },
  { initials: "SL", name: "Slack", category: "Communication", connected: false },
  { initials: "G", name: "Google Drive", category: "Documents", connected: true },
  { initials: "D", name: "DocuSign", category: "Documents", connected: false },
  { initials: "API", name: "CRM / API", category: "Developer", connected: false },
];
