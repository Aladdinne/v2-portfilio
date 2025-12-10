import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "wouter";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <MainLayout>
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-8">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Cyberpunk Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="container max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for work
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">
                Alaeddine Hammouda
              </span>
            </h1>

            <div className="text-xl md:text-2xl text-muted-foreground font-mono h-[60px]">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Microservices Architect",
                    "Spring Boot Expert",
                    "Angular & React Specialist",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I build scalable, secure, and high-performance web applications. 
              Specializing in microservices architecture and modern frontend frameworks 
              to deliver exceptional digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/projects">
                <Button size="lg" className="group text-base font-semibold">
                  View Projects
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <a href="/images/CV_Alaeddine_Hammouda.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="group text-base font-semibold">
                  Download CV
                  <Download className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
                </Button>
              </a>
            </div>

            <div className="flex gap-6 pt-8">
              <a href="https://github.com/Aladdinne" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/alaeddine-hammouda/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:alaeddine.hammouda@esprit.tn" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Visual/Avatar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[500px] h-[500px] mx-auto">
              {/* Animated Rings */}
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border border-secondary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-12 border border-primary/10 rounded-full animate-[pulse_4s_ease-in-out_infinite]" />
              
              {/* Avatar Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_50px_rgba(0,243,255,0.2)] bg-background/50 backdrop-blur-sm">
                <img 
                  src="/images/avatar-placeholder.png" 
                  alt="Alaeddine Hammouda" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-card border border-border p-2 rounded-lg shadow-lg animate-bounce">
                <span className="text-xs font-mono font-bold text-primary">Java/Spring</span>
              </div>
              <div className="absolute bottom-10 right-0 bg-card border border-border p-2 rounded-lg shadow-lg animate-pulse">
                <span className="text-xs font-mono font-bold text-secondary">React/Angular</span>
              </div>
              <div className="absolute bottom-10 left-0 bg-card border border-border p-2 rounded-lg shadow-lg">
                <span className="text-xs font-mono font-bold text-accent-foreground">Microservices</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </MainLayout>
  );
}
