// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { lazy, Suspense } from 'react';

// Regular imports for core components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));
const Contact = lazy(() => import('./pages/Contact'));
const Solution = lazy(() => import('./pages/Solution'));
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));
const WaveBackground = lazy(() => import('./components/WaveBackground'));
const ChatBot = lazy(() => import('./components/ChatBot/ChatBot'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />

        <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
          {/* Background effect */}
          <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-800 h-full w-full absolute"></div>}>
            <ParticleBackground />
          </Suspense>

          {/* Persistent Header */}
          <Header />

          {/* Main Page Content */}
          <main className="pt-20">
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
            </div>}>
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceSlug" element={<ServiceDetails />} />
                <Route path="/solution" element={<Solution />} />
                {/* Blogs */}
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:id" element={<BlogDetails />} />
                <Route path="/contact" element={<Contact />} />

                {/* Fallback for unknown routes */}
                <Route
                  path="*"
                  element={
                    <h1 className="text-center py-20 text-red-500">
                      404 - Page Not Found
                    </h1>
                  }
                />
              </Routes>
            </Suspense>
          </main>

          {/* Waves at the bottom */}
          <Suspense fallback={<div className="h-48 bg-gradient-to-b from-transparent to-gray-200 dark:to-gray-800"></div>}>
            <WaveBackground />
          </Suspense>

          {/* Persistent Footer */}
          <Footer />

          {/* ChatBot (floating on all pages) */}
          <Suspense fallback={null}>
            <ChatBot />
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
