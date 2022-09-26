import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/header";
import Hero from "../components/Hero";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0d scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Hreiðar's Portfolio</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
    </div>
  );
}
