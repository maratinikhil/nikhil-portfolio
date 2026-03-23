import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { CheckCircle2, Briefcase } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const AboutPage = () => {
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
      period: "October 2024 - Present",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - Nikhil Marati</title>
        <meta
          name="description"
          content="Learn about Nikhil Marati's expertise in DevOps, cloud engineering, and infrastructure automation."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1
                className="text-4xl md:text-5xl font-bold mb-16 text-balance"
                style={{ letterSpacing: "-0.02em" }}
              >
                About Me
              </h1>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1667984390553-7f439e6ae401"
                  alt="DevOps engineer working on infrastructure automation"
                  className="w-full h-auto rounded-2xl shadow-2xl shadow-primary/10"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-6"
              >
                <h2
                  className="text-2xl md:text-3xl font-semibold text-balance"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  DevOps & Cloud Engineer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in building and maintaining robust infrastructure
                  automation systems that enable teams to deploy with
                  confidence. My expertise spans cloud engineering, CI/CD
                  pipeline optimization, and infrastructure as code.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With a focus on reliability and scalability, I help
                  organizations transform their deployment processes into
                  seamless, automated workflows. From containerization to
                  cloud-native architectures, I bring modern DevOps practices to
                  every project.
                </p>
              </motion.div>
            </div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-20"
            >
              <h2
                className="text-2xl md:text-3xl font-semibold mb-8 text-balance"
                style={{ letterSpacing: "-0.02em" }}
              >
                Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground mt-1 md:mt-0">
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                            {exp.title}
                          </h3>
                          <p className="text-lg text-muted-foreground font-medium mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold whitespace-nowrap self-start md:self-auto border border-secondary/20">
                        {exp.period}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Competencies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-card rounded-2xl p-8 md:p-12 border border-border"
            >
              <h2
                className="text-2xl md:text-3xl font-semibold mb-8 text-balance"
                style={{ letterSpacing: "-0.02em" }}
              >
                Key Competencies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base leading-relaxed">
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
    </>
  );
};

export default AboutPage;