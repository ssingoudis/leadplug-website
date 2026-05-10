import { Sun, Thermometer, Flame, Droplets, Settings, DoorOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Status = "live" | "custom";

const branchen: {
  Icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  label: string;
  desc: string;
  status: Status;
}[] = [
  {
    Icon: Sun,
    iconColor: "#f97316",
    iconBg: "#fff7ed",
    label: "Solaranlagen",
    desc: "Dachtyp, Ausrichtung, Stromverbrauch — sofort einsatzbereit.",
    status: "live",
  },
  {
    Icon: Thermometer,
    iconColor: "#3b82f6",
    iconBg: "#eff6ff",
    label: "Wärmepumpen",
    desc: "Heizlast, Gebäudeart, Förderung — gezielt qualifizieren.",
    status: "live",
  },
  {
    Icon: Flame,
    iconColor: "#ef4444",
    iconBg: "#fef2f2",
    label: "Heizungsmontage",
    desc: "Bestandsheizung, Baujahr, Gebäudetyp — strukturierte Erstanfragen.",
    status: "live",
  },
  {
    Icon: Droplets,
    iconColor: "#06b6d4",
    iconBg: "#ecfeff",
    label: "Sanitär & Bad",
    desc: "Badumbau, Notfall, Umfang — filtert ernsthafte Anfragen.",
    status: "live",
  },
  {
    Icon: DoorOpen,
    iconColor: "#0ea5e9",
    iconBg: "#f0f9ff",
    label: "Fenster & Türen",
    desc: "Maß, Material, Anlass — strukturierte Anfragen vom ersten Klick.",
    status: "live",
  },
  {
    Icon: Settings,
    iconColor: "#64748b",
    iconBg: "#f8fafc",
    label: "Eigene Branche",
    desc: "Deine Fragen, dein Branding — vollständig anpassbar.",
    status: "custom",
  },
];

export default function BranchenSection() {
  return (
    <section id="branchen" className="py-24 px-6">
      <div className="max-w-300 mx-auto">
        <div className="text-center mb-14">
          <span className="block text-[12px] font-bold uppercase tracking-[0.08em] text-primary mb-2">
            BRANCHEN
          </span>
          <h2
            className="font-extrabold tracking-tight leading-[1.15] text-black"
            style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
          >
            Für jedes Handwerk das passende Formular
          </h2>
          <p className="text-[16px] text-fg-3 mt-3 max-w-130 mx-auto">
            Branchenspezifische Fragen, bereits vorkonfiguriert — wir richten alles auf deinen Betrieb ein.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {branchen.map(({ Icon, iconColor, iconBg, label, desc }) => (
            <div
              key={label}
              className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 cursor-default select-none"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: iconBg }}
              >
                <Icon size={20} style={{ color: iconColor }} />
              </div>
              <h4 className="text-[15px] font-semibold text-slate-900 mb-1.5">
                {label}
              </h4>
              <p className="text-[13px] leading-relaxed text-slate-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
