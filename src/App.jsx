import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import ChatWidget from './components/ui/ChatWidget'
import ScrollToTop from './components/ui/ScrollToTop'
import { Home } from './components/pages/Home'
import { About } from './components/pages/About'
import { Projects } from './components/pages/Projects'
import { Research } from './components/pages/Research'
import { Blog } from './components/pages/Blog'
import { Vlogs } from './components/pages/Vlogs'
import { CV } from './components/pages/CV'
import { Contact } from './components/pages/Contact'

function App() {
  console.log('Subash Portfolio: App component loaded successfully');
  
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/vlogs" element={<Vlogs />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  )
}

export default App
