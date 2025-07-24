"use client";
import { useEffect, useState } from "react";

export default function ClientOnlyTime({ locale, timeZone }: { locale: string; timeZone: string }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString(locale, {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setTime(formatted);
    };

    update(); // run once immediately
    const interval = setInterval(update, 60000); // update every 1 minute

    return () => clearInterval(interval);
  }, [locale, timeZone]);

  return <span>{time}</span>;
}
