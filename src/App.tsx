import HeroSection from './sections/HeroSection'
import TechStack from './sections/TechStack'
import Projects from './sections/Projects'
import DesignShowcase from './sections/DesignShowcase'
import AboutMe from './sections/AboutMe'
import Footer from './sections/Footer'
import LanguageToggle from './components/LanguageToggle'

function App() {
 return (
  <>
      <LanguageToggle />
      <HeroSection />
      <AboutMe />
      <TechStack />
      <Projects />
      <DesignShowcase />
      <Footer />
  </>
 )
}

export default App
