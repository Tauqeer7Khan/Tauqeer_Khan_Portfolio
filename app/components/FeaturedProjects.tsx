"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Heart,
  Droplets,
  Dumbbell,
} from "lucide-react";
import { projects } from "../../data/portfolio";
import { useTheme } from "../context/ThemeContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

const iconMap: { [key: string]: JSX.Element } = {
  carepulse: <Heart className="w-6 h-6" />,
  blueguard: <Droplets className="w-6 h-6" />,
  devmuscles: <Dumbbell className="w-6 h-6" />,
};

export default function FeaturedProjects() {
  const { theme } = useTheme();
  const featured = projects.filter((p) => p.isFeatured);

  return (
    <section
      id="projects"
      className="py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full blur-[120px] md:blur-[160px] opacity-20 animate-pulse-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(251,146,60,0.12), rgba(168,85,247,0.06), transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* ─── Section Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-6 md:mb-8 border backdrop-blur-xl"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--border-color)",
            }}
          >
            <Sparkles
              className="w-4 h-4"
              style={{ color: "var(--accent-primary)" }}
            />
            <span
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "var(--accent-primary)" }}
            >
              Selected Works
            </span>
          </motion.div>

          <h2
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight leading-[1.1]"
            style={{ color: "var(--foreground)" }}
          >
            Featured{" "}
            <span className="text-gradient-orange">Projects</span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed px-2"
            style={{ color: "var(--foreground-tertiary)" }}
          >
            Production-level applications built with{" "}
            <span
              style={{ color: "var(--accent-primary)", fontWeight: 500 }}
            >
              modern technologies
            </span>{" "}
            and best practices.
          </p>
        </motion.div>

        {/* ─── Project Cards ─── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-14 md:mb-20"
        >
          {featured.map((project) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="group relative h-full"
            >
              {/* Outer glow on hover */}
              <div
                className={`absolute -inset-1 bg-gradient-to-br ${project.gradient} rounded-2xl md:rounded-[2rem] opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700`}
              />

              {/* Card body */}
              <div
                className="relative h-full rounded-2xl md:rounded-[2rem] p-6 md:p-8 flex flex-col overflow-hidden border backdrop-blur-sm transition-all duration-500"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
              >
                {/* Decorative blob */}
                <div
                  className={`absolute -top-20 -right-20 w-44 h-44 md:w-56 md:h-56 bg-gradient-to-br ${project.gradient} opacity-[0.07] blur-[60px] md:blur-[80px] group-hover:opacity-[0.18] transition-opacity duration-700`}
                />

                {/* ─ Icon + badge ─ */}
                <div className="relative z-10 flex items-center justify-between mb-6 md:mb-8">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
                  >
                    {iconMap[project.id] ?? (
                      <Sparkles className="w-6 h-6" />
                    )}
                  </motion.div>

                  <div className="flex items-center gap-1.5">
                    <TrendingUp
                      className="w-3.5 h-3.5"
                      style={{ color: "var(--accent-primary)" }}
                    />
                    <span
                      className="text-[0.6rem] md:text-[0.65rem] font-bold uppercase tracking-widest"
                      style={{ color: "var(--accent-primary)" }}
                    >
                      Production
                    </span>
                  </div>
                </div>

                {/* ─ Title ─ */}
                <div className="relative z-10 mb-4 md:mb-6">
                  <h3
                    className="text-xl md:text-2xl lg:text-3xl font-bold mb-1.5"
                    style={{ color: "var(--foreground)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-xs md:text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent uppercase tracking-wider`}
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* ─ Description ─ */}
                <div className="relative z-10 flex-grow mb-6 md:mb-8">
                  <p
                    className="leading-relaxed mb-5 text-sm md:text-[0.95rem]"
                    style={{ color: "var(--foreground-secondary)" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-[0.7rem] md:text-xs font-medium border transition-all duration-300"
                        style={{
                          backgroundColor: "var(--card-bg-hover)",
                          borderColor: "var(--border-color)",
                          color: "var(--foreground-secondary)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span
                        className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg text-[0.7rem] md:text-xs font-medium border"
                        style={{
                          backgroundColor: "var(--card-bg-hover)",
                          borderColor: "var(--border-color)",
                          color: "var(--foreground-tertiary)",
                        }}
                      >
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* ─ Footer link ─ */}
                <div
                  className="relative z-10 mt-auto pt-5 md:pt-6 border-t"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <Link
                    href={`/projects#${project.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 group-hover:gap-3"
                    style={{ color: "var(--foreground-secondary)" }}
                    onMouseEnter={(
                      e: React.MouseEvent<HTMLAnchorElement>
                    ) =>
                    (e.currentTarget.style.color =
                      "var(--accent-primary)")
                    }
                    onMouseLeave={(
                      e: React.MouseEvent<HTMLAnchorElement>
                    ) =>
                    (e.currentTarget.style.color =
                      "var(--foreground-secondary)")
                    }
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ─── View All Button ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 md:gap-4 px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg overflow-hidden shadow-2xl cursor-pointer"
            >
              {/* Gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 transition-opacity" />
              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
              {/* Shimmer */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              <span className="relative z-10 text-white tracking-wide">
                Explore All Projects
              </span>
              <div className="relative z-10 bg-white/20 rounded-full p-1.5 md:p-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
