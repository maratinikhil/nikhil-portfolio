// import React from "react";
// import { Helmet } from "react-helmet";
// import {
//   GitBranch,
//   Server,
//   Container,
//   Workflow,
//   Shield,
//   Package,
// } from "lucide-react";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";
// import SkillCategory from "../components/SkillCategory.jsx";
// import SkillCard from "../components/SkillCard.jsx";

// const SkillsPage = () => {
//   const skills = {
//     versionControl: [
//       {
//         icon: GitBranch,
//         name: "Git",
//         description:
//           "Advanced version control, branching strategies, and collaborative workflows for distributed teams.",
//       },
//     ],
//     cloud: [
//       {
//         icon: Server,
//         name: "AWS",
//         description:
//           "Cloud infrastructure management, EC2, S3, VPC, IAM, and cloud architecture best practices.",
//       },
//     ],
//     infrastructure: [
//       {
//         icon: Server,
//         name: "Terraform",
//         description:
//           "Infrastructure as Code for provisioning and managing cloud resources declaratively.",
//       },
//     ],
//     containerization: [
//       {
//         icon: Container,
//         name: "Docker",
//         description:
//           "Containerization, image optimization, and orchestration for scalable deployments.",
//       },
//     ],
//     operatingSystems: [
//       {
//         icon: Server,
//         name: "Ubuntu",
//         description:
//           "Debian-based Linux distribution for development and production environments.",
//       },
//       {
//         icon: Server,
//         name: "Linux",
//         description:
//           "System administration, shell scripting, and server management across various distributions.",
//       },
//       {
//         icon: Server,
//         name: "Amazon Linux",
//         description:
//           "Optimized Linux distribution for AWS EC2 instances with enhanced performance and security.",
//       },
//       {
//         icon: Server,
//         name: "Windows",
//         description:
//           "Windows Server and desktop environments for cross-platform development and deployment.",
//       },
//     ],
//     cicd: [
//       {
//         icon: Workflow,
//         name: "Jenkins",
//         description:
//           "Automated build pipelines, continuous integration, and deployment automation.",
//       },
//       {
//         icon: Workflow,
//         name: "Azure DevOps",
//         description:
//           "End-to-end DevOps platform for planning, development, and deployment on Azure.",
//       },
//       {
//         icon: Workflow,
//         name: "GitHub Actions",
//         description:
//           "Automated CI/CD workflows directly in GitHub repositories for streamlined development.",
//       },
//     ],
//     quality: [
//       {
//         icon: Shield,
//         name: "SonarCloud",
//         description:
//           "Code quality analysis, security scanning, and technical debt management.",
//       },
//       {
//         icon: Shield,
//         name: "Trivy",
//         description:
//           "Comprehensive vulnerability scanner for containers, filesystems, and IaC security testing.",
//       },
//     ],
//     artifacts: [
//       {
//         icon: Package,
//         name: "JFrog",
//         description:
//           "Artifact repository management and binary distribution for enterprise environments.",
//       },
//     ],
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Skills - Nikhil Marati</title>
//         <meta
//           name="description"
//           content="Technical skills and expertise in DevOps, cloud engineering, CI/CD, and infrastructure automation."
//         />
//       </Helmet>

//       <div className="min-h-screen bg-background text-foreground">
//         <Header />

//         <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="max-w-5xl mx-auto">
//             <h1
//               className="text-4xl md:text-5xl font-bold mb-6 text-balance"
//               style={{ letterSpacing: "-0.02em" }}
//             >
//               Technical Skills
//             </h1>
//             <p className="text-lg text-muted-foreground mb-16 leading-relaxed max-w-prose">
//               A comprehensive toolkit for building, deploying, and maintaining
//               modern infrastructure and cloud-native applications.
//             </p>

//             <SkillCategory title="Version Control">
//               {skills.versionControl.map((skill, index) => (
//                 <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
//               ))}
//             </SkillCategory>

//             <SkillCategory title="Cloud">
//               {skills.cloud.map((skill, index) => (
//                 <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
//               ))}
//             </SkillCategory>

//             <SkillCategory title="Infrastructure as Code">
//               {skills.infrastructure.map((skill, index) => (
//                 <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
//               ))}
//             </SkillCategory>

