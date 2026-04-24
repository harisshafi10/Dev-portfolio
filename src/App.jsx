import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Service from './Components/Service'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-white">
      <div className="absolute inset-x-0 top-0 -z-0 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(255,59,59,0.14),transparent_55%)]" />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Service />
          <Portfolio />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
