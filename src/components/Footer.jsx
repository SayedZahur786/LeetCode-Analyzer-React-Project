import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">LeetCode Stats Analyzer</h3>
            <p className="text-gray-300 mt-2">Analyze your LeetCode performance and get personalized AI insights</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.linkedin.com/in/sayedzahur786/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:contact@syedzahurulhasan04@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p className="mt-1">Created by Mohd Jahur (Sayed Zahur) Zaidi</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
