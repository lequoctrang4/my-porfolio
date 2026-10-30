"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

const numbers: Record<string, string> = { about: "01", "case-studies": "02", experience: "03", skills: "04", education: "05", contact: "06" };

export function Section({ children, className = "", id, title }: { children: ReactNode; className?: string; id?: string; title?: string }) {
  return (
    <motion.section initial={false} whileInView={{ opacity: 1 }} viewport={{ once: true }} className={`portfolio-section py-12 scroll-mt-24 ${className}`} id={id}>
      {title && <div className="section-heading"><span className="section-number" aria-hidden="true">{id && numbers[id]} /</span><h2>{title}</h2><span className="section-rule" /></div>}
      {children}
    </motion.section>
  );
}
