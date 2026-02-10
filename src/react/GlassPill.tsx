import React, { forwardRef, type ElementType, type ComponentPropsWithoutRef } from "react";

export type GlassPillProps<T extends ElementType = "span"> = {
  /** HTML element to render (default: "span") */
  as?: T;
  /** Additional class names */
  className?: string;
  children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * `<GlassPill>` — lightweight glass for tags, badges, and pills.
 *
 * ```tsx
 * <GlassPill className="px-3 py-1 text-sm">React</GlassPill>
 * ```
 */
export const GlassPill = forwardRef<HTMLElement, GlassPillProps>(function GlassPill(
  { as: Tag = "span", className, children, ...rest },
  ref,
) {
  const classes = ["glass-pill", className].filter(Boolean).join(" ");
  return (
    <Tag ref={ref as React.Ref<never>} className={classes} {...rest}>
      {children}
    </Tag>
  );
}) as <T extends ElementType = "span">(
  props: GlassPillProps<T> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null;
