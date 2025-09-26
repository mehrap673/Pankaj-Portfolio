# Overview

This is a modern full-stack portfolio web application built with React, TypeScript, and Express.js. The application features a personal portfolio showcasing projects, skills, education, and contact information with a modern, responsive design using shadcn/ui components and Tailwind CSS.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with custom design tokens and dark mode support
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and React Context for theme management
- **Build Tool**: Vite with path aliases for clean imports

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: Custom Vite integration for HMR and development
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)
- **API Structure**: RESTful API design with centralized route registration
- **Build Process**: esbuild for production server bundling

## Database Schema
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Definition**: Shared schema between client and server
- **User Model**: Basic user structure with username/password fields and UUID primary keys
- **Validation**: Zod schema validation integrated with Drizzle

## Styling and Theme System
- **CSS Architecture**: Utility-first with Tailwind CSS
- **Design System**: Custom color palette with CSS variables for theme switching
- **Component Variants**: Class Variance Authority for component styling variants
- **Dark Mode**: Built-in dark/light theme switching with local storage persistence
- **Typography**: Custom font stack with variable font weights

## Development Environment
- **Type Safety**: Strict TypeScript configuration across client/server/shared code
- **Path Mapping**: Absolute imports with @ aliases for clean code organization
- **Hot Reload**: Vite HMR with custom error overlay integration
- **Development Tools**: Replit-specific plugins for enhanced development experience

# External Dependencies

## Database and Storage
- **@neondatabase/serverless**: Serverless PostgreSQL database connectivity
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: Database migration and schema management tools

## UI and Components
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **@tanstack/react-query**: Server state management and caching
- **class-variance-authority**: Utility for creating component variants
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library for consistent iconography

## Development and Build Tools
- **vite**: Fast build tool and development server
- **esbuild**: Fast JavaScript/TypeScript bundler for production
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development enhancements

## Form and Data Handling
- **react-hook-form**: Performant form library with validation
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Schema validation library
- **date-fns**: Date manipulation utilities

## Additional Libraries
- **wouter**: Lightweight routing library
- **clsx**: Utility for conditional CSS classes
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider component