"use client"
import Desktop from "./components/Desktop"
import Roadmap from "./components/Roadmap"
import Message from "./components/Message"
import Sidebar from "./components/sidebar"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-900">
      <Sidebar />
      <main className="flex-1">
        <section id="home">
          <Desktop />
        </section>
        <section id="journey">
          <Roadmap />
        </section>
        <section id="contact">
          <Message />
        </section>
      </main>
    </div>
  )
}
