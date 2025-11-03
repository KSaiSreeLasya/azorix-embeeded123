import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Section({
  id,
  className,
  container = true,
  children,
}: {
  id?: string;
  className?: string;
  container?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      <div className={cn(container && "container")}>{children}</div>
    </section>
  );
}
