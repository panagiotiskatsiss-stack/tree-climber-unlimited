import {
  Clock,
  ShieldCheck,
  ThumbsUp,
  PhoneCall,
  ClipboardCheck,
  FileText,
  Axe,
  CircleCheckBig,
  MapPin,
  BadgeCheck,
  Sparkles,
  Star,
  Tag,
  Medal,
  Siren,
  TreePine,
  Scissors,
  Truck,
  CloudLightning,
  type LucideIcon,
} from "lucide-react";

// Explicit registry (keeps bundle lean — no namespace import).
// Add new icons here as config references them.
const registry: Record<string, LucideIcon> = {
  Clock,
  ShieldCheck,
  ThumbsUp,
  PhoneCall,
  ClipboardCheck,
  FileText,
  Axe,
  CircleCheckBig,
  MapPin,
  BadgeCheck,
  Sparkles,
  Star,
  Tag,
  Medal,
  Siren,
  TreePine,
  Scissors,
  Truck,
  CloudLightning,
};

export function getIcon(name: string): LucideIcon {
  return registry[name] ?? CircleCheckBig;
}
