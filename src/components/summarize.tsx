import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { motion } from "framer-motion";

function Summarize() {
  const [progress, setProgress] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop here
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-center mb-8"
          >
            Upload & Summarize Your Video Instantly
          </motion.h1>
        </motion.div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`border-2 border-dashed rounded-lg p-12 mb-6 text-center cursor-pointer transition-colors ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            <input
              type="file"
              id="fileInput"
              className="hidden"
              accept="video/*"
            />
            <h3 className="text-lg font-semibold mb-2">Select Video Upload</h3>
            <p className="text-gray-500">or drag and drop video files</p>
            <div className="mt-4">
              <svg
                className="w-12 h-12 mx-auto text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
          </motion.div>

          {/* Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-4 mb-6"
          >
            <div className="flex items-center space-x-2">
              <Checkbox id="highlight" />
              <label
                htmlFor="highlight"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Highlight people in video
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="extract" />
              <label
                htmlFor="extract"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Extract speech & important keywords
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="focus" />
              <label
                htmlFor="focus"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Focus on action scenes & transitions
              </label>
            </div>
            <Input
              type="number"
              placeholder="Enter Summary Length in mins"
              className="max-w-xs"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button className="w-full bg-[#0B2447] hover:bg-[#0B2447]/90 mb-12">
              Generate Summary
            </Button>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold text-center">
              Resulted Summarize Video
            </h2>

            <div className="w-full">
              <Progress value={progress} className="h-2" />
              <p className="text-center mt-2 text-sm text-gray-600">
                Analyzing video... Please wait ⌛
              </p>
            </div>

            {/* Video Preview */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="aspect-video bg-gray-100 rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?q=80&w=2946"
                alt="Video preview"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="flex justify-center gap-4">
              <Button
                variant="default"
                className="bg-[#0B2447] hover:bg-[#0B2447]/90"
              >
                Download Summary
              </Button>
              <Button variant="outline">Generate Another Summary</Button>
            </div>

            {/* User Feedback */}
            <div className="pt-8">
              <h3 className="text-lg font-semibold mb-4">User Feedback</h3>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="text-2xl text-yellow-400 hover:text-yellow-500"
                  >
                    {star <= 3 ? "★" : "☆"}
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                <textarea
                  className="w-full h-24 p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your Feedback"
                />
                <div className="text-right text-sm text-gray-500">
                  45/500 char
                </div>
                <Button className="bg-[#0B2447] hover:bg-[#0B2447]/90">
                  Submit Feedback
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
}

export default Summarize;
