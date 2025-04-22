import { Link } from 'react-router-dom'
import { FaChartLine, FaRocket, FaBrain, FaCode } from 'react-icons/fa'
import StatsForm from '../components/StatsForm'

function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 py-20 text-white">
        <div className="container-custom mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                Supercharge Your LeetCode Performance
              </h1>
              <p className="text-xl mb-8 opacity-90 animate-slide-up">
                Visualize your progress, track your strengths and weaknesses,
                and get AI-powered insights to improve your coding skills.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/stats" className="btn bg-white text-primary-600 hover:bg-gray-100">
                  Get Started
                </Link>
                <a href="#features" className="btn border border-white text-white hover:bg-white/10">
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
                <StatsForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center hover:translate-y-[-5px] transition-transform">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
              <p className="text-gray-600">
                Visualize your LeetCode statistics and see your progress over time
                with beautiful charts and dashboards.
              </p>
            </div>
            
            <div className="card text-center hover:translate-y-[-5px] transition-transform">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                <FaBrain />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-gray-600">
                Get personalized recommendations and tips based on your solving patterns
                and performance metrics.
              </p>
            </div>
            
            <div className="card text-center hover:translate-y-[-5px] transition-transform">
              <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                <FaRocket />
              </div>
              <h3 className="text-xl font-semibold mb-2">Improve Faster</h3>
              <p className="text-gray-600">
                Focus on your weak areas and follow tailored study plans to
                improve your coding skills more efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your LeetCode Game?</h2>
          <p className="text-xl mb-8 opacity-80 max-w-2xl mx-auto">
            Join thousands of students who are improving their problem-solving skills
            with data-driven insights.
          </p>
          <Link to="/stats" className="btn btn-primary text-lg px-8 py-3">
            Analyze Your Stats Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home