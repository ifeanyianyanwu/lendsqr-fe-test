import Users from "../assets/users.png";
import Guarantors from "../assets/guarantors.png";
import Loans from "../assets/loans.png";
import DecisionModels from "../assets/decision-models.png";
import Savings from "../assets/savings.png";
import LoanRequests from "../assets/loan-requests.png";
import Whitelist from "../assets/whitelist.png";
import Karma from "../assets/karma.png";
import Organization from "../assets/organization.png";
import LoanProducts from "../assets/loan-products.png";
import SavingsProducts from "../assets/savings-products.png";
import FeesandCharges from "../assets/fees-and-charges.png";
import Transactions from "../assets/transactions.png";
import Services from "../assets/services.png";
import ServiceAccount from "../assets/service-account.png";
import Settlements from "../assets/settlements.png";
import Reports from "../assets/reports.png";
import Preferences from "../assets/preferences.png";
import FeesandPricing from "../assets/fees-and-pricing.png";
import AuditLogs from "../assets/audit-logs.png";

type LINKITEM = {
  title: string;
  links: {
    name: string;
    icon: string;
  }[];
};

type LINKS = LINKITEM[];

export const Links: LINKS = [
  {
    title: "CUSTOMERS",
    links: [
      {
        name: "Users",
        icon: Users,
      },
      {
        name: "Guarantors",
        icon: Guarantors,
      },
      {
        name: "Loans",
        icon: Loans,
      },
      {
        name: "Decision Models",
        icon: DecisionModels,
      },
      {
        name: "Savings",
        icon: Savings,
      },
      {
        name: "Loan Requests",
        icon: LoanRequests,
      },
      {
        name: "Whitelist",
        icon: Whitelist,
      },
      {
        name: "Karma",
        icon: Karma,
      },
    ],
  },
  {
    title: "BUISNESSES",
    links: [
      {
        name: "Organization",
        icon: Organization,
      },
      {
        name: "Loan Products",
        icon: LoanProducts,
      },
      {
        name: "Savings Products",
        icon: SavingsProducts,
      },
      {
        name: "Fees and Charges",
        icon: FeesandCharges,
      },
      {
        name: "Transactions",
        icon: Transactions,
      },
      {
        name: "Services",
        icon: Services,
      },
      {
        name: "Service Account",
        icon: ServiceAccount,
      },
      {
        name: "Settlements",
        icon: Settlements,
      },
      {
        name: "Reports",
        icon: Reports,
      },
    ],
  },
  {
    title: "SETTINGS",
    links: [
      {
        name: "Preferences",
        icon: Preferences,
      },
      {
        name: "Fees and Pricing",
        icon: FeesandPricing,
      },
      {
        name: "Audit Logs",
        icon: AuditLogs,
      },
    ],
  },
];
