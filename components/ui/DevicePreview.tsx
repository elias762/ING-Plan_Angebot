"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Monitor, Smartphone } from "lucide-react";

const ToggleBarContext = createContext(false);
export function useHasToggleBar() {
  return useContext(ToggleBarContext);
}

export default function DevicePreview({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"desktop" | "mobile">("desktop");
  const [isEmbed, setIsEmbed] = useState(false);

  useEffect(() => {
    setIsEmbed(
      new URLSearchParams(window.location.search).get("embed") === "1",
    );
  }, []);

  if (isEmbed) {
    return (
      <ToggleBarContext.Provider value={false}>
        {children}
      </ToggleBarContext.Provider>
    );
  }

  return (
    <ToggleBarContext.Provider value={true}>
      {/* Toggle Bar */}
      <div className="fixed inset-x-0 top-0 z-[60] flex h-11 items-center justify-center gap-1 bg-gray-900">
        <button
          onClick={() => setMode("desktop")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            mode === "desktop"
              ? "bg-white text-gray-900"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Monitor size={14} />
          Desktop
        </button>
        <button
          onClick={() => setMode("mobile")}
          className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
            mode === "mobile"
              ? "bg-white text-gray-900"
              : "text-gray-400 hover:text-white"
          }`}
        >
          <Smartphone size={14} />
          Mobil
        </button>
      </div>

      {mode === "desktop" ? (
        <div className="pt-11">{children}</div>
      ) : (
        <div className="flex min-h-screen items-start justify-center bg-gray-100 pb-8 pt-[68px]">
          <div className="relative overflow-hidden rounded-[2.5rem] border-[8px] border-gray-800 bg-white shadow-2xl">
            {/* Notch */}
            <div className="absolute left-1/2 top-0 z-10 h-[28px] w-[120px] -translate-x-1/2 rounded-b-2xl bg-gray-800" />
            <iframe
              src="/?embed=1"
              style={{ width: 390, height: 844 }}
              className="block"
              title="Mobile Vorschau"
            />
          </div>
        </div>
      )}
    </ToggleBarContext.Provider>
  );
}
