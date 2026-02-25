"use client";

import Image from "next/image";
import { useState, useEffect, type ReactNode } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";


export default function Banner(): JSX.Element {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Front-end Developer", "Web Developer", "UI Designer"];
  const typingSpeed = isDeleting ? 50 : 100;
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev: boolean) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY }: { clientX: number; clientY: number }) {
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  }

  const xSpring = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const ySpring = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(ySpring, [0, 1], [5, -5]); // Slight tilt up/down
  const rotateY = useTransform(xSpring, [0, 1], [-5, 5]); // Slight tilt left/right

  const imageX = useTransform(xSpring, [0, 1], [-20, 20]); // Parallax movement
  const imageY = useTransform(ySpring, [0, 1], [-20, 20]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setDisplayedText((prev: string) => prev.slice(0, -1));
        if (displayedText === "") {
          setIsDeleting(false);
          setTextIndex((prev: number) => (prev + 1) % texts.length);
        }
      } else {
        setDisplayedText((prev: string) => currentText.slice(0, prev.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, textIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 md:pt-20 px-6 overflow-hidden w-full transition-colors duration-300"
      style={{ backgroundColor: 'var(--background)' }}
    >
      {/* Background Effects */}
      <BackgroundEffects />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">

          {/* Left Side: Text Content */}
          <div className="flex-1 space-y-12 text-center lg:text-left order-2 lg:order-1">

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative inline-block mt-4"
            >


              <p className="text-lg lg:text-xl font-medium tracking-wide" style={{ color: 'var(--foreground-secondary)' }}>
                Hello!&nbsp; I am <span className="text-gradient-orange font-bold">Tauqeer Khan</span>
              </p>
              <div className="h-1 w-20 bg-gradient-orange opacity-50 mt-2 rounded-full lg:mx-0 mx-auto" />
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-2xl lg:text-3xl font-light"
                style={{ color: 'var(--foreground-tertiary)' }}
              >
                A Developer who
              </motion.p>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-none tracking-tight" style={{ color: 'var(--foreground)' }}>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="block"
                >
                  Builds clean
                </motion.span>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    and
                  </motion.span>
                  <motion.span
                    className="relative inline-block group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                  >

                    <span className="relative z-10 bg-gradient-to-r from-orange-400 via-orange-200 to-orange-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      responsive
                    </span>
                  </motion.span>
                </div>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-lg max-w-2xl mx-auto lg:mx-0 font-poppins whitespace-nowrap"
                style={{ color: 'var(--foreground-tertiary)' }}
              >
                because great UI should feel fast, simple and accessible!!
              </motion.p>
            </div>

            {/* Dynamic Typing Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="pt-8"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-semibold flex flex-col lg:flex-row items-center lg:items-baseline gap-3" style={{ color: 'var(--foreground)' }}>
                <span style={{ color: 'var(--foreground-tertiary)' }}>I&apos;m a</span>
                <div className="flex items-center gap-1 whitespace-nowrap min-h-[40px] lg:min-h-[50px]">
                  <span className="text-gradient-orange text-left inline-block pb-1">
                    {'\u200B'}{displayedText}
                  </span>
                  <motion.div
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-[3px] h-8 bg-gradient-orange"
                  />
                </div>
              </div>

              <p className="mt-6 max-w-xl text-lg leading-relaxed" style={{ color: 'var(--foreground-secondary)' }}>
                Results-oriented <strong className="font-medium" style={{ color: 'var(--foreground)' }}>Computer Science Undergraduate</strong> skilled in <strong className="font-medium" style={{ color: 'var(--foreground)' }}>Front-end Development</strong> and <strong className="font-medium" style={{ color: 'var(--foreground)' }}>Modern UI/UX Design</strong>. Looking for my next challenge in <strong className="font-medium" style={{ color: 'var(--foreground)' }}>Architecting Seamless Web Experiences</strong>.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Image/Visuals */}
          <div className="flex-1 flex justify-center lg:justify-center relative order-1 lg:order-2 perspective-1000">
            <motion.div
              style={{
                rotateX,
                rotateY,
                x: imageX,
                y: imageY,
                transformStyle: "preserve-3d"
              }}
              className="relative w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] aspect-square flex items-center justify-center"
            >
              {/* Background Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-orange opacity-10 rounded-full blur-3xl scale-90 animate-pulse-slow" />

              {/* Main Image Layer with Flip Effect */}
              <motion.div
                className="relative z-20 w-full h-full"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              >
                <motion.div
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative w-full h-full"
                >
                  {/* Front Face (Emoji) */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Image
                      src="/assets/me.png"
                      alt="Tauqeer Khan"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>

                  {/* Back Face (Real Photo) */}
                  <div
                    className="absolute inset-0 w-full h-full flex items-center justify-center"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >


                    {/* Image (Scaled to pop out) */}
                    <div className="relative w-full h-full scale-110 -translate-y-3">
                      <Image
                        src="/assets/me-real.png"
                        alt="Tauqeer Khan Real"
                        fill
                        className="object-contain drop-shadow-2xl rounded-full"
                        priority
                        unoptimized
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements (Keep them outside flip context or manage their depth?) 
                    The user requested 'flip image'. Floating elements were around the image.
                    If they are outside the flip container but inside the 'y' motion div, they float with it but don't flip.
                    The previous code had FloatingIcon inside the motion.div (which moves Y).
                    So they move up/down with image. But do they flip?
                    If they are siblings to the flip container, they won't flip. This is good.
                */}
                <FloatingIcon delay={0} x={-40} y={-100}>
                  <div className="w-4 h-4 rounded-full bg-gradient-orange opacity-80 blur-[2px]" />
                </FloatingIcon>
                <FloatingIcon delay={1.5} x={180} y={-80}>
                  <div className="w-3 h-3 rounded-full bg-white/50 blur-[1px]" />
                </FloatingIcon>
                <FloatingIcon delay={2.5} x={200} y={150}>
                  <div className="w-6 h-6 rounded-full border border-orange-400/30" />
                </FloatingIcon>

                {/* Glass Card Overlay (Optional Premium Touch) - Outside Flip */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-4 lg:-right-10 z-30 bg-white/5 backdrop-blur-md border border-white/10 p-3 md:p-4 rounded-2xl shadow-xl flex items-center gap-2 md:gap-3"
                >
                  <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs md:text-sm font-medium whitespace-nowrap" style={{ color: 'var(--foreground)' }}>Open to Work</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Sub-components for cleaner code

function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),rgba(17,7,32,0))]" />

      {/* Animated Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-[30vw] h-[30vw] bg-purple-900/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-[10%] w-[25vw] h-[25vw] bg-orange-900/20 rounded-full blur-[120px]"
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <Particle key={i} />
      ))}
    </div>
  );
}

function Particle() {
  const [particleStyle, setParticleStyle] = useState<{
    size: number;
    initialX: number;
    initialY: number;
    duration: number;
    delay: number;
    xMovement: number;
  } | null>(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setParticleStyle({
      size: Math.random() * 5 + 1,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      xMovement: Math.random() * 50 - 25,
    });
  }, []);

  if (!isMounted || !particleStyle) return null;

  return (
    <motion.div
      className="absolute bg-white/20 rounded-full"
      style={{
        width: particleStyle.size,
        height: particleStyle.size,
        left: `${particleStyle.initialX}%`,
        top: `${particleStyle.initialY}%`,
      }}
      animate={{
        y: [0, -100, 0],
        x: [0, particleStyle.xMovement, 0],
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: particleStyle.duration,
        delay: particleStyle.delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

function FloatingIcon({ children, delay, x, y }: { children: ReactNode; delay: number; x: number; y: number }) {
  return (
    <motion.div
      className="absolute z-10"
      initial={{ x, y }}
      animate={{
        y: [y, y - 15, y],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
