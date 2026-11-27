import {
  User,
  Shield,
  Bell,
  Palette,
  Globe,
  DollarSign,
  Lock,
  AlertTriangle,
} from "lucide-react";

const settingsMenu = [
  {
    id: "general",
    label: "General",
    icon: User,
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: Palette,
  },
  {
    id: "language",
    label: "Language",
    icon: Globe,
  },
  {
    id: "currency",
    label: "Currency",
    icon: DollarSign,
  },
  {
    id: "password",
    label: "Password",
    icon: Lock,
  },
  {
    id: "danger",
    label: "Danger Zone",
    icon: AlertTriangle,
  },
];

export default settingsMenu;