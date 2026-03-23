import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Cloud, Zap } from "lucide-react";
import { Button } from "../components/ui/button";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Nikhil Marati - DevOps & Cloud Engineer</title>
        <meta
          name="description"
          content="DevOps and Cloud Engineer specializing in infrastructure automation, CI/CD pipelines, and cloud solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-20">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1699100329878-7f28bb780787)",
            }}
          />

          {/* Dark Overlay */}
          <div className="hero-overlay" />

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-32" // Added margin bottom
            >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
                style={{ letterSpacing: "-0.02em" }}
              >
                Nikhil Marati
              </h1>

              <p className="text-xl md:text-2xl font-semibold text-primary mb-4">
                DevOps & Cloud Engineer
              </p>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Building robust infrastructure automation and cloud solutions
                that scale. Transforming deployment pipelines into seamless,
                reliable systems.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/skills">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-98"
                  >
                    View Skills
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 active:scale-98"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Feature Highlights - Increased spacing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-48 md:mt-56 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" // Increased margin top and max width
            >
              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Code2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  Infrastructure as Code
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Terraform, Docker, and modern
                  <br />
                  DevOps practices
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                  <Cloud className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  Cloud Engineering
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Azure DevOps and cloud-native
                  <br />
                  solutions
                </p>
              </div>

              <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-card/50 border border-border/40 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-center">
                  CI/CD Automation
                </h3>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  Jenkins, Azure DevOps, and
                  <br />
                  deployment pipelines
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
