import MainLayout from "@/components/Layout/MainLayout";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Server, Cpu, Layers } from "lucide-react";

const skills = [
  {
    category: "Backend",
    icon: Server,
    items: ["Java", "Spring Boot", "Node.js", "Microservices", "REST APIs", "GraphQL"]
  },
  {
    category: "Frontend",
    icon: Code2,
    items: ["Angular", "React", "TypeScript", "TailwindCSS", "Bootstrap", "HTML/CSS"]
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"]
  },
  {
    category: "DevOps & Cloud",
    icon: Globe,
    items: ["Docker", "Kubernetes", "AWS", "GitLab CI/CD", "Jenkins", "SonarQube"]
  },
  {
    category: "Architecture",
    icon: Layers,
    items: ["Event-Driven", "Clean Architecture", "Design Patterns", "System Design"]
  },
  {
    category: "Other",
    icon: Cpu,
    items: ["Python", "AI/ML Basics", "IoT Protocols", "Agile/Scrum"]
  }
];

export default function About() {
  return (
    <MainLayout>
      <section className="min-h-screen py-20 px-4 sm:px-8">
        <div className="container max-w-6xl mx-auto">
          
          {/* Intro Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a passionate <strong className="text-foreground">Full Stack Developer</strong> based in Tunis, Tunisia. 
                  With a strong foundation in both backend and frontend technologies, I specialize in building 
                  robust, scalable web applications and microservices.
                </p>
                <p>
                  My journey began with a fascination for how things work under the hood, leading me to master 
                  <strong className="text-primary"> Java and Spring Boot</strong> ecosystem. I've since expanded my expertise to modern 
                  frontend frameworks like <strong className="text-secondary">Angular and React</strong>, allowing me to deliver complete, 
                  end-to-end solutions.
                </p>
                <p>
                  I thrive in challenging environments where I can solve complex problems, optimize performance, 
                  and contribute to innovative projects. Whether it's architecting a distributed system or 
                  crafting a pixel-perfect UI, I bring dedication and technical excellence to every task.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
              <img 
                src="/images/about-bg.png" 
                alt="Workspace" 
                className="relative rounded-2xl border border-border shadow-2xl w-full object-cover aspect-video"
              />
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-10 text-center">
              Technical <span className="text-primary">Arsenal</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <skill.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{skill.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 text-sm bg-muted text-muted-foreground rounded border border-border/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </MainLayout>
  );
}
