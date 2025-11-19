
export const roles = [
    'software engineer',
    'tech enthusiast',
    'designer',
    'creative',
    'lifelong learner',
    'problem solver',
];

export const skills = [
    { 
        name: "Front End Development", 
        value: 62, 
        color: "#5DB7DE",
        tags: ["Vue", "React", "Tailwind", "GSAP", "D3.js", "Typescript", "JavaScript", "Data Visualization", "Vuex", "Pinia", "Redux", "Tauri"], 
        level: 'Expert',
    },
    { 
        name: "UI/UX Design", 
        value: 20, 
        color: "#197196",
        tags: ["Figma", "User Research", "Prototyping", "Wireframing", "Usability Testing", "Accessibility"], 
        level: 'Advanced',
    },
    { 
        name: "Back End Development", 
        value: 10, 
        color: "#003C80",
        tags: ["Node.js", "FastAPI", "PostgreSQL", "REST APIs", "Authentication"], 
        level: 'Intermediate',
    },
    { 
        name: "Data Science", 
        value: 8, 
        color: "#011936",
        tags: ["Python", "Pandas", "Machine Learning"], 
        level: 'Novice',
    },
];

export const projects = [
    {
        id: 0,
        title: "Portfolio",
        subtitle: "A personal portfolio website to showcase projects and skills",
        tags: ["Vue", "GSAP", "Tailwind"],
        description:
        "Designed and developed a personal portfolio website using Vue.js, GSAP for animations, and Tailwind CSS for styling to effectively showcase my projects and skills.",
        link: "#",
        gitlab: "#",
    },
    {
        id: 1,
        title: "Recipe Book",
        subtitle: "Modern recipe book web application and mobile app",
        tags: ["Vue", "FastAPI", "Tailwind", "Mobile Development"],
        description:
        "Built a full-stack recipe book application with user authentication, recipe management, and meal planning features. Developed both web and mobile versions for cross-platform accessibility.",
        link: null,
        gitlab: null,
    },
    {
        id: 2,
        title: "Story Rewriter System",
        subtitle: "Component library and design tokens for enterprise use",
        tags: ["Hugging Face", "Python", "NLP", "APIs"],
        description:
        "Created an AI-powered story rewriting system that leverages NLP models to assist writers in enhancing their narratives through suggestions and automated edits.",
        link: null,
        gitlab: null,
    },
    {
        id: 3,
        title: "Dashboard Analytics",
        subtitle: "Data visualization dashboard with real-time updates",
        tags: ["Vue", "D3.js"],
        description:
        "Developed an analytics dashboard featuring interactive charts, real-time data updates, and custom visualizations for business metrics.",
        link: null,
        gitlab: null,
    },

];