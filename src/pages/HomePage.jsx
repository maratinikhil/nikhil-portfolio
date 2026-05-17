// import React from "react";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight, Code2, Cloud, Zap } from "lucide-react";
// import { Button } from "../components/ui/button";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";

// const HomePage = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Nikhil Marati - DevOps & Cloud Engineer</title>
//         <meta
//           name="description"
//           content="DevOps and Cloud Engineer specializing in infrastructure automation, CI/CD pipelines, and cloud solutions."
//         />
//       </Helmet>

//       <div className="min-h-screen bg-background text-foreground">
//         <Header />

//         {/* Hero Section */}
//         <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20">
//           {/* Background Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//             style={{
//               backgroundImage:
//                 "url(https://images.unsplash.com/photo-1699100329878-7f28bb780787)",
//             }}
//           />

//           {/* Dark Overlay */}
//           <div className="hero-overlay" />

//           {/* Content */}
//           <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="mb-32" // Added margin bottom
//             >
//               <h1
//                 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
//                 style={{ letterSpacing: "-0.02em" }}
//               >
//                 Nikhil Marati
//               </h1>

//               <p className="text-xl md:text-2xl font-semibold text-primary mb-4">
//                 DevOps & Cloud Engineer
//               </p>

//               <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
//                 Building robust infrastructure automation and cloud solutions
//                 that scale. Transforming deployment pipelines into seamless,
//                 reliable systems.
//               </p>

//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//                 <Link to="/skills">
//                   <Button
//                     size="lg"
//                     className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-98"
//                   >
//                     View Skills
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Button>
//                 </Link>
//                 <Link to="/contact">
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-98"
//                   >
//                     Get in Touch
//                   </Button>
//                 </Link>
//               </div>
//             </motion.div>

//             {/* Feature Highlights - Increased spacing */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="mt-48 md:mt-56 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" // Increased margin top and max width
//             >
//               <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
//                 <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
//                   <Code2 className="h-7 w-7" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-center">
//                   Infrastructure as Code
//                 </h3>
//                 <p className="text-sm text-muted-foreground text-center leading-relaxed">
//                   Terraform, Docker, and modern
//                   <br />
//                   DevOps practices
//                 </p>
//               </div>

//               <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
//                 <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
//                   <Cloud className="h-7 w-7" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-center">
//                   Cloud Engineering
//                 </h3>
//                 <p className="text-sm text-muted-foreground text-center leading-relaxed">
//                   Azure DevOps and cloud-native
//                   <br />
//                   solutions
//                 </p>
//               </div>

//               <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
//                 <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
//                   <Zap className="h-7 w-7" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-center">
//                   CI/CD Automation
//                 </h3>
//                 <p className="text-sm text-muted-foreground text-center leading-relaxed">
//                   Jenkins, Azure DevOps, and
//                   <br />
//                   deployment pipelines
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default HomePage;

// import React, { useEffect, useRef, useState } from "react";
// import { Helmet } from "react-helmet";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   Code2,
//   Cloud,
//   Zap,
//   GitBranch,
//   Shield,
//   Server,
// } from "lucide-react";
// import { Button } from "../components/ui/button";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";
// import WhatsAppButton from "../components/WhatsAppButton";

// // ── Animated terminal lines ──────────────────────────────────────────────────
// const TERMINAL_LINES = [
//   "$ kubectl get pods --all-namespaces",
//   "✔ Deploying to production cluster...",
//   "$ terraform apply -auto-approve",
//   "✔ Infrastructure provisioned in 12s",
//   "$ docker build -t app:latest .",
//   "✔ Pipeline passed · 0 failures",
// ];

// function TerminalAnimation() {
//   const [lines, setLines] = useState([]);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     if (current >= TERMINAL_LINES.length) {
//       const reset = setTimeout(() => {
//         setLines([]);
//         setCurrent(0);
//       }, 2000);
//       return () => clearTimeout(reset);
//     }
//     const t = setTimeout(() => {
//       setLines((prev) => [...prev, TERMINAL_LINES[current]]);
//       setCurrent((c) => c + 1);
//     }, 900);
//     return () => clearTimeout(t);
//   }, [current]);

