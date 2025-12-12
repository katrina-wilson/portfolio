
export const roles = [
    'software engineer',
    'tech enthusiast',
    'designer',
    'critical thinker',
    'creative',
    'lifelong learner',
    'problem solver',
    'maker',
    'developer',
    'leader',
];

export const skills = [
    { 
        name: "Frontend Development", 
        value: 62, 
        color: "#3F98B1",
        tags: ["Vue", "React", "Tailwind", "Vuetify", "GSAP", "D3.js", "TypeScript", "JavaScript", "Material UI", "Vuex", "Data Visualization", "Pinia", "Redux", "Tauri", "Mobile Development"], 
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
        name: "Backend Development", 
        value: 10, 
        color: "#003C80",
        tags: ["Node.js", "FastAPI", "PostgreSQL", "Pydantic", "REST APIs", "Authentication", "SQLAlchemy", "Alembic", "Knex", "Objection"], 
        level: 'Intermediate',
    },
    { 
        name: "Data Science", 
        value: 8, 
        color: "#011936",
        tags: ["Python", "Pandas", "GeoPandas", "scikit-learn", "Machine Learning", "Hugging Face", "NLP"], 
        level: 'Novice',
    },
];

export const projects = [
    {
        id: 0,
        title: "Portfolio",
        tags: ["Vue", "Tailwind", "GSAP", "Vuetify", "Mobile Development", "Figma", "Accessibility"],
        description:
        "Designed and developed a personal portfolio website using Vue.js, GSAP for animations, Vuetify for base components, and Tailwind for styling to effectively showcase my projects and skills.",
        link: null,
        github: "https://github.com/katrina-wilson/portfolio",
    },
    {
        id: 1,
        title: "Recipe Book",
        tags: ["Vue", "Tailwind", "Mobile Development", "FastAPI", "SQLAlchemy", "Alembic", "Figma", "User Research", "Usability Testing"],
        description:
        "Built a full-stack recipe book application with user authentication, recipe management, and meal planning features. Developed both web and mobile versions for cross-platform accessibility.",
        link: null,
        github: null,
    },
    {
        id: 2,
        title: "Triangle Park Finder",
        tags: ["Pandas", "GeoPandas", "Python", "scikit-learn", "FastAPI", "SQLAlchemy", "Pydantic", "React", "TypeScript", "Figma"],
        description:
        "Full-stack web application that recommends parks in the Triangle area based on user preferences using cosine similarity. Features an interactive front-end and robust back-end to deliver personalized, data-driven suggestions.",
        link: null,
        github: null,
    },
    {
        id: 3,
        title: "Dashboard Analytics",
        tags: ["Vue", "D3.js", "Figma", "Accessibility", "Usability Testing", "Data Visualization"],
        description:
        "Developed an analytics dashboard featuring interactive charts, real-time data updates, and custom visualizations for business metrics.",
        link: null,
        github: null,
    },
];

export const socialLinks = [
    { 
        label: "Email", 
        icon: 'mdi-email',
        href: "mailto:wilson.katrinak@gmail.com" 
    },
    { 
        label: "LinkedIn", 
        icon: 'mdi-linkedin',
        href: "https://www.linkedin.com/in/kkosmides/" 
    },
    { 
        label: "GitHub", 
        icon: 'mdi-github',
        href: "https://github.com/katrina-wilson" 
    }
];