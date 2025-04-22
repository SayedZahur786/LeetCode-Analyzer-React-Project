import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useUserData } from '../context/UserDataContext'
import { FaCode, FaChartLine, FaBrain, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const { userData } = useUserData()

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navItems = [
    { name: 'Home', path: '/', icon: <FaCode className="mr-2" /> },
    { name: 'Stats', path: '/stats', icon: <FaChartLine className="mr-2" /> },
    { name: 'AI Insights', path: '/insights', icon: <FaBrain className="mr-2" />, disabled: !userData },
    { name: 'About', path: '/about', icon: <FaInfoCircle className="mr-2" /> },
  ]

  return (
    <nav className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-primary-500 text-3xl">
            <FaCode />
          </span>
          <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-primary-500'}`}>LeetCode Analyzer</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.disabled ? '#' : item.path}
              className={`flex items-center ${
                item.disabled 
                  ? 'text-gray-400 cursor-not-allowed' 
                  : location.pathname === item.path
                    ? 'text-primary-500 font-medium'
                    : `${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-primary-500`
              } transition-colors duration-200`}
              onClick={e => item.disabled && e.preventDefault()}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes className="text-gray-800" /> : <FaBars className={isScrolled ? 'text-gray-800' : 'text-primary-500'} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="container-custom mx-auto space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.disabled ? '#' : item.path}
                className={`flex items-center py-2 px-4 rounded-md ${
                  item.disabled 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : location.pathname === item.path
                      ? 'bg-primary-50 text-primary-500 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={e => item.disabled && e.preventDefault()}
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar