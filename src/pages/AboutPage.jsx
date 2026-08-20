import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Briefcase,
  MapPin,
  Mail,
  Calendar,
  Building2,
  Trophy,
  ArrowDown,
  Cloud,
  Container,
  GitBranch,
  Activity,
  Code2,
  Server,
  Layers3,
  Terminal,
  Zap,
} from "lucide-react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

// ─────────────────────────────────────────────────────────────────────────────
// Particle Canvas
// ─────────────────────────────────────────────────────────────────────────────

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.2 + 0.4,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,220,200,0.5)";
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,220,200,${0.09 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        opacity: 0.55,
      }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Typewriter Terminal
// ─────────────────────────────────────────────────────────────────────────────

const LINES = [
  {
    text: "$ cat philosophy.txt",
    cls: "text-green-400",
  },
  {
    text: '"Automate the boring. Monitor everything. Ship with confidence."',
    cls: "text-gray-400",
  },
];

function TypewriterTerminal() {
  const [typed, setTyped] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (lineIdx >= LINES.length) {
      setDone(true);
      return;
    }

    const delay = lineIdx === 0 ? 700 : 400;

    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setCharIdx((prev) => {
          const next = prev + 1;

          if (next > LINES[lineIdx].text.length) {
            clearInterval(interval);

            setTyped((t) => [...t, LINES[lineIdx]]);

            setLineIdx((l) => l + 1);
            setCharIdx(0);

            return 0;
          }

          return next;
        });
      }, 24);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [lineIdx]);

  const activeLine = lineIdx < LINES.length ? LINES[lineIdx] : null;

  return (
    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#02060b]/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-cyan-500/[0.08] blur-3xl" />

      {/* Terminal header */}
      <div className="relative flex items-center justify-between px-4 py-3 border-b border-white/[0.06] bg-white/[0.025]">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>

        <div className="flex items-center gap-2 text-[9px] text-gray-600 font-mono">
          <Terminal className="w-3 h-3" />
          nikhil@devops
        </div>
      </div>

      {/* Terminal body */}
      <div className="relative p-5 space-y-1.5 min-h-[100px] font-mono text-[11px]">
        {typed.map((l, i) => (
          <p key={i} className={l.cls}>
            {l.text}
          </p>
        ))}

        {activeLine && (
          <p className={activeLine.cls}>
            {activeLine.text.slice(0, charIdx)}
            <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-0.5 align-middle animate-pulse" />
          </p>
        )}

        {done && (
          <p className="text-green-400">
            <span className="text-gray-600">$</span> ready_to_build
            <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-1 align-middle animate-pulse" />
          </p>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Marquee
// ─────────────────────────────────────────────────────────────────────────────

const SKILLS = [
  "CI/CD Pipelines",
  "Terraform",
  "Docker",
  "Kubernetes",
  "AWS",
  "Linux",
  "GitHub Actions",
  "Monitoring",
  "ArgoCD",
  "Ansible",
  "Prometheus",
  "Nginx",
];

function MarqueeStrip() {
  const items = [...SKILLS, ...SKILLS];

  return (
    <div className="relative z-10 overflow-hidden border-y border-cyan-500/10 bg-cyan-500/[0.015]">
      <div
        className="flex gap-12 w-max py-3"
        style={{
          animation: "marquee 28s linear infinite",
        }}
      >
        {items.map((skill, i) => (
          <span
            key={i}
            className="text-[#607483] text-[10px] tracking-[0.18em] uppercase font-mono whitespace-nowrap flex items-center gap-3"
          >
            {skill}

            <span className="text-cyan-500 text-[0.55rem]">✦</span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const highlights = [
  "Infrastructure automation and cloud architecture",
  "CI/CD pipeline design and optimization",
  "Container orchestration and microservices",
  "Infrastructure as Code with Terraform",
  "DevOps best practices and tooling",
  "Cloud-native application deployment",
];

const experiences = [
  {
    title: "Junior DevOps Engineer",
    company: "Naaima Embedded Technology",
    client: "Dr. Martens — E-Commerce Platform",
    period: "April 2025 – June 2026",
    type: "Full-time",
    status: "COMPLETED",

    technologies: [
      "AWS",
      "Docker",
      "Terraform",
      "Jenkins",
      "Azure DevOps",
      "Linux",
      "EC2",
      "S3",
      "VPC",
    ],

    stats: [
      { value: "40%", label: "Faster Deployments" },
      { value: "10+", label: "Microservices" },
      { value: "3", label: "Environments" },
      { value: "AWS", label: "Cloud Platform" },
    ],

    responsibilities: [
      "Designed and built Docker images for 10+ microservices, enabling scalable and independent deployments across product categories.",
      "Developed and maintained Dockerfiles, image versioning, and registry management, integrating vulnerability assessment scans for secure, consistent multi-environment deployments.",
      "Configured container networking and volumes for seamless communication and reliable data persistence.",
      "Provisioned and managed scalable AWS infrastructure using Terraform (IaC), reducing configuration drift and ensuring high availability.",
      "Optimized CI/CD pipeline operations using Jenkins, implementing automated build troubleshooting and release coordination.",
      "Implemented system monitoring for AWS infrastructure (EC2, S3, VPC), proactively identifying performance bottlenecks.",
      "Collaborated with cross-functional teams, managed tasks via Jira, and documented deployment and infrastructure processes.",
    ],

    achievements: [
      "Reduced deployment time by 40% by containerizing 10+ microservices on AWS EC2",
      "Built and managed a Docker-based microservices architecture for a production e-commerce platform",
      "Established a multi-environment (Dev/Staging/Prod) workflow with Docker image versioning",
      "Contributed to Jenkins/Azure DevOps CI/CD pipelines, improving build stability and release efficiency",
    ],
  },

  {
    title: "DevOps Engineer",
    company: "Naaima Embedded Technology",
    client: "ShopFlow — Microservices E-Commerce Platform",
    location: "Telangana, India",
    period: "July 2026 – Present",
    type: "Project",
    status: "CURRENT PROJECT",

    technologies: [
      "AWS",
      "Terraform",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Django",
      "MySQL",
      "Linux",
      "Git",
      "GitHub",
      "CloudWatch",
    ],

    stats: [
      { value: "7", label: "Microservices" },
      { value: "Multi-AZ", label: "AWS Architecture" },
      { value: "ASG", label: "Auto Scaling" },
      { value: "IaC", label: "Terraform" },
    ],

    responsibilities: [
      "Designed and deployed a Dockerized microservices e-commerce platform comprising authentication, product, cart, profile, home, and order services.",
      "Provisioned AWS infrastructure using Terraform, including VPC, multi-AZ subnets, Internet Gateway, NAT Gateway, route tables, security groups, and EC2 Auto Scaling Groups.",
      "Implemented Auto Scaling Groups with Launch Templates and CloudWatch CPU-based scaling for scalable frontend and backend workloads.",
      "Designed public/private network architecture with configurable Internet Gateway and NAT Gateway connectivity, including private backend instances without public IPs.",
      "Built and managed Docker images and containers using Docker and Docker Compose, with Nginx-based frontend serving and API routing.",
      "Troubleshot AWS networking, Docker, Django, MySQL, CORS, Nginx, API routing, and deployment issues across environments.",
      "Applied Infrastructure-as-Code and DevOps practices using Terraform, Git, GitHub, AWS, Docker, and Linux.",
    ],

    achievements: [
      "Architected a production-style microservices e-commerce platform with independent authentication, product, cart, profile, home, and order services.",
      "Implemented a highly available AWS network architecture using VPC, multi-AZ subnets, Internet Gateway, NAT Gateway, and route tables.",
      "Automated infrastructure provisioning using Terraform, enabling repeatable and consistent AWS deployments.",
      "Implemented CPU-based Auto Scaling using EC2 Launch Templates, Auto Scaling Groups, and CloudWatch monitoring.",
      "Designed secure private backend infrastructure where application instances can operate without direct public IP exposure.",
    ],
  },
];

const quickInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Telangana, India",
  },
  {
    icon: Mail,
    label: "Open to",
    value: "Remote / On-site",
  },
  {
    icon: Calendar,
    label: "Experience",
    value: "2+ Years",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About — Nikhil Marati</title>

        <meta
          name="description"
          content="Learn about Nikhil Marati's expertise in DevOps, cloud engineering, and infrastructure automation."
        />
      </Helmet>

      <div className="min-h-screen bg-[#03060d] text-white overflow-hidden">
        <ParticleCanvas />

        <Header />

        {/* ═══════════════════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════════════════ */}

        <section className="relative min-h-[90vh] flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,220,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,220,200,1) 1px, transparent 1px)",
              backgroundSize: "65px 65px",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%)",
            }}
          />

          {/* Main glow */}
          <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-cyan-500/[0.07] blur-[120px]" />

          {/* Side glow */}
          <div className="absolute right-[-200px] top-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/[0.04] blur-[120px]" />

          <div className="relative z-10 max-w-6xl mx-auto w-full pt-20">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
              {/* Hero text */}
              <div>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/25 bg-cyan-500/[0.06] text-cyan-400 text-[10px] font-mono tracking-[0.2em] uppercase"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_rgba(0,220,200,0.8)]" />
                  The Engineer Behind the Stack
                </motion.div>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.15,
                  }}
                  className="mt-8 text-cyan-400 font-mono text-xs tracking-[0.3em] uppercase"
                >
                  DevOps / Cloud Engineer
                </motion.p>

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.25,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-3 text-white uppercase leading-[0.82]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(5rem, 12vw, 9rem)",
                    letterSpacing: "0.015em",
                  }}
                >
                  About
                  <span
                    className="block text-transparent"
                    style={{
                      WebkitTextStroke: "1.5px #00dcc8",
                    }}
                  >
                    Nikhil
                  </span>
                </motion.h1>

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.55,
                  }}
                  className="mt-7 max-w-xl text-sm md:text-base text-gray-500 leading-7"
                >
                  DevOps engineer passionate about automating everything,
                  building scalable cloud infrastructure, and creating
                  deployment systems that just work — at any scale.
                </motion.p>

                {/* Technology pills */}
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.75,
                  }}
                  className="flex flex-wrap gap-2 mt-7"
                >
                  {[
                    "AWS",
                    "Docker",
                    "Terraform",
                    "Kubernetes",
                    "Jenkins",
                    "Linux",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.025] border border-white/[0.07] text-gray-400 text-[10px] font-mono hover:text-cyan-400 hover:border-cyan-500/25 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1.1,
                  }}
                  className="mt-10 flex items-center gap-3 text-[#5a7080]"
                >
                  <div className="w-8 h-px bg-cyan-500/50" />

                  <span className="text-[9px] tracking-[0.25em] uppercase font-mono">
                    Scroll to explore
                  </span>

                  <ArrowDown className="w-3 h-3 text-cyan-400 animate-bounce" />
                </motion.div>
              </div>

              {/* Terminal */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                }}
                className="lg:mt-20"
              >
                <TypewriterTerminal />

                {/* Mini status cards */}
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <Zap className="w-4 h-4 text-cyan-400 mb-3" />

                    <p className="text-[9px] text-gray-600 uppercase tracking-wider font-mono">
                      Status
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />

                      <span className="text-xs text-green-400">Available</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <Server className="w-4 h-4 text-cyan-400 mb-3" />

                    <p className="text-[9px] text-gray-600 uppercase tracking-wider font-mono">
                      Focus
                    </p>

                    <p className="text-xs text-white mt-1">Cloud & DevOps</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════════
            MARQUEE
        ═══════════════════════════════════════════════════════════════════ */}

        <MarqueeStrip />

        {/* ═══════════════════════════════════════════════════════════════════
            MAIN
        ═══════════════════════════════════════════════════════════════════ */}

        <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto space-y-32">
            {/* ═══════════════════════════════════════════════════════════════
                ABOUT / BIO
            ═══════════════════════════════════════════════════════════════ */}

            <section>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                  01
                </span>

                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />

                <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                  whoami
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  className="relative"
                >
                  {/* Outer frame */}
                  <div className="absolute -inset-2 rounded-3xl border border-cyan-500/[0.08]" />

                  {/* Corner decorations */}
                  <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl z-10" />

                  <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-cyan-400 rounded-br-xl z-10" />

                  {/* Image */}
                  <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-[#050a10]">
                    <img
                      src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401?w=800&q=85"
                      alt="Nikhil Marati — DevOps Engineer"
                      className="w-full h-auto block"
                      style={{
                        filter:
                          "saturate(0.55) brightness(0.72) contrast(1.05)",
                      }}
                    />

                    {/* Image overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03060d] via-transparent to-cyan-500/[0.04]" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/[0.08]">
                        <div>
                          <p className="text-[9px] text-gray-500 font-mono uppercase">
                            Engineer
                          </p>

                          <p className="text-sm text-white font-medium mt-0.5">
                            Nikhil Marati
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                          <span className="text-[9px] text-green-400 font-mono">
                            ONLINE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick info */}
                  <div className="flex flex-wrap gap-2 mt-5 justify-center">
                    {quickInfo.map(({ icon: Icon, label, value }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-black/70 border border-white/[0.07] backdrop-blur-md text-[10px]"
                      >
                        <Icon className="h-3 w-3 text-cyan-400" />

                        <span className="text-gray-600">{label}</span>

                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Bio */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                  }}
                  className="space-y-6"
                >
                  <div>
                    <p className="text-cyan-400 font-mono text-[10px] tracking-[0.2em] uppercase mb-3">
                      The person behind the automation
                    </p>

                    <h2
                      className="text-white leading-none"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      DevOps &
                      <span
                        className="block text-cyan-400"
                        style={{
                          fontStyle: "italic",
                        }}
                      >
                        Cloud Engineer
                      </span>
                    </h2>
                  </div>

                  <p className="text-sm text-gray-500 leading-7">
                    I specialize in building and maintaining robust
                    infrastructure automation systems that enable teams to
                    deploy with confidence. My expertise spans cloud
                    engineering, CI/CD pipeline optimization, and infrastructure
                    as code.
                  </p>

                  <p className="text-sm text-gray-500 leading-7">
                    With a focus on reliability and scalability, I help
                    organizations transform deployment processes into seamless,
                    automated workflows. From containerization to cloud-native
                    architectures, I bring modern DevOps practices to every
                    project.
                  </p>

                  {/* Skills */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      {
                        icon: Cloud,
                        title: "Cloud",
                        text: "AWS Infrastructure",
                      },
                      {
                        icon: Container,
                        title: "Containers",
                        text: "Docker & Kubernetes",
                      },
                      {
                        icon: GitBranch,
                        title: "CI/CD",
                        text: "Jenkins & Automation",
                      },
                      {
                        icon: Activity,
                        title: "Monitoring",
                        text: "Prometheus & Grafana",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/20 hover:bg-cyan-500/[0.025] transition-all"
                        >
                          <Icon className="w-4 h-4 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />

                          <p className="text-xs text-white">{item.title}</p>

                          <p className="text-[10px] text-gray-600 mt-1">
                            {item.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <TypewriterTerminal />
                </motion.div>
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                EXPERIENCE
            ═══════════════════════════════════════════════════════════════ */}

            {/* ═══════════════════════════════════════════════════════════════
    EXPERIENCE
═══════════════════════════════════════════════════════════════ */}

            <section>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                  02
                </span>

                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />

                <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                  Experience & Projects
                </span>
              </div>

              <div className="relative pl-6 md:pl-10 border-l border-cyan-500/20 space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      margin: "-80px",
                    }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.12,
                    }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-[1.95rem] md:-left-[2.45rem] top-8 w-4 h-4 rounded-full border-4 border-[#03060d] ${
                        exp.status === "CURRENT PROJECT"
                          ? "bg-cyan-400 shadow-[0_0_20px_rgba(0,220,200,0.8)] animate-pulse"
                          : "bg-gray-600 shadow-[0_0_10px_rgba(100,116,139,0.4)]"
                      }`}
                    />

                    {/* Card */}
                    <div className="group relative overflow-hidden rounded-3xl bg-white/[0.025] border border-white/[0.07] hover:border-cyan-500/25 transition-all duration-500">
                      {/* Top Glow */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-px ${
                          exp.status === "CURRENT PROJECT"
                            ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                            : "bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        }`}
                      />

                      {/* Background Glow */}
                      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-cyan-500/[0.035] blur-3xl pointer-events-none group-hover:bg-cyan-500/[0.06] transition-all duration-500" />

                      {/* ───────────────── Header ───────────────── */}

                      <div className="relative p-6 md:p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                          {/* Left */}
                          <div className="flex items-start gap-4">
                            <div
                              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                                exp.status === "CURRENT PROJECT"
                                  ? "bg-cyan-500/10 border-cyan-500/20"
                                  : "bg-white/[0.035] border-white/[0.07]"
                              }`}
                            >
                              <Briefcase
                                className={`h-5 w-5 ${
                                  exp.status === "CURRENT PROJECT"
                                    ? "text-cyan-400"
                                    : "text-gray-500"
                                }`}
                              />
                            </div>

                            <div>
                              {/* Status */}
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span
                                  className={`px-2.5 py-1 rounded-md text-[8px] font-mono tracking-wider ${
                                    exp.status === "CURRENT PROJECT"
                                      ? "bg-green-500/[0.08] border border-green-500/20 text-green-400"
                                      : "bg-white/[0.04] border border-white/[0.07] text-gray-500"
                                  }`}
                                >
                                  {exp.status}
                                </span>

                                <span className="text-[9px] text-gray-600 font-mono">
                                  {exp.period}
                                </span>
                              </div>

                              {/* Title */}
                              <h3
                                className="text-2xl md:text-3xl text-white group-hover:text-cyan-400 transition-colors duration-300"
                                style={{
                                  fontFamily: "'Bebas Neue', sans-serif",
                                  letterSpacing: "0.04em",
                                }}
                              >
                                {exp.title}
                              </h3>

                              {/* Company */}
                              <p className="text-sm text-gray-400 mt-1">
                                {exp.company}
                              </p>

                              {/* Client */}
                              <div className="flex flex-wrap items-center gap-2 mt-2">
                                <Building2 className="h-3 w-3 text-cyan-500/60" />

                                <span className="text-xs text-gray-600">
                                  Client:
                                </span>

                                <span className="text-xs text-gray-400">
                                  {exp.client}
                                </span>
                              </div>

                              {exp.location && (
                                <div className="flex items-center gap-2 mt-2 text-[10px] text-gray-600">
                                  <MapPin className="w-3 h-3 text-cyan-500/50" />

                                  {exp.location}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Type */}
                          <span className="self-start px-3 py-1.5 rounded-full bg-white/[0.035] border border-white/[0.07] text-gray-500 text-[9px] font-mono">
                            {exp.type}
                          </span>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mt-7 pt-5 border-t border-white/[0.05]">
                          {exp.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="px-2.5 py-1 rounded-lg bg-black/30 border border-white/[0.06] text-[9px] text-gray-500 font-mono hover:text-cyan-400 hover:border-cyan-500/20 transition-all"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* ───────────────── Stats ───────────────── */}

                      {exp.stats && (
                        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-white/[0.05]">
                          {exp.stats.map((stat, index) => (
                            <div
                              key={stat.label}
                              className={`p-5 ${
                                index < exp.stats.length - 1
                                  ? "border-r border-white/[0.05]"
                                  : ""
                              }`}
                            >
                              <div
                                className="text-2xl md:text-3xl text-cyan-400"
                                style={{
                                  fontFamily: "'Bebas Neue', sans-serif",
                                }}
                              >
                                {stat.value}
                              </div>

                              <p className="mt-1 text-[8px] md:text-[9px] text-gray-600 uppercase tracking-[0.12em] font-mono">
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* ───────────────── Responsibilities ───────────────── */}

                      <div className="relative p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-5">
                          <Code2 className="w-4 h-4 text-cyan-400" />

                          <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                            Responsibilities
                          </span>

                          <div className="flex-1 h-px bg-white/[0.05]" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-3">
                          {exp.responsibilities.map((responsibility, ri) => (
                            <motion.div
                              key={ri}
                              initial={{
                                opacity: 0,
                                x: -10,
                              }}
                              whileInView={{
                                opacity: 1,
                                x: 0,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                delay: ri * 0.04,
                              }}
                              className="group/item flex items-start gap-3 p-3.5 rounded-xl bg-black/20 border border-white/[0.04] hover:border-cyan-500/15 hover:bg-cyan-500/[0.025] transition-all"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400/70 shrink-0 group-hover/item:shadow-[0_0_8px_rgba(0,220,200,0.8)]" />

                              <span className="text-[11px] text-gray-500 leading-relaxed group-hover/item:text-gray-400 transition-colors">
                                {responsibility}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* ───────────────── Achievements ───────────────── */}

                      {exp.achievements && (
                        <div className="px-6 md:px-8 pb-7 md:pb-8">
                          <div className="relative rounded-2xl bg-cyan-500/[0.025] border border-cyan-500/10 p-5 overflow-hidden">
                            <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-cyan-500/[0.04] blur-3xl" />

                            <div className="relative flex items-center gap-2 mb-5">
                              <Trophy className="h-4 w-4 text-cyan-400" />

                              <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.18em] uppercase">
                                Key Achievements
                              </span>
                            </div>

                            <div className="relative grid md:grid-cols-2 gap-4">
                              {exp.achievements.map((achievement, ai) => (
                                <div
                                  key={ai}
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle2 className="h-4 w-4 text-cyan-500/80 shrink-0 mt-0.5" />

                                  <span className="text-[11px] text-gray-400 leading-relaxed">
                                    {achievement}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                COMPETENCIES
            ═══════════════════════════════════════════════════════════════ */}

            <section>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                  03
                </span>

                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />

                <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                  Key Competencies
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-3xl overflow-hidden border border-cyan-500/10 bg-cyan-500/10">
                {highlights.map((highlight, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.06,
                    }}
                    className="group relative min-h-[150px] flex flex-col justify-between p-6 bg-[#03060d] hover:bg-cyan-500/[0.035] transition-all duration-300"
                  >
                    {/* Number */}
                    <span className="text-[9px] font-mono text-gray-700 group-hover:text-cyan-500/60 transition-colors">
                      0{i + 1}
                    </span>

                    {/* Icon */}
                    <div className="w-9 h-9 rounded-xl border border-cyan-500/20 bg-cyan-500/[0.05] flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:scale-105 transition-all">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    </div>

                    <span className="text-xs text-gray-400 group-hover:text-white transition-colors leading-relaxed">
                      {highlight}
                    </span>

                    {/* Corner */}
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-cyan-500/0 group-hover:border-cyan-500/30 transition-all rounded-br-xl" />
                  </motion.div>
                ))}
              </div>
            </section>

            {/* ═══════════════════════════════════════════════════════════════
                FINAL PHILOSOPHY
            ═══════════════════════════════════════════════════════════════ */}

            <motion.section
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <div className="relative overflow-hidden rounded-3xl border border-cyan-500/15 bg-gradient-to-br from-cyan-500/[0.06] via-transparent to-transparent p-8 md:p-12">
                <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-cyan-500/[0.06] blur-[100px]" />

                <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <Terminal className="w-4 h-4 text-cyan-400" />

                      <span className="text-[9px] text-cyan-400 uppercase tracking-[0.25em] font-mono">
                        philosophy.txt
                      </span>
                    </div>

                    <h2
                      className="text-3xl md:text-5xl text-white uppercase leading-tight"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                      }}
                    >
                      Automate the boring.
                      <br />
                      <span className="text-cyan-400">Monitor everything.</span>
                      <br />
                      Ship with confidence.
                    </h2>
                  </div>

                  <div className="shrink-0 w-24 h-24 rounded-full border border-cyan-500/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border border-cyan-500/20 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-cyan-400 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </main>

        <Footer />
      </div>

      {/* Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #03060d;
        }

        ::selection {
          background: rgba(0, 220, 200, 0.25);
          color: white;
        }

        ::-webkit-scrollbar {
          width: 5px;
        }

        ::-webkit-scrollbar-track {
          background: #03060d;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(0, 220, 200, 0.25);
          border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 220, 200, 0.5);
        }
      `}</style>
    </>
  );
};

export default AboutPage;
