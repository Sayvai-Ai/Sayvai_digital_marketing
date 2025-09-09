// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails'; // ✅ Dynamic blog page
import Contact from './pages/Contact';
import { ParticleBackground } from './components/ParticleBackground';
import WaveBackground from './components/WaveBackground';
import ChatBot from './components/ChatBot/ChatBot'; // ✅ Added ChatBot import
import ScrollToTop from './components/ScrollToTop';
import Solution from './pages/Solution';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />

        <div className="min-h-screen bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
          {/* Background effect */}
          <ParticleBackground />

          {/* Persistent Header */}
          <Header />

          {/* Main Page Content */}
          <main className="pt-20">
            <Routes>

              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceSlug" element={<ServiceDetails />} /> {/* ✅ dynamic service */}
              <Route path="/solution" element={<Solution />} />
              {/* Blogs */}
              <Route path="/blogs" element={<Blogs />} /> {/* Blog list page */}
              <Route path="/blogs/:id" element={<BlogDetails />} /> {/* ✅ dynamic blog details */}

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
          </main>

          {/* Waves at the bottom */}
          <WaveBackground />

          {/* Persistent Footer */}
          <Footer />

          {/* ✅ ChatBot (floating on all pages) */}
          <ChatBot />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
