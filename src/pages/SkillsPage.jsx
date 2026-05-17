// import React, { useEffect, useRef, useState } from "react";
// import { Helmet } from "react-helmet";
// import { motion } from "framer-motion";
// import {
//   GitBranch,
//   Server,
//   Container,
//   Workflow,
//   Shield,
//   Package,
//   Cloud,
//   Monitor,
//   Code2,
//   Cpu,
// } from "lucide-react";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";

// // ── Particle canvas (reused from HomePage) ────────────────────────────────────
// function ParticleCanvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animId;
//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const particles = Array.from({ length: 60 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 0.35,
//       vy: (Math.random() - 0.5) * 0.35,
//       r: Math.random() * 1.5 + 0.5,
//     }));

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p) => {
//         p.x += p.vx;
//         p.y += p.vy;
//         if (p.x < 0) p.x = canvas.width;
//         if (p.x > canvas.width) p.x = 0;
//         if (p.y < 0) p.y = canvas.height;
//         if (p.y > canvas.height) p.y = 0;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(0,255,255,0.45)";
//         ctx.fill();
//       });
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 100) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.strokeStyle = `rgba(0,255,255,${0.1 * (1 - dist / 100)})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
//       }
//       animId = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
// }

// // ── Animated skill bar ────────────────────────────────────────────────────────
// function SkillBar({ level, delay = 0 }) {
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     const t = setTimeout(() => setWidth(level), 400 + delay * 1000);
//     return () => clearTimeout(t);
//   }, [level, delay]);

//   return (
//     <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden mt-3">
//       <div
//         className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,255,255,0.4)]"
//         style={{ width: `${width}%` }}
//       />
//     </div>
//   );
// }

// // ── Single skill card ─────────────────────────────────────────────────────────
// function SkillCard({ icon: Icon, name, description, level, delay = 0 }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 24 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration: 0.55 }}
//       whileHover={{ y: -4, borderColor: "rgba(0,255,255,0.35)" }}
//       className="flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:bg-white/[0.05] transition-all duration-300 group"
//     >
//       <div className="flex items-center gap-3">
//         <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
//           <Icon className="h-4 w-4" />
//         </div>
//         <span className="text-sm font-bold text-white">{name}</span>
//         <span className="ml-auto text-xs font-mono text-cyan-400/70">
//           {level}%
//         </span>
//       </div>
//       <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
//       <SkillBar level={level} delay={delay} />
//     </motion.div>
//   );
// }

// // ── Category section ──────────────────────────────────────────────────────────
// function SkillCategory({ title, icon: CatIcon, children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//       className="mb-12"
//     >
//       <div className="flex items-center gap-3 mb-5">
//         <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
//           <CatIcon className="h-4 w-4" />
//         </div>
//         <h2 className="text-base font-black text-white tracking-wide uppercase font-mono">
//           {title}
//         </h2>
//         <div className="flex-1 h-px bg-cyan-500/10" />
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {children}
//       </div>
//     </motion.div>
//   );
// }

// // ── Skills data ───────────────────────────────────────────────────────────────
// const SKILLS = {
//   versionControl: {
//     title: "Version Control",
//     icon: GitBranch,
//     items: [
//       {
//         icon: GitBranch,
//         name: "Git",
//         level: 90,
//         description:
//           "Advanced branching strategies, cherry-pick, rebase, and collaborative workflows for distributed teams.",
//       },
//     ],
//   },
//   cloud: {
//     title: "Cloud Platforms",
//     icon: Cloud,
//     items: [
//       {
//         icon: Cloud,
//         name: "AWS",
//         level: 78,
//         description:
//           "EC2, S3, VPC, IAM, Lambda, and cloud architecture best practices for scalable systems.",
//       },
//       {
//         icon: Cloud,
//         name: "Azure",
//         level: 82,
//         description:
//           "Azure DevOps, AKS, Azure Functions, and cloud-native solutions for high availability.",
//       },
//     ],
//   },
//   infrastructure: {
//     title: "Infrastructure as Code",
//     icon: Code2,
//     items: [
//       {
//         icon: Code2,
//         name: "Terraform",
//         level: 85,
//         description:
//           "Declarative IaC for provisioning and managing multi-cloud resources with state management.",
//       },
//       {
//         icon: Code2,
//         name: "Ansible",
//         level: 75,
//         description:
//           "Configuration management, playbooks, and automated server provisioning at scale.",
//       },
//     ],
//   },
//   containerization: {
//     title: "Containerization & Orchestration",
//     icon: Container,
//     items: [
//       {
//         icon: Container,
//         name: "Docker",
//         level: 88,
//         description:
//           "Image optimization, multi-stage builds, and containerized deployment strategies.",
//       },
//       {
//         icon: Cpu,
//         name: "Kubernetes",
//         level: 80,
//         description:
//           "Cluster management, Helm charts, autoscaling, and production-grade K8s deployments.",
//       },
//     ],
//   },
//   operatingSystems: {
//     title: "Operating Systems",
//     icon: Monitor,
//     items: [
//       {
//         icon: Monitor,
//         name: "Ubuntu",
//         level: 88,
//         description:
//           "Debian-based Linux for development and production server environments.",
//       },
//       {
//         icon: Monitor,
//         name: "Linux",
//         level: 85,
//         description:
//           "System administration, shell scripting, and server management across distributions.",
//       },
//       {
//         icon: Monitor,
//         name: "Amazon Linux",
//         level: 80,
//         description:
//           "Optimized for AWS EC2 with enhanced performance and security configurations.",
//       },
//       {
//         icon: Monitor,
//         name: "Windows Server",
//         level: 70,
//         description:
//           "Windows Server environments for cross-platform development and deployment.",
//       },
//     ],
//   },
//   cicd: {
//     title: "CI / CD",
//     icon: Workflow,
//     items: [
//       {
//         icon: Workflow,
//         name: "Jenkins",
//         level: 85,
//         description:
//           "Automated build pipelines, Jenkinsfile declarative syntax, and plugin ecosystem.",
//       },
//       {
//         icon: Workflow,
//         name: "Azure DevOps",
//         level: 82,
//         description:
//           "End-to-end platform for planning, development, and deployment on Azure.",
//       },
//       {
//         icon: Workflow,
//         name: "GitHub Actions",
//         level: 80,
//         description:
//           "Matrix builds, reusable workflows, and automated CI/CD directly in repositories.",
//       },
//     ],
//   },
//   quality: {
//     title: "Code Quality & Security",
//     icon: Shield,
//     items: [
//       {
//         icon: Shield,
//         name: "SonarCloud",
//         level: 78,
//         description:
//           "Code quality analysis, security hotspots, and technical debt management.",
//       },
//       {
//         icon: Shield,
//         name: "Trivy",
//         level: 75,
//         description:
//           "Vulnerability scanning for containers, filesystems, and IaC security testing.",
//       },
//     ],
//   },
//   artifacts: {
//     title: "Artifact Management",
//     icon: Package,
//     items: [
//       {
//         icon: Package,
//         name: "JFrog Artifactory",
//         level: 72,
//         description:
//           "Universal artifact repository for managing binaries and build artifacts at enterprise scale.",
//       },
//     ],
//   },
//   monitoring: {
//     title: "Monitoring & Observability",
//     icon: Server,
//     items: [
//       {
//         icon: Server,
//         name: "Prometheus",
//         level: 76,
//         description:
//           "Metrics collection, alerting rules, and time-series data for system observability.",
//       },
//       {
//         icon: Server,
//         name: "Grafana",
//         level: 78,
//         description:
//           "Dashboard creation, data visualization, and real-time monitoring across systems.",
//       },
//     ],
//   },
// };

// // ── Page stats ────────────────────────────────────────────────────────────────
// const PAGE_STATS = [
//   { value: "20+", label: "Technologies" },
//   { value: "9", label: "Skill Categories" },
//   { value: "3+", label: "Years Experience" },
//   { value: "100%", label: "Passion" },
// ];

// // ── Main component ────────────────────────────────────────────────────────────
// const SkillsPage = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Skills — Nikhil Marati</title>
//         <meta
//           name="description"
//           content="Technical skills and expertise in DevOps, cloud engineering, CI/CD, and infrastructure automation."
//         />
//       </Helmet>

//       <div className="min-h-screen bg-[#020b18] text-foreground">
//         <Header />

//         {/* ── Hero Banner ── */}
//         <section className="relative overflow-hidden py-28">
//           {/* Dark base */}
//           <div className="absolute inset-0 bg-[#020b18]" />

//           {/* Particle network */}
//           <ParticleCanvas />

//           {/* Radial glow */}
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(0,200,255,0.10),transparent)]" />

//           {/* Hex grid */}
//           <div
//             className="absolute inset-0 opacity-[0.04]"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zM28 100L0 84V50l28-16 28 16v34L28 100z' fill='none' stroke='%2300ffff' stroke-width='1'/%3E%3C/svg%3E")`,
//             }}
//           />

