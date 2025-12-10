import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Code, Mail, FileText, Menu, X, LayoutDashboard } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: User, label: "About", path: "/about" },
  { icon: Code, label: "Projects", path: "/projects" },
  { icon: Briefcase, label: "Experience", path: "/experience" },
  { icon: FileText, label: "Resume", path: "/resume" },
  { icon: Mail, label: "Contact", path: "/contact" },
];

export default function MobileNav() {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4">
      <div className="font-mono font-bold text-primary text-xl">AH.dev</div>
      
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] bg-card border-l border-border">
          <div className="flex flex-col gap-8 mt-8">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link key={item.path} href={item.path} onClick={() => setOpen(false)}>
                  <div
                    className={cn(
                      "flex items-center gap-4 p-2 rounded-lg transition-colors",
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-mono text-lg">{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
