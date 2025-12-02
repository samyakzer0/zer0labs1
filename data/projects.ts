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
    url: '#',
    previewImage: '#',
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
    title: 'ABHISHEK THAKUR PORTFOLIO',
    category: 'PROFESSIONAL PORTFOLIO',
    tags: ['React', 'Framer Motion', 'GSAP', 'Tailwind CSS'],
    url: '#',
    previewImage: '#',
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
  {
    id: 3,
    title: 'NEOBRUTALISM LIBRARY',
    category: 'COMPONENT LIBRARY',
    tags: ['TypeScript', 'React', 'Tailwind CSS'],
    url: '#',
    previewImage: '#',
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
    id: 4,
    title: 'PORTFOLIO WEBSITE',
    category: 'PERSONAL BRAND',
    tags: ['React', 'Framer Motion', 'Tailwind CSS'],
    url: '#',
    previewImage: '#',
    aim: 'Design and develop a clean, professional portfolio website that effectively communicates skills and experience while maintaining a balance between aesthetics and functionality.',
    description: 'A sleek portfolio website with emphasis on readability and user experience. Features smooth animations, clear content hierarchy, and strategic use of white space to guide visitors through the content naturally.',
    features: [
      'Clean, minimal design with strategic animations',
      'Project filtering and categorization',
      'Blog section for sharing insights and experiences',
      'Skills visualization with interactive elements',
      'Testimonials section with carousel',
      'Newsletter subscription integration'
    ]
  }
];
