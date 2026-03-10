export const portfolioData = {
  name: "Captain Fulminyx",
  title: "Full Stack Developer",
  subtitle: "Building elegant solutions to complex problems",
  bio: "I'm a passionate developer who loves crafting beautiful, performant web applications. With expertise in modern frontend and backend technologies, I turn ideas into reality.",
  email: "yourname@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",

  about: {
    description: `I'm a dedicated software developer with a passion for creating impactful digital experiences. 
    My journey began with a curiosity about how things work on the web, and has evolved into a full-time pursuit 
    of crafting applications that are both functional and beautiful.`,
    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "Your University",
        year: "2020 – 2024",
        description: "Focused on algorithms, data structures, and software engineering principles."
      }
    ],
    experience: [
      {
        role: "Frontend Developer Intern",
        company: "Tech Company",
        year: "2023",
        description: "Built responsive UI components and improved web performance."
      }
    ]
  },

  projects: [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      description: "A real-time analytics platform with ML-driven insights, interactive charts, and automated reporting capabilities.",
      tags: ["React", "Python", "TensorFlow", "D3.js"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.vercel.app",
      featured: true,
      color: "#6366f1"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tags: ["Vue.js", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com/yourusername/project2",
      live: "https://project2.vercel.app",
      featured: true,
      color: "#8b5cf6"
    },
    {
      id: 3,
      title: "Real-Time Chat Application",
      description: "WebSocket-based chat app with end-to-end encryption, file sharing, and video call support.",
      tags: ["Socket.io", "React", "MongoDB", "WebRTC"],
      github: "https://github.com/yourusername/project3",
      live: "https://project3.vercel.app",
      featured: false,
      color: "#06b6d4"
    },
    {
      id: 4,
      title: "DevOps Automation Suite",
      description: "CI/CD pipeline automation tool with Docker integration, monitoring, and one-click deployments.",
      tags: ["Python", "Docker", "GitHub Actions", "AWS"],
      github: "https://github.com/yourusername/project4",
      live: "",
      featured: false,
      color: "#10b981"
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "Java", level: 70 },
      { name: "C++", level: 65 }
    ],
    frontend: [
      { name: "Vue.js", level: 88 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 92 }
    ],
    backend: [
      { name: "Node.js", level: 82 },
      { name: "Flask", level: 85 },
      { name: "FastAPI", level: 78 },
      { name: "PostgreSQL", level: 75 }
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Linux", level: 80 }
    ]
  }
}
