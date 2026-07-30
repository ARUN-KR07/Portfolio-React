import { 
  Terminal, Layers, Smartphone, Database, Globe,
  Shield, Target,
} from 'lucide-react';

export const profileData = {
  name: "ARUN KR",
  email: "arunkrkr12@gmail.com",
  location: "Kochi, Kerala",
  summary: "MCA Graduate & Full Stack Python Developer building scalable web applications using Django, React.js, and modern REST APIs.",
  
  skills: [
    { 
      name: "Python", 
      icon: <Terminal size={24} />, 
      color: "from-emerald-400 to-emerald-600",
      description: "Advanced programming, OOP, Data structures",
    },
    { 
      name: "Django", 
      icon: <Layers size={24} />, 
      color: "from-emerald-500 to-teal-500",
      description: "REST APIs, Authentication, Deployment",  
    },
    { 
      name: "React.js", 
      icon: <Smartphone size={24} />, 
      color: "from-teal-400 to-cyan-500",
      description: "Hooks, Context, Components, Deployment",
    },
    { 
      name: "MySQL", 
      icon: <Database size={24} />, 
      color: "from-emerald-400 to-green-500",
      description: "Complex queries, Optimization, Design",
    },
    { 
      name: "REST APIs", 
      icon: <Globe size={24} />, 
      color: "from-teal-500 to-emerald-400",
      description: "Integration, Documentation, Testing",
    },
    { 
      name: "HTML5", 
      icon: <Globe size={24} />, 
      color: "from-teal-500 to-emerald-400",
      description: "Semantic markup, Accessibility",
    },
    { 
      name: "CSS", 
      icon: <Globe size={24} />, 
      color: "from-teal-500 to-emerald-400",
      description: "Flexbox, Grid, Animations",
    },
    { 
      name: "Tailwind CSS", 
      icon: <Globe size={24} />, 
      color: "from-teal-500 to-emerald-400",
      description: "Utility-first styling, Responsive design",
    },
    { 
      name: "JavaScript", 
      icon: <Globe size={24} />, 
      color: "from-teal-500 to-emerald-400",
      description: "ES6+, Async/Await, DOM manipulation",
    },
    { 
      name: "Postman", 
      icon: <Globe size={24} />, 
      color: "from-teal-500 to-emerald-400",
      description: "API testing, Collection management",
    },
    { 
      name: "Git & GitHub", 
      icon: <Globe size={24} />, 
      color: "from-teal-500 to-emerald-400",
      description: "Version control, Collaboration",
    },
    { 
      name: "Bootstrap", 
      icon: <Globe size={24} />, 
      color: "from-teal-500 to-emerald-400",
      description: "Responsive grid, Components",
    },
    { 
      name: "VS code", 
      icon: <Globe size={24} />, 
      color: "from-teal-500 to-emerald-400",
      description: "Extensions, Debugging, Shortcuts",
    },
    { 
      name: "Figma", 
      icon: <Globe size={24} />, 
      color: "from-teal-500 to-emerald-400",
      description: "UI/UX design, Prototyping",
    },
  ],

  projects: [
    {
      title: "Disaster & Shelter Management System",
      shortDesc: "Emergency response platform",
      desc: "A comprehensive platform connecting disaster victims with nearby shelters. Features real-time tracking, automated resource allocation, and emergency alerts.",
      image: "🏢",
      tech: ["Django", "React", "MySQL", "Maps integration", "WebSockets", "Email and SMS notifications"],
      features: ["Email and SMS notifications", "Real-time tracking", "Resource management", "Alert system", "Admin dashboard"],
      duration: "3 months",
      color: "emerald",
      gradient: "from-emerald-500 via-emerald-400 to-teal-400",
      icon: <Shield size={30} />
    },
    {
      title: "ML Workout Recommendation Engine",
      shortDesc: "AI-powered fitness companion",
      desc: "Smart workout platform that uses machine learning to analyze user data and generate personalized fitness plans based on goals, equipment, and progress.",
      image: "💪",
      tech: ["Python", "Django", "Scikit-learn", "React", "Auth", "machine learning algorithms"],
      features: ["Personalized plans", "Exercise library", "ML predictions", "Equipment selection", "Level selection"],
      duration: "4 months",
      color: "teal",
      gradient: "from-teal-500 via-cyan-400 to-emerald-400",
      icon: <Target size={30} />
    }
  ],

  experience: {
    role: "Full Stack Python Developer Intern",
    company: "OneTeam Solutions",
    location: "Kochi, Kerala",
    type: "Full-time Internship",
    responsibilities: [
      "Developed backend modules using Django",
      "Integrated frontend HTML, CSS, JS with Django templates",
      "Optimized database queries for performance",
      "Debugged and resolved issues in existing codebase",
      "Python scripting for data processing",
      "Learned full stack development and deployment processes"
    ],
    achievements: [],
    technologies: ["Django", "HTML", "MySQL", "CSS", "javascript", "python"]
  },

  education: [
    { 
      degree: "Master of Computer Applications", 
      school: "APJ Abdul Kalam Technological University", 
      year: "2025", 
      side: "left",
      desc: "Specialized in Advanced Web Development & Cloud Computing",
      courses: ["Advanced Web Dev", "Cloud Computing", "ML Fundamentals"]
    },
    { 
      degree: "Bachelor of Computer Applications", 
      school: "Mahatma Gandhi University", 
      year: "2021", 
      side: "right",
      desc: "Focus on Programming Fundamentals & Database Management",
      courses: ["Data Structures", "DBMS", "Computer Networks"]
    },
    { 
      degree: "Higher Secondary Education", 
      school: "SRV School", 
      year: "2018", 
      side: "left",
      desc: "Computer Science with Mathematics"
    },
    { 
      degree: "Secondary Education", 
      school: "MPM School", 
      year: "2016", 
      side: "right",
      desc: "Science & Mathematics Stream"
    }
  ]
};