"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun } from "lucide-react";

const navLinks = [
  { href: "/loesungen", label: "Lösungen", children: [
    { href: "/loesungen/solar", label: "Solar" },
    { href: "/loesungen/wind", label: "Windkraft" },
    { href: "/loesungen/speicher", label: "Speicher" },
  ]},
  { href: "/projekte", label: "Projekte" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/karriere", label: "Karriere" },
  { href: "/wissen", label: "Wissen" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"DE" | "EN">("DE");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const lightHeroPages = ["/impressum", "/datenschutz", "/agb"];
  const forceDark = lightHeroPages.some((p) => pathname.startsWith(p));

  const navBg = scrolled || forceDark
    ? "bg-[#0A1F1C]/90 backdrop-blur-xl border-b border-white/8 shadow-[0_4px_32px_rgba(0,0,0,0.2)]"
    : "bg-transparent";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[40] transition-all duration-500 ${navBg}`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#FCD34D] flex items-center justify-center"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Sun className="w-4 h-4 text-[#0A1F1C]" />
            </motion.div>
            <span className="text-[#F0F4F2] font-bold text-xl tracking-[0.12em] uppercase">
              Solaris
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="relative"
                onMouseEnter={() => {
                  if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
                  if (link.children) setActiveDropdown(link.href);
                }}
                onMouseLeave={() => {
                  dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 150);
                }}
              >
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 link-underline ${
                    pathname.startsWith(link.href)
                      ? "text-[#4ADE80]"
                      : "text-[#F0F4F2]/80 hover:text-[#F0F4F2]"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <motion.svg
                      className="w-3.5 h-3.5 opacity-60"
                      animate={{ rotate: activeDropdown === link.href ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      viewBox="0 0 16 16" fill="none"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </motion.svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && (
                  <AnimatePresence>
                    {activeDropdown === link.href && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-48 glass-dark rounded-xl py-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center px-4 py-2.5 text-sm text-[#F0F4F2]/80 hover:text-[#4ADE80] hover:bg-white/5 transition-colors duration-150"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* DE/EN toggle */}
            <button
              onClick={() => setLang(lang === "DE" ? "EN" : "DE")}
              className="relative flex items-center bg-white/8 rounded-full p-0.5 border border-white/12 h-8"
              aria-label="Sprache wechseln"
            >
              {["DE", "EN"].map((l) => (
                <span
                  key={l}
                  className={`relative z-10 px-2.5 py-1 text-xs font-medium rounded-full transition-colors duration-200 ${
                    lang === l ? "text-[#0A1F1C]" : "text-[#F0F4F2]/60"
                  }`}
                >
                  {l}
                  {lang === l && (
                    <motion.span
                      layoutId="lang-pill"
                      className="absolute inset-0 bg-[#4ADE80] rounded-full -z-10"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </span>
              ))}
            </button>

            <Link
              href="/kontakt"
              className="magnetic-btn px-5 py-2 bg-[#4ADE80] text-[#0A1F1C] rounded-full text-sm font-semibold hover:bg-[#86EFAC] transition-colors duration-200"
            >
              Angebot anfragen
            </Link>
          </div>

          {/* Burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#F0F4F2] rounded-lg hover:bg-white/8 transition-colors"
            aria-label="Menü öffnen"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div key="x" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[35] bg-[#0A1F1C] flex flex-col"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="h-16" />
            <div className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center py-4 text-3xl font-bold border-b border-white/8 transition-colors ${
                        pathname.startsWith(link.href) ? "text-[#4ADE80]" : "text-[#F0F4F2]"
                      }`}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <ul className="pl-4 pt-1 pb-2 space-y-1">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="block py-2 text-[#F0F4F2]/60 hover:text-[#4ADE80] transition-colors">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-8 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* DE/EN in mobile */}
                <button
                  onClick={() => setLang(lang === "DE" ? "EN" : "DE")}
                  className="flex items-center bg-white/8 rounded-full p-0.5 border border-white/12 h-10 w-fit"
                >
                  {["DE", "EN"].map((l) => (
                    <span
                      key={l}
                      className={`relative z-10 px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 ${
                        lang === l ? "text-[#0A1F1C]" : "text-[#F0F4F2]/60"
                      }`}
                    >
                      {l}
                      {lang === l && (
                        <motion.span
                          layoutId="lang-pill-mobile"
                          className="absolute inset-0 bg-[#4ADE80] rounded-full -z-10"
                          transition={{ duration: 0.2 }}
                        />
                      )}
                    </span>
                  ))}
                </button>

                <Link
                  href="/kontakt"
                  className="block w-full text-center px-6 py-4 bg-[#4ADE80] text-[#0A1F1C] rounded-2xl text-lg font-bold"
                >
                  Angebot anfragen
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
