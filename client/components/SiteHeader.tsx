import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#expertise", label: "Expertise" },
  { href: "#coes", label: "Centers of Excellence" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="grid place-items-center h-9 w-9 rounded-md bg-primary text-primary-foreground font-bold">
            E
          </div>
          <div className="leading-tight">
            <div className="text-lg font-extrabold tracking-tight">Embinsys</div>
            <div className="text-xs text-muted-foreground -mt-1">Engineering & Design Services</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <a href="mailto:info@embinsys.com">Get in touch</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
