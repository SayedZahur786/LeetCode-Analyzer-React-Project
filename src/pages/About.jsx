import { useState } from 'react'
import { FaLinkedin, FaCode, FaJava, FaRobot, FaMobile } from 'react-icons/fa'

function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">About This Project</h1>
        
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="card dark:bg-dark-200">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">About the Creator</h2>
              
              <div className="flex items-center mb-6">
                <div className="bg-gray-200 dark:bg-dark-300 rounded-full w-20 h-20 flex items-center justify-center text-gray-500 dark:text-gray-400 text-3xl mr-4">
                  MJ
                </div>
                <div>
                  <h3 className="text-xl font-semibold dark:text-gray-200">Mohd Jahur (Sayed Zahur) Zaidi</h3>
                  <p className="text-gray-600 dark:text-gray-400">Passionate Learner | Computer Science Major | Open Source Contributor</p>
                </div>
              </div>
              
              <a 
                href="https://www.linkedin.com/in/sayedzahur786/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 mb-4"
              >
                <FaLinkedin className="mr-2" /> LinkedIn Profile
              </a>
              
              <h3 className="text-lg font-semibold mt-6 mb-3 dark:text-gray-200">Top Skills</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-primary-50 dark:bg-dark-300 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full">
                  <FaRobot className="mr-2" /> Artificial Intelligence (AI)
                </div>
                <div className="flex items-center bg-primary-50 dark:bg-dark-300 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full">
                  <FaCode className="mr-2" /> Machine Learning
                </div>
                <div className="flex items-center bg-primary-50 dark:bg-dark-300 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full">
                  <FaMobile className="mr-2" /> Flutter
                </div>
                <div className="flex items-center bg-primary-50 dark:bg-dark-300 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full">
                  <FaJava className="mr-2" /> Java
                </div>
                <div className="flex items-center bg-primary-50 dark:bg-dark-300 text-primary-700 dark:text-primary-400 px-3 py-1 rounded-full">
                  <FaCode className="mr-2" /> Software as a Service (SaaS)
                </div>
              </div>
            </div>
            
            <div className="card dark:bg-dark-200 mt-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">About LeetCode Stats Analyzer</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                LeetCode Stats Analyzer is an innovative tool designed to help coding enthusiasts and 
                aspiring software developers track, analyze, and improve their problem-solving skills. 
                By providing detailed visualizations of your LeetCode performance and AI-powered insights, 
                we help you identify areas for improvement and create a structured learning path.
              </p>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Our platform leverages advanced data visualization techniques and artificial intelligence 
                to transform raw statistics into actionable insights. Whether you're preparing for 
                technical interviews or working to enhance your algorithmic thinking, our tools help 
                you make data-driven decisions about your learning journey.
              </p>
              <h3 className="text-lg font-semibold mt-6 mb-3 dark:text-gray-200">Key Features</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Interactive statistics dashboard with real-time data visualization</li>
                <li>AI-powered personalized recommendations based on your solving patterns</li>
                <li>Comprehensive performance analysis across different problem difficulties</li>
                <li>PDF export functionality for progress tracking and sharing</li>
                <li>Responsive design optimized for both desktop and mobile devices</li>
                <li>Dark mode support for comfortable viewing in any environment</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3 dark:text-gray-200">Technology Stack</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>React.js for dynamic and responsive user interfaces</li>
                <li>Tailwind CSS for modern and maintainable styling</li>
                <li>Chart.js for interactive data visualization</li>
                <li>Google's Gemini AI for intelligent insights generation</li>
                <li>LeetCode Stats API for real-time data fetching</li>
              </ul>
            </div>
          </div>
          
          <div className="card dark:bg-dark-200">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Contact Me</h2>
            
            {submitted ? (
              <div className="bg-success-500 bg-opacity-10 border border-success-500 rounded-md p-4 mb-6">
                <p className="text-success-500 font-medium">Thank you for your message! I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label dark:text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-input dark:bg-dark-300 dark:text-gray-200 dark:border-gray-600 ${errors.name ? 'border-error-500' : ''}`}
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p className="form-error">{errors.name}</p>}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="form-label dark:text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-input dark:bg-dark-300 dark:text-gray-200 dark:border-gray-600 ${errors.email ? 'border-error-500' : ''}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="form-error">{errors.email}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="form-label dark:text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className={`form-input dark:bg-dark-300 dark:text-gray-200 dark:border-gray-600 ${errors.message ? 'border-error-500' : ''}`}
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && <p className="form-error">{errors.message}</p>}
                </div>
                
                <button type="submit" className="btn btn-primary w-full dark:bg-primary-600 dark:hover:bg-primary-700">
                  Send Message
                </button>
              </form>
            )}
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-3 dark:text-gray-200">Other Ways to Reach Me</h3>
              <p className="mb-2 dark:text-gray-300">
                <strong>Email:</strong> contact@example.com
              </p>
              <p className="dark:text-gray-300">
                <strong>GitHub:</strong> github.com/username
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About