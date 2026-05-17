// import React from "react";
// import { Link } from "react-router-dom";
// import { Mail, Github, Linkedin, Terminal } from "lucide-react";

// const Footer = () => {
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Skills", path: "/skills" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const socialLinks = [
//     {
//       icon: Mail,
//       href: "mailto:marati.nikhil9@gmail.com",
//       label: "Email",
//     },
//     {
//       icon: Github,
//       href: "https://github.com/nikhilmarati",
//       label: "GitHub",
//     },
//     {
//       icon: Linkedin,
//       href: "https://www.linkedin.com/in/marati-nikhil9/",
//       label: "LinkedIn",
//     },
//   ];

//   return (
//     <footer className="bg-[#020b18] border-t border-cyan-500/15">
//       {/* Top glow line */}
//       <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {/* ── Brand Column ── */}
//           <div className="space-y-4">
//             <Link
//               to="/"
//               className="inline-block text-xl font-black font-mono tracking-tight text-white hover:text-cyan-400 transition-colors duration-200"
//               style={{ letterSpacing: "-0.02em" }}
//             >
//               Nikhil Marati
//             </Link>
//             <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
//               DevOps Engineer crafting scalable cloud infrastructure and
//               automating the path from code to production.
//             </p>

//             {/* Status badge */}
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono">
//               <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
//               Open to Opportunities
//             </div>
//           </div>

//           {/* ── Navigation Column ── */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <h4 className="text-xs font-black font-mono text-white uppercase tracking-widest">
//                 Navigation
//               </h4>
//               <div className="flex-1 h-px bg-cyan-500/10" />
//             </div>
//             <ul className="space-y-2">
//               {navLinks.map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     className="flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-cyan-400 transition-colors duration-200 group"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors duration-200" />
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* ── Connect Column ── */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <h4 className="text-xs font-black font-mono text-white uppercase tracking-widest">
//                 Connect
//               </h4>
//               <div className="flex-1 h-px bg-cyan-500/10" />
//             </div>

//             <div className="space-y-2">
//               {socialLinks.map(({ icon: Icon, href, label }) => (
//                 <a
//                   key={label}
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.05] bg-white/[0.02] text-gray-500 hover:text-cyan-400 hover:border-cyan-500/25 hover:bg-cyan-500/5 transition-all duration-200 group"
//                 >
//                   <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400/60 group-hover:text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-200">
//                     <Icon className="h-3.5 w-3.5" />
//                   </div>
//                   <span className="text-sm font-mono">{label}</span>
//                   <span className="ml-auto text-xs text-gray-700 group-hover:text-cyan-500 transition-colors duration-200">
//                     ↗
//                   </span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* ── Bottom Bar ── */}
//         <div className="mt-12 pt-6 border-t border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
//           {/* Terminal line */}
//           <div className="flex items-center gap-2 font-mono text-xs text-gray-600">
//             <Terminal className="h-3.5 w-3.5 text-cyan-500/40" />
//             <span className="text-green-400/60">$</span>
//             <span>built with React & TailwindCSS</span>
//             <span className="inline-block w-1.5 h-3 bg-cyan-400/50 animate-pulse ml-1" />
//           </div>

