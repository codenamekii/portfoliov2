"use client";

import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { CalendarDays } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ScheduleCallFloat() {
  const { theme } = useTheme();
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "kiifiki" });
      cal("ui", {
        theme: theme === "dark" ? "dark" : "light",
        cssVarsPerTheme: {
          dark: { "--brand-color": "#000000" },
          light: { "--brand-color": "#ffffff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [theme]);
  return (
    <Button
      data-cal-namespace="kiifiki"
      data-cal-link="kiifiki"
      data-cal-config='{"layout":"month_view"}'
      className="group/cal fixed z-50 md:bottom-5 bottom-20 right-5 w-12 h-12 rounded-full hover:px-4 hover:w-auto p-2 duration-300 transition-all ease-out"
    >
      <div className="flex items-center gap-2">
        <p className="group-hover/cal:block hidden duration-300 transition-all ease-out">
          Schedule Meeting
        </p>
        <CalendarDays strokeWidth={1} />
      </div>
    </Button>
  );
}
