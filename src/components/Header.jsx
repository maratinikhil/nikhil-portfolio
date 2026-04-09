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
//     // Open PDF in new tab for viewing
//     window.open(resumeFile, "_blank");
//     setShowResumeDialog(false);
//   };

//   const handleDownload = () => {
//     // Create download link
//     const link = document.createElement("a");
//     link.href = resumeFile;
//     link.download = "Nikhil-Marati-Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     setShowResumeDialog(false);
//   };

//   const handleResumeClick = () => {
//     setShowResumeDialog(true);
//   };

//   return (
//     <>
//       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//         <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between">
//             {/* Logo */}
//             <Link
//               to="/"
//               className="text-xl font-bold tracking-tight transition-colors duration-200 hover:text-primary"
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
//                   className={`relative text-sm font-medium transition-colors duration-200 ${
//                     isActive(link.path)
//                       ? "text-primary"
//                       : "text-muted-foreground hover:text-foreground"
//                   }`}
//                 >
//                   {link.name}
//                   {isActive(link.path) && (
//                     <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary" />
//                   )}
//                 </Link>
//               ))}
//               <Button
//                 onClick={handleResumeClick}
//                 variant="outline"
//                 size="sm"
//                 className="ml-2 gap-2"
//               >
//                 <Download className="h-4 w-4" />
//                 Resume
//               </Button>
//             </div>

//             {/* Mobile Navigation */}
//             <Sheet open={isOpen} onOpenChange={setIsOpen}>
//               <SheetTrigger asChild className="md:hidden">
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-5 w-5" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="w-[280px] sm:w-[320px]">
//                 <div className="flex flex-col gap-6 mt-8">
//                   {navLinks.map((link) => (
//                     <Link
//                       key={link.path}
//                       to={link.path}
//                       onClick={() => setIsOpen(false)}
//                       className={`text-lg font-medium transition-colors duration-200 ${
//                         isActive(link.path)
//                           ? "text-primary"
//                           : "text-muted-foreground hover:text-foreground"
//                       }`}
//                     >
//                       {link.name}
//                     </Link>
//                   ))}
//                   <Button
//                     onClick={() => {
//                       handleResumeClick();
//                       setIsOpen(false);
//                     }}
//                     variant="outline"
//                     className="gap-2 mt-4"
//                   >
//                     <Download className="h-4 w-4" />
//                     Resume
//                   </Button>
//                 </div>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </nav>
//       </header>

//       {/* Resume Dialog Modal */}
//       {showResumeDialog && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
//           <div className="bg-background rounded-lg shadow-xl max-w-md w-full mx-4 animate-in zoom-in-95 duration-200">
//             {/* Modal Header */}
//             <div className="flex items-center justify-between p-6 border-b border-border">
//               <h3 className="text-lg font-semibold">Resume Options</h3>
//               <button
//                 onClick={() => setShowResumeDialog(false)}
//                 className="text-muted-foreground hover:text-foreground transition-colors rounded-full p-1 hover:bg-accent"
//                 aria-label="Close dialog"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="p-6 space-y-4">
//               <p className="text-muted-foreground text-center">
//                 Choose how you'd like to access the resume
//               </p>
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <Button
//                   onClick={handleView}
//                   variant="outline"
//                   className="flex-1 gap-2 py-6 text-base"
//                 >
//                   <Eye className="h-5 w-5" />
//                   View in Browser
//                 </Button>
//                 <Button
//                   onClick={handleDownload}
//                   variant="default"
//                   className="flex-1 gap-2 py-6 text-base"
//                 >
//                   <Download className="h-5 w-5" />
//                   Download
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Download, Eye, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import resumeFile from "../assets/resume.pdf";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showResumeDialog, setShowResumeDialog] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

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
      <header className="sticky top-0 z-50 w-full border-b border-cyan-500/15 bg-[#020b18]/95 backdrop-blur supports-[backdrop-filter]:bg-[#020b18]/80">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-xl font-black tracking-tight text-white transition-colors duration-200 hover:text-cyan-400 font-mono"
              style={{ letterSpacing: "-0.02em" }}
            >
              Nikhil Marati
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-mono font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-cyan-400"
                      : "text-gray-500 hover:text-gray-200"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-cyan-400/80" />
                  )}
                </Link>
              ))}

              {/* Resume Button */}
              <button
                onClick={() => setShowResumeDialog(true)}
                className="ml-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono font-medium hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200"
              >
                <Download className="h-4 w-4" />
                Resume
              </button>
            </div>

            {/* Mobile Hamburger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button className="p-2 rounded-lg border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 hover:bg-cyan-500/15 transition-all duration-200">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[280px] sm:w-[320px] bg-[#020b18] border-l border-cyan-500/20"
              >
                {/* Mobile menu header */}
                <div className="flex items-center gap-2 mb-8 mt-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono text-cyan-400/70 uppercase tracking-widest">
                    Navigation
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl font-mono font-medium text-sm transition-all duration-200 ${
                        isActive(link.path)
                          ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/20"
                          : "text-gray-500 hover:text-gray-200 hover:bg-white/[0.04] border border-transparent"
                      }`}
                    >
                      {isActive(link.path) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      )}
                      {link.name}
                    </Link>
                  ))}

                  <button
                    onClick={() => {
                      setShowResumeDialog(true);
                      setIsOpen(false);
                    }}
                    className="mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono font-medium hover:bg-cyan-500/20 transition-all duration-200"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </button>
                </div>

                {/* Terminal decoration */}
                <div className="absolute bottom-6 left-4 right-4 font-mono text-xs bg-black/40 border border-cyan-500/10 rounded-xl p-3 space-y-1">
                  <p className="text-green-300">$ whoami</p>
                  <p className="text-cyan-400">▸ nikhil-marati</p>
                  <p className="text-gray-600">▸ DevOps Engineer</p>
                  <span className="inline-block w-1.5 h-3 bg-cyan-400 animate-pulse" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* Resume Dialog */}
      {showResumeDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#020b18] border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/5 max-w-md w-full mx-4">
            {/* Dialog Header */}
            <div className="flex items-center justify-between p-6 border-b border-cyan-500/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Download className="h-4 w-4" />
                </div>
                <h3 className="text-base font-black text-white font-mono uppercase tracking-wide">
                  Resume Options
                </h3>
              </div>
              <button
                onClick={() => setShowResumeDialog(false)}
                className="p-1.5 rounded-lg text-gray-600 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Dialog Body */}
            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-500 font-mono text-center">
                Choose how you'd like to access the resume
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleView}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-300 text-sm font-mono font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-200"
                >
                  <Eye className="h-4 w-4" />
                  View in Browser
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-mono font-medium hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;