Prompt: 


Create a website to present the client review report based on the attached files using **Shadcn UI components and design system**.

## Features Required:

- Name of the website is 'MonoMind Business Review: Rising-X'
- **Hero/Page Header section with background image and website title**
- Professional business report website with clean, modern design using Shadcn UI
- Navigation menu with sections for Executive Summary, Company Overview, Products and Services, Online Presence Analysis, Competitive Landscape, SWOT Analysis, and Conclusion
- Responsive and mobile-friendly design
- Visual elements like charts/graphs for data representation
- Professional color scheme aligned with business/financial theme
- Sticky header with navigation
- Animations for components as user scrolls
- In the footer, leave a copyright note "All rights reserved by MonoMind"; linking to [https://www.monomind.one](https://www.monomind.one)

## Implementation Requirements:

### Page Header/Hero Section:

- Create a prominent hero section below the navigation with:
    - Professional background image (business/corporate theme)
    - Website title "MonoMind Business Review: Rising-X" prominently displayed
    - Subtitle or brief description of the report
    - Overlay gradient for text readability
    - Call-to-action or scroll indicator
- Use Shadcn UI components for text elements and buttons
- Implement parallax or subtle animations for enhanced visual appeal
- Ensure responsive design with appropriate text scaling

### Shadcn UI Setup & Usage:

- Initialize the project with Shadcn UI using `npx shadcn-ui@latest init`
- Use Shadcn UI components throughout the application:
    - `Card`, `CardContent`, `CardHeader`, `CardTitle` for content sections
    - `Button` for navigation and interactive elements
    - `Badge` for tags and status indicators
    - `Separator` for visual dividers
    - `ScrollArea` for content areas
    - `Sheet` or `NavigationMenu` for mobile navigation
    - `Table` for data presentation
    - `Progress` for metrics visualization
    - `Tabs` for organizing content sections
- Follow Shadcn UI's design tokens and CSS variables for consistent theming
- Use Tailwind CSS classes that align with Shadcn UI's design system

### Technical Implementation:

- Create a modern, professional layout with a sticky header using Shadcn UI components
- **Implement hero section with background image and responsive typography**
- Implement a navigation menu that scrolls to different sections
- Structure content into clear sections using `Card` components with appropriate headings
- Add visual elements (charts) for competitor comparisons and SWOT analysis using Recharts (compatible with Shadcn UI)
- Ensure responsive design using Tailwind's responsive utilities
- Implement animations using framer-motion
- Use Shadcn UI's default color scheme or customize using CSS variables for professional business theme
- Add appropriate icons from lucide-react (Shadcn UI's icon library)
- Maintain consistent spacing and typography using Shadcn UI's design tokens

### File Structure:

```
src/  
├── components/  
│   ├── ui/ (Shadcn UI components)  
│   ├── Header.tsx  
│   ├── HeroSection.tsx  
│   ├── Navigation.tsx  
│   ├── ReportSection.tsx  
│   └── Footer.tsx  
├── lib/  
│   └── utils.ts (Shadcn UI utilities)  
├── public/  
│   └── images/  
│       └── hero-bg.jpg (background image)  
└── styles/  
    └── globals.css (Shadcn UI base styles)  
```

**Note**: Ensure all Shadcn UI components are properly installed using `npx shadcn-ui@latest add [component-name]` before implementation.
