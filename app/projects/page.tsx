"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Heart,
  Droplets,
  Dumbbell,
  FileText,
  Gamepad2,
  GraduationCap,
  TrendingUp,
  Shield,
  Sparkles,
  Code2,
  Layers,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { projects } from "../../data/portfolio";

const iconMap: { [key: string]: JSX.Element } = {
  carepulse: <Heart className="w-7 h-7" />,
  blueguard: <Droplets className="w-7 h-7" />,
  devmuscles: <Dumbbell className="w-7 h-7" />,
  "report-card": <FileText className="w-7 h-7" />,
  "simon-game": <Gamepad2 className="w-7 h-7" />,
  "iter-college": <GraduationCap className="w-7 h-7" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 18 },
  },
};

export default function ProjectsPage() {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      <Header name="TK" />

      <main className="pt-24 md:pt-28 pb-20 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* ─── Page Header ─── */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-20"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-8 md:mb-10 group transition-all duration-300 hover:gap-3"
              style={{ color: "var(--foreground-secondary)" }}
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium text-sm">Back to Home</span>
            </Link>

            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 border backdrop-blur-xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                <Layers
                  className="w-4 h-4"
                  style={{ color: "var(--accent-primary)" }}
                />
                <span
                  className="text-xs font-bold tracking-[0.2em] uppercase"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Complete Portfolio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight"
                style={{ color: "var(--foreground)" }}
              >
                All <span className="text-gradient-orange">Projects</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg lg:text-xl font-light leading-relaxed"
                style={{ color: "var(--foreground-tertiary)" }}
              >
                Production-level applications built with modern web
                technologies
              </motion.p>
            </div>
          </motion.div>

          {/* ─── Projects List ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-16 md:space-y-24"
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                id={project.id}
                variants={itemVariants}
                className="group relative scroll-mt-28"
              >
                {/* Card Container */}
                <div
                  className="rounded-2xl md:rounded-3xl border overflow-hidden transition-all duration-500 card-elevated"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* ─ Visual Panel ─ */}
                    <div
                      className={`relative w-full lg:w-2/5 min-h-[240px] sm:min-h-[280px] lg:min-h-[400px] ${index % 2 === 1 ? "lg:order-2" : ""
                        }`}
                    >
                      {/* Gradient bg */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                      />
                      {/* Grid pattern */}
                      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

                      {/* Centered icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{
                            scale: [1, 1.06, 1],
                            rotate: [0, 3, -3, 0],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`p-10 sm:p-12 md:p-14 rounded-full bg-gradient-to-br ${project.gradient} text-white shadow-2xl`}
                        >
                          <div className="scale-[2] sm:scale-[2.5]">
                            {iconMap[project.id] ?? (
                              <Code2 className="w-7 h-7" />
                            )}
                          </div>
                        </motion.div>
                      </div>

                      {/* Floating badges */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-6 right-6 p-3 rounded-xl backdrop-blur-md border hidden sm:block"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          borderColor: "var(--border-color)",
                        }}
                      >
                        <TrendingUp
                          className="w-5 h-5"
                          style={{ color: "var(--accent-primary)" }}
                        />
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          delay: 1,
                        }}
                        className="absolute bottom-6 left-6 p-3 rounded-xl backdrop-blur-md border hidden sm:block"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          borderColor: "var(--border-color)",
                        }}
                      >
                        <Shield
                          className="w-5 h-5"
                          style={{ color: "var(--accent-primary)" }}
                        />
                      </motion.div>
                    </div>

                    {/* ─ Text Content ─ */}
                    <div
                      className={`w-full lg:w-3/5 p-6 sm:p-8 lg:p-10 ${index % 2 === 1 ? "lg:order-1" : ""
                        }`}
                    >
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 mb-4">
                        <div
                          className={`p-2 rounded-lg bg-gradient-to-br ${project.gradient} text-white`}
                        >
                          {iconMap[project.id] ?? (
                            <Code2 className="w-4 h-4" />
                          )}
                        </div>
                        {project.isFeatured && (
                          <span
                            className="text-[0.65rem] font-bold uppercase tracking-widest"
                            style={{ color: "var(--accent-primary)" }}
                          >
                            Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 tracking-tight"
                        style={{ color: "var(--foreground)" }}
                      >
                        {project.title}
                      </h2>
                      <p
                        className={`text-sm sm:text-base mb-5 font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                      >
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p
                        className="text-sm sm:text-base leading-relaxed mb-6"
                        style={{ color: "var(--foreground-secondary)" }}
                      >
                        {project.longDescription}
                      </p>

                      {/* Tech stack */}
                      <div className="mb-6">
                        <h3
                          className="text-[0.65rem] font-bold uppercase tracking-widest mb-3"
                          style={{ color: "var(--foreground-tertiary)" }}
                        >
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300"
                              style={{
                                backgroundColor: "var(--card-bg-hover)",
                                borderColor: "var(--border-color)",
                                color: "var(--foreground-secondary)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key features */}
                      <div className="mb-6">
                        <h3
                          className="text-[0.65rem] font-bold uppercase tracking-widest mb-3"
                          style={{ color: "var(--foreground-tertiary)" }}
                        >
                          Key Achievements
                        </h3>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.06 }}
                              className="flex items-start gap-2.5 text-sm"
                              style={{
                                color: "var(--foreground-secondary)",
                              }}
                            >
                              <span
                                className="mt-0.5 flex-shrink-0"
                                style={{ color: "var(--accent-primary)" }}
                              >
                                ✦
                              </span>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3">
                        {project.demoLink && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-white shadow-lg transition-all duration-300"
                            style={{
                              background:
                                "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
                            }}
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </motion.a>
                        )}
                        {project.githubLink && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all duration-300"
                            style={{
                              backgroundColor: "var(--card-bg)",
                              borderColor: "var(--border-color)",
                              color: "var(--foreground)",
                            }}
                          >
                            <Github className="w-4 h-4" />
                            Source
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* ─── More Coming Soon ─── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 md:mt-24 text-center p-10 md:p-14 rounded-2xl md:rounded-3xl border card-elevated"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block mb-4 md:mb-6"
            >
              <Sparkles
                className="w-10 h-10 md:w-14 md:h-14"
                style={{ color: "var(--accent-primary)" }}
              />
            </motion.div>
            <h3
              className="text-xl md:text-2xl font-bold mb-2 md:mb-3"
              style={{ color: "var(--foreground)" }}
            >
              More Projects Coming Soon
            </h3>
            <p
              className="text-sm md:text-base"
              style={{ color: "var(--foreground-tertiary)" }}
            >
              Currently working on exciting new projects. Stay tuned!
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
