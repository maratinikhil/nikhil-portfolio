// import React, { useEffect, useRef } from "react";
// import { Helmet } from "react-helmet";
// import { motion } from "framer-motion";
// import { CheckCircle2, Briefcase, MapPin, Mail, Calendar } from "lucide-react";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";

// // ── Particle canvas (shared aesthetic) ───────────────────────────────────────
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

//     const particles = Array.from({ length: 55 }, () => ({
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

// // ── Data ──────────────────────────────────────────────────────────────────────
// const highlights = [
//   "Infrastructure automation and cloud architecture",
//   "CI/CD pipeline design and optimization",
//   "Container orchestration and microservices",
//   "Infrastructure as Code with Terraform",
//   "DevOps best practices and tooling",
//   "Cloud-native application deployment",
// ];

// const experiences = [
//   {
//     title: "DevOps Engineer",
//     company: "Naaima Embedded Technology",
//     period: "October 2024 – Present",
//     type: "Full-time",
//     desc: "Building and maintaining CI/CD pipelines, automating infrastructure provisioning, and driving cloud-native adoption across teams.",
//   },
// ];

// const quickInfo = [
//   { icon: MapPin, label: "Location", value: "India" },
//   { icon: Mail, label: "Open to", value: "Remote / On-site" },
//   { icon: Calendar, label: "Experience", value: "1.5+ Years" },
// ];

// // ── Main component ────────────────────────────────────────────────────────────
// const AboutPage = () => {
//   return (
//     <>
//       <Helmet>
//         <title>About — Nikhil Marati</title>
//         <meta
//           name="description"
//           content="Learn about Nikhil Marati's expertise in DevOps, cloud engineering, and infrastructure automation."
//         />
//       </Helmet>

//       <div className="min-h-screen bg-[#020b18] text-foreground">
//         <Header />

//         {/* ── Hero Banner ── */}
//         <section className="relative overflow-hidden py-28">
//           <div className="absolute inset-0 bg-[#020b18]" />
//           <ParticleCanvas />
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(0,200,255,0.10),transparent)]" />
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
//                 The Engineer Behind the Stack
//               </motion.div>

//               <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
//                 About Me
//               </h1>
//               <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
//                 DevOps Engineer passionate about automating everything and
//                 building systems that just work — at any scale.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="max-w-6xl mx-auto space-y-20">
//             {/* ── Bio + Photo ── */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               {/* Photo */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7 }}
//                 className="relative"
//               >
//                 <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-transparent blur-xl" />
//                 <img
//                   src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401"
//                   alt="DevOps engineer working on infrastructure automation"
//                   className="relative w-full h-auto rounded-2xl border border-cyan-500/20 shadow-[0_0_40px_rgba(0,255,255,0.07)]"
//                 />

//                 {/* Quick info pills over the image bottom */}
//                 <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
//                   {quickInfo.map(({ icon: Icon, label, value }) => (
//                     <div
//                       key={label}
//                       className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-cyan-500/20 backdrop-blur-md text-xs text-gray-300"
//                     >
//                       <Icon className="h-3 w-3 text-cyan-400" />
//                       <span className="text-gray-500">{label}:</span>
//                       <span className="text-white font-medium">{value}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Bio text */}
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: 0.1 }}
//                 className="space-y-6"
//               >
//                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono">
//                   <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
//                   whoami
//                 </div>

//                 <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
//                   DevOps &amp;{" "}
//                   <span className="text-cyan-400">Cloud Engineer</span>
//                 </h2>

//                 <p className="text-base text-gray-400 leading-relaxed">
//                   I specialize in building and maintaining robust infrastructure
//                   automation systems that enable teams to deploy with
//                   confidence. My expertise spans cloud engineering, CI/CD
//                   pipeline optimization, and infrastructure as code.
//                 </p>
//                 <p className="text-base text-gray-400 leading-relaxed">
//                   With a focus on reliability and scalability, I help
//                   organizations transform their deployment processes into
//                   seamless, automated workflows. From containerization to
//                   cloud-native architectures, I bring modern DevOps practices to
//                   every project.
//                 </p>

