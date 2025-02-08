import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

function Home() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-12 lg:py-24 gap-8">
        <div className="max-w-xl text-center lg:text-left">
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
        <div className="w-full lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070"
            alt="Modern office interior"
            className="w-full h-[500px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#0B2447] text-white py-12 lg:py-20 px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-center mb-16">
          Why Choose AI-Video Summarizer?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-0">
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

      <Footer />
    </div>
  );
}

export default Home;
