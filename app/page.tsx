import Header from "./components/Header";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import About from "./components/About";
import FeaturedProjects from "./components/FeaturedProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen transition-colors duration-300" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Header name="TK" />
      <Banner />
      <AboutMe />
      <Skills />
      <FeaturedProjects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
