import React, { forwardRef, type ElementType, type ComponentPropsWithoutRef } from "react";

export type GlassCardProps<T extends ElementType = "div"> = {
  /** HTML element to render (default: "div") */
  as?: T;
  /** Additional class names */
  className?: string;
  /** Enable hover lift effect (default: true) */
  hoverable?: boolean;
  children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * `<GlassCard>` — medium-density glass for content cards.
 *
 * ```tsx
 * <GlassCard className="p-6">
 *   <h2>Card title</h2>
 *   <p>Card body</p>
 * </GlassCard>
 * ```
 */
export const GlassCard = forwardRef<HTMLElement, GlassCardProps>(function GlassCard(
  { as: Tag = "div", className, hoverable = true, children, ...rest },
  ref,
) {
  const classes = [
    "glass-card",
    !hoverable && "glass-card--no-hover",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref as React.Ref<never>} className={classes} {...rest}>
      {children}
    </Tag>
  );
}) as <T extends ElementType = "div">(
  props: GlassCardProps<T> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null;
