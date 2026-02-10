"use client";

import { GlassFilters, Glass, GlassCard, GlassPill } from "glass-refraction";

export default function GlassDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-slate-200 flex flex-col items-center gap-8 p-8">
      {/* Mount SVG refraction filters once */}
      <GlassFilters />

      {/* Navbar */}
      <Glass as="nav" className="w-full max-w-3xl px-6 py-4 flex justify-between items-center">
        <strong>glass-refraction</strong>
        <span>Next.js Demo</span>
      </Glass>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <GlassCard className="p-6">
          <h3 className="font-semibold mb-2">Tier 1</h3>
          <p className="text-sm opacity-70">Dense frosted glass with shimmer and chromatic dispersion.</p>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="font-semibold mb-2">Tier 2</h3>
          <p className="text-sm opacity-70">Medium glass with hover lift and specular highlights.</p>
        </GlassCard>

        <GlassCard className="p-6">
          <h3 className="font-semibold mb-2">Tier 3</h3>
          <p className="text-sm opacity-70">Lightweight pill for tags and badges.</p>
        </GlassCard>
      </div>

      {/* Pills */}
      <div className="flex gap-3 flex-wrap justify-center">
        <GlassPill className="px-3 py-1 text-sm">React</GlassPill>
        <GlassPill className="px-3 py-1 text-sm">Next.js</GlassPill>
        <GlassPill className="px-3 py-1 text-sm">Liquid Glass</GlassPill>
        <GlassPill className="px-3 py-1 text-sm">SVG Refraction</GlassPill>
      </div>

      {/* Footer */}
      <Glass as="footer" className="w-full max-w-3xl px-6 py-4 text-center text-sm opacity-70">
        Built with glass-refraction
      </Glass>
    </div>
  );
}
