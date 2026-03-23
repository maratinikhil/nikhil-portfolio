import React from "react";
import { Helmet } from "react-helmet";
import {
  GitBranch,
  Server,
  Container,
  Workflow,
  Shield,
  Package,
} from "lucide-react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import SkillCategory from "../components/SkillCategory.jsx";
import SkillCard from "../components/SkillCard.jsx";

const SkillsPage = () => {
  const skills = {
    versionControl: [
      {
        icon: GitBranch,
        name: "Git",
        description:
          "Advanced version control, branching strategies, and collaborative workflows for distributed teams.",
      },
    ],
    cloud: [
      {
        icon: Server,
        name: "AWS",
        description:
          "Cloud infrastructure management, EC2, S3, VPC, IAM, and cloud architecture best practices.",
      },
    ],
    infrastructure: [
      {
        icon: Server,
        name: "Terraform",
        description:
          "Infrastructure as Code for provisioning and managing cloud resources declaratively.",
      },
    ],
    containerization: [
      {
        icon: Container,
        name: "Docker",
        description:
          "Containerization, image optimization, and orchestration for scalable deployments.",
      },
    ],
    operatingSystems: [
      {
        icon: Server,
        name: "Ubuntu",
        description:
          "Debian-based Linux distribution for development and production environments.",
      },
      {
        icon: Server,
        name: "Linux",
        description:
          "System administration, shell scripting, and server management across various distributions.",
      },
      {
        icon: Server,
        name: "Amazon Linux",
        description:
          "Optimized Linux distribution for AWS EC2 instances with enhanced performance and security.",
      },
      {
        icon: Server,
        name: "Windows",
        description:
          "Windows Server and desktop environments for cross-platform development and deployment.",
      },
    ],
    cicd: [
      {
        icon: Workflow,
        name: "Jenkins",
        description:
          "Automated build pipelines, continuous integration, and deployment automation.",
      },
      {
        icon: Workflow,
        name: "Azure DevOps",
        description:
          "End-to-end DevOps platform for planning, development, and deployment on Azure.",
      },
      {
        icon: Workflow,
        name: "GitHub Actions",
        description:
          "Automated CI/CD workflows directly in GitHub repositories for streamlined development.",
      },
    ],
    quality: [
      {
        icon: Shield,
        name: "SonarCloud",
        description:
          "Code quality analysis, security scanning, and technical debt management.",
      },
      {
        icon: Shield,
        name: "Trivy",
        description:
          "Comprehensive vulnerability scanner for containers, filesystems, and IaC security testing.",
      },
    ],
    artifacts: [
      {
        icon: Package,
        name: "JFrog",
        description:
          "Artifact repository management and binary distribution for enterprise environments.",
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Skills - Nikhil Marati</title>
        <meta
          name="description"
          content="Technical skills and expertise in DevOps, cloud engineering, CI/CD, and infrastructure automation."
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-5xl mx-auto">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 text-balance"
              style={{ letterSpacing: "-0.02em" }}
            >
              Technical Skills
            </h1>
            <p className="text-lg text-muted-foreground mb-16 leading-relaxed max-w-prose">
              A comprehensive toolkit for building, deploying, and maintaining
              modern infrastructure and cloud-native applications.
            </p>

            <SkillCategory title="Version Control">
              {skills.versionControl.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </SkillCategory>

            <SkillCategory title="Cloud">
              {skills.cloud.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </SkillCategory>

            <SkillCategory title="Infrastructure as Code">
              {skills.infrastructure.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </SkillCategory>

            <SkillCategory title="Containerization">
              {skills.containerization.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </SkillCategory>

            <SkillCategory title="Operating Systems">
              {skills.operatingSystems.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </SkillCategory>

            <SkillCategory title="CI/CD">
              {skills.cicd.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </SkillCategory>

            <SkillCategory title="Code Quality">
              {skills.quality.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </SkillCategory>

            <SkillCategory title="Artifact Management">
              {skills.artifacts.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} delay={index * 0.1} />
              ))}
            </SkillCategory>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SkillsPage;