//   return (
//     <div className="font-mono text-xs sm:text-sm bg-black/70 border border-cyan-500/30 rounded-xl p-4 text-left w-full max-w-lg mx-auto backdrop-blur-md shadow-[0_0_40px_rgba(0,255,255,0.08)]">
//       <div className="flex gap-1.5 mb-3">
//         <span className="w-3 h-3 rounded-full bg-red-500/80" />
//         <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
//         <span className="w-3 h-3 rounded-full bg-green-500/80" />
//         <span className="ml-2 text-gray-500 text-xs">terminal</span>
//       </div>
//       <div className="space-y-1 min-h-[120px]">
//         {lines.map((line, i) => (
//           <motion.p
//             key={i}
//             initial={{ opacity: 0, x: -8 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.3 }}
//             className={
//               line.startsWith("✔") ? "text-cyan-400" : "text-green-300"
//             }
//           >
//             {line}
//           </motion.p>
//         ))}
//         <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
//       </div>
//     </div>
//   );
// }

// // ── Typed role cycling ────────────────────────────────────────────────────────
// const ROLES = [
//   "DevOps Engineer",
//   "Cloud Architect",
//   "SRE Practitioner",
//   "Platform Engineer",
//   "CI/CD Specialist",
// ];

// function TypedRole() {
//   const [roleIdx, setRoleIdx] = useState(0);
//   const [displayed, setDisplayed] = useState("");
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     const full = ROLES[roleIdx];
//     if (!deleting && displayed.length < full.length) {
//       const t = setTimeout(
//         () => setDisplayed(full.slice(0, displayed.length + 1)),
//         60,
//       );
//       return () => clearTimeout(t);
//     }
//     if (!deleting && displayed.length === full.length) {
//       const t = setTimeout(() => setDeleting(true), 1800);
//       return () => clearTimeout(t);
//     }
//     if (deleting && displayed.length > 0) {
//       const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
//       return () => clearTimeout(t);
//     }
//     if (deleting && displayed.length === 0) {
//       setDeleting(false);
//       setRoleIdx((i) => (i + 1) % ROLES.length);
//     }
//   }, [displayed, deleting, roleIdx]);

//   return (
//     <span className="text-cyan-400">
//       {displayed}
//       <span className="animate-pulse">|</span>
//     </span>
//   );
// }

// // ── Particle canvas background ────────────────────────────────────────────────
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

//     const count = 70;
//     const particles = Array.from({ length: count }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       vx: (Math.random() - 0.5) * 0.4,
//       vy: (Math.random() - 0.5) * 0.4,
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
//         ctx.fillStyle = "rgba(0,255,255,0.5)";
//         ctx.fill();
//       });
//       // draw lines between close particles
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < 100) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.strokeStyle = `rgba(0,255,255,${0.12 * (1 - dist / 100)})`;
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

// // ── Tech stack data ───────────────────────────────────────────────────────────
// const TECH_STACK = [
//   { name: "Docker", color: "#2496ED", icon: "🐳" },
//   { name: "Kubernetes", color: "#326CE5", icon: "☸️" },
//   { name: "Terraform", color: "#7B42BC", icon: "🏗️" },
//   { name: "Azure", color: "#0078D4", icon: "☁️" },
//   { name: "Jenkins", color: "#D33833", icon: "⚙️" },
//   { name: "Git", color: "#F05032", icon: "🔀" },
//   { name: "Linux", color: "#FCC624", icon: "🐧" },
//   { name: "Ansible", color: "#EE0000", icon: "📋" },
//   { name: "Prometheus", color: "#E6522C", icon: "📊" },
//   { name: "Grafana", color: "#F46800", icon: "📈" },
// ];

// // ── Stats data ────────────────────────────────────────────────────────────────
// const STATS = [
//   {
//     value: "50+",
//     label: "Deployments",
//     icon: <GitBranch className="h-5 w-5" />,
//   },
//   { value: "99.9%", label: "Uptime SLA", icon: <Shield className="h-5 w-5" /> },
//   {
//     value: "10+",
//     label: "Tools Mastered",
//     icon: <Server className="h-5 w-5" />,
//   },
//   { value: "3x", label: "Faster Pipelines", icon: <Zap className="h-5 w-5" /> },
// ];

// // ── Main component ────────────────────────────────────────────────────────────
// const HomePage = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Nikhil Marati - DevOps & Cloud Engineer</title>
//         <meta
//           name="description"
//           content="DevOps and Cloud Engineer specializing in infrastructure automation, CI/CD pipelines, and cloud solutions."
//         />
//       </Helmet>

//       <div className="min-h-screen bg-background text-foreground">
//         <Header />

//         {/* ── Hero Section ── */}
//         <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
//           {/* Dark base */}
//           <div className="absolute inset-0 bg-[#020b18]" />

