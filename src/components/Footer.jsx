// import React from "react";
// import { Github, Linkedin, Twitter, Mail } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: Github, href: "https://github.com/maratinikhil", label: "GitHub" },
//     { icon: Linkedin, href: "https://www.linkedin.com/in/marati-nikhil9/", label: "LinkedIn" },
//     // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
//     { icon: Mail, href: "mailto:marati.nikhil9@gmail.com", label: "Email" },
//   ];

//   return (
//     <footer className="border-t border-border/40 bg-card/50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex flex-col items-center md:items-start gap-2">
//             <span className="text-lg font-semibold">Nikhil Marati</span>
//             <p className="text-sm text-muted-foreground">
//               DevOps & Cloud Engineer specializing in infrastructure automation
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             {socialLinks.map((social) => {
//               const Icon = social.icon;
//               return (
//                 <a
//                   key={social.label}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={social.label}
//                   className="flex items-center justify-center w-10 h-10 rounded-xl bg-muted text-muted-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground active:scale-95"
//                 >
//                   <Icon className="h-5 w-5" />
//                 </a>
//               );
//             })}
//           </div>
//         </div>

//         <div className="mt-8 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
//           <p>&copy; {currentYear} Nikhil Marati. All rights reserved.</p>
//           <div className="flex items-center gap-6">
//             <a
//               href="#"
//               className="transition-colors duration-200 hover:text-foreground"
//             >
//               Privacy Policy
//             </a>
//             <a
//               href="#"
//               className="transition-colors duration-200 hover:text-foreground"
//             >
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Terminal } from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:marati.nikhil9@gmail.com",
      label: "Email",
    },
    {
      icon: Github,
      href: "https://github.com/nikhilmarati",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/marati-nikhil9/",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-[#020b18] border-t border-cyan-500/15">
      {/* Top glow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* ── Brand Column ── */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block text-xl font-black font-mono tracking-tight text-white hover:text-cyan-400 transition-colors duration-200"
              style={{ letterSpacing: "-0.02em" }}
            >
              Nikhil Marati
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              DevOps Engineer crafting scalable cloud infrastructure and
              automating the path from code to production.
            </p>

            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Open to Opportunities
            </div>
          </div>

          {/* ── Navigation Column ── */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h4 className="text-xs font-black font-mono text-white uppercase tracking-widest">
                Navigation
              </h4>
              <div className="flex-1 h-px bg-cyan-500/10" />
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/30 group-hover:bg-cyan-400 transition-colors duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Connect Column ── */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h4 className="text-xs font-black font-mono text-white uppercase tracking-widest">
                Connect
              </h4>
              <div className="flex-1 h-px bg-cyan-500/10" />
            </div>

            <div className="space-y-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/[0.05] bg-white/[0.02] text-gray-500 hover:text-cyan-400 hover:border-cyan-500/25 hover:bg-cyan-500/5 transition-all duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400/60 group-hover:text-cyan-400 group-hover:bg-cyan-500/20 transition-all duration-200">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-mono">{label}</span>
                  <span className="ml-auto text-xs text-gray-700 group-hover:text-cyan-500 transition-colors duration-200">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 pt-6 border-t border-cyan-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Terminal line */}
          <div className="flex items-center gap-2 font-mono text-xs text-gray-600">
            <Terminal className="h-3.5 w-3.5 text-cyan-500/40" />
            <span className="text-green-400/60">$</span>
            <span>built with React & TailwindCSS</span>
            <span className="inline-block w-1.5 h-3 bg-cyan-400/50 animate-pulse ml-1" />
          </div>

          <p className="flex items-center gap-1.5 text-xs font-mono text-gray-600">
            <span className="text-cyan-500/50">©</span>
            <span>{new Date().getFullYear()}</span>
            <span className="text-cyan-400/70 font-semibold">
              Nikhil Marati
            </span>
            <span className="text-cyan-500/30">·</span>
            <span className="text-gray-500">DevOps Engineer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;