//           <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               {/* Badge */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono mb-6"
//               >
//                 <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
//                 Technical Arsenal
//               </motion.div>

//               <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
//                 My Skills
//               </h1>
//               <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
//                 A battle-tested toolkit for building, deploying, and scaling
//                 modern infrastructure and cloud-native applications.
//               </p>
//             </motion.div>

//             {/* Mini stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.7 }}
//               className="flex flex-wrap justify-center gap-6 mt-12"
//             >
//               {PAGE_STATS.map((s, i) => (
//                 <motion.div
//                   key={s.label}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5 + i * 0.1 }}
//                   className="flex flex-col items-center gap-1 px-6 py-3 rounded-xl bg-white/[0.04] border border-cyan-500/10"
//                 >
//                   <span className="text-2xl font-black text-white">
//                     {s.value}
//                   </span>
//                   <span className="text-xs text-gray-500 font-mono">
//                     {s.label}
//                   </span>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* ── Skills Grid ── */}
//         <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="max-w-6xl mx-auto">
//             {Object.values(SKILLS).map((category, ci) => (
//               <SkillCategory
//                 key={category.title}
//                 title={category.title}
//                 icon={category.icon}
//               >
//                 {category.items.map((skill, si) => (
//                   <SkillCard
//                     key={skill.name}
//                     {...skill}
//                     delay={ci * 0.05 + si * 0.08}
//                   />
//                 ))}
//               </SkillCategory>
//             ))}
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
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton";

