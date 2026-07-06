import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-main flex items-center justify-center h-16">
        <h1 className={`text-lg md:text-xl font-extrabold tracking-tight transition-colors ${
          scrolled ? 'text-lm-navy' : 'text-white'
        }`}>
          Proposal Lupromax Bengkel Rewards
        </h1>
      </div>
    </nav>
  )
}
