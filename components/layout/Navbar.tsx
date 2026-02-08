"use client";

import { useState, useEffect } from "react";
import { useHasToggleBar } from "@/components/ui/DevicePreview";

const navItems = [
  { label: "Anschreiben", href: "#hero", number: null },
  { label: "Zielsetzung & Scope", href: "#zielsetzung", number: "1" },
  { label: "Kosten", href: "#budget", number: "2" },
  { label: "AGB", href: "#agb", number: "3" },
  { label: "Kontakt", href: "#kontakt", number: null },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);
  const hasToggleBar = useHasToggleBar();

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  const navContent = (mobile: boolean) => (
    <div className="flex h-full flex-col px-5 py-10">
      <a
        href="#hero"
        className="mb-10 block"
        onClick={mobile ? handleNavClick : undefined}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/asuno-logo.png" alt="Asuno" style={{ height: 26 }} />
      </a>

      <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.15em] text-foreground-muted">
        Inhalt
      </p>

      <nav className="flex flex-col">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={mobile ? handleNavClick : undefined}
              className={`border-l-2 py-2 pl-4 text-[13px] transition-all duration-200 ${
                isActive
                  ? "border-foreground font-medium text-foreground"
                  : "border-transparent text-foreground-muted hover:text-foreground"
              }`}
            >
              {item.number ? `${item.number}. ${item.label}` : item.label}
            </a>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className={`fixed left-0 ${hasToggleBar ? "top-11 h-[calc(100vh-2.75rem)]" : "top-0 h-screen"} z-40 hidden w-56 bg-white md:block`}>
        {navContent(false)}
      </aside>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className={`fixed left-4 ${hasToggleBar ? "top-[3.75rem]" : "top-4"} z-50 rounded bg-white p-2 shadow-sm md:hidden`}
        aria-label="Inhaltsverzeichnis"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {mobileOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed left-0 ${hasToggleBar ? "top-11 h-[calc(100vh-2.75rem)]" : "top-0 h-screen"} z-50 w-64 transform bg-white transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navContent(true)}
      </aside>
    </>
  );
}
