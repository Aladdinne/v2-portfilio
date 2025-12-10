import MainLayout from "@/components/Layout/MainLayout";
import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase, Code } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Java/Angular Developer",
    company: "Uptech",
    location: "Tunis, Tunisia",
    period: "Mars 2024 – Oct 2024",
    description: [
      "Développement d'une application web de gestion de stock et de commandes pour suivre les produits en temps réel.",
      "Mise en place d’une architecture microservices avec Spring Boot (services : produits, utilisateurs, commandes, notifications, etc.).",
      "Intégration de Keycloak pour l’authentification, la gestion des rôles et la sécurisation des services via OAuth2/JWT.",
      "Utilisation de RabbitMQ pour la communication asynchrone entre microservices.",
      "Création d’une interface utilisateur responsive en Angular pour la gestion des produits, visualisation des stocks, commandes, et alertes.",
      "Détection automatique de la position des produits via technologie RFID et visualisation sur interface Angular.",
      "Déploiement de l’ensemble du système avec Docker et orchestration via Kubernetes.",
      "Surveillance et analyse des logs avec ELK Stack (Elasticsearch, Logstash, Kibana).",
      "Mise en place d’un pipeline CI/CD avec GitLab pour automatiser les tests, l’analyse de qualité (SonarQube), le build et le déploiement."
    ],
    tech: ["Spring Boot", "Angular", "Keycloak", "RabbitMQ", "PostgreSQL", "Docker", "Kubernetes", "ELK Stack", "GitLab", "SonarQube"]
  },
  {
    title: "Développeur Full Stack Freelance",
    company: "Freelance",
    location: "Remote",
    period: "Janv 2024 – Présent",
    description: [
      "Conception et réalisation de solutions web sur mesure pour divers clients.",
      "Développement de plateformes e-commerce avec gestion des paiements, paniers et espaces clients sécurisés.",
      "Création d’applications de gestion immobilière (biens, contrats, rendez-vous, interface admin).",
      "Implémentation de dashboards personnalisés pour la visualisation de données métier en temps réel.",
      "Frontend développé en React ou Angular selon les préférences du client.",
      "Backend en Node.js (Express) ou Java, connecté à des bases de données MongoDB ou PostgreSQL."
    ],
    tech: ["Angular", "React", "Java", "Node.js", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Stage Développeur Full Stack",
    company: "Digi Smart Solutions",
    location: "Tunis, Tunisia",
    period: "Juin 2023 – Août 2023",
    description: [
      "Conception et développement d’un dashboard intelligent permettant la surveillance en temps réel de plus de 100 capteurs IoT.",
      "Développement d’un frontend Angular dynamique et réactif, avec affichage en temps réel des mesures (latence < 1s).",
      "Implémentation d’un backend Spring Boot exposant des API REST sécurisées, connectées à une base MongoDB.",
      "Gestion intelligente des événements : détection d’anomalies, génération d’alertes, enregistrement d’historique des alarmes.",
      "Visualisation de données par capteur, filtrage avancé, et vues personnalisées pour les techniciens et les superviseurs."
    ],
    tech: ["Angular", "Spring Boot", "MongoDB", "Git", "REST API", "WebSocket"]
  },
  {
    title: "Stage Réseau",
    company: "Tunisie Telecom",
    location: "Tunis, Tunisia",
    period: "Juil 2022 – Août 2022",
    description: [
      "Contribution aux campagnes de mesure et à l’optimisation des performances des réseaux mobiles (2G, 3G, 4G).",
      "Collecte de données radio sur le terrain à l’aide de l’outil professionnel Nemo Outdoor.",
      "Analyse des KPIs réseaux à l’aide de scripts Python pour identifier les zones à faible couverture ou interférences.",
      "Préparation de rapports de performance pour appuyer les décisions de l’équipe optimisation radio."
    ],
    tech: ["Python", "Nemo Outdoor", "Excel"]
  },
  {
    title: "Projet de Fin d'Année (PFA)",
    company: "FSM",
    location: "Monastir, Tunisia",
    period: "2021",
    description: [
      "Conception et développement d'un système embarqué complet de surveillance et d’assistance à la conduite (ADAS).",
      "Détection de voies avec OpenCV et techniques de vision par ordinateur.",
      "Détection de véhicules avec CNN (TensorFlow, Keras).",
      "Détection de la fatigue du conducteur via analyse faciale (Scikit-Learn).",
      "Intégration sur Pynq Z1 et Jetson Xavier NX.",
      "Optimisation des performances pour traitement en temps réel (30 FPS)."
    ],
    tech: ["Python", "OpenCV", "TensorFlow", "Keras", "Scikit-Learn", "Pynq Z1", "Jetson Xavier NX"]
  }
];

export default function Experience() {
  return (
    <MainLayout>
      <section className="min-h-screen py-20 px-4 sm:px-8 relative">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Professional Experience
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              My journey through software engineering and development.
            </p>
          </motion.div>

          <div className="relative border-l border-border/50 ml-4 md:ml-6 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-colors duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-secondary font-medium mt-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground font-mono">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 list-disc list-inside text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-2 py-1 text-xs font-mono rounded bg-primary/5 text-primary border border-primary/10"
                      >
                        {tech}
                      </span>
                    ))}
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
