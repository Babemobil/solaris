"use client";

import Link from "next/link";
import { Sun, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

const footerLinks = {
  Lösungen: [
    { href: "/loesungen/privat", label: "Photovoltaik Privat" },
    { href: "/loesungen/gewerbe", label: "Gewerbe & Industrie" },
    { href: "/loesungen/speicher", label: "Batteriespeicher" },
    { href: "/loesungen/wind", label: "Windkraft" },
  ],
  Unternehmen: [
    { href: "/ueber-uns", label: "Über uns" },
    { href: "/karriere", label: "Karriere" },
    { href: "/projekte", label: "Projekte" },
    { href: "/wissen", label: "Wissens-Hub" },
  ],
  Service: [
    { href: "/kontakt", label: "Kontakt" },
    { href: "/faq", label: "FAQ" },
    { href: "/impressum", label: "Impressum" },
    { href: "/datenschutz", label: "Datenschutz" },
    { href: "/agb", label: "AGB" },
  ],
};

export function Footer() {
  return (
    <footer className="section-dark border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#4ADE80] to-[#FCD34D] flex items-center justify-center">
                <Sun className="w-4 h-4 text-[#0A1F1C]" />
              </div>
              <span className="text-[#F0F4F2] font-bold text-xl tracking-[0.12em] uppercase">Solaris</span>
            </Link>
            <p className="text-[#F0F4F2]/60 text-sm leading-relaxed max-w-xs mb-6">
              Ihr Premium-Partner für erneuerbare Energien. Photovoltaik, Windkraft und Speicherlösungen auf höchstem Niveau.
            </p>
            <div className="space-y-2 text-sm text-[#F0F4F2]/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4ADE80]" />
                <span>Musterstraße 123, 12345 Musterstadt</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#4ADE80]" />
                <a href="tel:+4912344555" className="hover:text-[#4ADE80] transition-colors">+49 123 44555</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#4ADE80]" />
                <a href="mailto:info@solaris-demo.example" className="hover:text-[#4ADE80] transition-colors">
                  info@solaris-demo.example
                </a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#F0F4F2] font-semibold text-sm uppercase tracking-widest mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#F0F4F2]/50 hover:text-[#4ADE80] text-sm transition-colors duration-200 link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F0F4F2]/30 text-xs">
            © 2025 Solaris Energie GmbH (fiktiv) · Demo-Projekt Studio27 Berlin
          </p>
          <div className="flex items-center gap-4">
            {[
              { href: "#", icon: InstagramIcon, label: "Instagram" },
              { href: "#", icon: LinkedinIcon, label: "LinkedIn" },
              { href: "#", icon: XIcon, label: "X/Twitter" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/12 text-[#F0F4F2]/40 hover:text-[#4ADE80] hover:border-[#4ADE80]/40 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-3.5 h-3.5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
