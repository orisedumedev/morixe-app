import {
  LayoutDashboard,
  Wallet,
  CandlestickChart,
  LineChart,
  History,
  Bell,
  Settings,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Portfolio",
    path: "/portfolio",
    icon: Wallet,
  },
  {
    label: "Markets",
    path: "/markets",
    icon: LineChart,
  },
  {
    label: "Trading",
    path: "/trading",
    icon: CandlestickChart,
  },
  {
    label: "Transactions",
    path: "/transactions",
    icon: History,
  },
  {
    label: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default navigation;