//           {/* Particle network */}
//           <ParticleCanvas />

//           {/* Radial glow */}
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,200,255,0.12),transparent)]" />

//           {/* Hex grid overlay */}
//           <div
//             className="absolute inset-0 opacity-[0.04]"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100'%3E%3Cpath d='M28 66L0 50V16L28 0l28 16v34L28 66zM28 100L0 84V50l28-16 28 16v34L28 100z' fill='none' stroke='%2300ffff' stroke-width='1'/%3E%3C/svg%3E")`,
//             }}
//           />

//           {/* Content */}
//           <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9 }}
//             >
//               {/* Badge */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.2 }}
//                 className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono mb-8"
//               >
//                 <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
//                 Available for opportunities
//               </motion.div>

//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-white tracking-tight">
//                 Nikhil Marati
//               </h1>

//               <p className="text-2xl md:text-3xl font-semibold mb-6 h-10">
//                 <TypedRole />
//               </p>

//               <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
//                 Building robust infrastructure automation and cloud solutions
//                 that scale. Transforming deployment pipelines into seamless,
//                 reliable systems.
//               </p>

//               <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
//                 <Link to="/skills">
//                   <Button
//                     size="lg"
//                     className="bg-cyan-500 text-black hover:bg-cyan-400 font-bold transition-all duration-200 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
//                   >
//                     View Skills
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Button>
//                 </Link>
//                 <Link to="/contact">
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
//                   >
//                     Get in Touch
//                   </Button>
//                 </Link>
//               </div>

//               {/* Terminal */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5, duration: 0.8 }}
//               >
//                 <TerminalAnimation />
//               </motion.div>
//             </motion.div>
//           </div>
//         </section>

//         {/* ── Stats Section ── */}
//         <section className="bg-[#020b18] border-y border-cyan-500/10 py-12">
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="grid grid-cols-2 md:grid-cols-4 gap-6"
//             >
//               {STATS.map((stat, i) => (
//                 <motion.div
//                   key={stat.label}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.1, duration: 0.5 }}
//                   className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/[0.03] border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
//                 >
//                   <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
//                     {stat.icon}
//                   </div>
//                   <p className="text-3xl font-black text-white">{stat.value}</p>
//                   <p className="text-sm text-gray-500">{stat.label}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* ── Feature Cards ── */}
//         <section className="bg-[#020b18] py-20">
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
//             >
//               {[
//                 {
//                   icon: <Code2 className="h-7 w-7" />,
//                   title: "Infrastructure as Code",
//                   desc: "Terraform, Docker, and modern DevOps practices for repeatable, scalable infrastructure.",
//                   color: "cyan",
//                 },
//                 {
//                   icon: <Cloud className="h-7 w-7" />,
//                   title: "Cloud Engineering",
//                   desc: "Azure DevOps and cloud-native solutions architected for high availability.",
//                   color: "blue",
//                 },
//                 {
//                   icon: <Zap className="h-7 w-7" />,
//                   title: "CI/CD Automation",
//                   desc: "Jenkins, Azure DevOps, and deployment pipelines that ship code with confidence.",
//                   color: "violet",
//                 },
//               ].map((card, i) => (
//                 <motion.div
//                   key={card.title}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.15, duration: 0.6 }}
//                   whileHover={{ y: -4 }}
//                   className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/30 transition-all duration-300 group cursor-default"
//                 >
//                   <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
//                     {card.icon}
//                   </div>
//                   <h3 className="text-lg font-bold text-white text-center">
//                     {card.title}
//                   </h3>
//                   <p className="text-sm text-gray-500 text-center leading-relaxed">
//                     {card.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* ── Tech Stack Section ── */}
//         <section className="bg-[#020b18] pb-24">
//           <div className="container mx-auto px-4">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-10"
//             >
//               <h2 className="text-2xl font-black text-white mb-2">
//                 Tech Stack
//               </h2>
//               <p className="text-gray-500 text-sm font-mono">
//                 Tools I work with daily
//               </p>
//             </motion.div>

//             <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
//               {TECH_STACK.map((tech, i) => (
//                 <motion.div
//                   key={tech.name}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: i * 0.05, duration: 0.4 }}
//                   whileHover={{ scale: 1.08, y: -2 }}
//                   className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/40 text-sm text-gray-300 hover:text-white transition-all duration-200 cursor-default"
//                 >
//                   <span>{tech.icon}</span>
//                   <span className="font-medium">{tech.name}</span>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//         <WhatsAppButton />

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default HomePage;

