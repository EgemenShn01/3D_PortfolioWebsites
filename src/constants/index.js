import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    alone,
    git,
    figma,
    docker,
    Metro,
    corporate,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    refine,
    threejs,
    // metro,
    ibb,
    hatbilgi,
    foodordering,
    instagram,
    lingkedin,
    whatsapp,
    truyemek
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "about",
    },
     {
      id: "experience",
      title: "experience",
    },
    
    {
      id: "work",
      title: "work",
    },
  
    {
      id: "contact",
      title: "contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Metro Istanbul Headquarters",
      icon: Metro,
      iconBg: "#383E56",
      date: "September 2021 - June 2022",
      points: [
        "Built responsive web pages using HTML, CSS, JavaScript, and ASP.NET.",
      ],
    },
    {
      title: "Front-End Developer Intern",
      company_name: "IBB IT Department",
      icon: ibb,
      iconBg: "#383E56",
      date: "June 2023 - September 2023",
      points: [
        "Developed scalable features using React.js, Next.js, and Vite.",
        "Focused on fast build times and hot-reloading.",
        "Ensured responsive UI with Tailwind CSS.",
      ],
    },
    {
      title: "Front-End Developer Intern",
      company_name: "Alone Software Teknoloji",
      icon: alone,
      iconBg: "#383E56",
      date: "January 2024 - July 2024",
      points: [
        "Built responsive web applications using React.js and Next.js.",
        "Leveraged SSR and SSG features of Next.js for performance and SEO.",
        "Wrote reusable, strongly-typed components with TypeScript.",
        "Applied Context API and Redux Toolkit for state management.",
        "Designed UIs with Tailwind CSS and SCSS.",
        "Deployed apps using Vercel and AWS.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "TurreYemek",
      icon: truyemek,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Developed mobile applications using React Native, focusing on performance and usability.",
        "Managed state effectively with Redux and optimized component rendering.",
        "Integrated RESTful APIs using Axios for secure client-server communication.",
        "Designed CRM dashboards for admin and customer panels using Vue.js.",
        "Created dynamic data visualizations with ApexCharts for business analytics.",
        "Participated in Agile sprints and team code reviews.",
      ],
    },
  ];
  
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Istanbul Lıne Information",
      description:
        "You will be able to see the line and time information of the vehicles in Istanbul (Metro-Metrobus-Ferry-Tram-Bus-Marmaray) on the map.",
      tags: [
     
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "JSON",
          color: "green-text-gradient",
        },
        {
          name: "geojson",
          color: "pink-text-gradient",
        },
      ],
      image: hatbilgi,
      source_code_link: "https://github.com/EgemenShn01",
    },
    {
      name: "Food Ordering",
      description:
        "This website allows you to order food quickly and easily. You can easily navigate through the menu and customize your preferences with its user-friendly interface.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "mongoDb",
          color: "blue-text-gradient",
        },
      ],
      image: foodordering,
      source_code_link: "https://github.com/EgemenShn01",
    },
    {
      name: "Refine Clone Websites",
      description:
        "I developed refine.com using React, Vite, and Tailwind CSS. This project is a clone website that incorporates multiple libraries for its functionality and design.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: refine,
      source_code_link: "https://github.com/EgemenShn01",
    },
     {
      name: "Corporate Company Websites",
      description:
        "This corporate website project is written in PHP and utilizes the PHPMailer library for email functionality. It is developed to provide customized solutions for businesses.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "ajax",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
      ],
      image: corporate,
      source_code_link: "https://github.com/EgemenShn01",
    },
  ];
  const social = [
    {
      name: "instagram",
      image: instagram,
      link: "https://www.instagram.com/egemenshnq"
    },
    {
      name: "lingkedin",
      image: lingkedin,
      link:"https://www.linkedin.com/in/egemen-sahin-966359263"
    },
    {
      name: "whatsapp",
      image: whatsapp,
      link:"https://wa.me/05309402523"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects  ,social};