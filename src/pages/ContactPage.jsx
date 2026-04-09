// import React from "react";
// import { Helmet } from "react-helmet";
// import { motion } from "framer-motion";
// import { Mail, Github, Linkedin } from "lucide-react";
// import Header from "../components/Header.jsx";
// import Footer from "../components/Footer.jsx";
// import ContactForm from "../components/ContactForm.jsx";

// const ContactPage = () => {
//   const contactInfo = [
//     {
//       icon: Mail,
//       label: "Email",
//       value: "marati.nikhil9@gmail.com",
//       href: "mailto:marati.nikhil9@gmail.com",
//     },
//     {
//       icon: Github,
//       label: "GitHub",
//       value: "github.com/nikhilmarati",
//       href: "https://github.com",
//     },
//     {
//       icon: Linkedin,
//       label: "LinkedIn",
//       value: "https://www.linkedin.com/in/marati-nikhil9/",
//       href: "https://www.linkedin.com/in/marati-nikhil9/",
//     },
//   ];

//   return (
//     <>
//       <Helmet>
//         <title>Contact - Nikhil Marati</title>
//         <meta
//           name="description"
//           content="Get in touch with Nikhil Marati for DevOps consulting, cloud engineering projects, or collaboration opportunities."
//         />
//       </Helmet>

//       <div className="min-h-screen bg-background text-foreground">
//         <Header />

//         <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <h1
//                 className="text-4xl md:text-5xl font-bold mb-6 text-balance"
//                 style={{ letterSpacing: "-0.02em" }}
//               >
//                 Get in Touch
//               </h1>
//               <p className="text-lg text-muted-foreground mb-16 leading-relaxed max-w-prose">
//                 Interested in collaborating on a project or discussing DevOps
//                 solutions? Send me a message and I'll get back to you as soon as
//                 possible.
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//               <motion.div
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.2 }}
//               >
//                 <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
//                 <ContactForm />
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: 0.3 }}
//                 className="space-y-8"
//               >
//                 <div>
//                   <h2 className="text-2xl font-semibold mb-6">
//                     Contact Information
//                   </h2>
//                   <div className="space-y-6">
//                     {contactInfo.map((info, index) => {
//                       const Icon = info.icon;
//                       return (
//                         <motion.a
//                           key={info.label}
//                           href={info.href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           transition={{
//                             duration: 0.3,
//                             delay: 0.4 + index * 0.1,
//                           }}
//                           className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
//                         >
//                           <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
//                             <Icon className="h-6 w-6" />
//                           </div>
//                           <div>
//                             <p className="text-sm font-medium text-muted-foreground mb-1">
//                               {info.label}
//                             </p>
//                             <p className="text-base font-medium">
//                               {info.value}
//                             </p>
//                           </div>
//                         </motion.a>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 <div className="bg-muted rounded-2xl p-6">
//                   <h3 className="text-lg font-semibold mb-3">Response Time</h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed">
//                     I typically respond to messages within 24-48 hours during
//                     business days. For urgent inquiries, please reach out via
//                     email directly.
//                   </p>
//                 </div>
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

import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Clock, Send } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";

// ── Particle canvas (shared aesthetic) ───────────────────────────────────────
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

    const particles = Array.from({ length: 55 }, () => ({
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

// ── Main component ────────────────────────────────────────────────────────────
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

      <div className="min-h-screen bg-[#020b18] text-foreground">
        <Header />

        {/* ── Hero Banner ── */}
        <section className="relative overflow-hidden py-28">
          <div className="absolute inset-0 bg-[#020b18]" />
          <ParticleCanvas />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(0,200,255,0.10),transparent)]" />
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
                Open to Opportunities
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
                Interested in collaborating on a project or discussing DevOps
                solutions? Send me a message and I'll get back to you shortly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Main content ── */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* ── Contact Form ── */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Section header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <Send className="h-4 w-4" />
                  </div>
                  <h2 className="text-base font-black text-white tracking-wide uppercase font-mono">
                    Send a Message
                  </h2>
                  <div className="flex-1 h-px bg-cyan-500/10" />
                </div>

                {/* Form wrapper with cyber styling */}
                <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/20 transition-all duration-300">
                  <ContactForm />
                </div>
              </motion.div>

              {/* ── Right column ── */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-8"
              >
                {/* Contact Info */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <h2 className="text-base font-black text-white tracking-wide uppercase font-mono">
                      Contact Info
                    </h2>
                    <div className="flex-1 h-px bg-cyan-500/10" />
                  </div>

                  <div className="space-y-3">
                    {contactInfo.map((info, i) => {
                      const Icon = info.icon;
                      return (
                        <motion.a
                          key={info.label}
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300 group"
                        >
                          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-mono text-gray-500 mb-0.5">
                              {info.label}
                            </p>
                            <p className="text-sm font-semibold text-white truncate group-hover:text-cyan-400 transition-colors duration-200">
                              {info.value}
                            </p>
                            <p className="text-xs text-gray-600 mt-0.5">
                              {info.hint}
                            </p>
                          </div>
                          {/* Arrow indicator */}
                          <div className="ml-auto text-gray-600 group-hover:text-cyan-400 transition-colors duration-200 text-lg shrink-0">
                            ↗
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Response time card */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-cyan-500/10"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      <Clock className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-black text-white font-mono uppercase tracking-wide">
                      Response Time
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    I typically respond within{" "}
                    <span className="text-cyan-400 font-semibold">
                      24–48 hours
                    </span>{" "}
                    during business days. For urgent inquiries, reach out via
                    email directly.
                  </p>
                </motion.div>

                {/* Terminal flavor */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-mono text-xs bg-black/50 border border-cyan-500/20 rounded-xl p-4 space-y-1"
                >
                  <p className="text-green-300">
                    $ ping nikhil --message "hello"
                  </p>
                  <p className="text-cyan-400">▸ Packet sent successfully</p>
                  <p className="text-gray-500">▸ Awaiting response...</p>
                  <p className="text-gray-600">▸ ETA: 24–48h</p>
                  <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-pulse" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;