//                 {/* Inline terminal flavor */}
//                 <div className="font-mono text-xs bg-black/50 border border-cyan-500/20 rounded-xl p-4 space-y-1">
//                   <p className="text-green-300">$ cat philosophy.txt</p>
//                   <p className="text-gray-400">
//                     <span className="text-cyan-400">"</span>
//                     Automate the boring. Monitor everything. Ship with
//                     confidence.
//                     <span className="text-cyan-400">"</span>
//                   </p>
//                   <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-pulse" />
//                 </div>
//               </motion.div>
//             </div>

//             {/* ── Experience Timeline ── */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Section header */}
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
//                   <Briefcase className="h-4 w-4" />
//                 </div>
//                 <h2 className="text-base font-black text-white tracking-wide uppercase font-mono">
//                   Experience
//                 </h2>
//                 <div className="flex-1 h-px bg-cyan-500/10" />
//               </div>

//               <div className="relative pl-6 border-l border-cyan-500/20 space-y-6">
//                 {experiences.map((exp, i) => (
//                   <motion.div
//                     key={i}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: i * 0.1 }}
//                     className="relative group"
//                   >
//                     {/* Timeline dot */}
//                     <span className="absolute -left-[1.85rem] top-5 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#020b18] shadow-[0_0_8px_rgba(0,255,255,0.6)]" />

//                     <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/[0.05]">
//                       <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
//                         <div className="flex items-start gap-4">
//                           <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
//                             <Briefcase className="h-5 w-5" />
//                           </div>
//                           <div>
//                             <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors duration-300">
//                               {exp.title}
//                             </h3>
//                             <p className="text-sm text-gray-400 font-medium mt-0.5">
//                               {exp.company}
//                             </p>
//                           </div>
//                         </div>
//                         <div className="flex gap-2 flex-wrap shrink-0">
//                           <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
//                             {exp.period}
//                           </span>
//                           <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-gray-400 text-xs font-mono">
//                             {exp.type}
//                           </span>
//                         </div>
//                       </div>
//                       <p className="text-sm text-gray-500 leading-relaxed pl-14">
//                         {exp.desc}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* ── Key Competencies ── */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               {/* Section header */}
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
//                   <CheckCircle2 className="h-4 w-4" />
//                 </div>
//                 <h2 className="text-base font-black text-white tracking-wide uppercase font-mono">
//                   Key Competencies
//                 </h2>
//                 <div className="flex-1 h-px bg-cyan-500/10" />
//               </div>

//               <div className="p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-cyan-500/10">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {highlights.map((highlight, i) => (
//                     <motion.div
//                       key={i}
//                       initial={{ opacity: 0, x: -12 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.4, delay: i * 0.08 }}
//                       className="flex items-start gap-3 group"
//                     >
//                       <CheckCircle2 className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
//                       <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-200 leading-relaxed">
//                         {highlight}
//                       </span>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default AboutPage;

import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, MapPin, Mail, Calendar } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

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

// ── Typewriter Terminal ───────────────────────────────────────────────────────
const LINES = [
  { text: "$ cat philosophy.txt", cls: "text-green-400" },
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
    const delay = lineIdx === 0 ? 900 : 400;
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
      }, 26);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [lineIdx]);

  const activeLine = lineIdx < LINES.length ? LINES[lineIdx] : null;

  return (
    <div className="font-mono text-xs bg-black/60 border border-cyan-500/20 rounded-xl overflow-hidden">
      {/* Terminal bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-cyan-500/10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      {/* Body */}
      <div className="p-4 space-y-1 min-h-[72px]">
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
          <p>
            <span className="inline-block w-1.5 h-3.5 bg-cyan-400 align-middle animate-pulse" />
          </p>
        )}
      </div>
    </div>
  );
}

// ── Marquee Strip ─────────────────────────────────────────────────────────────
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

// ── Data ──────────────────────────────────────────────────────────────────────
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
    title: "DevOps Engineer",
    company: "Naaima Embedded Technology",
    period: "October 2024 – Present",
    type: "Full-time",
    desc: "Building and maintaining CI/CD pipelines, automating infrastructure provisioning, and driving cloud-native adoption across teams.",
  },
];

const quickInfo = [
  { icon: MapPin, label: "Location", value: "India" },
  { icon: Mail, label: "Open to", value: "Remote / On-site" },
  { icon: Calendar, label: "Experience", value: "1.5+ Years" },
];

