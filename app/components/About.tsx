import type { JSX } from "react";
import Image from "next/image";

export default function About(): JSX.Element {

  return (
    <section id="about" className="py-20 px-6 transition-colors duration-300" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-medium leading-tight" style={{ color: 'var(--foreground)' }}>
              An Aspiring <span className="text-gradient-orange font-bold">Software Engineer</span>
            </h2>

            <div className="text-base lg:text-lg font-light leading-relaxed max-w-4xl mx-auto text-center" style={{ color: 'var(--foreground-secondary)' }}>
              <p>
                I transform complex ideas into seamless digital experiences. Currently a <strong className="font-medium" style={{ color: 'var(--foreground)' }}>Third-Year B.Tech student at Institute of Technical Education and Research </strong>, I specialize in <strong className="font-medium" style={{ color: 'var(--foreground)' }}>React</strong> and <strong className="font-medium" style={{ color: 'var(--foreground)' }}>Next.js</strong> to build high-performance, accessible web applications. My portfolio includes production-ready projects like the <strong className="font-medium" style={{ color: 'var(--foreground)' }}>CarePulse Health Dashboard</strong>, where every line of code is optimized for the end user.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mx-auto group transition-all duration-500 hover:-translate-y-2 hover:scale-105">
          <Image
            src="/assets/illustration.png"
            alt="Skills"
            width={800}
            height={800}
            className="object-cover mx-auto group-hover:animate-float-subtle"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}

