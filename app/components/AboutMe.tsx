"use client";

import { motion } from "framer-motion";
import { BookOpen, Mail, Phone, Github, Linkedin } from "lucide-react";
import * as React from "react";
import type { JSX } from "react";

interface AboutData {
  professionalSummary: string[];
  education: {
    degree: string;
    duration: string;
  };
  contactInfo: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}

const aboutData: AboutData = {
  professionalSummary: [
    "I am a Front-End Developer and aspiring Software Engineer currently pursuing my B.Tech at the Institute of Technical Education and Research (ITER). My passion lies in building digital products that are as robust as they are beautiful.",
    "Specializing in modern web technologies, I don't just build websites; I engineer interactive experiences using React.js, Next.js, and advanced JavaScript (ES6+). I combine a strong foundation in technical architecture with a sharp eye for design to transform complex ideas into elegant, high-performance solutions.",
  ],
  education: {
    degree: "B.Tech in Computer Science Engineering",
    duration: "2023 - 2027",
  },
  contactInfo: {
    email: "tauquir061@gmail.com",
    phone: "+91 8809550710",
    github: "https://github.com/Tauqeer7Khan",
    linkedin: "https://www.linkedin.com/in/tauqeer-khan-9754a1386",
  },
};

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

export default function AboutMe(): JSX.Element {
  return (
    <section
      id="aboutme"
      className="relative py-20 px-6 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 30% 50%, var(--glow-secondary), transparent 50%)'
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 70% 50%, var(--glow-primary), transparent 50%)'
      }} />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div className="text-center mb-16" variants={cardVariants}>
          <h2
            className="text-4xl lg:text-5xl font-bold mb-4 relative inline-block"
            style={{ color: 'var(--foreground)' }}
          >
            About Me
            <span className="absolute -bottom-2 left-0 right-0 mx-auto w-20 h-1 bg-gradient-to-r from-orange-400 via-orange-300 to-transparent rounded-full" />
          </h2>
          <p
            className="text-lg mt-6"
            style={{ color: 'var(--foreground-tertiary)' }}
          >
            Get to know me better
          </p>
        </motion.div>

        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Professional Summary */}
          <motion.div
            variants={cardVariants}
            className="group relative rounded-2xl p-6 md:p-8 border shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden card-elevated"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--border-color)'
            }}
          >
            {/* Glow Effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom right, var(--glow-primary), transparent)' }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: 'var(--card-bg-hover)' }}
                >
                  <BookOpen
                    className="w-6 h-6"
                    style={{ color: 'var(--accent-primary)' }}
                  />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: 'var(--foreground)' }}
                >
                  Professional Summary
                </h3>
              </div>

              <div className="space-y-4">
                {aboutData.professionalSummary.map((paragraph, index) => (
                  <p
                    key={index}
                    className="leading-relaxed text-base"
                    style={{ color: 'var(--foreground-secondary)' }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Education + Contact Cards */}
          <div className="flex flex-col gap-8">
            {/* Education Card */}
            <motion.div
              variants={cardVariants}
              className="group relative rounded-2xl p-6 md:p-8 border shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden card-elevated"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border-color)'
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom right, var(--glow-secondary), transparent)' }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: 'var(--card-bg-hover)' }}
                  >
                    <BookOpen
                      className="w-6 h-6"
                      style={{ color: 'var(--accent-primary)' }}
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Education
                  </h3>
                </div>

                <div className="space-y-3">
                  <p
                    className="font-semibold text-lg"
                    style={{ color: 'var(--foreground)' }}
                  >
                    {aboutData.education.degree}
                  </p>
                  <p
                    className="text-base"
                    style={{ color: 'var(--foreground-secondary)' }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: 'var(--accent-primary)' }}
                    >
                      Duration:
                    </span> {aboutData.education.duration}
                  </p>
                  <p
                    className="text-sm mt-4"
                    style={{ color: 'var(--foreground-tertiary)' }}
                  >
                    ITER, Siksha 'O' Anusandhan University, Bhubaneswar
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
              variants={cardVariants}
              className="group relative rounded-2xl p-6 md:p-8 border shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden card-elevated"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border-color)'
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'linear-gradient(to bottom right, var(--glow-primary), transparent)' }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: 'var(--card-bg-hover)' }}
                  >
                    <Mail
                      className="w-6 h-6"
                      style={{ color: 'var(--accent-primary)' }}
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: 'var(--foreground)' }}
                  >
                    Contact Info
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${aboutData.contactInfo.email}`}
                    className="flex items-center gap-3 transition-colors duration-200 group/link"
                    style={{ color: 'var(--foreground-secondary)' }}
                    onMouseEnter={(e: any) => e.currentTarget.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e: any) => e.currentTarget.style.color = 'var(--foreground-secondary)'}
                  >
                    <Mail
                      className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-200"
                      style={{ color: 'var(--accent-primary)' }}
                    />
                    <span className="text-sm md:text-base">{aboutData.contactInfo.email}</span>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${aboutData.contactInfo.phone}`}
                    className="flex items-center gap-3 transition-colors duration-200 group/link"
                    style={{ color: 'var(--foreground-secondary)' }}
                    onMouseEnter={(e: any) => e.currentTarget.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e: any) => e.currentTarget.style.color = 'var(--foreground-secondary)'}
                  >
                    <Phone
                      className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-200"
                      style={{ color: 'var(--accent-primary)' }}
                    />
                    <span className="text-sm md:text-base">{aboutData.contactInfo.phone}</span>
                  </a>

                  {/* Social Links */}
                  <div
                    className="flex gap-4 mt-6 pt-4 border-t"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    <a
                      href={aboutData.contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all duration-200 hover:scale-110 group/social"
                      style={{
                        backgroundColor: 'var(--card-bg-hover)',
                        color: 'var(--foreground-secondary)'
                      }}
                      onMouseEnter={(e: any) => e.currentTarget.style.color = 'var(--accent-primary)'}
                      onMouseLeave={(e: any) => e.currentTarget.style.color = 'var(--foreground-secondary)'}
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-5 h-5 transition-colors" />
                    </a>
                    <a
                      href={aboutData.contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg transition-all duration-200 hover:scale-110 group/social"
                      style={{
                        backgroundColor: 'var(--card-bg-hover)',
                        color: 'var(--foreground-secondary)'
                      }}
                      onMouseEnter={(e: any) => e.currentTarget.style.color = 'var(--accent-primary)'}
                      onMouseLeave={(e: any) => e.currentTarget.style.color = 'var(--foreground-secondary)'}
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-5 h-5 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
