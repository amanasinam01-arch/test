# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

This is a Next.js 15 application for a DesignBell landing page clone with the following structure:

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Icons**: Lucide React
- **Typography**: Geist fonts (sans and mono)
- **Language**: TypeScript

### Project Structure
- `src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with Geist fonts and global CSS
  - `page.tsx` - Home page that renders Hero component
  - `globals.css` - Global styles with Tailwind imports and CSS variables
- `src/components/` - Reusable React components
  - `hero.tsx` - Main landing page hero section with email signup

### Key Patterns
- Uses TypeScript path mapping (`@/*` → `./src/*`)
- Component-based architecture with functional components
- Tailwind CSS for styling with dark/light mode support via CSS variables
- Email input with inline submit button pattern in Hero component

### Styling System
- Uses Tailwind CSS v4 with PostCSS plugin
- CSS custom properties for theming (background/foreground colors)
- Automatic dark mode detection via `prefers-color-scheme`
- Font variables defined in layout and referenced in globals.css