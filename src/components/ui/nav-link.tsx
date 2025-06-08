"use client";

import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ComponentProps } from "react";

import { cn } from "~/lib/utils";

const navLinkVariants = cva("transition-colors", {
  variants: {
    variant: {
      default:
        "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-50 hover:underline focus:underline focus:outline-none data-[active=true]:text-stone-900 data-[active=true]:dark:text-stone-50 data-[active=true]:font-medium",
    },
    size: {
      default: "text-base leading-6",
      sm: "text-sm leading-5",
      lg: "text-lg leading-7",
      xl: "text-xl leading-8",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type NavLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof navLinkVariants>;

export function NavLink({
  className = "",
  href,
  size,
  variant,
  ...props
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href as string);

  return (
    <Link
      href={href}
      data-active={isActive}
      className={cn(navLinkVariants({ size, variant }), className)}
      {...props}
    />
  );
}
