import { Link } from "react-router-dom";

// Custom play icon with white circle and cutout play button
const PlayIconCutout = ({
  className,
  isSelected,
}: {
  className?: string;
  isSelected?: boolean;
}) => (
  <svg width="20" height="20" viewBox="0 0 20 20" className={className}>
    <defs>
      <mask id="play-cutout">
        <rect width="20" height="20" fill="white" />
        <polygon points="8,6 8,14 14,10" fill="black" />
      </mask>
    </defs>
    <circle
      cx="10"
      cy="10"
      r="9"
      fill={isSelected ? "#60a5fa" : "black"}
      mask="url(#play-cutout)"
    />
  </svg>
);

export default function VideoDetail() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <span className="text-white text-lg font-bold">Ad</span>
            <span className="text-white text-lg font-light">Aura</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Company</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Platform</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
            <button className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-full text-sm font-medium transition-colors text-white">
              Sign Up
            </button>
          </nav>
        </header>

        <div className="pb-20">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center text-sm">
            <Link to="/" className="text-gray-400 font-normal hover:text-white transition-colors">
              Intro to AdAura
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-400 font-normal">Lesson 1: Establish an optimal strategy</span>
          </div>

          {/* Video Title */}
          <h1 className="text-2xl lg:text-3xl font-bold mb-8 leading-tight">
            Provide your industry category or brand
          </h1>

          {/* Video Player */}
          <div>
            <div className="bg-gray-400 aspect-video rounded-t-lg flex items-center justify-center text-black text-xl font-medium">
              Video Placeholder
            </div>
          </div>

          {/* Video Info Section */}
          <div className="bg-gray-400 rounded-b-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-black font-bold text-lg">
                Lesson 1: Establish an optimal strategy (3 Videos)
              </h3>
              <span className="text-black font-bold text-sm">
                Watch time: 2min 22 sec
              </span>
            </div>

            {/* Video List */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-black bg-gray-500 p-2 rounded">
                <div className="flex items-center">
                  <PlayIconCutout className="mr-3" isSelected={false} />
                  <span className="font-normal">1.1 Provide your industry category or brand</span>
                </div>
                <span className="text-sm">0:58</span>
              </div>
              
              <div className="flex items-center justify-between text-black">
                <div className="flex items-center">
                  <PlayIconCutout className="mr-3" isSelected={false} />
                  <span className="font-normal">1.2 Title</span>
                </div>
                <span className="text-sm">0:58</span>
              </div>
              
              <div className="flex items-center justify-between text-black">
                <div className="flex items-center">
                  <PlayIconCutout className="mr-3" isSelected={false} />
                  <span className="font-normal">1.3 Title</span>
                </div>
                <span className="text-sm">0:58</span>
              </div>
            </div>
          </div>

          {/* Next Lesson Section */}
          <div className="border border-gray-400 rounded-lg p-6">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-gray-300 text-sm mb-1">Next Lesson</div>
                <h4 className="text-white font-normal text-lg">Convert your strategy into a plan</h4>
              </div>
              <button className="border border-gray-400 px-4 py-2 rounded text-sm font-normal hover:bg-gray-800 transition-colors">
                Go to lesson 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
