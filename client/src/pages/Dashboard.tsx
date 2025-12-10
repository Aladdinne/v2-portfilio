import MainLayout from "@/components/Layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bar, BarChart, CartesianGrid, Cell, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Data for charts
const skillsData = [
  { name: "Java/Spring", value: 95, color: "#00f3ff" },
  { name: "Angular", value: 90, color: "#bc13fe" },
  { name: "React", value: 85, color: "#7000ff" },
  { name: "DevOps", value: 80, color: "#0066ff" },
  { name: "Python/AI", value: 75, color: "#00d4ff" },
];

const projectTimelineData = [
  { year: "2021", projects: 2, type: "Academic" },
  { year: "2022", projects: 3, type: "Internship" },
  { year: "2023", projects: 4, type: "Professional" },
  { year: "2024", projects: 6, type: "Freelance" },
];

const techDistributionData = [
  { name: "Backend", value: 40, color: "#00f3ff" },
  { name: "Frontend", value: 35, color: "#bc13fe" },
  { name: "DevOps", value: 15, color: "#7000ff" },
  { name: "AI/Data", value: 10, color: "#0066ff" },
];

export default function Dashboard() {
  return (
    <MainLayout>
      <section className="min-h-screen py-20 px-4 sm:px-8">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Portfolio Analytics
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Interactive insights into my technical expertise and project history.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Key Metrics Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <p className="text-xs text-muted-foreground mt-1">+4 this year</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Years Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-secondary">3+</div>
                  <p className="text-xs text-muted-foreground mt-1">Full Stack Development</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Tech Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-foreground">12+</div>
                  <p className="text-xs text-muted-foreground mt-1">Core Technologies Mastered</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skills Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-1"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border h-[400px]">
                <CardHeader>
                  <CardTitle>Technical Proficiency</CardTitle>
                </CardHeader>
                <CardContent className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={skillsData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={false} />
                      <XAxis type="number" domain={[0, 100]} hide />
                      <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#888888', fontSize: 12 }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                        itemStyle={{ color: '#fff' }}
                        cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {skillsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Timeline Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="col-span-1"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border h-[400px]">
                <CardHeader>
                  <CardTitle>Project Growth</CardTitle>
                </CardHeader>
                <CardContent className="h-[320px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={projectTimelineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                      <XAxis dataKey="year" tick={{ fill: '#888888' }} />
                      <YAxis tick={{ fill: '#888888' }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="projects" 
                        stroke="#00f3ff" 
                        strokeWidth={3}
                        dot={{ fill: '#00f3ff', r: 6 }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tech Distribution Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="col-span-1 lg:col-span-2"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border h-[400px]">
                <CardHeader>
                  <CardTitle>Expertise Distribution</CardTitle>
                </CardHeader>
                <CardContent className="h-[320px] flex items-center justify-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={techDistributionData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {techDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Legend verticalAlign="bottom" height={36} iconType="circle" />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
