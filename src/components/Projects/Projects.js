import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "./portfolio.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "./UrlShortner.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Imbalanced Database Balancer"
              description="Developed a user-friendly web application to tackle class imbalance in ML datasets using techniques like SMOTE, ADASYN, and class weight tuning. Integrated bias mitigation, evaluation metrics, and performance visualization. Tech stack: Python, NumPy, Pandas, Scikit-Learn, Imbalanced-learn, Google Colab."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Url Shortner"
              description="Built a modern URL shortener using cutting-edge technologies like Next.js, Redis, and TailwindCSS. The platform offers fast and efficient URL shortening with a sleek, responsive design and seamless user experience."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Portfolio"
              description="A  responsive portfolio website using React, showcasing my projects, skills, and professional journey. Features include dynamic routing, smooth animations, and an interactive user interface for an engaging user experience"
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
