import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "marati.nikhil9@gmail.com",
      href: "mailto:marati.nikhil9@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/nikhilmarati",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/marati-nikhil9/",
      href: "https://www.linkedin.com/in/marati-nikhil9/",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Nikhil Marati</title>
        <meta
          name="description"
          content="Get in touch with Nikhil Marati for DevOps consulting, cloud engineering projects, or collaboration opportunities."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 text-balance"
                style={{ letterSpacing: "-0.02em" }}
              >
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground mb-16 leading-relaxed max-w-prose">
                Interested in collaborating on a project or discussing DevOps
                solutions? Send me a message and I'll get back to you as soon as
                possible.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <motion.a
                          key={info.label}
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.4 + index * 0.1,
                          }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">
                              {info.label}
                            </p>
                            <p className="text-base font-medium">
                              {info.value}
                            </p>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-muted rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-3">Response Time</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I typically respond to messages within 24-48 hours during
                    business days. For urgent inquiries, please reach out via
                    email directly.
                  </p>
                </div>
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
