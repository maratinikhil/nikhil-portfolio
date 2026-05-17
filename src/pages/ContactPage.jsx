// import React, { useEffect, useRef } from "react";
// import { Helmet } from "react-helmet";
// import { motion } from "framer-motion";
// import { Mail, Github, Linkedin, Clock, Send } from "lucide-react";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";
// import ContactForm from "../components/ContactForm.jsx";

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

// // ── Contact info data ─────────────────────────────────────────────────────────
// const contactInfo = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "marati.nikhil9@gmail.com",
//     href: "mailto:marati.nikhil9@gmail.com",
//     hint: "Best for detailed inquiries",
//   },
//   {
//     icon: Github,
//     label: "GitHub",
//     value: "github.com/nikhilmarati",
//     href: "https://github.com",
//     hint: "Check out my projects",
//   },
//   {
//     icon: Linkedin,
//     label: "LinkedIn",
//     value: "linkedin.com/in/marati-nikhil9",
//     href: "https://www.linkedin.com/in/marati-nikhil9/",
//     hint: "Let's connect professionally",
//   },
// ];

// // ── Main component ────────────────────────────────────────────────────────────
// const ContactPage = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Contact — Nikhil Marati</title>
//         <meta
//           name="description"
//           content="Get in touch with Nikhil Marati for DevOps consulting, cloud engineering projects, or collaboration opportunities."
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
//                 Open to Opportunities
//               </motion.div>

//               <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
//                 Get in Touch
//               </h1>
//               <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
//                 Interested in collaborating on a project or discussing DevOps
//                 solutions? Send me a message and I'll get back to you shortly.
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* ── Main content ── */}
//         <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="max-w-5xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//               {/* ── Contact Form ── */}
//               <motion.div
//                 initial={{ opacity: 0, x: -30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7 }}
//               >
//                 {/* Section header */}
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
//                     <Send className="h-4 w-4" />
//                   </div>
//                   <h2 className="text-base font-black text-white tracking-wide uppercase font-mono">
//                     Send a Message
//                   </h2>
//                   <div className="flex-1 h-px bg-cyan-500/10" />
//                 </div>

//                 {/* Form wrapper with cyber styling */}
//                 <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/20 transition-all duration-300">
//                   <ContactForm />
//                 </div>
//               </motion.div>

//               {/* ── Right column ── */}
//               <motion.div
//                 initial={{ opacity: 0, x: 30 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.7, delay: 0.1 }}
//                 className="space-y-8"
//               >
//                 {/* Contact Info */}
//                 <div>
//                   <div className="flex items-center gap-3 mb-6">
//                     <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
//                       <Mail className="h-4 w-4" />
//                     </div>
//                     <h2 className="text-base font-black text-white tracking-wide uppercase font-mono">
//                       Contact Info
//                     </h2>
//                     <div className="flex-1 h-px bg-cyan-500/10" />
//                   </div>

//                   <div className="space-y-3">
//                     {contactInfo.map((info, i) => {
//                       const Icon = info.icon;
//                       return (
//                         <motion.a
//                           key={info.label}
//                           href={info.href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           initial={{ opacity: 0, y: 12 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ duration: 0.4, delay: i * 0.1 }}
//                           whileHover={{ x: 4 }}
//                           className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
//                         >
//                           <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
//                             <Icon className="h-5 w-5" />
//                           </div>
//                           <div className="min-w-0">
//                             <p className="text-xs font-mono text-gray-500 mb-0.5">
//                               {info.label}
//                             </p>
//                             <p className="text-sm font-semibold text-white truncate group-hover:text-cyan-400 transition-colors duration-200">
//                               {info.value}
//                             </p>
//                             <p className="text-xs text-gray-600 mt-0.5">
//                               {info.hint}
//                             </p>
//                           </div>
//                           {/* Arrow indicator */}
//                           <div className="ml-auto text-gray-600 group-hover:text-cyan-400 transition-colors duration-200 text-lg shrink-0">
//                             ↗
//                           </div>
//                         </motion.a>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Response time card */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 16 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.3 }}
//                   className="p-6 rounded-2xl bg-white/[0.03] border border-cyan-500/10"
//                 >
//                   <div className="flex items-center gap-3 mb-3">
//                     <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
//                       <Clock className="h-4 w-4" />
//                     </div>
//                     <h3 className="text-sm font-black text-white font-mono uppercase tracking-wide">
//                       Response Time
//                     </h3>
//                   </div>
//                   <p className="text-sm text-gray-500 leading-relaxed">
//                     I typically respond within{" "}
//                     <span className="text-cyan-400 font-semibold">
//                       24–48 hours
//                     </span>{" "}
//                     during business days. For urgent inquiries, reach out via
//                     email directly.
//                   </p>
//                 </motion.div>

