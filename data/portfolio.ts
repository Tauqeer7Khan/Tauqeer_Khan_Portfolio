// Centralized portfolio data – icons are mapped in components

export interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription: string;
    technologies: string[];
    features: string[];
    gradient: string;
    demoLink?: string;
    githubLink?: string;
    image?: string;
    tags: string[];
    isFeatured?: boolean;
}

export const projects: Project[] = [
    {
        id: "carepulse",
        title: "CarePulse",
        subtitle: "Smart Preventive Health Monitoring",
        description: "A production-level, frontend-only web application for preventive health monitoring. Built with HTML5, CSS3, and vanilla JavaScript (ES6+)—no external UI libraries.",
        longDescription: "CarePulse is a modern SaaS-style healthcare dashboard that helps users track vitals, calculate BMI, detect health risks, visualize trends, and maintain a simple medical records timeline. All data is stored locally in the browser (LocalStorage), with a clean architecture and polished UI suitable for 2026-era health-tech products.",
        technologies: ["HTML5", "CSS3", "JavaScript ES6+", "LocalStorage API", "SVG Charts"],
        features: [
            "Real-time vitals tracking and monitoring",
            "BMI calculator with health risk assessment",
            "Interactive trend visualization using SVG",
            "Medical records timeline management",
            "Local data persistence with LocalStorage",
            "Responsive SaaS-style UI design",
            "Health risk detection algorithms",
            "Clean modular architecture"
        ],
        gradient: "from-pink-500 via-red-500 to-orange-500",
        tags: ["Healthcare", "Dashboard", "Vanilla JS"],
        isFeatured: true
    },
    {
        id: "blueguard",
        title: "BlueGuard",
        subtitle: "Coastal Marine Pollution Monitor",
        description: "A production-level, vanilla front-end web application that simulates real-time ocean sensor data, computes a Marine Health Index, and visualizes coastal risk zones.",
        longDescription: "BlueGuard addresses the need for clear visualization of sensor data, risk zoning, and trend analysis. It provides a government-grade monitoring experience: real-time simulation, threshold-based health scoring, interactive maps, and pollution awareness—all in a single, handcrafted front-end application built with vanilla JavaScript.",
        technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Canvas API", "Geolocation API"],
        features: [
            "Real-time ocean sensor data simulation",
            "Marine Health Index computation",
            "Interactive coastal risk zone mapping",
            "Environmental trend analysis",
            "Threshold-based health scoring system",
            "Pollution awareness visualization",
            "Government-grade UI/UX design",
            "Modular ES6+ architecture"
        ],
        gradient: "from-blue-500 via-cyan-500 to-teal-500",
        tags: ["Environmental", "Monitoring", "ES6+"],
        isFeatured: true
    },
    {
        id: "devmuscles",
        title: "Dev Muscles",
        subtitle: "High-Performance Landing Page",
        description: "Coordinated project tasks, ensuring adherence to engineering standards and regulations with a pixel-perfect, performance-first landing page.",
        longDescription: "Dev Muscles is a testament to the power of pure CSS and semantic HTML. Coordinated project tasks with strict adherence to engineering standards. Conducted comprehensive analyses, identifying and rectifying discrepancies in designs. Features smooth scrolling, responsive layouts, and a design system that ensures consistency across all devices.",
        technologies: ["HTML5", "CSS3", "Accessibility", "Performance Optimization"],
        features: [
            "Pixel-perfect responsive design",
            "Adherence to engineering standards and regulations",
            "Comprehensive design analysis and rectification",
            "High accessibility score (WCAG AA+)",
            "Performance-first architecture",
            "Smooth micro-interactions"
        ],
        gradient: "from-purple-500 via-violet-500 to-indigo-500",
        tags: ["Landing Page", "Performance", "UI/Design"],
        isFeatured: true
    },
    // ─── Additional Projects (shown on /projects page) ───
    {
        id: "report-card",
        title: "Report Card Generator",
        subtitle: "Grade Processing System",
        description: "Engineered a robust grade processing system, optimizing data workflows and reducing manual entry time by 20% through automation.",
        longDescription: "A comprehensive grade processing system that implements cost-effective solutions with a 20% reduction in project expenses. Streamlined project workflows, enhancing overall efficiency by 25%. Led a team in successfully delivering a complex engineering project on time and within allocated budget.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "Cost-effective solutions (20% expense reduction)",
            "Streamlined workflows (25% efficiency gain)",
            "Team-led complex project delivery",
            "On-time and within-budget completion"
        ],
        gradient: "from-amber-500 via-yellow-500 to-orange-400",
        tags: ["Education", "Automation", "Tool"],
        isFeatured: false
    },
    {
        id: "simon-game",
        title: "Simon Game",
        subtitle: "Interactive Memory Game",
        description: "Architected an interactive web application, enhancing user engagement through responsive design and modern JavaScript best practices.",
        longDescription: "A classic memory-testing game reimagined for the web. Managed project timelines, reducing delivery times by 30%. Spearheaded the adoption of cutting-edge engineering software, improving project accuracy by 15%. Collaborated with cross-functional teams, enhancing project success rates by 10%.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "Managed timelines (30% faster delivery)",
            "Cutting-edge software adoption (15% accuracy improvement)",
            "Cross-functional collaboration (10% success rate boost)",
            "Progressive difficulty and score tracking"
        ],
        gradient: "from-green-500 via-emerald-500 to-teal-400",
        tags: ["Game", "Interactive", "Vanilla JS"],
        isFeatured: false
    },
    {
        id: "iter-college",
        title: "ITER College Website",
        subtitle: "Academic Platform Replica",
        description: "Created a front-end replica of ITER College's official website with basic interactivity and responsive web structure.",
        longDescription: "A faithful recreation of the ITER College website, demonstrating expertise in component-based layout design and responsive web structure. Improved understanding of multi-page layouts, navigation systems, and responsive design across all devices.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        features: [
            "Front-end replica with basic interactivity",
            "Component-based layout design",
            "Responsive web structure",
            "Cross-browser compatibility"
        ],
        gradient: "from-sky-500 via-blue-500 to-indigo-500",
        tags: ["Education", "Website", "Responsive"],
        isFeatured: false
    }
];

export const experience = [
    {
        id: "1",
        title: "Frontend Developer",
        duration: "Jan 2024 - Present",
        company: {
            name: "Tech Solutions Inc.",
            url: "https://example.com",
        },
        achievements: [
            "Developed and maintained 15+ responsive web applications using React and Next.js",
            "Improved application performance by 40% through code optimization and lazy loading",
            "Collaborated with cross-functional teams to deliver projects 20% ahead of schedule",
            "Implemented automated testing strategies, reducing bugs by 35%",
        ],
        dotColor: "primary",
    },
    {
        id: "2",
        title: "Web Development Intern",
        duration: "Jun 2023 - Dec 2023",
        company: {
            name: "Digital Agency XYZ",
            url: "https://example.com",
        },
        achievements: [
            "Built 10+ client websites using HTML, CSS, JavaScript, and WordPress",
            "Assisted in developing custom WordPress themes and plugins",
            "Participated in code reviews and implemented feedback to improve code quality",
            "Contributed to the company's internal design system documentation",
        ],
        dotColor: "accent",
    },
];
