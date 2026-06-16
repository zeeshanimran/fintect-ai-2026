export type WorkflowStatus = "In review" | "At risk" | "On track" | "Completed";
export type WorkflowPriority = "High" | "Medium" | "Low";

export type Workflow = {
  id: string;
  name: string;
  type: string;
  owner: string;
  priority: WorkflowPriority;
  due: string;
  recommendation: string;
  status: WorkflowStatus;
};

export const workflows: Workflow[] = [
  {
    id: "INV-2408",
    name: "Atlas Systems invoice",
    type: "Invoice approval",
    owner: "Finance Manager",
    priority: "High",
    due: "Jun 16",
    recommendation: "Approve; matches PO with 97% confidence",
    status: "In review",
  },
  {
    id: "EXP-9182",
    name: "Q2 travel expenses",
    type: "Expense review",
    owner: "Analyst",
    priority: "Medium",
    due: "Jun 18",
    recommendation: "Review two possible duplicate meal entries",
    status: "On track",
  },
  {
    id: "CSH-3041",
    name: "July cash buffer",
    type: "Cash flow monitoring",
    owner: "Finance Manager",
    priority: "High",
    due: "Jun 17",
    recommendation: "Move $250k from reserve account",
    status: "At risk",
  },
  {
    id: "ONB-1188",
    name: "Encompass GmbH",
    type: "Client onboarding",
    owner: "Compliance Reviewer",
    priority: "Medium",
    due: "Jun 21",
    recommendation: "Proceed; beneficial owners verified",
    status: "On track",
  },
  {
    id: "CMP-7782",
    name: "Vendor risk refresh",
    type: "Compliance review",
    owner: "AI Reviewer",
    priority: "High",
    due: "Jun 19",
    recommendation: "Request updated data policy",
    status: "In review",
  },
  {
    id: "SUB-4410",
    name: "Kinetic Labs renewal",
    type: "Subscription renewal",
    owner: "Client User",
    priority: "Low",
    due: "Jun 28",
    recommendation: "Offer annual plan at current rate",
    status: "Completed",
  },
];