import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cloud,
  Zap,
  GitBranch,
  Shield,
  Server,
} from "lucide-react";
import { Button } from "../components/ui/button";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import WhatsAppButton from "../components/WhatsAppButton";

// ── Particle Canvas (fixed, like AboutPage) ───────────────────────────────────
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

// ── Typed role cycling (matches original behavior) ────────────────────────────
const ROLES = [
  "DevOps Engineer",
  "Cloud Architect",
  "SRE Practitioner",
  "Platform Engineer",
  "CI/CD Specialist",
];

function TypedRole() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIdx];
    if (!deleting && displayed.length < full.length) {
      const t = setTimeout(
        () => setDisplayed(full.slice(0, displayed.length + 1)),
        60,
      );
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === full.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
  }, [displayed, deleting, roleIdx]);

  return (
    <span style={{ color: "#00dcc8", fontStyle: "italic" }}>
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// ── Animated Terminal ─────────────────────────────────────────────────────────
const TERMINAL_LINES = [
  { text: "$ kubectl get pods --all-namespaces", cls: "text-green-400" },
  { text: "✔ Deploying to production cluster...", cls: "text-cyan-400" },
  { text: "$ terraform apply -auto-approve", cls: "text-green-400" },
  { text: "✔ Infrastructure provisioned in 12s", cls: "text-cyan-400" },
  { text: "$ docker build -t app:latest .", cls: "text-green-400" },
  { text: "✔ Pipeline passed · 0 failures", cls: "text-cyan-400" },
];

function TerminalBlock() {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (current >= TERMINAL_LINES.length) {
      const reset = setTimeout(() => {
        setLines([]);
        setCurrent(0);
      }, 2000);
      return () => clearTimeout(reset);
    }
    const t = setTimeout(() => {
      setLines((prev) => [...prev, TERMINAL_LINES[current]]);
      setCurrent((c) => c + 1);
    }, 900);
    return () => clearTimeout(t);
  }, [current]);

  return (
    <div className="font-mono text-xs bg-black/60 border border-cyan-500/20 rounded-xl overflow-hidden w-full max-w-lg mx-auto">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-cyan-500/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-gray-500 text-xs">terminal</span>
      </div>
      <div className="p-4 space-y-1 min-h-[120px]">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={line.cls}
          >
            {line.text}
          </motion.p>
        ))}
        <span className="inline-block w-1.5 h-3.5 bg-cyan-400 align-middle animate-pulse" />
      </div>
    </div>
  );
}

// ── Marquee Strip ─────────────────────────────────────────────────────────────
const TECH_MARQUEE = [
  "Docker",
  "Kubernetes",
  "Terraform",
  "Azure",
  "Jenkins",
  "Git",
  "Linux",
  "Ansible",
  "Prometheus",
  "Grafana",
  "ArgoCD",
  "Nginx",
];

function MarqueeStrip() {
  const items = [...TECH_MARQUEE, ...TECH_MARQUEE];
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

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  {
    value: "50+",
    label: "Deployments",
    icon: <GitBranch className="h-5 w-5" />,
  },
  { value: "99.9%", label: "Uptime SLA", icon: <Shield className="h-5 w-5" /> },
  {
    value: "10+",
    label: "Tools Mastered",
    icon: <Server className="h-5 w-5" />,
  },
  { value: "3x", label: "Faster Pipelines", icon: <Zap className="h-5 w-5" /> },
];

// ── Feature cards ─────────────────────────────────────────────────────────────
const FEATURES = [
  {
    icon: <Code2 className="h-7 w-7" />,
    title: "Infrastructure as Code",
    desc: "Terraform, Docker, and modern DevOps practices for repeatable, scalable infrastructure.",
  },
  {
    icon: <Cloud className="h-7 w-7" />,
    title: "Cloud Engineering",
    desc: "Azure DevOps and cloud-native solutions architected for high availability.",
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: "CI/CD Automation",
    desc: "Jenkins, Azure DevOps, and deployment pipelines that ship code with confidence.",
  },
];