//           <p className="flex items-center gap-1.5 text-xs font-mono text-gray-600">
//             <span className="text-cyan-500/50">©</span>
//             <span>{new Date().getFullYear()}</span>
//             <span className="text-cyan-400/70 font-semibold">
//               Nikhil Marati
//             </span>
//             <span className="text-cyan-500/30">·</span>
//             <span className="text-gray-500">DevOps Engineer</span>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Terminal, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const [time, setTime] = useState("");
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const canvasRef = useRef(null);

  // Live clock for terminal feel
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Subtle grid canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(0,220,200,0.04)";
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x <= canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", code: "01" },
    { name: "Skills", path: "/skills", code: "02" },
    { name: "About", path: "/about", code: "03" },
    { name: "Contact", path: "/contact", code: "04" },
  ];

  const socialLinks = [
    {
      id: "email",
      icon: Mail,
      href: "mailto:marati.nikhil9@gmail.com",
      label: "Email",
      handle: "marati.nikhil9@gmail.com",
    },
    {
      id: "github",
      icon: Github,
      href: "https://github.com/nikhilmarati",
      label: "GitHub",
      handle: "github.com/nikhilmarati",
    },
    {
      id: "linkedin",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/marati-nikhil9/",
      label: "LinkedIn",
      handle: "in/marati-nikhil9",
    },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#03060d",
        borderTop: "1px solid rgba(0,220,200,0.12)",
      }}
    >
      {/* Grid canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Top scan line — mirrors Header's top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,220,200,0.4) 40%, rgba(0,220,200,0.4) 60%, transparent)",
        }}
      />

      {/* Radial glow from bottom-center */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(0,220,200,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        {/* ── Section label ── */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-[#5a7080] font-mono text-xs tracking-widest">
            EOF
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(0,220,200,0.12)" }}
          />
          <span
            className="font-mono text-[0.65rem] tracking-[0.22em] uppercase"
            style={{ color: "#00dcc8" }}
          >
            End of Page
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(0,220,200,0.12)" }}
          />
          <span className="text-[#5a7080] font-mono text-xs tracking-widest">
            EOF
          </span>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* ── Brand Column ── */}
          <div className="space-y-5">
            {/* Logo — matches Header logo exactly */}
            <Link
              to="/"
              className="relative group inline-flex items-center gap-2"
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: "#00dcc8", boxShadow: "0 0 8px #00dcc8" }}
              />
              <span
                className="text-white group-hover:text-cyan-400 transition-colors duration-200"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.35rem",
                  letterSpacing: "0.06em",
                }}
              >
                Nikhil Marati
              </span>
            </Link>

            <p
              className="text-sm leading-relaxed max-w-xs font-mono"
              style={{ color: "#5a7080" }}
            >
              DevOps Engineer crafting scalable cloud infrastructure and
              automating the path from code to production.
            </p>

            {/* Status badge — matching Header resume button style */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border font-mono text-xs tracking-widest uppercase"
              style={{
                borderColor: "rgba(0,220,200,0.3)",
                background: "rgba(0,220,200,0.08)",
                color: "#00dcc8",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#00dcc8" }}
              />
              Open to Opportunities
            </div>
          </div>

          {/* ── Navigation Column ── */}
          <div className="space-y-4">
            {/* Section header — matches mobile menu header style */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                00
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(0,220,200,0.15)" }}
              />
              <span
                className="font-mono text-[0.65rem] tracking-[0.22em] uppercase"
                style={{ color: "#00dcc8" }}
              >
                Navigation
              </span>
            </div>

            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-3 px-3 py-2.5 rounded-xl font-mono text-sm tracking-wide transition-all duration-200"
                    style={{ color: "#5a7080" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#00dcc8";
                      e.currentTarget.style.background = "rgba(0,220,200,0.07)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#5a7080";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span
                      className="text-[0.6rem] tracking-widest"
                      style={{ color: "#5a7080" }}
                    >
                      {link.code}
                    </span>
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ background: "rgba(0,220,200,0.3)" }}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Connect Column ── */}
          <div className="space-y-4">
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                01
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(0,220,200,0.15)" }}
              />
              <span
                className="font-mono text-[0.65rem] tracking-[0.22em] uppercase"
                style={{ color: "#00dcc8" }}
              >
                Connect
              </span>
            </div>

            <div className="space-y-2">
              {socialLinks.map(({ id, icon: Icon, href, label, handle }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(id)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className="relative flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-sm transition-all duration-200 overflow-hidden"
                  style={{
                    border:
                      hoveredSocial === id
                        ? "1px solid rgba(0,220,200,0.2)"
                        : "1px solid rgba(0,220,200,0.08)",
                    background:
                      hoveredSocial === id
                        ? "rgba(0,220,200,0.05)"
                        : "transparent",
                    color: hoveredSocial === id ? "#00dcc8" : "#5a7080",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200"
                    style={{
                      background:
                        hoveredSocial === id
                          ? "rgba(0,220,200,0.15)"
                          : "rgba(0,220,200,0.06)",
                      color:
                        hoveredSocial === id
                          ? "#00dcc8"
                          : "rgba(0,220,200,0.4)",
                    }}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>

                  {/* Label + handle */}
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs tracking-widest uppercase">
                      {label}
                    </span>
                    <span
                      className="text-[0.65rem] truncate transition-colors duration-200"
                      style={{
                        color:
                          hoveredSocial === id
                            ? "rgba(0,220,200,0.6)"
                            : "#3a4a58",
                      }}
                    >
                      {handle}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 ml-auto shrink-0 transition-all duration-200"
                    style={{
                      opacity: hoveredSocial === id ? 1 : 0,
                      transform:
                        hoveredSocial === id
                          ? "translate(0,0)"
                          : "translate(-4px, 4px)",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="pt-6"
          style={{ borderTop: "1px solid rgba(0,220,200,0.08)" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Terminal line — matches mobile menu terminal decoration */}
            <div
              className="flex items-center gap-2 font-mono text-xs rounded-xl overflow-hidden"
              style={{
                background: "rgba(0,0,0,0.6)",
                border: "1px solid rgba(0,220,200,0.12)",
              }}
            >
              {/* macOS dots */}
              <div
                className="flex items-center gap-1.5 px-3 py-2"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderRight: "1px solid rgba(0,220,200,0.08)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                <span className="w-2 h-2 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-2 px-3 py-2">
                <Terminal
                  className="h-3 w-3"
                  style={{ color: "rgba(0,220,200,0.4)" }}
                />
                <span className="text-green-400">$</span>
                <span style={{ color: "#5a7080" }}>built with</span>
                <span style={{ color: "#00dcc8" }}>React</span>
                <span style={{ color: "#5a7080" }}>&</span>
                <span style={{ color: "#00dcc8" }}>TailwindCSS</span>
                <span
                  className="inline-block w-1.5 h-3 animate-pulse"
                  style={{ background: "#00dcc8", opacity: 0.7 }}
                />
              </div>
            </div>

            {/* Copyright + live clock */}
            <div className="flex items-center gap-3 font-mono text-xs">
              <p
                className="flex items-center gap-1.5"
                style={{ color: "#5a7080" }}
              >
                <span style={{ color: "rgba(0,220,200,0.4)" }}>©</span>
                <span>{new Date().getFullYear()}</span>
                <span style={{ color: "#00dcc8" }}>Nikhil Marati</span>
                <span style={{ color: "rgba(0,220,200,0.2)" }}>·</span>
                <span>DevOps Engineer</span>
              </p>
              {time && (
                <>
                  <span style={{ color: "rgba(0,220,200,0.2)" }}>|</span>
                  <span
                    className="tabular-nums"
                    style={{ color: "rgba(0,220,200,0.5)" }}
                  >
                    {time}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bebas Neue for logo — same as Header */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </footer>
  );
};

export default Footer;