//                 {/* Terminal flavor */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 16 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.5, delay: 0.4 }}
//                   className="font-mono text-xs bg-black/50 border border-cyan-500/20 rounded-xl p-4 space-y-1"
//                 >
//                   <p className="text-green-300">
//                     $ ping nikhil --message "hello"
//                   </p>
//                   <p className="text-cyan-400">▸ Packet sent successfully</p>
//                   <p className="text-gray-500">▸ Awaiting response...</p>
//                   <p className="text-gray-600">▸ ETA: 24–48h</p>
//                   <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-pulse" />
//                 </motion.div>
//               </motion.div>
//             </div>
//           </div>
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// };

// export default ContactPage;

import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Clock, Send } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";
import WhatsAppButton from "../components/WhatsAppButton";

// ── Particle Canvas (fixed, full-window — same as About/Home/Skills) ──────────
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
  "Open to Work",
  "Remote Friendly",
  "DevOps Consulting",
  "Cloud Projects",
  "CI/CD Setup",
  "Infrastructure Automation",
  "Let's Collaborate",
  "Available Now",
];

function MarqueeStrip() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="relative z-10 overflow-hidden border-t border-b border-cyan-500/10 bg-cyan-500/[0.02]">
      <div
        className="flex gap-12 w-max py-3"
        style={{ animation: "marquee 32s linear infinite" }}
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

// ── Contact info data ─────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "marati.nikhil9@gmail.com",
    href: "mailto:marati.nikhil9@gmail.com",
    hint: "Best for detailed inquiries",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/nikhilmarati",
    href: "https://github.com",
    hint: "Check out my projects",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/marati-nikhil9",
    href: "https://www.linkedin.com/in/marati-nikhil9/",
    hint: "Let's connect professionally",
  },
];

