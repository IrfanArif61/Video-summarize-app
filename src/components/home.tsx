import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";

function Home() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="flex items-center justify-between px-16 py-24">
        <div className="max-w-xl">
          <h2 className="text-[#0B2447] text-5xl font-bold leading-tight mb-6">
            Transform Videos
            <br />
            Into Insights
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Harness the power of AI to condense hours of content into concise
            summaries. Simplify your workflow and enhance productivity with our
            advanced tools.
          </p>
          <Link to="/summarize">
            <Button
              size="lg"
              className="bg-[#0B2447] hover:bg-[#0B2447]/90 text-lg px-8"
            >
              Start Summarizing
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070"
            alt="Modern office interior"
            className="w-full h-[500px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#0B2447] text-white py-20 px-16">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose AI-Video Summarizer?
        </h2>

        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="p-6 border border-blue-400/30 rounded-lg bg-blue-900/20">
            <div className="w-12 h-12 mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Instant Video Summaries
            </h3>
            <p className="text-blue-100/80">
              Quickly transform lengthy videos into concise, informative
              summaries.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 border border-blue-400/30 rounded-lg bg-blue-900/20">
            <div className="w-12 h-12 mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              AI-Driven Content Analysis
            </h3>
            <p className="text-blue-100/80">
              Leverage advanced AI to analyze video content and highlight key
              insights.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 border border-blue-400/30 rounded-lg bg-blue-900/20">
            <div className="w-12 h-12 mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Customizable Summary Options
            </h3>
            <p className="text-blue-100/80">
              Tailor your video summaries to meet specific needs with flexible
              customization features.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="p-6 border border-blue-400/30 rounded-lg bg-blue-900/20">
            <div className="w-12 h-12 mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">User Feedback</h3>
            <p className="text-blue-100/80">
              Feedback from the user to improve future AI model updates.
            </p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 px-16">
        <h2 className="text-3xl font-bold text-center mb-16">
          How It Works: Step-by-Step Process
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-12 h-12 text-[#0B2447]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Drag/Drop Video</h3>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-12 h-12 text-[#0B2447]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">Set Summary Preferences</h3>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-12 h-12 text-[#0B2447]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">AI Processing & Analysis</h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-16">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <p className="text-sm text-gray-600">
            © 2024 AI-Video Summarization. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0-.795-.646-1.44-1.44-1.44-.795 0-1.44.646-1.44 1.44 0 .794.646 1.439 1.44 1.439.793-.001 1.44-.645 1.44-1.439z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