// ── Particle Canvas ───────────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
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
      style={{ zIndex: 0, opacity: 0.6 }}
    />
  );
}

// ── Marquee Strip ─────────────────────────────────────────────────────────────
const MARQUEE_ITEMS = [
  "CI/CD Pipelines",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Azure",
  "Linux",
  "GitHub Actions",
  "Monitoring",
  // "ArgoCD",
  "Ansible",
  "Prometheus",
  "Nginx",
];

function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative z-10 overflow-hidden border-t border-b border-cyan-500/10 bg-cyan-500/[0.02]">
      <div
        className="flex gap-12 w-max py-3"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {items.map((s, i) => (
          <span
            key={i}
            className="text-[#5a7080] text-xs tracking-[0.18em] uppercase font-mono whitespace-nowrap flex items-center gap-3 flex-shrink-0"
          >
            {s}
            <span className="text-cyan-500 text-[0.6rem]">✦</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ── Section Label ─────────────────────────────────────────────────────────────
function SectionLabel({ num, tag }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-[#5a7080] font-mono text-xs tracking-widest">
        {num}
      </span>
      <div className="flex-1 h-px bg-cyan-500/15" />
      <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
        {tag}
      </span>
    </div>
  );
}

// ── Skills Data ───────────────────────────────────────────────────────────────
const SKILL_CATEGORIES = [
  {
    label: "Containerization & Orchestration",
    color: "#00dcc8",
    skills: [
      { name: "Docker", level: 92, icon: "🐳" },
      { name: "Kubernetes", level: 85, icon: "☸️" },
      { name: "Helm", level: 78, icon: "⛵" },
      // { name: "ArgoCD", level: 75, icon: "🔄" },
    ],
  },
  {
    label: "Infrastructure as Code",
    color: "#7c3aed",
    skills: [
      { name: "Terraform", level: 90, icon: "🏗️" },
      { name: "Ansible", level: 82, icon: "📋" },
      // { name: "Pulumi", level: 65, icon: "🌀" },
      // { name: "CloudFormation", level: 70, icon: "☁️" },
    ],
  },
  {
    label: "CI/CD & Automation",
    color: "#f59e0b",
    skills: [
      { name: "Jenkins", level: 88, icon: "⚙️" },
      { name: "GitHub Actions", level: 85, icon: "🐙" },
      { name: "Azure DevOps", level: 87, icon: "🔷" },
      // { name: "GitLab CI", level: 75, icon: "🦊" },
    ],
  },
  {
    label: "Cloud Platforms",
    color: "#0ea5e9",
    skills: [
      { name: "Azure", level: 88, icon: "☁️" },
      { name: "AWS", level: 50, icon: "🟠" },
      // { name: "GCP", level: 60, icon: "🌐" },
    ],
  },
  {
    label: "Monitoring & Observability",
    color: "#f97316",
    skills: [
      { name: "Prometheus", level: 83, icon: "📊" },
      { name: "Grafana", level: 85, icon: "📈" },
      // { name: "ELK Stack", level: 74, icon: "🔍" },
      // { name: "Datadog", level: 68, icon: "🐶" },
    ],
  },
  {
    label: "OS & Scripting",
    color: "#22c55e",
    skills: [
      { name: "Linux", level: 92, icon: "🐧" },
      { name: "Bash", level: 88, icon: "💻" },
      { name: "Python", level: 78, icon: "🐍" },
      { name: "YAML / JSON", level: 95, icon: "📄" },
    ],
  },
];

// ── Animated Skill Bar ────────────────────────────────────────────────────────
function SkillBar({ skill, color, delay }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className="text-sm">{skill.icon}</span>
          <span className="text-xs text-gray-300 font-mono group-hover:text-white transition-colors duration-200">
            {skill.name}
          </span>
        </div>
        <span className="text-[0.65rem] font-mono" style={{ color }}>
          {skill.level}%
        </span>
      </div>
      <div className="h-1 w-full rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${skill.level}%` : "0%",
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            transitionDelay: `${delay * 1000}ms`,
            boxShadow: inView ? `0 0 8px ${color}55` : "none",
          }}
        />
      </div>
    </motion.div>
  );
}