// ── Main Component ────────────────────────────────────────────────────────────
const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact — Nikhil Marati</title>
        <meta
          name="description"
          content="Get in touch with Nikhil Marati for DevOps consulting, cloud engineering projects, or collaboration opportunities."
        />
      </Helmet>

      <div className="min-h-screen bg-[#03060d] text-white">
        {/* Fixed particle layer */}
        <ParticleCanvas />

        <Header />

        {/* ══════════════════════════════════════════════════════════════════
            HERO — identical structure to About/Home/Skills hero
        ══════════════════════════════════════════════════════════════════ */}
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
          {/* Radial glow */}
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
              Open to Opportunities
            </motion.div>

            {/* Big Bebas title — "Get In" solid / "Touch" outlined */}
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
              Get In
              <span
                className="block"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1.5px #00dcc8",
                }}
              >
                Touch
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
              Interested in collaborating on a project or discussing DevOps
              solutions? Send me a message and I'll get back to you shortly.
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

        {/* ══════════════════════════════════════════════════════════════════
            MAIN CONTENT
        ══════════════════════════════════════════════════════════════════ */}
        <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-6xl mx-auto space-y-28">
            {/* ── 01 · Form + Info ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel num="01" tag="Send a Message" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* ── Left: Contact Form ── */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  {/* Corner accents — same as AboutPage photo */}
                  <div className="absolute -top-px -left-px w-5 h-5 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-lg z-10" />
                  <div className="absolute -bottom-px -right-px w-5 h-5 border-b-2 border-r-2 border-cyan-400/40 rounded-br-lg z-10" />

                  <div className="p-6 md:p-8 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-cyan-500/20 transition-all duration-300">
                    {/* Form header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        <Send className="h-4 w-4" />
                      </div>
                      <h2
                        className="text-white"
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: "1.4rem",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Drop a Message
                      </h2>
                    </div>

                    <ContactForm />
                  </div>
                </motion.div>

                {/* ── Right: Info cards + terminal ── */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="space-y-5"
                >
                  {/* Contact info cards — same timeline-card style as Experience */}
                  <div className="relative pl-7 border-l border-cyan-500/20 space-y-4">
                    {contactInfo.map((info, i) => {
                      const Icon = info.icon;
                      return (
                        <motion.a
                          key={info.label}
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          whileHover={{ x: 6 }}
                          className="relative group block"
                        >
                          {/* Timeline dot */}
                          <span className="absolute -left-[1.95rem] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#03060d] shadow-[0_0_10px_rgba(0,220,200,0.6)]" />

                          <div className="p-5 rounded-2xl bg-white/[0.025] border border-white/[0.06] hover:border-cyan-500/25 transition-all duration-300 hover:bg-white/[0.04] flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-[0.65rem] font-mono text-[#5a7080] tracking-widest uppercase mb-0.5">
                                {info.label}
                              </p>
                              <p className="text-sm font-mono text-white truncate group-hover:text-cyan-400 transition-colors duration-200">
                                {info.value}
                              </p>
                              <p className="text-[0.65rem] text-gray-600 mt-0.5">
                                {info.hint}
                              </p>
                            </div>
                            <span className="ml-auto text-gray-600 group-hover:text-cyan-400 transition-colors duration-200 text-lg shrink-0">
                              ↗
                            </span>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>

                  {/* Response time card */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="p-6 rounded-2xl bg-white/[0.025] border border-cyan-500/10 hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        <Clock className="h-4 w-4" />
                      </div>
                      <h3
                        className="text-white"
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: "1.2rem",
                          letterSpacing: "0.06em",
                        }}
                      >
                        Response Time
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      I typically respond within{" "}
                      <span className="text-cyan-400 font-semibold">
                        24–48 hours
                      </span>{" "}
                      during business days. For urgent inquiries, reach out via
                      email directly.
                    </p>
                  </motion.div>

                  {/* Terminal flavor — same style as AboutPage terminal */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="font-mono text-xs bg-black/60 border border-cyan-500/20 rounded-xl overflow-hidden"
                  >
                    {/* Title bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.03] border-b border-cyan-500/10">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      <span className="ml-2 text-gray-500 text-[0.65rem] tracking-widest">
                        terminal
                      </span>
                    </div>
                    {/* Body */}
                    <div className="p-4 space-y-1">
                      <p className="text-green-400">
                        $ ping nikhil --message "hello"
                      </p>
                      <p className="text-cyan-400">
                        ▸ Packet sent successfully
                      </p>
                      <p className="text-gray-500">▸ Awaiting response...</p>
                      <p className="text-gray-600">▸ ETA: 24–48h</p>
                      <span className="inline-block w-1.5 h-3.5 bg-cyan-400 align-middle animate-pulse" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* ── 02 · Availability grid (same 1px-gap pattern as Skills/About) ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionLabel num="02" tag="What I'm Open To" />

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
                  {
                    label: "DevOps Consulting",
                    hint: "Pipeline design & cloud migrations",
                  },
                  {
                    label: "Freelance Projects",
                    hint: "Short or long-term engagements",
                  },
                  {
                    label: "Full-time Roles",
                    hint: "Remote or on-site opportunities",
                  },
                  {
                    label: "Open Source Collaboration",
                    hint: "Infrastructure & automation tools",
                  },
                  {
                    label: "Technical Mentorship",
                    hint: "Helping others learn DevOps",
                  },
                  {
                    label: "Speaking & Writing",
                    hint: "Workshops, blogs & talks",
                  },
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
                    <div>
                      <p className="text-xs text-gray-300 group-hover:text-white transition-colors duration-200 leading-snug font-mono">
                        {item.label}
                      </p>
                      <p className="text-[0.62rem] text-[#5a7080] mt-0.5">
                        {item.hint}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>

        <WhatsAppButton />
        <Footer />
      </div>

      {/* Bebas Neue font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </>
  );
};

export default ContactPage;