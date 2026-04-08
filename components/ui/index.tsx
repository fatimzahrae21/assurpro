"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

// ─── Section Wrapper ──────────────────────────────────────────────────────────

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("relative", className)}>
      {children}
    </section>
  );
}

// ─── Animated Container ───────────────────────────────────────────────────────

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: "-80px" });

  const dirMap = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-14", centered && "text-center max-w-2xl mx-auto")}>
      {eyebrow && (
        <FadeIn>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-600 text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            {eyebrow}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.05}>
        <h2
          className={cn(
            "font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-4 text-balance",
            light ? "text-white" : "text-brand-950"
          )}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.1}>
          <p
            className={cn(
              "text-base sm:text-lg leading-relaxed",
              light ? "text-white/60" : "text-gray-500"
            )}
          >
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────────────

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "amber" | "teal" | "red";
}

export function Badge({ children, variant = "primary" }: BadgeProps) {
  const variantMap = {
    primary: "bg-brand-100 text-brand-700",
    amber: "bg-amber-100 text-amber-700",
    teal: "bg-teal-100 text-teal-700",
    red: "bg-red-100 text-red-700",
  };
  return (
    <span
      className={cn(
        "px-2.5 py-0.5 rounded-full text-xs font-semibold",
        variantMap[variant]
      )}
    >
      {children}
    </span>
  );
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("skeleton rounded-lg", className)} />;
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-gray-100 p-6 space-y-4">
      <Skeleton className="h-12 w-12 rounded-xl" />
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

// ─── Star Rating ──────────────────────────────────────────────────────────────

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "text-amber-400" : "text-gray-200"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Trust Badge ──────────────────────────────────────────────────────────────

interface TrustBadgeProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

export function TrustBadge({ icon: Icon, label, value }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/10">
      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-teal-300" />
      </div>
      <div>
        <p className="text-white font-semibold text-sm leading-none">{value}</p>
        <p className="text-white/50 text-xs mt-0.5">{label}</p>
      </div>
    </div>
  );
}
