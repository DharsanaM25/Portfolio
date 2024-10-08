import React from 'react';
import './Projects.css'; // Add styles for the page

const projects = [
  { 
    title: 'Apple Website Clone', 
    description: 'A responsive front-end replica of the Apple homepage, showcasing modern UI/UX design with smooth animations, interactive elements, and a pixel-perfect layout. Built using HTML, CSS, and JavaScript.', 
    imageUrl: 'apple_web.png',  // Update with your actual image paths
    link: 'http://127.0.0.1:3001/apple/index.html',
    githubLink: 'https://github.com/DharsanaM25/Apple_clone' // GitHub link
  },
  { 
    title: 'E-Learning Website UI', 
    description: 'A user-friendly platform designed to provide online courses with interactive lessons, quizzes, and progress tracking. Built using modern web technologies for an intuitive learning experience across all devices.', 
    imageUrl: 'E-learning.png',
    link: 'http://127.0.0.1:3001/E-Learning/index.html',
    githubLink: 'https://github.com/roshan9419/LearnEd_E-learning_Website' // GitHub link
  },
  { 
    title: 'ChatApp Using Blockchain', 
    description: 'A decentralized chat application that ensures secure and private communication by leveraging blockchain technology. Designed to provide encrypted messaging with user identity verification via blockchain.', 
    imageUrl: 'chatapp.png',
    link: 'file:///C:/Users/dhars/OneDrive/Documents/project/BlockChain-ChatApp-main/BlockChain-ChatApp-main/index.html',
    githubLink: 'https://github.com/piyush-eon/mern-chat-app' // GitHub link
  },
  { 
    title: 'Four Wheeler Accessories', 
    description: 'A specialized four-wheeler accessories shop offering a wide range of premium products designed to enhance vehicle performance and aesthetics. Our shop is committed to delivering quality and customer satisfaction through innovative solutions for car enthusiasts.',
    imageUrl: 'Four_wheeler.png',
    link: 'file:///C:/Users/dhars/OneDrive/Desktop/Internship/webservice-starter_Free30-09-2020_1739134060/starter/index.html',
    githubLink: 'https://github.com/DharsanaM25/Four_Wheeler-Accessories' // GitHub link
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-box" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" /> {/* Image */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="button-container">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="project-button">View <br />Project</button>
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button className="github-button">View <br />on GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
