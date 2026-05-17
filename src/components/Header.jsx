// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, Download, Eye, X } from "lucide-react";
// import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
// import { Button } from "./ui/button";
// import resumeFile from "../assets/resume.pdf";

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showResumeDialog, setShowResumeDialog] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Skills", path: "/skills" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   const handleView = () => {
//     window.open(resumeFile, "_blank");
//     setShowResumeDialog(false);
//   };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = resumeFile;
//     link.download = "Nikhil-Marati-Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setShowResumeDialog(false);
//   };

//   return (
//     <>
//       <header className="sticky top-0 z-50 w-full border-b border-cyan-500/15 bg-[#020b18]/95 backdrop-blur supports-[backdrop-filter]:bg-[#020b18]/80">
//         <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between">
//             {/* Logo */}
//             <Link
//               to="/"
//               className="text-xl font-black tracking-tight text-white transition-colors duration-200 hover:text-cyan-400 font-mono"
//               style={{ letterSpacing: "-0.02em" }}
//             >
//               Nikhil Marati
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden md:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   className={`relative text-sm font-mono font-medium transition-colors duration-200 ${
//                     isActive(link.path)
//                       ? "text-cyan-400"
//                       : "text-gray-500 hover:text-gray-200"
//                   }`}
//                 >
//                   {link.name}
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-cyan-400/80" />
//                   )}
//                 </Link>
//               ))}

//               {/* Resume Button */}
//               <button
//                 onClick={() => setShowResumeDialog(true)}
//                 className="ml-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono font-medium hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200"
//               >
//                 <Download className="h-4 w-4" />
//                 Resume
//               </button>
//             </div>

//             {/* Mobile Hamburger */}
//             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//               <SheetTrigger asChild className="md:hidden">
//                 <button className="p-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/15 transition-all duration-200">
//                   <Menu className="h-5 w-5" />
//                 </button>
//               </SheetTrigger>

//               <SheetContent
//                 side="right"
//                 className="w-[280px] sm:w-[320px] bg-[#020b18] border-l border-cyan-500/20"
//               >
//                 {/* Mobile menu header */}
//                 <div className="flex items-center gap-2 mb-8 mt-2">
//                   <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
//                   <span className="text-xs font-mono text-cyan-400/70 uppercase tracking-widest">
//                     Navigation
//                   </span>
//                 </div>

//                 <div className="flex flex-col gap-2">
//                   {navLinks.map((link) => (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={() => setIsOpen(false)}
//                       className={`flex items-center gap-3 px-4 py-3 rounded-xl font-mono font-medium text-sm transition-all duration-200 ${
//                         isActive(link.path)
//                           ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
//                           : "text-gray-500 hover:text-gray-200 hover:bg-white/[0.04] border border-transparent"
//                       }`}
//                     >
//                       {isActive(link.path) && (
//                         <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
//                       )}
//                       {link.name}
//                     </Link>
//                   ))}

//                   <button
//                     onClick={() => {
//                       setShowResumeDialog(true);
//                       setIsOpen(false);
//                     }}
//                     className="mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono font-medium hover:bg-cyan-500/20 transition-all duration-200"
//                   >
//                     <Download className="h-4 w-4" />
//                     Resume
//                   </button>
//                 </div>

//                 {/* Terminal decoration */}
//                 <div className="absolute bottom-6 left-4 right-4 font-mono text-xs bg-black/40 border border-cyan-500/10 rounded-xl p-3 space-y-1">
//                   <p className="text-green-300">$ whoami</p>
//                   <p className="text-cyan-400">▸ nikhil-marati</p>
//                   <p className="text-gray-600">▸ DevOps Engineer</p>
//                   <span className="inline-block w-1.5 h-3 bg-cyan-400 animate-pulse" />
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </nav>
//       </header>

//       {/* Resume Dialog */}
//       {showResumeDialog && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
//           <div className="bg-[#020b18] border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/5 max-w-md w-full mx-4">
//             {/* Dialog Header */}
//             <div className="flex items-center justify-between p-6 border-b border-cyan-500/10">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
//                   <Download className="h-4 w-4" />
//                 </div>
//                 <h3 className="text-base font-black text-white font-mono uppercase tracking-wide">
//                   Resume Options
//                 </h3>
//               </div>
//               <button
//                 onClick={() => setShowResumeDialog(false)}
//                 className="p-1.5 rounded-lg text-gray-600 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-200"
//               >
//                 <X className="h-4 w-4" />
//               </button>
//             </div>

