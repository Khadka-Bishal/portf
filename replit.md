# Personal Portfolio Desktop Environment

## Overview

This is an interactive personal portfolio website that simulates a Linux desktop environment with enhanced UX features. The application provides an immersive experience where users can interact with desktop icons, open windows, and use a terminal to explore portfolio content. Built as a full-stack application with React frontend and Express backend, it combines the familiarity of desktop interactions with modern web technologies to create a unique and engaging way to showcase professional information.

## Recent Changes (January 2025)

### Enhanced Desktop Experience
- **Top Menu Bar**: Added macOS/Linux-style menu bar with Portfolio and Tools menus for easy navigation
- **Removed Footer/Taskbar**: Eliminated bottom taskbar since top menu bar provides all navigation
- **Draggable Icons**: Desktop icons are now fully draggable anywhere on screen with smooth animations and constraints
- **Improved Spacing**: Icons positioned in a grid layout to prevent overlap and clutter
- **Centered Windows**: New windows open centered with better positioning logic and cascade effect

### Content Updates
- **Real Portfolio Data**: Replaced all placeholder content with Bishal Khadka's actual resume information
- **Authentic Experience**: Education (Colby College 3.9 GPA, Oxford visiting student), work experience (Samsara, NIC Nepal, Global Forest Watch), and real projects (Secure VPN in Rust, IngreDetect, Soccerboard)
- **Contact Information**: Updated with actual email, phone, and professional links

### Creative Polish & Attention to Detail
- **Boot Animation**: Added realistic startup sequence with ASCII art logo, progress bar, and typing effects
- **Welcome Tour**: Interactive tooltips guide users through desktop features on first visit
- **Day/Night Mode**: Dynamic background switching between day and night themes with particle effects
- **Enhanced Animations**: Spring-based window animations, floating particles, and smooth hover effects
- **Improved Terminal**: Added emojis, better formatting, fun commands (matrix, fortune), and enhanced help system
- **Visual Effects**: Glassmorphism, drop shadows, gradient animations, and parallax background movement

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built with React and TypeScript, utilizing a component-based architecture that simulates desktop environment interactions. The main architectural decisions include:

- **Desktop Simulation**: Core components (Desktop, DesktopIcon, Window, Taskbar) work together to create an authentic desktop experience with drag-and-drop functionality, window management, and context menus
- **State Management**: Custom hooks (useWindowManager, useTerminal) handle complex state logic for window operations and terminal functionality, keeping components focused on presentation
- **Animation System**: Framer Motion integration provides smooth animations for window transitions, icon interactions, and desktop effects
- **UI Component Library**: Shadcn/ui components with Radix UI primitives ensure accessibility and consistent design patterns
- **Styling Strategy**: Tailwind CSS with CSS variables for theming, supporting both light and dark modes with customizable color schemes

### Backend Architecture
The server-side follows a minimal Express.js architecture designed for extensibility:

- **Modular Structure**: Separation of concerns with dedicated files for routes, storage, and server configuration
- **Storage Abstraction**: IStorage interface with MemStorage implementation allows for easy database integration later
- **Development Tools**: Vite integration for hot module replacement and development server functionality
- **API Foundation**: RESTful API structure with /api prefix, ready for portfolio-related endpoints

### Data Management
The application uses a hybrid approach for data handling:

- **Static Content**: Portfolio information stored in TypeScript modules for fast access and type safety
- **Runtime State**: Local state management for desktop interactions, window positions, and user preferences
- **Database Ready**: Schema definition with Drizzle ORM prepared for user authentication and dynamic content

### Desktop Environment Features
The system implements a comprehensive desktop metaphor:

- **File System Simulation**: Different file types (text, scripts, PDFs, folders) with appropriate icons and behaviors
- **Window Management**: Full window lifecycle including creation, positioning, resizing, minimization, and maximization
- **Terminal Emulation**: Interactive command-line interface with portfolio-specific commands and file operations
- **Context Interactions**: Right-click menus and keyboard shortcuts for enhanced user experience

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend server framework for API and static file serving
- **TypeScript**: Type safety across the entire application stack
- **Vite**: Build tool and development server with hot module replacement

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Radix UI**: Unstyled, accessible UI primitives for complex components
- **Shadcn/ui**: Pre-built component library built on Radix UI
- **Framer Motion**: Animation library for smooth interactions and transitions
- **Lucide React**: Icon library for consistent iconography

### Database and ORM
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect
- **Neon Database**: Serverless PostgreSQL for production deployment
- **Zod**: Runtime type validation and schema definition

### Development and Build Tools
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Autoprefixer
- **TSX**: TypeScript execution for development server

### Data Fetching and State
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Date-fns**: Date manipulation utilities

The architecture prioritizes user experience through desktop-like interactions while maintaining web accessibility standards and responsive design principles. The system is designed to be easily extensible for additional portfolio features or desktop applications.