//             <SkillCategory title="Containerization">
//               {skills.containerization.map((skill, index) => (
//                 <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
//               ))}
//             </SkillCategory>

//             <SkillCategory title="Operating Systems">
//               {skills.operatingSystems.map((skill, index) => (
//                 <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
//               ))}
//             </SkillCategory>

//             <SkillCategory title="CI/CD">
//               {skills.cicd.map((skill, index) => (
//                 <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
//               ))}
//             </SkillCategory>

//             <SkillCategory title="Code Quality">
//               {skills.quality.map((skill, index) => (
//                 <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
//               ))}
//             </SkillCategory>

//             <SkillCategory title="Artifact Management">
//               {skills.artifacts.map((skill, index) => (
//                 <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
//               ))}
//             </SkillCategory>
//           </div>
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default SkillsPage;

import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  GitBranch,
  Server,
  Container,
  Workflow,
  Shield,
  Package,
  Cloud,
  Monitor,
  Code2,
  Cpu,
} from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

// ── Particle canvas (reused from HomePage) ────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.5,
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
        ctx.fillStyle = "rgba(0,255,255,0.45)";
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,255,255,${0.1 * (1 - dist / 100)})`;
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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

// ── Animated skill bar ────────────────────────────────────────────────────────
function SkillBar({ level, delay = 0 }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(level), 400 + delay * 1000);
    return () => clearTimeout(t);
  }, [level, delay]);

  return (
    <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden mt-3">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,255,255,0.4)]"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

// ── Single skill card ─────────────────────────────────────────────────────────
function SkillCard({ icon: Icon, name, description, level, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.55 }}
      whileHover={{ y: -4, borderColor: "rgba(0,255,255,0.35)" }}
      className="flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.05] transition-all duration-300 group"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
          <Icon className="h-4 w-4" />
        </div>
        <span className="text-sm font-bold text-white">{name}</span>
        <span className="ml-auto text-xs font-mono text-cyan-400/70">
          {level}%
        </span>
      </div>
      <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      <SkillBar level={level} delay={delay} />
    </motion.div>
  );
}

// ── Category section ──────────────────────────────────────────────────────────
function SkillCategory({ title, icon: CatIcon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
          <CatIcon className="h-4 w-4" />
        </div>
        <h2 className="text-base font-black text-white tracking-wide uppercase font-mono">
          {title}
        </h2>
        <div className="flex-1 h-px bg-cyan-500/10" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {children}
      </div>
    </motion.div>
  );
}

// ── Skills data ───────────────────────────────────────────────────────────────
const SKILLS = {
  versionControl: {
    title: "Version Control",
    icon: GitBranch,
    items: [
      {
        icon: GitBranch,
        name: "Git",
        level: 90,
        description:
          "Advanced branching strategies, cherry-pick, rebase, and collaborative workflows for distributed teams.",
      },
    ],
  },
  cloud: {
    title: "Cloud Platforms",
    icon: Cloud,
    items: [
      {
        icon: Cloud,
        name: "AWS",
        level: 78,
        description:
          "EC2, S3, VPC, IAM, Lambda, and cloud architecture best practices for scalable systems.",
      },
      {
        icon: Cloud,
        name: "Azure",
        level: 82,
        description:
          "Azure DevOps, AKS, Azure Functions, and cloud-native solutions for high availability.",
      },
    ],
  },
  infrastructure: {
    title: "Infrastructure as Code",
    icon: Code2,
    items: [
      {
        icon: Code2,
        name: "Terraform",
        level: 85,
        description:
          "Declarative IaC for provisioning and managing multi-cloud resources with state management.",
      },
      {
        icon: Code2,
        name: "Ansible",
        level: 75,
        description:
          "Configuration management, playbooks, and automated server provisioning at scale.",
      },
    ],
  },
  containerization: {
    title: "Containerization & Orchestration",
    icon: Container,
    items: [
      {
        icon: Container,
        name: "Docker",
        level: 88,
        description:
          "Image optimization, multi-stage builds, and containerized deployment strategies.",
      },
      {
        icon: Cpu,
        name: "Kubernetes",
        level: 80,
        description:
          "Cluster management, Helm charts, autoscaling, and production-grade K8s deployments.",
      },
    ],
  },
  operatingSystems: {
    title: "Operating Systems",
    icon: Monitor,
    items: [
      {
        icon: Monitor,
        name: "Ubuntu",
        level: 88,
        description:
          "Debian-based Linux for development and production server environments.",
      },
      {
        icon: Monitor,
        name: "Linux",
        level: 85,
        description:
          "System administration, shell scripting, and server management across distributions.",
      },
      {
        icon: Monitor,
        name: "Amazon Linux",
        level: 80,
        description:
          "Optimized for AWS EC2 with enhanced performance and security configurations.",
      },
      {
        icon: Monitor,
        name: "Windows Server",
        level: 70,
        description:
          "Windows Server environments for cross-platform development and deployment.",
      },
    ],
  },
  cicd: {
    title: "CI / CD",
    icon: Workflow,
    items: [
      {
        icon: Workflow,
        name: "Jenkins",
        level: 85,
        description:
          "Automated build pipelines, Jenkinsfile declarative syntax, and plugin ecosystem.",
      },
      {
        icon: Workflow,
        name: "Azure DevOps",
        level: 82,
        description:
          "End-to-end platform for planning, development, and deployment on Azure.",
      },
      {
        icon: Workflow,
        name: "GitHub Actions",
        level: 80,
        description:
          "Matrix builds, reusable workflows, and automated CI/CD directly in repositories.",
      },
    ],
  },
  quality: {
    title: "Code Quality & Security",
    icon: Shield,
    items: [
      {
        icon: Shield,
        name: "SonarCloud",
        level: 78,
        description:
          "Code quality analysis, security hotspots, and technical debt management.",
      },
      {
        icon: Shield,
        name: "Trivy",
        level: 75,
        description:
          "Vulnerability scanning for containers, filesystems, and IaC security testing.",
      },
    ],
  },
  artifacts: {
    title: "Artifact Management",
    icon: Package,
    items: [
      {
        icon: Package,
        name: "JFrog Artifactory",
        level: 72,
        description:
          "Universal artifact repository for managing binaries and build artifacts at enterprise scale.",
      },
    ],
  },
  monitoring: {
    title: "Monitoring & Observability",
    icon: Server,
    items: [
      {
        icon: Server,
        name: "Prometheus",
        level: 76,
        description:
          "Metrics collection, alerting rules, and time-series data for system observability.",
      },
      {
        icon: Server,
        name: "Grafana",
        level: 78,
        description:
          "Dashboard creation, data visualization, and real-time monitoring across systems.",
      },
    ],
  },
};

// ── Page stats ────────────────────────────────────────────────────────────────
const PAGE_STATS = [
  { value: "20+", label: "Technologies" },
  { value: "9", label: "Skill Categories" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Passion" },
];

// ── Main component ────────────────────────────────────────────────────────────
const SkillsPage = () => {
  return (
    <>
      <Helmet>
        <title>Skills — Nikhil Marati</title>
        <meta
          name="description"
          content="Technical skills and expertise in DevOps, cloud engineering, CI/CD, and infrastructure automation."
        />
      </Helmet>

      <div className="min-h-screen bg-[#020b18] text-foreground">
        <Header />

        {/* ── Hero Banner ── */}
        <section className="relative overflow-hidden py-28">
          {/* Dark base */}
          <div className="absolute inset-0 bg-[#020b18]" />

          {/* Particle network */}
          <ParticleCanvas />

          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(0,200,255,0.10),transparent)]" />

          {/* Hex grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zM28 100L0 84V50l28-16 28 16v34L28 100z' fill='none' stroke='%2300ffff' stroke-width='1'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Technical Arsenal
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
                My Skills
              </h1>
              <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
                A battle-tested toolkit for building, deploying, and scaling
                modern infrastructure and cloud-native applications.
              </p>
            </motion.div>

            {/* Mini stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              {PAGE_STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex flex-col items-center gap-1 px-6 py-3 rounded-xl bg-white/[0.04] border border-cyan-500/10"
                >
                  <span className="text-2xl font-black text-white">
                    {s.value}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">
                    {s.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Skills Grid ── */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            {Object.values(SKILLS).map((category, ci) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                icon={category.icon}
              >
                {category.items.map((skill, si) => (
                  <SkillCard
                    key={skill.name}
                    {...skill}
                    delay={ci * 0.05 + si * 0.08}
                  />
                ))}
              </SkillCategory>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SkillsPage;