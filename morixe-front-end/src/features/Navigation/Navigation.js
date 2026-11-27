import {
  LayoutDashboard,
  ChartNoAxesCombined,
  CandlestickChart,
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  Receipt,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Markets",
    path: "/markets",
    icon: ChartNoAxesCombined,
  },
  {
    label: "Trading",
    path: "/trading",
    icon: CandlestickChart,
  },
  {
    label: "Wallet",
    path: "/wallet",
    icon: Wallet,
  },
  {
    label: "Deposit",
    path: "/deposit",
    icon: ArrowDownLeft,
  },
  {
    label: "Withdraw",
    path: "/withdraw",
    icon: ArrowUpRight,
  },
  {
    label: "Transactions",
    path: "/transactions",
    icon: Receipt,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];