//             {/* Dialog Body */}
//             <div className="p-6 space-y-4">
//               <p className="text-sm text-gray-500 font-mono text-center">
//                 Choose how you'd like to access the resume
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <button
//                   onClick={handleView}
//                   className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-300 text-sm font-mono font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-200"
//                 >
//                   <Eye className="h-4 w-4" />
//                   View in Browser
//                 </button>
//                 <button
//                   onClick={handleDownload}
//                   className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono font-medium hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200"
//                 >
//                   <Download className="h-4 w-4" />
//                   Download
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Download, Eye, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import resumeFile from "../assets/resume.pdf";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  // Shrink border opacity on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleView = () => {
    window.open(resumeFile, "_blank");
    setShowResumeDialog(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Nikhil-Marati-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeDialog(false);
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full transition-all duration-300"
        style={{
          background: scrolled ? "rgba(3,6,13,0.92)" : "rgba(3,6,13,0.75)",
          borderBottom: "1px solid rgba(0,220,200,0.12)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        {/* Thin cyan top line — like a scan line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,220,200,0.4) 40%, rgba(0,220,200,0.4) 60%, transparent)",
          }}
        />

        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* ── Logo ── */}
            <Link to="/" className="relative group flex items-center gap-2">
              {/* Glowing dot */}
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{
                  background: "#00dcc8",
                  boxShadow: "0 0 8px #00dcc8",
                }}
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

            {/* ── Desktop Navigation ── */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-xs font-mono tracking-[0.16em] uppercase transition-colors duration-200"
                  style={{
                    color: isActive(link.path) ? "#00dcc8" : "#5a7080",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(link.path))
                      e.currentTarget.style.color = "#d1d5db";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.path))
                      e.currentTarget.style.color = "#5a7080";
                  }}
                >
                  {link.name}
                  {/* Active underline */}
                  {isActive(link.path) && (
                    <span
                      className="absolute -bottom-[22px] left-0 right-0 h-px"
                      style={{ background: "#00dcc8", opacity: 0.8 }}
                    />
                  )}
                </Link>
              ))}

              {/* Resume button — matches badge style from all pages */}
              <button
                onClick={() => setShowResumeDialog(true)}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border font-mono text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  borderColor: "rgba(0,220,200,0.3)",
                  background: "rgba(0,220,200,0.08)",
                  color: "#00dcc8",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,220,200,0.15)";
                  e.currentTarget.style.borderColor = "rgba(0,220,200,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(0,220,200,0.08)";
                  e.currentTarget.style.borderColor = "rgba(0,220,200,0.3)";
                }}
              >
                <Download className="h-3.5 w-3.5" />
                Resume
              </button>
            </div>

            {/* ── Mobile Hamburger ── */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button
                  className="p-2 rounded-xl transition-all duration-200"
                  style={{
                    border: "1px solid rgba(0,220,200,0.2)",
                    background: "rgba(0,220,200,0.05)",
                    color: "#00dcc8",
                  }}
                >
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[280px] sm:w-[320px] border-l"
                style={{
                  background: "#03060d",
                  borderColor: "rgba(0,220,200,0.15)",
                }}
              >
                {/* Mobile menu header — same section-label style */}
                <div className="flex items-center gap-3 mb-8 mt-2">
                  <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                    00
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ background: "rgba(0,220,200,0.15)" }}
                  />
                  <span className="text-cyan-400 font-mono text-[0.65rem] tracking-[0.22em] uppercase">
                    Navigation
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="relative flex items-center gap-3 px-4 py-3 rounded-xl font-mono text-sm tracking-wide transition-all duration-200 group"
                      style={{
                        color: isActive(link.path) ? "#00dcc8" : "#5a7080",
                        background: isActive(link.path)
                          ? "rgba(0,220,200,0.07)"
                          : "transparent",
                        border: isActive(link.path)
                          ? "1px solid rgba(0,220,200,0.2)"
                          : "1px solid transparent",
                      }}
                    >
                      {/* Timeline dot */}
                      {isActive(link.path) && (
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{
                            background: "#00dcc8",
                            boxShadow: "0 0 6px #00dcc8",
                          }}
                        />
                      )}
                      {/* Step number */}
                      <span
                        className="text-[0.6rem] tracking-widest mr-1"
                        style={{ color: "#5a7080" }}
                      >
                        0{i + 1}
                      </span>
                      {link.name}
                    </Link>
                  ))}

                  {/* Mobile resume button */}
                  <button
                    onClick={() => {
                      setShowResumeDialog(true);
                      setIsOpen(false);
                    }}
                    className="mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-xs tracking-widest uppercase transition-all duration-200"
                    style={{
                      border: "1px solid rgba(0,220,200,0.3)",
                      background: "rgba(0,220,200,0.08)",
                      color: "#00dcc8",
                    }}
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </button>
                </div>

                {/* Terminal decoration — same style as all pages */}
                <div
                  className="absolute bottom-6 left-4 right-4 font-mono text-xs rounded-xl overflow-hidden"
                  style={{
                    background: "rgba(0,0,0,0.6)",
                    border: "1px solid rgba(0,220,200,0.15)",
                  }}
                >
                  {/* Title bar */}
                  <div
                    className="flex items-center gap-1.5 px-3 py-2"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      borderBottom: "1px solid rgba(0,220,200,0.08)",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                  </div>
                  {/* Body */}
                  <div className="p-3 space-y-1">
                    <p className="text-green-400">$ whoami</p>
                    <p className="text-cyan-400">▸ nikhil-marati</p>
                    <p style={{ color: "#5a7080" }}>▸ DevOps Engineer</p>
                    <span className="inline-block w-1.5 h-3 bg-cyan-400 animate-pulse" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* ══════════════════════════════════════════════════════════════════
          Resume Dialog — styled to match the page aesthetic
      ══════════════════════════════════════════════════════════════════ */}
      {showResumeDialog && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(8px)",
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowResumeDialog(false);
          }}
        >
          <div
            className="relative max-w-sm w-full mx-4 rounded-2xl overflow-hidden"
            style={{
              background: "#03060d",
              border: "1px solid rgba(0,220,200,0.2)",
            }}
          >
            {/* Corner accents */}
            <div
              className="absolute top-0 left-0 w-5 h-5"
              style={{
                borderTop: "2px solid rgba(0,220,200,0.5)",
                borderLeft: "2px solid rgba(0,220,200,0.5)",
                borderTopLeftRadius: "0.75rem",
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-5 h-5"
              style={{
                borderBottom: "2px solid rgba(0,220,200,0.5)",
                borderRight: "2px solid rgba(0,220,200,0.5)",
                borderBottomRightRadius: "0.75rem",
              }}
            />

            {/* Dialog header — section-label style */}
            <div
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: "1px solid rgba(0,220,200,0.1)" }}
            >
              <div className="flex items-center gap-3">
                <span className="text-[#5a7080] font-mono text-xs tracking-widest">
                  ↯
                </span>
                <div
                  className="w-12 h-px"
                  style={{ background: "rgba(0,220,200,0.15)" }}
                />
                <span
                  className="font-mono text-[0.65rem] tracking-[0.22em] uppercase"
                  style={{ color: "#00dcc8" }}
                >
                  Resume Options
                </span>
              </div>
              <button
                onClick={() => setShowResumeDialog(false)}
                className="p-1.5 rounded-lg transition-all duration-200"
                style={{ color: "#5a7080" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#00dcc8";
                  e.currentTarget.style.background = "rgba(0,220,200,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#5a7080";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Dialog body */}
            <div className="p-6 space-y-5">
              <p
                className="text-xs font-mono text-center tracking-widest"
                style={{ color: "#5a7080" }}
              >
                Choose how you'd like to access the resume
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* View button */}
                <button
                  onClick={handleView}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-xs tracking-widest uppercase transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.02)",
                    color: "#9ca3af",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,220,200,0.3)";
                    e.currentTarget.style.color = "#00dcc8";
                    e.currentTarget.style.background = "rgba(0,220,200,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.07)";
                    e.currentTarget.style.color = "#9ca3af";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <Eye className="h-4 w-4" />
                  View
                </button>

                {/* Download button */}
                <button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-mono text-xs tracking-widest uppercase transition-all duration-200"
                  style={{
                    border: "1px solid rgba(0,220,200,0.35)",
                    background: "rgba(0,220,200,0.1)",
                    color: "#00dcc8",
                    boxShadow: "0 0 16px rgba(0,220,200,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,220,200,0.18)";
                    e.currentTarget.style.borderColor = "rgba(0,220,200,0.55)";
                    e.currentTarget.style.boxShadow =
                      "0 0 24px rgba(0,220,200,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0,220,200,0.1)";
                    e.currentTarget.style.borderColor = "rgba(0,220,200,0.35)";
                    e.currentTarget.style.boxShadow =
                      "0 0 16px rgba(0,220,200,0.08)";
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>

              {/* Terminal hint */}
              <div
                className="font-mono text-xs rounded-xl overflow-hidden"
                style={{
                  background: "rgba(0,0,0,0.5)",
                  border: "1px solid rgba(0,220,200,0.1)",
                }}
              >
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    borderBottom: "1px solid rgba(0,220,200,0.08)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                  <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                  <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="px-4 py-3 space-y-0.5">
                  <p className="text-green-400">
                    $ cat Nikhil-Marati-Resume.pdf
                  </p>
                  <p style={{ color: "#00dcc8" }}>▸ Ready to serve</p>
                  <span className="inline-block w-1.5 h-3 bg-cyan-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bebas Neue for logo */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
    </>
  );
};

export default Header;