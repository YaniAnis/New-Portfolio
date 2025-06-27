import Sidebar from "./components/sidebar"
import Roadmap from "./components/Roadmap"
import Message from "./components/Message"
import Desktop from "./components/Desktop"
import ProjectCard from "./components/ProjectCard"
import Hero from "./components/Hero"
import About from "./components/About"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="pl-64 flex flex-col min-h-screen">
        <div className="flex-1 flex flex-col overflow-auto">
          <Hero />
          <Desktop />

          <section id="experience" className="py-20">
            <Roadmap />
          </section>

          <section id="about" className="py-20">
            <About />
          </section>



          <section id="projects" className="py-20 bg-gradient-to-r from-purple-900/20 to-teal-900/20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-4">
                  Featured Projects
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Explore my latest work showcasing innovative solutions and creative designs
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <ProjectCard
                  photopath="/placeholder.svg?height=300&width=400"
                  title="E-Commerce Platform"
                  description="A modern, responsive e-commerce solution built with Next.js, featuring real-time inventory management and seamless payment integration."
                />
                <ProjectCard
                  photopath="/placeholder.svg?height=300&width=400"
                  title="AI-Powered Dashboard"
                  description="An intelligent analytics dashboard that leverages machine learning to provide actionable insights and predictive analytics."
                />
                <ProjectCard
                  photopath="/placeholder.svg?height=300&width=400"
                  title="Mobile Banking App"
                  description="A secure and intuitive mobile banking application with biometric authentication and real-time transaction monitoring."
                />
              </div>
            </div>
          </section>

          <section id="contact" className="py-20">
            <Message />
          </section>
        </div>
      </div>
    </div>
  )
}