// ── Tools Grid ────────────────────────────────────────────────────────────────
const TOOLS = [
  { name: "Docker", icon: "🐳" },
  { name: "Kubernetes", icon: "☸️" },
  { name: "Terraform", icon: "🏗️" },
  { name: "Ansible", icon: "📋" },
  { name: "Jenkins", icon: "⚙️" },
  { name: "Azure DevOps", icon: "🔷" },
  { name: "GitHub Actions", icon: "🐙" },
  { name: "Prometheus", icon: "📊" },
  { name: "Grafana", icon: "📈" },
  { name: "Linux", icon: "🐧" },
  { name: "Git", icon: "🔀" },
  { name: "Nginx", icon: "🌐" },
  // { name: "ArgoCD", icon: "🔄" },
  { name: "Helm", icon: "⛵" },
  { name: "Bash", icon: "💻" },
  { name: "Python", icon: "🐍" },
];

// ── Certifications ────────────────────────────────────────────────────────────
const CERTS = [
  { name: "AZ-900: Azure Fundamentals", status: "Completed", color: "#00dcc8" },
  {
    name: "CKA: Certified Kubernetes Admin",
    status: "In Progress",
    color: "#f59e0b",
  },
  {
    name: "HashiCorp Terraform Associate",
    status: "In Progress",
    color: "#7c3aed",
  },
  {
    name: "AWS Solutions Architect Associate",
    status: "Planned",
    color: "#5a7080",
  },
];

