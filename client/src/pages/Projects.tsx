import MainLayout from "@/components/Layout/MainLayout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";

const projects = [
  {
    title: "Micro Marketplace",
    description: "A scalable e-commerce platform built with microservices architecture. Features Spring Cloud Gateway, Eureka, Keycloak, Resilience4j, Kafka, and ELK stack observability.",
    image: "/images/ecommerce.png",
    tags: ["Spring Boot", "Microservices", "Kafka", "React", "Docker"],
    github: true,
    demo: false,
    confidential: false,
    link: "https://github.com/Aladdinne"
  },
  {
    title: "Stock Manager & RFID AI",
    description: "Inventory management platform with AI-powered RFID tag position detection. Built with Spring Boot, Angular, PostgreSQL, and Docker.",
    image: "/images/microsservice.png",
    tags: ["Spring Boot", "Angular", "AI/ML", "PostgreSQL", "Docker"],
    github: false,
    demo: false,
    confidential: true,
    link: "#"
  },
  {
    title: "IntedGroup Platform",
    description: "Accommodation and reservation management platform for a university group. Handles real-time data and complex booking logic.",
    image: "/images/logement.png",
    tags: ["Node.js", "Angular", "MongoDB", "Express"],
    github: false,
    demo: true,
    confidential: false,
    link: "https://ims.intedgroup.com/"
  },
  {
    title: "BrainMatch",
    description: "Engaging memory and association game with adaptive levels and real-time scoring. Includes detailed analytics to track user progress.",
    image: "/images/jeux.png",
    tags: ["Vue.js", "JavaScript", "Analytics", "Game Dev"],
    github: false,
    demo: true,
    confidential: false,
    link: "https://brain-match.vercel.app/"
  },
  {
    title: "Workflux",
    description: "Workflow process management module using JEE, Spring, and jBPM. Optimizes efficiency and smoothness of complex business workflows.",
    image: "/images/workflow.png",
    tags: ["JEE", "Spring", "jBPM", "Workflow"],
    github: true,
    demo: false,
    confidential: false,
    link: "https://github.com/Aladdinne/workflow"
  },
  {
    title: "Digi Smart Dashboard",
    description: "IoT dashboard for monitoring 100+ sensors in real-time. Features anomaly detection, alerts, and historical data analysis.",
    image: "/images/digi smart.png",
    tags: ["Angular", "Spring Boot", "MongoDB", "IoT", "WebSocket"],
    github: false,
    demo: false,
    confidential: true,
    link: "#"
  },
  {
    title: "ADAS System",
    description: "Advanced Driver Assistance System for lane, vehicle, and fatigue detection. Implemented on embedded processors (Pynq Z1, Jetson Xavier NX).",
    image: "/images/adas.png",
    tags: ["Python", "OpenCV", "TensorFlow", "Embedded", "AI"],
    github: true,
    demo: false,
    confidential: false,
    link: "#"
  },
  {
    title: "Reclamation Management",
    description: "User account and complaint management system. Handles reception, processing, and resolution of user complaints.",
    image: "/images/reclamation.png",
    tags: ["Spring Boot", "Angular", "MySQL"],
    github: false,
    demo: true,
    confidential: true,
    link: "https://drive.google.com/file/d/13bbMFOoJ-vj0taqySoDbdWERRn1kQKds/view?usp=sharing"
  }
];

export default function Projects() {
  return (
    <MainLayout>
      <section className="min-h-screen py-20 px-4 sm:px-8">
        <div className="container max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Featured Projects
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of my work in microservices, web development, and AI systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.1)] flex flex-col"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent z-10 opacity-60" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/project-tech.png";
                    }}
                  />
                  
                  {/* Confidential Badge */}
                  {project.confidential && (
                    <div className="absolute top-3 right-3 z-20 bg-destructive/20 backdrop-blur-md border border-destructive/50 text-destructive px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      CONFIDENTIAL
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-xs font-mono rounded bg-secondary/10 text-secondary border border-secondary/20"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    {project.github && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" className="w-full gap-2">
                          <Github className="w-4 h-4" />
                          Code
                        </Button>
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button className="w-full gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </Button>
                      </a>
                    )}
                    {!project.github && !project.demo && (
                      <Button variant="ghost" disabled className="w-full opacity-50 cursor-not-allowed">
                        Internal Project
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
