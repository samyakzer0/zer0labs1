export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  url: string;
  previewImage: string;
  aim: string;
  description: string;
  features: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'THE CHAI HOUSE',
    category: 'FRONTEND DEVELOPMENT',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    url: 'https://thechaihouse.vercel.app/',
    previewImage: '/preview/1.png',
    aim: 'Design and develop an intuitive, visually appealing frontend interface for a chai (tea) cafe that provides seamless user experience for browsing menus, customizing orders, and tracking order status in real-time.',
    description: 'The Chai House frontend is a modern, responsive web interface designed for a chai cafe. Built with React and enhanced with smooth animations using Framer Motion, the application provides customers with an engaging platform to browse menu items organized by categories, customize their orders with various preferences like sugar level and milk type, place orders for dine-in or takeaway, and track their order status. The interface also includes an admin dashboard for managing menu items, orders, promotions, and viewing analytics.',
    features: [
      'Interactive menu browsing interface with category-based filtering',
      'Smooth animations and transitions using Framer Motion',
      'Advanced order customization UI (sugar level, milk type, size, toppings)',
      'Real-time order tracking status display',
      'Admin dashboard interface for menu management',
      'Order management interface with status updates',
      'Promotions and special offers display system',
      'Customer feedback form and display',
      'Responsive design optimized for mobile and desktop',
      'Modern UI/UX with Tailwind CSS styling'
    ]
  },
  {
    id: 2,
    title: 'SAAS WEBSITE REDESIGN',
    category: 'FRONTEND DEVELOPMENT',
      tags: ['React', 'TypeScript', 'Framer Motion', 'GSAP', 'Tailwind CSS', 'Vite'],
    url: 'https://tessa-cloud.vercel.app/',
    previewImage: '/preview/5.png',
    aim: 'Design and develop a modern, high-performance marketing website demo for a SaaS/AI enterprise company offering educational and business software solutions. The goal was to create an engaging digital presence that effectively showcases multiple ERP products while maintaining smooth animations and professional aesthetics throughout the user journey.',
    description: 'A sophisticated enterprise marketing website demo for Tessa Cloud, a company specializing in AI-powered educational ERP systems and business automation solutions. The site features a dramatic animated gradient background system with customizable breathing effects, a GSAP-powered staggered menu with layer-based animations, and scroll-triggered Framer Motion animations throughout',
    features: [
     'Smooth menu open/close transitions with layer-based reveal effects',
      'Product showcase sections with icon-based cards and hover transformations',
      'Intelligent navigation handling between routes and hash-based scroll links',
       'Responsive design with mobile-optimized layouts and interactions',
       'Contact cards and form sections with styled components integration',
           'Professional team member presentations with image galleries and detailed bios',
     'Careers page with animated hero section and "We Are Hiring" badge',
      'Mobile-optimized scroll interactions preventing scroll-hijacking',
      'Responsive design with touch-action and overscroll-behavior optimizations',
      'Clean, minimal aesthetic with focus on content and interactivity'
    ]
  },
  

  {
  "id": 3,
  "title": "LAWSETU - LEGAL OS WEBSITE",
  "category": "FRONTEND DEVELOPMENT",
  "tags": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Radix UI"],
  "url": "https://lawsetu.com",
  "previewImage": "/preview/6.png",
  "aim": "Design and develop a modern, conversion-focused marketing website for India's first AI-powered Legal OS. The goal was to create an immersive, interactive experience that effectively demonstrates complex legal tech workflows through familiar WhatsApp-style interfaces and engaging animations.",
  "description": "A sophisticated legal tech marketing website featuring interactive WhatsApp chat simulations, 3D gavel models, and seamless scroll-triggered animations. Built with Next.js and TypeScript, the site showcases LawSetu's capabilities through previews.",
  "features": [
    "Animated WhatsApp-style chat interface with orchestrated message sequences and typing indicators",
    "Three.js powered 3D gavel model with interactive rotations and lighting effects",
    "Framer Motion scroll-triggered animations for section reveals and feature highlights",
    "Component-based architecture using modular sections (Hero, Features, AI Assistant, eCourts)",
    "Responsive mobile-first design optimized for legal professionals on the go",
    "Custom animated gradient backgrounds and smooth transitions between sections",
    "Interactive AI chat interface with suggested prompts and typing simulations",
    "Modern design system with consistent spacing, typography, and color schemes"
  ]
},
  {
    id: 4,
    title: 'NEOBRUTALISM LIBRARY',
    category: 'COMPONENT LIBRARY',
    tags: ['TypeScript', 'React', 'Tailwind CSS'],
    url: 'https://boxes-omega.vercel.app/',
    previewImage: '/preview/3.png',
    aim: 'Develop a comprehensive, type-safe component library following neobrutalism design principles, making it easy for developers to build bold, distinctive user interfaces.',
    description: 'A complete component library embracing the neobrutalism design aesthetic with bold colors, thick borders, and stark contrasts. Built with TypeScript for type safety and fully customizable through Tailwind CSS utilities.',
    features: [
      'Full TypeScript support with comprehensive type definitions',
      'Complete set of UI components (buttons, cards, forms, modals, etc.)',
      'Customizable through Tailwind CSS configuration',
      'Accessible components following WCAG guidelines',
      'Comprehensive documentation with live examples',
      'Tree-shakeable for optimal bundle size'
    ]
  },
  {
    id: 5,
    title: 'INTERACTIVE PORTFOLIO',
    category: 'PERSONAL PORTFOLIO',
    tags: ['React', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
    url: 'https://samyak-ai-portfolio.vercel.app/',
    previewImage: '/preview/4.png',
    aim: 'Build a modern, interactive personal portfolio website featuring dynamic project showcases, animated tech stack displays, and engaging user interactions to create a memorable impression on potential employers and clients.',
    description: 'An interactive portfolio website featuring a minimal yet striking design. The site showcases projects through expandable modal cards with smooth Framer Motion animations, displays technical skills with a custom GSAP-powered infinite scroll component, and presents professional information through an about section with bio, skills metrics, and profile imagery. Built with modern web technologies for optimal performance and user experience.',
    features: [
      'Interactive project cards with expand-to-modal functionality using Framer Motion',
      'Smooth entrance and modal transition animations',
      'Project modals containing detailed information, tech stack, demo links, and GitHub actions',
      'Custom InfiniteScroll component with GSAP and Observer API for tech stack display',
      'Three-column auto-scrolling technology showcase with draggable wheel/touch interactions',
      'About section featuring bio, skills, performance metrics, and profile image',
      'Mobile-optimized scroll interactions preventing scroll-hijacking',
      'Extensible architecture allowing easy project additions through data arrays',
      'Responsive design with touch-action and overscroll-behavior optimizations',
      'Clean, minimal aesthetic with focus on content and interactivity'
    ]
  },

  {
    id: 6,
    title: 'ABHISHEK THAKUR PORTFOLIO',
    category: 'PROFESSIONAL PORTFOLIO',
    tags: ['React', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
    url: 'https://abhishek-trainer.vercel.app/',
    previewImage: '/preview/2.png',
    aim: 'Create a modern, production-ready portfolio website for a Communication Skills Trainer that showcases services, impact metrics, testimonials, and professional credentials while providing seamless contact and lead capture functionality.',
    description: 'A polished portfolio website built for Abhishek Thakur, a Communication Skills Trainer. The site presents his professional identity through an interactive interface featuring motion-based animations, service showcases, animated statistics demonstrating measurable outcomes, and social proof through testimonials. Designed to convert prospective students, corporate clients, and academic institutions with clear CTAs and frictionless contact options.',
    features: [
      'Dynamic hero section with motion-based entrance animations using Framer Motion',
      'Interactive services showcase with ScrollStack presentation on desktop and tap-to-expand modals on mobile',
      'Animated numeric metrics (NumberTicker) displaying measurable impact and outcomes',
      'Testimonial marquee with looped, continuous social proof display',
      'Credentials and professional background section with grid layout',
      'Custom StaggeredMenu navigation with GSAP-powered animations',
      'Smooth scrolling implementation using Lenis library',
      'Responsive design with adaptive layouts for desktop and mobile',
      'Direct lead capture via mailto links and contact CTAs',
      'Sticky back-to-top button for improved navigation UX'
    ]
  },

 
];