// ── Main Component ────────────────────────────────────────────────────────────
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

      <div className="min-h-screen bg-[#03060d] text-white">
        {/* Fixed particle layer */}
        <ParticleCanvas />

        <Header />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden min-h-[88vh] flex flex-col items-center justify-center text-center px-4">
          {/* Grid background */}
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
              The Engineer Behind the Stack
            </motion.div>

            {/* Title */}
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
              About
              <span
                className="block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #00dcc8",
                }}
              >
                Me
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
              DevOps engineer passionate about automating everything and
              building systems that just work — at any scale.
            </motion.p>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
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
            {/* ── Bio + Photo ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Corner accents */}
                <div className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg z-10" />
                <div className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-cyan-400 rounded-br-lg z-10" />

                <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20">
                  <img
                    src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401?w=600&q=80"
                    alt="Nikhil Marati — DevOps Engineer"
                    className="w-full h-auto block"
                    style={{ filter: "saturate(0.65) brightness(0.82)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/07 to-transparent pointer-events-none" />
                </div>

                {/* Info pills */}
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  {quickInfo.map(({ icon: Icon, label, value }) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-cyan-500/20 backdrop-blur-md text-xs text-gray-300"
                    >
                      <Icon className="h-3 w-3 text-cyan-400" />
                      <span className="text-gray-500">{label}:</span>
                      <span className="text-white font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Bio text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="space-y-5"
              >
                {/* Section label */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                    01
                  </span>
                  <div className="flex-1 h-px bg-cyan-500/15" />
                  <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                    whoami
                  </span>
                </div>

                <h2
                  className="text-white leading-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(2.5rem, 5vw, 3.8rem)",
                    letterSpacing: "0.02em",
                  }}
                >
                  DevOps &amp;
                  <br />
                  <span style={{ color: "#00dcc8", fontStyle: "italic" }}>
                    Cloud Engineer
                  </span>
                </h2>

                <p className="text-sm text-gray-400 leading-relaxed">
                  I specialize in building and maintaining robust infrastructure
                  automation systems that enable teams to deploy with
                  confidence. My expertise spans cloud engineering, CI/CD
                  pipeline optimization, and infrastructure as code.
                </p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  With a focus on reliability and scalability, I help
                  organizations transform their deployment processes into
                  seamless, automated workflows. From containerization to
                  cloud-native architectures, I bring modern DevOps practices to
                  every project.
                </p>

                <TypewriterTerminal />
              </motion.div>
            </div>

            {/* ── Experience ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                  02
                </span>
                <div className="flex-1 h-px bg-cyan-500/15" />
                <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                  Experience
                </span>
              </div>

              <div className="relative pl-7 border-l border-cyan-500/20 space-y-5">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
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
                    {/* Timeline dot */}
                    <span className="absolute -left-[1.95rem] top-6 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#03060d] shadow-[0_0_10px_rgba(0,220,200,0.6)]" />

                    <div className="p-6 md:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-cyan-500/25 transition-all duration-300 hover:bg-white/[0.04] hover:translate-x-1.5">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-3">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                            <Briefcase className="h-5 w-5" />
                          </div>
                          <div>
                            <h3
                              className="text-white group-hover:text-cyan-400 transition-colors duration-300"
                              style={{
                                fontFamily: "'Bebas Neue', sans-serif",
                                fontSize: "1.5rem",
                                letterSpacing: "0.04em",
                              }}
                            >
                              {exp.title}
                            </h3>
                            <p className="text-xs text-gray-400 mt-0.5">
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 flex-wrap shrink-0">
                          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                            {exp.period}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-gray-400 text-xs font-mono">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed pl-14">
                        {exp.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Key Competencies ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Section label */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                  03
                </span>
                <div className="flex-1 h-px bg-cyan-500/15" />
                <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                  Key Competencies
                </span>
              </div>

              <div
                className="rounded-2xl overflow-hidden border border-cyan-500/10"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "1px",
                  background: "rgba(0,220,200,0.12)",
                }}
              >
                {highlights.map((highlight, i) => (
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
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>

      {/* Load Bebas Neue for the big title */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </>
  );
};

export default AboutPage;