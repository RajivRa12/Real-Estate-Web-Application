# PropBot - Real Estate Platform

A modern, full-stack real estate platform built with React, TypeScript, and Firebase. PropBot helps users discover, buy, and rent properties with an intuitive interface and powerful search capabilities.

## 🚀 Features

- **Property Search**: Advanced search with location, type, and budget filters
- **User Authentication**: Secure login/signup with Firebase Auth
- **Property Listings**: Browse featured properties for sale and rent
- **Responsive Design**: Mobile-first design with TailwindCSS
- **Modern UI**: Built with Radix UI components and Lucide icons
- **Type Safety**: Full TypeScript support throughout the application

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite + TailwindCSS 3
- **Backend**: Express server integrated with Vite dev server
- **Authentication**: Firebase Auth
- **UI Components**: Radix UI + TailwindCSS 3 + Lucide React icons
- **Routing**: React Router 6 (SPA mode)
- **Package Manager**: PNPM
- **Testing**: Vitest

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18 or higher)
- [PNPM](https://pnpm.io/) (recommended package manager)

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd neon-landing
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Firebase Setup

#### Step 1: Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or select an existing project
3. Follow the setup wizard

#### Step 2: Enable Authentication
1. In your Firebase project, go to **Authentication** > **Sign-in method**
2. Enable **Email/Password** authentication
3. Optionally enable other providers (Google, Facebook, etc.)

#### Step 3: Get Firebase Configuration
1. Go to **Project Settings** > **General** tab
2. Scroll down to "Your apps" section
3. Click "Add app" and select **Web** (</>) if you haven't already
4. Copy the Firebase configuration object

#### Step 4: Configure Firebase in Your App
1. Open `client/services/firebase.ts`
2. Replace the placeholder configuration with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

### 4. Run the Development Server

```bash
pnpm dev
```

The application will be available at `http://localhost:8080`

### 5. Build for Production

```bash
pnpm build
```

### 6. Start Production Server

```bash
pnpm start
```

## 📱 Application Pages

### Homepage (`/`)
The main landing page featuring:
- Hero section with property search form
- "What We Do" services overview
- Featured properties showcase
- Properties for sale section
- Properties for rent section
- Newsletter subscription
- Company information

**Key Features:**
- Advanced search form with location, type, and budget filters
- Featured property cards with images and details
- Service cards highlighting platform capabilities
- Newsletter signup form

### Login Page (`/login`)
User authentication page with:
- Email/password login form
- Social login options (Apple, Facebook, Google)
- "Remember Me" functionality
- Password recovery option
- Link to signup page

**Features:**
- Form validation
- Error handling
- Loading states
- Responsive design with split layout

### Signup Page (`/signup`)
User registration page featuring:
- Complete registration form (name, email, password, confirm password)
- Form validation
- Password confirmation
- Link to login page

**Features:**
- Real-time form validation
- Password strength requirements
- Error handling and user feedback
- Clean, modern design

### Properties Page (`/properties`)
Property listings page with:
- Featured properties showcase
- Property search and filtering
- Property cards with images and details
- Newsletter subscription section

**Features:**
- Property filtering by type (sale/rent)
- Detailed property information
- Contact and inquiry options
- Responsive grid layout

### 404 Not Found Page (`/*`)
Custom 404 page for handling invalid routes.

## 🎨 UI Components

The application uses a comprehensive set of pre-built UI components:

- **Form Components**: Input, Button, Select, Checkbox
- **Layout Components**: Card, Separator, Container
- **Navigation**: Navigation Menu, Breadcrumb
- **Feedback**: Alert, Toast, Progress
- **Data Display**: Table, Badge, Avatar
- **Overlay**: Dialog, Popover, Tooltip
- **Interactive**: Accordion, Tabs, Carousel

## 🔧 Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run tests
pnpm test

# Type checking
pnpm typecheck

# Format code
pnpm format.fix
```

## 📁 Project Structure

```
neon-landing/
├── client/                   # React SPA frontend
│   ├── pages/               # Route components
│   │   ├── Homepage.tsx     # Main landing page
│   │   ├── Index.tsx        # Default route
│   │   ├── Login.tsx        # User login
│   │   ├── Signup.tsx       # User registration
│   │   ├── Properties.tsx   # Property listings
│   │   └── NotFound.tsx     # 404 page
│   ├── components/          # Reusable components
│   │   ├── ui/             # Pre-built UI components
│   │   └── Navigation.tsx   # Main navigation
│   ├── services/           # API and Firebase services
│   ├── hooks/              # Custom React hooks
│   └── lib/                # Utility functions
├── server/                 # Express API backend
│   ├── routes/             # API route handlers
│   └── index.ts           # Server setup
├── shared/                 # Shared types and interfaces
└── public/                 # Static assets
```

## 🔐 Environment Variables

Create a `.env` file in the root directory for environment-specific configuration:

```env
# Firebase Configuration (if using environment variables)
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

## 🚀 Deployment

### Vercel Deployment (Recommended)
1. **Connect Repository**: Go to [Vercel Dashboard](https://vercel.com/dashboard) and import your GitHub repository
2. **Configure Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`
3. **Environment Variables**: Add your Firebase configuration in Vercel dashboard:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
4. **Deploy**: Click "Deploy" and your app will be live!

### Netlify Deployment
1. Connect your repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔄 Updates

Stay updated with the latest changes by:
- Watching the repository
- Following release notes
- Checking the changelog

---

**PropBot** - Your trusted partner in finding the perfect property! 🏠
