# 🚐 VanLife

A modern van rental platform built with React and React Router, allowing users to browse available vans and manage their van listings.

**Live Demo:** [https://vanlife1387.netlify.app/](https://vanlife1387.netlify.app/)

## 📋 Overview

VanLife is a full-featured web application that connects van owners with travelers looking to rent vehicles for their adventures. The platform features a public-facing marketplace for browsing vans and a host dashboard for managing listings.

## ✨ Features

### Public Features
- **Van Marketplace**: Browse all available vans with detailed information
- **Advanced Filtering**: Filter vans by type (Simple, Luxury, Rugged)
- **Detailed Van Pages**: View comprehensive information including pricing, descriptions, and photos
- **Responsive Design**: Fully responsive interface that works on all devices

### Host Features
- **Protected Dashboard**: Secure login system for van hosts
- **Van Management**: View and manage your listed vans
- **Income Tracking**: Monitor earnings and transaction history
- **Reviews System**: View and manage customer reviews
- **Detailed Analytics**: Track performance with visual graphs

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router 7.11.0
- **Backend**: Firebase (Firestore)
- **Mock Server**: MirageJS (for development)
- **Build Tool**: Vite 7.2.4
- **Icons**: React Icons
- **Styling**: Custom CSS

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd VanLife
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔐 Authentication

The app includes a basic authentication system for host features.

**Demo Credentials:**
- Email: `b@b.com`
- Password: `p123`

> ⚠️ **Note**: This is a demo authentication system. In production, implement proper security measures.

## 🗂️ Project Structure

```
VanLife/
├── components/
│   ├── AuthRequired.jsx    # Protected route wrapper
│   ├── Error.jsx           # Error boundary component
│   ├── Footer.jsx          # App footer
│   ├── Header.jsx          # Navigation header
│   ├── HostLayout.jsx      # Host section layout
│   └── Layout.jsx          # Main app layout
├── pages/
│   ├── Host/
│   │   ├── Dashboard.jsx   # Host dashboard
│   │   ├── HostVans.jsx    # Van listings management
│   │   ├── HostVanDetail.jsx
│   │   ├── Income.jsx      # Income tracking
│   │   └── Reviews.jsx     # Reviews management
│   ├── Vans/
│   │   ├── Vans.jsx        # Van marketplace
│   │   └── VanDetail.jsx   # Individual van details
│   ├── About.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   └── NotFound.jsx
├── api.js                  # Firebase API functions
├── server.js               # MirageJS mock server
└── index.jsx               # App entry point
```

## 🚀 Deployment

The application is deployed on Netlify and can be accessed at:
**[https://vanlife1387.netlify.app/](https://vanlife1387.netlify.app/)**

### Deploy Your Own

1. Build the project:
```bash
npm run build
```

2. Deploy to Netlify:
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

## 📱 Key Routes

- `/` - Home page
- `/about` - About VanLife
- `/vans` - Browse all vans
- `/vans/:id` - Individual van details
- `/login` - Host login
- `/host` - Host dashboard (protected)
- `/host/income` - Income tracking (protected)
- `/host/reviews` - Reviews (protected)
- `/host/vans` - Manage vans (protected)
- `/host/vans/:id` - Van details (protected)

## 🎨 Features in Detail

### Van Filtering
The marketplace includes smart filtering that:
- Maintains filter state in URL parameters
- Preserves navigation history
- Allows quick clearing of filters

### Host Dashboard
Protected host area includes:
- **Welcome Section**: Overview of recent earnings
- **Review Metrics**: Star ratings and review summary
- **Van Listings**: Quick access to all your vans
- **Income Details**: Transaction history and analytics
- **Reviews Management**: View and respond to customer feedback

### Nested Routing
Utilizes React Router's nested routing for:
- Clean URL structure
- Shared layouts
- Protected routes with authentication

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🐛 Known Limitations

- Authentication is basic and for demonstration purposes only
- MirageJS is used for mock data in development
- Some data is hardcoded for demo purposes

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Built as part of a React Router learning project
- Van images from Scrimba's Advanced React course
- Icons from React Icons library

---

**Built with ❤️ using React and React Router**