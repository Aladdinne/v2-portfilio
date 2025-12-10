import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Code, Mail, FileText, Terminal, LayoutDashboard } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: User, label: "About", path: "/about" },
  { icon: Code, label: "Projects", path: "/projects" },
  { icon: Briefcase, label: "Experience", path: "/experience" },
  { icon: FileText, label: "Resume", path: "/resume" },
  { icon: Mail, label: "Contact", path: "/contact" },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-8 z-50 hidden md:flex">
      <div className="mb-12">
        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50">
          <Terminal className="w-6 h-6 text-primary" />
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-6 w-full px-2">
        {navItems.map((item) => {
          const isActive = location === item.path;
          return (
            <Link key={item.path} href={item.path}>
              <div
                className={cn(
                  "relative group flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 cursor-pointer",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                <item.icon className={cn("w-6 h-6 transition-transform duration-300 group-hover:scale-110", isActive && "scale-110")} />
                
                {/* Tooltip-like label */}
                <span className="absolute left-14 bg-card border border-border px-2 py-1 rounded text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-50 shadow-lg">
                  {item.label}
                </span>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-full" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto flex flex-col gap-4">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent mx-auto" />
        <span className="text-[10px] font-mono text-muted-foreground writing-vertical-rl rotate-180 opacity-50">
          v2.0.24
        </span>
      </div>
    </aside>
  );
}