// ── Main Component ────────────────────────────────────────────────────────────
const SkillsPage = () => {
  return (
    <>
      <Helmet>
        <title>Skills — Nikhil Marati</title>
        <meta
          name="description"
          content="Explore Nikhil Marati's DevOps and cloud engineering skill set — tools, technologies, and proficiency levels."
        />
      </Helmet>

      <div className="min-h-screen bg-[#03060d] text-white">
        <ParticleCanvas />
        <Header />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden min-h-[88vh] flex flex-col items-center justify-center text-center px-4">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,220,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,220,200,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(0,220,200,0.09),transparent_70%)]" />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-6 tracking-widest uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Tools of the Trade
            </motion.div>

            {/* Big title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-black text-white leading-none tracking-tight"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(5rem, 18vw, 12rem)",
                lineHeight: 0.9,
              }}
            >
              My
              <span
                className="block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #00dcc8",
                }}
              >
                Skills
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-5 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed"
              style={{ fontStyle: "italic" }}
            >
              A deep dive into the technologies, tools, and platforms I use to
              build and scale production infrastructure.
            </motion.p>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-12 flex flex-col items-center gap-2 text-[#5a7080] text-[0.6rem] tracking-[0.2em] uppercase"
            >
              <div
                className="w-px h-10 bg-gradient-to-b from-cyan-500 to-transparent"
                style={{ animation: "scrollLine 2s ease-in-out infinite" }}
              />
              Scroll
              <style>{`
                @keyframes scrollLine {
                  0%   { transform: scaleY(0); transform-origin: top; }
                  50%  { transform: scaleY(1); transform-origin: top; }
                  51%  { transform: scaleY(1); transform-origin: bottom; }
                  100% { transform: scaleY(0); transform-origin: bottom; }
                }
              `}</style>
            </motion.div>
          </div>
        </section>

        {/* ── Marquee ── */}
        <MarqueeStrip />

        {/* ── Main Content ── */}
        <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto space-y-28">
            {/* ── 01 · Skill Bars ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel num="01" tag="Proficiency" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {SKILL_CATEGORIES.map((cat, ci) => (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.08, duration: 0.6 }}
                    className="p-6 md:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <div className="relative mb-6">
                      <div
                        className="absolute -top-px -left-px w-4 h-4 border-t border-l rounded-tl-lg"
                        style={{ borderColor: `${cat.color}60` }}
                      />
                      <div className="flex items-center gap-3">
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            background: cat.color,
                            boxShadow: `0 0 8px ${cat.color}`,
                          }}
                        />
                        <h3
                          className="text-sm font-mono tracking-wide"
                          style={{ color: cat.color }}
                        >
                          {cat.label}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {cat.skills.map((skill, si) => (
                        <SkillBar
                          key={skill.name}
                          skill={skill}
                          color={cat.color}
                          delay={si * 0.06}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── 02 · Tools Grid ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel num="02" tag="Tools & Technologies" />

              <div
                className="rounded-2xl overflow-hidden border border-cyan-500/10"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                  gap: "1px",
                  background: "rgba(0,220,200,0.12)",
                }}
              >
                {TOOLS.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    className="flex items-center gap-3 px-5 py-4 bg-[#03060d] group cursor-default transition-colors duration-200 hover:bg-cyan-500/[0.04]"
                  >
                    <div className="w-5 h-5 rounded-full border border-cyan-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/10 transition-colors duration-200">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 12 10"
                        fill="none"
                        stroke="#00dcc8"
                        strokeWidth="2.5"
                      >
                        <polyline points="1,5 4,8 11,1" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-200 font-mono tracking-wide">
                      {tool.name}
                    </span>
                    <span className="ml-auto text-base opacity-60 group-hover:opacity-100 transition-opacity">
                      {tool.icon}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── 03 · Certifications ──
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel num="03" tag="Certifications" />

              <div className="relative pl-7 border-l border-cyan-500/20 space-y-5">
                {CERTS.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative group"
                  >
                    <span
                      className="absolute -left-[1.95rem] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[#03060d]"
                      style={{
                        background: cert.color,
                        boxShadow: `0 0 10px ${cert.color}99`,
                      }}
                    />
                    <div className="p-5 md:p-6 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-cyan-500/20 transition-all duration-300 hover:bg-white/[0.04] hover:translate-x-1.5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-base"
                          style={{ background: `${cert.color}15` }}
                        >
                          🏅
                        </div>
                        <h3 className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors duration-300">
                          {cert.name}
                        </h3>
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-[0.65rem] font-mono shrink-0"
                        style={{
                          background: `${cert.color}15`,
                          border: `1px solid ${cert.color}40`,
                          color: cert.color,
                        }}
                      >
                        {cert.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}

            {/* ── 04 · Engineering Philosophy ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel num="04" tag="Engineering Philosophy" />

              <div
                className="rounded-2xl overflow-hidden border border-cyan-500/10"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1px",
                  background: "rgba(0,220,200,0.12)",
                }}
              >
                {[
                  "Automate everything that can be automated",
                  "Infrastructure is code — version control it",
                  "Monitor first, scale second",
                  "Shift security left in the pipeline",
                  "Document as you build, not after",
                  "Fail fast, recover faster",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-center gap-3 px-6 py-5 bg-[#03060d] group cursor-default transition-colors duration-200 hover:bg-cyan-500/[0.04]"
                  >
                    <div className="w-5 h-5 rounded-full border border-cyan-500/50 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/15 transition-colors duration-200">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 12 10"
                        fill="none"
                        stroke="#00dcc8"
                        strokeWidth="2.5"
                      >
                        <polyline points="1,5 4,8 11,1" />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-200 leading-snug">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        <WhatsAppButton />
        <Footer />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </>
  );
};

export default SkillsPage;