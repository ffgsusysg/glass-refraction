import React, { forwardRef, type ElementType, type ComponentPropsWithoutRef } from "react";

type GlassVariant = "glass" | "glass-card" | "glass-pill";

export type GlassProps<T extends ElementType = "div"> = {
  /** HTML element to render (default: "div") */
  as?: T;
  /** Additional class names */
  className?: string;
  /** Override the glass tier class (default: "glass") */
  variant?: GlassVariant;
  children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

/**
 * Generic `<Glass>` wrapper — renders a `.glass` element by default.
 *
 * ```tsx
 * <Glass as="nav" className="px-4">Navbar</Glass>
 * ```
 */
export const Glass = forwardRef<HTMLElement, GlassProps>(function Glass(
  { as: Tag = "div", className, variant = "glass", children, ...rest },
  ref,
) {
  const classes = [variant, className].filter(Boolean).join(" ");
  return (
    <Tag ref={ref as React.Ref<never>} className={classes} {...rest}>
      {children}
    </Tag>
  );
}) as <T extends ElementType = "div">(
  props: GlassProps<T> & { ref?: React.Ref<HTMLElement> },
) => React.ReactElement | null;
