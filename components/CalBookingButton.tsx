"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

interface CalBookingButtonProps {
  className?: string;
  label?: string;
}

export default function CalBookingButton({
  className = "bg-primary hover:bg-[#3538b8] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-150",
  label = "Kostenlos einrichten lassen",
}: CalBookingButtonProps) {
  useEffect(() => {
    (async () => {
      // TODO: cal.eu/singoscale/... durch finalen SingoTec-Kalenderlink ersetzen
      const cal = await getCalApi({
        namespace: "erstgespraech",
        embedJsUrl: "https://cal.eu/embed.js",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="erstgespraech"
      data-cal-link="singoscale/erstgespraech"
      data-cal-config='{"layout":"month_view"}'
      className={className}
    >
      {label}
    </button>
  );
}
