# Zyndify Web Application

A modern, responsive web application built with React and TypeScript, featuring a sleek user interface with a collapsible navigation system.

## Features

- **Authentication System**
  - Secure login/authentication flow
  - Protected routes and layouts
  - Session management

- **Modern UI Components**
  - Responsive side navigation with collapse/expand functionality
  - Active route highlighting
  - Animated transitions
  - Clean and modern top header
  - Glassmorphism design elements

- **Layout System**
  - Flexible layout components
  - Responsive design for all screen sizes
  - Organized component structure

## Project Structure

```
src/
├── assets/        # Static assets and images
├── components/    # Reusable UI components
│   ├── SideNav.tsx
│   └── TopHeader.tsx
├── layouts/       # Layout components
│   ├── AuthLayout.tsx
│   └── MainLayout.tsx
├── pages/         # Page components
│   ├── Dashboard.tsx
│   └── Login.tsx
├── routes/        # Routing configuration
│   └── AppRoutes.tsx
├── services/      # API and service layer
│   └── authService.ts
├── styles/        # CSS and style files
│   ├── layout.css
│   └── login.css
└── utils/         # Utility functions
    └── toast.ts
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/zyndify-ops/zyndify-web.git
   cd zyndify-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open [http://localhost:5173](http://localhost:5173) in your browser
   - Login using your credentials
   - Navigate using the side menu

## Tech Stack

- **Core**
  - React 18
  - TypeScript
  - Vite

- **Routing & State**
  - React Router v6
  - React Context for state management

- **UI & Styling**
  - CSS Modules
  - React Icons
  - Custom CSS animations

- **Development Tools**
  - ESLint
  - TypeScript compiler
  - Vite development server

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is proprietary software owned by Zyndify.
