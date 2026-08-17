import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-primary text-text font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 bg-[#171717] border-t border-gray-800 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Alexsandro Filho. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
