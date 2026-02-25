"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { JSX } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      // { name: "Angular", level: 80 },
      { name: "Bootstrap", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: 90 },
      { name: "Laravel", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      // { name: "RESTful APIs", level: 85 },
    ],
  },
  {
    title: "Databases & More",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 80 },
      { name: "WordPress", level: 75 },
      // { name: "Shopify", level: 70 },
      { name: "Git/GitHub", level: 90 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

interface SkillBarProps {
  key?: string;
  skill: Skill;
  index: number;
}

function SkillBar({ skill, index }: SkillBarProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-sm md:text-base" style={{ color: 'var(--foreground)' }}>{skill.name}</span>
        <span className="text-orange-400 font-semibold text-sm md:text-base">{skill.level}%</span>
      </div>
      <div className="w-full h-3 rounded-full overflow-hidden backdrop-blur-sm" style={{ backgroundColor: 'var(--card-bg-hover)' }}>
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 rounded-full relative overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills(): JSX.Element {
  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 50% 50%, var(--glow-primary), transparent 50%)'
      }} />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div className="text-center mb-16" variants={categoryVariants}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 relative inline-block" style={{ color: 'var(--foreground)' }}>
            My Skills
            <span className="absolute -bottom-2 left-0 right-0 mx-auto w-20 h-1 bg-gradient-to-r from-orange-400 via-orange-300 to-transparent rounded-full" />
          </h2>
          <p className="text-lg mt-6" style={{ color: 'var(--foreground-tertiary)' }}>Technologies I work with</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="group relative backdrop-blur-md rounded-2xl p-6 md:p-8 border shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
              style={{
                background: 'linear-gradient(to bottom right, var(--card-bg), var(--card-bg-hover))',
                borderColor: 'var(--border-color)'
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{
                background: 'linear-gradient(to bottom right, var(--glow-primary), transparent)'
              }} />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 pb-3 border-b" style={{
                  color: 'var(--foreground)',
                  borderColor: 'var(--border-color)'
                }}>
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar key={skill.name} skill={skill} index={skillIndex} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
