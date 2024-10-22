export  const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Skills',
    href: '#skills',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  
  {
    title: 'Instagram Clone',
    desc: 'A full-featured Instagram clone built using the MERN stack. It includes features like user authentication, image uploading, liking, and commenting, providing a robust social media experience.',
    subdesc: 'Created with the MERN stack (MongoDB, Express, React, Node.js), this project demonstrates proficiency in full-stack development and the ability to build complex, scalable web applications.',
    href: 'https://github.com/soumya99999/Insta', 
    texture: '/textures/project/project1.mp4',
    logo: '/assets/Social-Media.png',
    logoStyle: {
      backgroundColor: '#F56040', // Slightly bright red
      border: '0.2px solid #E4405F', // Border with a deeper red shade
      boxShadow: '0 0 15px 5px rgba(255, 0, 0, 0.6)', // Red glow effect with reduced opacity for softness
    },
    
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'MongoDB',
        path: '/assets/Mongo.png',
      },
      {
        id: 2,
        name: 'Express',
        path: '/assets/express.png',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/Node.png',
      },
    ],
  },
  {
    title: 'E-Commerce Website',
    desc: 'An online shopping platform that offers a seamless user experience for browsing products, adding items to the cart, and completing purchases. Built with HTML, CSS, and JavaScript, it features a responsive design and smooth navigation for users.',
    subdesc: 'Developed using HTML, CSS, and JavaScript, this project highlights core web development skills and emphasizes the importance of a clean, user-friendly interface.',
    href: 'https://github.com/soumya99999/E-Commerce-Website', // Add your GitHub or live demo link
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project1-logo-E-commerce.png',
    logoStyle: {
      backgroundColor: '#F0DB4F',
      border: '0.2px solid #323330',
      boxShadow: '0px 0px 60px 0px #FFDF00A1',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/HTML.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: '/assets/CSS.png',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/js.png',
      },
    ],
  }
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    Laptop: isSmall? 0.015: isMobile? 0.01:0.03,
    LaptopPosition: isMobile? [0.20, -0.33, 3] :[0.27, -0.68, 2.3], 
    LaptopRotation:isMobile?[-1.10, -1.58, -0.96]: [-1.15, -1.58, -1.09],
    CodingDeskScale: isSmall ? [1.8, 2, 1]  : isMobile ? [5, 2.75, 2] :[5, 2.75, 2], 
    CodingDeskPosition: isMobile ? [-0.0, -1.6, 3.1]: [-0.0, -2.5, 2.3],
    GamingChairScale : isSmall? 10 :isMobile ? 3.08: 5.00 ,
    GamingChairPosition: isMobile ? [-0.1, -1, 1] : [-0.2, -2.3, 0],
    reactLogoPosition: isSmall ? [3, 3.5, 0] : isMobile ? [2.3, 0.3, 2.3] : isTablet ? [2.3, 0.3, 2.3] :[2.3, 0.3, 2.3], 
    reactLogoScale: isSmall? 0.02: isMobile? 0.06:0.13,
    reactLogoRotation: isSmall ? [-1.00, -2.50, -0.85] :isMobile? [-1.00, -2.50, -0.85]: [-1.00, -2.50, -0.85],
    ringScale: isSmall ? 0.02 : isMobile ? 0.03 : 0.06,
    ringPosition: isSmall ? [-5, 6, 0] : isMobile ? [-10, 8, 0] : isTablet ? [-12, 8, 0] : [-24, 10, 0], // Adjusted for Rings
    developerRoomScale: isSmall ? 1.2 : isMobile ? 2.6 : 2.72, 
    developerRoomPosition: isMobile ? [0, -0.9, 2.3] : [0, -2.1, 0],
    developerRoomRotation: isMobile ? [0.11, 0, 0] : [0.11, 0, 0],
    HelloPosition : isMobile?[-0.21, -1.01, 2.57] : [-0.21, -1.01, 2.57],
    HelloRotation : isMobile?[-1.61, -0.02, 0.55]: [-1.61, -0.02, 0.55],
    HelloScale : isMobile? 1.5:1.67,
    BookPosition: isSmall? [-0.01, -0.01, 3.17]:isMobile?[-0.02, 0.11, 3.19]:[-0.02, 0.11, 3.19],
    BookRotation: isSmall?[-12.5, 0.3, -0.01]:isMobile?[-0.03, 0.29, -0.04]:[-0.03, 0.29, -0.04],
    BookScale: isSmall? 0.15: isMobile? 0.5: 0.14,
    AboutChairPosition: isSmall? [-0.4, -0.8, 2.2]: isMobile ? [-0.2, -0.74, 2.7]: [-0.2, -0.74, 2.7],
    AboutChairRotation: isSmall? [3.6, 2.3, 2.9]: isMobile? [-1.61, -0.02, 0.55]: [0, 0.33, 0],
    AboutChairScale: isSmall? 1.4: isMobile? 0.01:1.35,
    RingsPosition : isSmall? [-4, 5, 2.3]:isMobile ? [-21.79, -10, 2.3]: [-21.79, -10, 2.3],
    RingsRotation : isSmall? [0, 0, 0]:isMobile? [0, 0, 0]:[0, 0, 0],
    RingsScale : isSmall? 0.01: isMobile? 0.01: 0.03,
    ReactLogoPosition : isSmall ? [0.1, 0.6, 2.3] : isMobile? [2.3, 0.3, 2.3]: [2.3, 0.3, 2.3],
    ReactLogoRotation : isSmall ? [-1.00, -2.50, -0.85] :isMobile? [-1.00, -2.50, -0.85]: [-1.00, -2.50, -0.85],
    ReactLogoScale : isSmall ? 0.05: isMobile? 0.06:0.13,
    JavaPosition: isSmall ? [0.5, 1, 2.3] : isMobile ? [-2.6, 0.1, 2.3]: [-2.6, 0.1, 2.3],
    JavaRotation: isSmall ? [0.11, 0, 0] : isMobile ? [0.11, 0, 0]:[-1.10, -1.75, -1.05],
    JavaScale: isSmall ? 0.05 : isMobile ? 0.03: 0.15,
    TargetPosition:  isSmall? [-0.34,-0.28,3.3] : isMobile ? [2.01,-1.2,2.83]: [2.01,-1.2,2.83],
    TargetScale : isSmall ? 0.1 :isMobile ? 3 : 0.29
  };
};



export default navLinks;