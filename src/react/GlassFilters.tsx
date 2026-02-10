import React from "react";

export interface GlassFiltersProps {
  /** Displacement scale for subtle refraction (default: 8) */
  scale?: number;
  /** Displacement scale for strong refraction (default: 16) */
  strongScale?: number;
  /** Turbulence base frequency as "x y" (default: "0.015 0.012") */
  baseFrequency?: string;
  /** Number of noise octaves (default: 2) */
  numOctaves?: number;
  /** Turbulence seed (default: 42) */
  seed?: number;
}

/**
 * Renders hidden SVG `<defs>` providing two refraction filters:
 * - `#glass-refract` — subtle, for general use
 * - `#glass-refract-strong` — stronger, for hero/special elements
 *
 * Place once near the root of your app.
 *
 * Apply via CSS:
 * ```css
 * .my-element { filter: url(#glass-refract); }
 * ```
 */
export function GlassFilters({
  scale = 8,
  strongScale = 16,
  baseFrequency = "0.015 0.012",
  numOctaves = 2,
  seed = 42,
}: GlassFiltersProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0"
      height="0"
      style={{ position: "absolute", overflow: "hidden" }}
      aria-hidden
    >
      <defs>
        {/* Subtle refraction */}
        <filter
          id="glass-refract"
          x="-5%"
          y="-5%"
          width="110%"
          height="110%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" result="preblur" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={numOctaves}
            seed={seed}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="3" result="smooth" />
          <feDisplacementMap
            in="preblur"
            in2="smooth"
            scale={scale}
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feColorMatrix in="displaced" type="saturate" values="1.3" />
        </filter>

        {/* Stronger refraction for hero/special elements */}
        <filter
          id="glass-refract-strong"
          x="-5%"
          y="-5%"
          width="110%"
          height="110%"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.4" result="preblur" />
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.010"
            numOctaves={Math.min(numOctaves + 1, 4)}
            seed={seed}
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="4" result="smooth" />
          <feDisplacementMap
            in="preblur"
            in2="smooth"
            scale={strongScale}
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feColorMatrix in="displaced" type="saturate" values="1.5" />
        </filter>
      </defs>
    </svg>
  );
}