// ── Main Component ────────────────────────────────────────────────────────────
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Nikhil Marati — DevOps & Cloud Engineer</title>
        <meta
          name="description"
          content="DevOps and Cloud Engineer specializing in infrastructure automation, CI/CD pipelines, and cloud solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-[#03060d] text-white">
        {/* Fixed particle layer */}
        <ParticleCanvas />

        <Header />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden min-h-[100dvh] flex flex-col items-center justify-center text-center px-4">
          {/* Grid bg */}
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
              Available for opportunities
            </motion.div>

            {/* Big Bebas title */}
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
              Nikhil
              <span
                className="block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #00dcc8",
                }}
              >
                Marati
              </span>
            </motion.h1>

            {/* Typed role */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="mt-5 text-2xl md:text-3xl font-semibold h-10"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.08em",
              }}
            >
              <TypedRole />
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-5 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed"
              style={{ fontStyle: "italic" }}
            >
              Building robust infrastructure automation and cloud solutions that
              scale. Transforming deployment pipelines into seamless, reliable
              systems.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-12"
            >
              <Link to="/skills">
                <Button
                  size="lg"
                  className="bg-cyan-500 text-black hover:bg-cyan-400 font-bold transition-all duration-200 shadow-[0_0_20px_rgba(0,220,200,0.3)] hover:shadow-[0_0_30px_rgba(0,220,200,0.5)]"
                >
                  View Skills
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Get in Touch
                </Button>
              </Link>
            </motion.div>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <TerminalBlock />
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
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
            {/* ── Stats ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                  01
                </span>
                <div className="flex-1 h-px bg-cyan-500/15" />
                <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                  By the Numbers
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-cyan-500/25 transition-all duration-300 group"
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <p
                      className="text-white"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "2.5rem",
                        lineHeight: 1,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 tracking-wider uppercase font-mono">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── What I Do (Feature Cards) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                  02
                </span>
                <div className="flex-1 h-px bg-cyan-500/15" />
                <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                  What I Do
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {FEATURES.map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    whileHover={{ y: -4 }}
                    className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-cyan-500/25 transition-all duration-300 group cursor-default"
                  >
                    {/* Corner accents */}
                    <div className="relative">
                      <div className="absolute -top-px -left-px w-4 h-4 border-t border-l border-cyan-400/40 rounded-tl-lg" />
                      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                        {card.icon}
                      </div>
                    </div>
                    <h3
                      className="text-white group-hover:text-cyan-400 transition-colors duration-300"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "1.6rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Tech Stack grid ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                  03
                </span>
                <div className="flex-1 h-px bg-cyan-500/15" />
                <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                  Tech Stack
                </span>
              </div>

              <div
                className="rounded-2xl overflow-hidden border border-cyan-500/10"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                  gap: "1px",
                  background: "rgba(0,220,200,0.12)",
                }}
              >
                {[
                  { name: "Docker", icon: "🐳" },
                  { name: "Kubernetes", icon: "☸️" },
                  { name: "Terraform", icon: "🏗️" },
                  { name: "Azure", icon: "☁️" },
                  { name: "Jenkins", icon: "⚙️" },
                  { name: "Git", icon: "🔀" },
                  { name: "Linux", icon: "🐧" },
                  { name: "Ansible", icon: "📋" },
                  { name: "Prometheus", icon: "📊" },
                  { name: "Grafana", icon: "📈" },
                ].map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 px-5 py-4 bg-[#03060d] group cursor-default transition-colors duration-200 hover:bg-cyan-500/[0.04]"
                  >
                    <span className="text-base">{tech.icon}</span>
                    <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-200 font-mono tracking-wide">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── CTA strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center space-y-6"
            >
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                  04
                </span>
                <div className="flex-1 h-px bg-cyan-500/15" />
                <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                  Let's Build
                </span>
              </div>

              <h2
                className="text-white"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(3rem, 8vw, 6rem)",
                  lineHeight: 0.95,
                  letterSpacing: "0.02em",
                }}
              >
                Ready to
                <span
                  className="block"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px #00dcc8",
                  }}
                >
                  Automate Everything?
                </span>
              </h2>

              <p
                className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed"
                style={{ fontStyle: "italic" }}
              >
                From pipelines to cloud infrastructure — let's build systems
                that work while you sleep.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                {/* <Link to="/projects">
                  <Button
                    size="lg"
                    className="bg-cyan-500 text-black hover:bg-cyan-400 font-bold transition-all duration-200 shadow-[0_0_20px_rgba(0,220,200,0.3)] hover:shadow-[0_0_30px_rgba(0,220,200,0.5)]"
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link> */}
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>

        <WhatsAppButton />
        <Footer />
      </div>

      {/* Load Bebas Neue */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </>
  );
};

export default HomePage;