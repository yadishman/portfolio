import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import gitHubLogo from "./images/gitHub.png";
import gmailLogo from "./images/gmail.png";
import linkedinLogo from "./images/linkedin.png";
import cplusLogo from "./images/c++.png";
import golangLogo from "./images/golang.png";
import javascriptLogo from "./images/javascript.jpg";
import phpLogo from "./images/php.png";
import reactLogo from "./images/react.png";
import pythonLogo from "./images/python.png";
import csharpLogo from './images/c#.png';
import javaLogo from "./images/java.png";
import djangoLogo from "./images/django.png";
import dotnetLogo from "./images/dotnet.png";
import flaskLogo from "./images/flask.png";
import flutterLogo from "./images/flutter.png";
import nodeLogo from "./images/node.png";
import gadaImage1 from "./images/previousWork/gada/gada 1.png";
import gadaImage2 from "./images/previousWork/gada/gada 2.jfif";
import gadaImage3 from "./images/previousWork/gada/gada 3.jfif";
import begaraImage1 from "./images/previousWork/begara/begara1.PNG";
import begaraImage2 from "./images/previousWork/begara/begara2.PNG";
import begaraImage3 from "./images/previousWork/begara/begara3.PNG";
import begaraImage4 from "./images/previousWork/begara/begara4.PNG";
import begaraImage5 from "./images/previousWork/begara/begara5.PNG";
import begaraImage6 from "./images/previousWork/begara/begara6.PNG";
import begaraImage7 from "./images/previousWork/begara/begara7.PNG";
import begaraImage8 from "./images/previousWork/begara/begara8.PNG";
import portfolioImage1 from "./images/previousWork/portfolio/resume1.PNG";
import portfolioImage2 from "./images/previousWork/portfolio/resume2.PNG";
import portfolioImage3 from "./images/previousWork/portfolio/resume3.PNG";
import skillsImage from './images/skills.jpg';
import introImage from './images/software 2.jpg';
import profileImage from './images/profiles.jpg';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  
  const toggleMenu = () => {
    setIsOpen(prevState => !prevState); // Toggle the menu state
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Gada App",
      images: [
        gadaImage1,
        gadaImage2,
        gadaImage3
      ],
      description: "A donation app that allows fundraising for social issues.",
      details: "The Gada App connects individuals raising awareness about social issues with those who want to donate. Built with Flutter for the front end and Django for the back end, it utilizes a MySQL database to support a community of positive change."
    },
    {
      id: 2,
      title: "Begara",
      images: [
        begaraImage1,
        begaraImage2,
        begaraImage3,
        begaraImage4,
        begaraImage5,
        begaraImage6,
        begaraImage7,
        begaraImage8
      ],
      description: "A roommate matching app that allows people to find roommates and provides housing options nearby.",
      details: "Begara is a roommate matching app that uses an AI model developed in Python to connect individuals seeking roommates and housing options nearby. It features live chat functionality through live socket implementation and is built with Flutter for the front end, Node.js for the back end, and a MySQL database."
    },
    // {
    //   id: 3,
    //   title: "Chat App",
    //   images: [
    //     "https://via.placeholder.com/500x300?text=Chat+App+Image+1",
    //     "https://via.placeholder.com/500x300?text=Chat+App+Image+2",
    //     "https://via.placeholder.com/500x300?text=Chat+App+Image+3"
    //   ],
    //   description: "A simple chat application that supports real-time chat, video/audio calls, and file sharing.",
    //   details: "This chat app enables users to communicate via text, voice, and video while sharing small files. Built with React for the front end and Node.js for the back end, it utilizes socket.io and WebRTC to support live chat and video streaming."
    // },
    {
      id: 4,
      title: "Resume Producer",
      images: [
        portfolioImage1,
        portfolioImage2,
        portfolioImage3
      ],
      description: "An application that allows users to print a resume based on pre-existing templates.",
      details: "TemplateWire offers users a variety of templates to create and print professional resumes, birthday cards, and wedding invitations. The platform is developed using React, providing a user-friendly experience for easy customization."
    }
  ];

  const FadeInSection = ({ children }) => {
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing after it's visible
          }
        });
      });

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);

    return (
      <div ref={ref} className="fade-in">
        {children}
      </div>
    );
  };

  useEffect(() => {
    if (selectedProject) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProject.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedProject]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="App">
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="logo">YN</div>
        <div class="hamburger" id="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
        <ul id="nav-list" className={isOpen ? 'show' : ''}>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#previous-work">Previous Work</a></li>
          <li><a href="#about">About Me</a></li>
        </ul>
      </nav>

      <section id="home" className="section home">
        <div className="home-content">
          <div className="home-text">
            <h1 className="section-title">Hi there</h1>
            <p className="section-body">I’m Yared, a Full Stack Developer specializing in creating dynamic web and mobile applications..</p>
            <div className="contact-icons">
              <a href="https://www.linkedin.com/in/yared-namssi-135182316/" target="_blank" rel="noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" />
              </a>
              <a href="https://github.com/yadishman" target="_blank" rel="noreferrer">
                <img src={gitHubLogo} alt="GitHub" />
              </a>
              {/* <a href="mailto:example@gmail.com">
                <img src={gmailLogo} alt="Gmail" />
              </a> */}
            </div>
          </div>
          <div className="home-photo">
            <img src={introImage} alt="Profile" />
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section section">
        <h2 className="skills-title">My Skills</h2>
        <div className="skills-content">
          <div className="skills-text">
            <p className="skills-description">
              As a web and mobile application developer, I have experience working with various programming languages and frameworks to develop robust applications.
            </p>
          </div>
          <div className="skills-image">
            <img src={skillsImage} alt="Developer skills image" />
          </div>
        </div>

        <div className="skills-category">
          <h2 id="skills-title">Languages</h2>
          <div className="skills-container">
            {[
              { logo: javascriptLogo, name: 'JavaScript' },
              { logo: pythonLogo, name: 'Python' },
              { logo: cplusLogo, name: 'C++' },
              { logo: javaLogo, name: 'Java' },
              { logo: golangLogo, name: 'Go' },
              { logo: csharpLogo, name: 'C#' },
              { logo: phpLogo, name: 'PHP' },
            ].map(skill => (
              <div className="skill" key={skill.name}>
                <img src={skill.logo} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h2 id="skills-title">Frameworks</h2>
          <div className="skills-container">
            {[
              { logo: flutterLogo, name: 'Flutter' },
              {logo:reactLogo, name:'React'},
              { logo: nodeLogo, name: 'Node.js' },
              { logo: djangoLogo, name: 'Django' },
              { logo: flaskLogo, name: 'Flask' },
              { logo: dotnetLogo, name: '.NET' },
            ].map(skill => (
              <div className="skill" key={skill.name}>
                <img src={skill.logo} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="previous-work" className="section previous-work">
        <h1 className="section-title">Previous Work</h1>
        <p className="previous-section-description">Here’s a glimpse of some of my past projects! Each one shows off what I can do and how I like to tackle challenges in software development. I’m all about quality and creativity, and I love working with different tech to make things happen.</p>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project" onClick={() => handleProjectClick(project)}>
              <div className="project-image-container">
                <img src={project.images[0]} alt={project.title} className="project-image" />
              </div>
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </section>
      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2 className="card-title">{selectedProject.title}</h2>
            <div className="project-images">
              <img src={selectedProject.images[currentImageIndex]} alt={selectedProject.title} className="popup-image" />
            </div>
            <p className="card-description">{selectedProject.details}</p>
          </div>
        </div>
      )}

      <section id="about" className="section about">
        <h1 className="section-title">About Me</h1>
        <div className="about-content">
          <p className="section-body">
          I am a graduate of Addis Ababa University, where I gained a solid foundation in software engineering.
          With hands-on experience in both back-end and front-end frameworks,
          I have developed a keen ability to create dynamic and user-friendly applications. 
          I am passionate about developing innovative solutions that address real-world challenges, 
          and I thrive on the opportunity to collaborate with others and learn about new technologies. 
          My goal is to continuously enhance my skills and contribute to projects that make a meaningful impact.
          </p>
          <img src={profileImage} alt="Description" className="about-image" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-socials">

          <a href="https://www.linkedin.com/in/yared-namssi-135182316/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://github.com/yadishman" target="_blank" rel="noopener noreferrer">
            <img src={gitHubLogo} alt="GitHub" />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; 2024 Copyright Protected</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
