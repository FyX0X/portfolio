import type { datetimeRegex } from "astro:schema";

export const siteConfig = {
  name: "Martin Ergo",
  title: "Engineering Student",
  description: "Portfolio website of Martin Ergo",
  accentColor: "#1d4ed8",
  social: {
    email: "martinergo06@gmail.com",
    linkedin: "https://www.linkedin.com/in/martin-ergo-974661299/",
    //twitter: "https://x.com/username",
    github: "https://github.com/FyX0X",
  },
  aboutMe:
    "I am an engineering student with a strong interest in applied mathematics, physics, and computer science. I enjoy building projects that combine theory with practice, from game engines and simulations to machine learning and secure networking. Passionate about problem solving, I’m always looking to learn new technologies and apply them to challenging projects.",

  skills: ["C++", "Python", "C#", "OpenGL", "Git", "CMake", "Numpy"],
  projects: [
    {
      name: "LittleEngine",
      description:
        "A lightweight, modular C++ game engine focused on 2D rendering, input, audio, and a simple UI layer — with interchangeable platform backends (GLFW or SDL) and a modern OpenGL renderer.",
      link: "https://github.com/FyX0X/LittleEngine-Template",
      skills: ["C++", "OpenGL", "CMake"],
      image: "./assets/images/littleengine.png",
    },
    {
      name: "GeneVault",
      description:
        "A Python-based software solution for encoding, encrypting, and storing data in DNA sequences. ",
      link: "https://github.com/FyX0X/GeneVault",
      skills: ["Python", "AES256", "TCP/IP networking"],
      image: "./assets/images/genevault.png",
    },
    {
      name: "RaceCar AI",
      description:
        "This project implements a self-driving car simulation using the NEAT (NeuroEvolution of Augmenting Topologies) algorithm.",
      link: "https://github.com/FyX0X/RaceCar_AI",
      skills: ["Python", "Machine Learning", "NEAT"],
      image: "./assets/images/racecar_ai.png",
    },
    {
      name: "MazeProject",
      description:
        "MazeProject is a Windows Forms application for generating, visualizing, solving, and saving mazes.",
      link: "https://github.com/FyX0X/MazeProject",
      skills: ["C#", ".NET", "Algorithms"],
      image: "./assets/images/mazeproject.png",
    },
  ],
  experience: [
    {
      company: "Tremplin - UCLouvain",
      title: "Tutor for Engineering Entrance Prep",
      dateRange: "April 2025 - Present",
      bullets: [
        "Tutored high school students preparing for the Engineering entrance exam at UCLouvain.",
        "Explained key concepts in math and guided students through practice problems."
      ],
    },
    {
      company: "Self Employed",
      title: "Private Tutor",
      dateRange: "Dec 2024 - Present",
      bullets: [
        "Provide personalized tutoring in Math, Physics, Chemistry and Biology for high school and early university students.",
        "Adapt teaching methods to each student’s learning pace and goals."
      ],
    },
  ],
  education: [
    {
      school: "Catholic University of Louvain",
      //logo: require("./assets/images/uclouvainLogo.png"),
      degree: "Bachelor of Engineering (minor in Applied Mathematics)",
      dataRange: "September 2024 - Present (expected June 2027)",
      achievements: [
        "Coursework includes numerical analysis, mathematics, and physics",
        "Focusing on applied mathematics, numerical methods, and their applications in engineering and scientific computing."
      ]
    },
    {
      school: "Catholic University of Louvain",
      //logo: require("./assets/images/uclouvainLogo.png"),
      degree: "Bachelor of Science in Physics",
      dataRange: "September 2025 - Present (expected June 2027)",
      achievements: [
        "Studying fundamental physics and mathematical methods with applications in modeling and simulation.",
        "Core topics: classical mechanics, electromagnetism, and quantum physics"
      ]
    },
  ],
    achievements: [
    {
      title: "European Olympiad of Experimental Science",
      year: "2023",
      description: "Team awarded a silver medal representing Belgium."
    },
    {
      title: "European Physics Olympiad",
      year: "2024",
      description: "Participated in the European Physics Olympiad."
    }
  ],
};
