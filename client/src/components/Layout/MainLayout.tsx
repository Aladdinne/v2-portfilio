import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden">
      <Sidebar />
      <MobileNav />
      
      <main className="md:pl-20 pt-16 md:pt-0 min-h-screen relative">
        {/* Background Grid Effect */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
               backgroundSize: '4rem 4rem'
             }} 
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
