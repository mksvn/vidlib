import { useState } from 'react';

export default function Index() {
  const [selectedVideos, setSelectedVideos] = useState<string[]>([]);

  const toggleVideoSelection = (videoId: string) => {
    setSelectedVideos(prev =>
      prev.includes(videoId)
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex justify-between items-center px-6 lg:px-16 py-6">
        <div className="flex items-center">
          <span className="text-white text-lg font-medium">Ad</span>
          <span className="text-white text-lg font-light">Aura</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Company</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Platform</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
            Log In
          </button>
        </nav>
      </header>

      <div className="px-6 lg:px-16 pb-20">
        {/* Hero Section */}
        <section className="max-w-4xl mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Intro to AdAura
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl font-normal">
            AdAura is an AI-powered campaign assistant built for smarter DOOH advertising.
            It helps you plan, optimize, and launch tailored campaigns quickly using data-driven insights and automated tools to make your campaigns faster, smarter, and more effective.
          </p>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-normal hover:bg-gray-100 transition-colors">
            Get started
          </button>
          
          <div className="flex items-center mt-8 text-sm text-gray-400">
            <span className="mr-4">3h</span>
            <span className="mr-6">Videos</span>
            <span className="mr-4">Total course time</span>
          </div>
        </section>

        {/* Lesson 1 */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Lesson 1: Establish an optimal strategy
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed font-normal">
                Start by defining your campaign goals and target audience. Our AI analyzes your industry and brand to provide data-driven recommendations that align with your objectives.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-gray-300 font-normal">Provide your industry category or brand</span>
                  </div>
                  <span className="text-gray-500 text-sm">2:16</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-gray-300 font-normal">Explore inventory by market</span>
                  </div>
                  <span className="text-gray-500 text-sm">2:12</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-gray-300 font-normal">Explore inventory by POI</span>
                  </div>
                  <span className="text-gray-500 text-sm">3:47</span>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-gray-400">
                <span className="mr-4">Watch time:</span>
                <span>7 min 32 sec</span>
              </div>
            </div>
            
            <div className="bg-gray-200 aspect-video rounded-lg"></div>
          </div>
        </section>

        {/* Lesson 2 */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="bg-gray-200 aspect-video rounded-lg lg:order-1"></div>
            
            <div className="lg:order-2">
              <h2 className="text-2xl font-bold mb-4">
                Lesson 2: Convert your strategy into a plan
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed font-normal">
                Transform your strategy into actionable campaign plans with precise budget allocation and timeline management.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-gray-300 font-normal">Set budget and dates</span>
                  </div>
                  <span className="text-gray-500 text-sm">3:15</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-gray-300 font-normal">Refine plan or make revisions</span>
                  </div>
                  <span className="text-gray-500 text-sm">4:20</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-gray-300 font-normal">Finalize and share campaign plan</span>
                  </div>
                  <span className="text-gray-500 text-sm">1:24</span>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-gray-400">
                <span className="mr-4">Watch time:</span>
                <span>7 min 38 sec</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lesson 3 */}
        <section>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Lesson 3: Brainstorm ideas for your brand/industry
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed font-normal">
                Generate creative insights and strategic recommendations tailored specifically to your brand and industry vertical.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-gray-300 font-normal">Get strategic recommendations for my brand</span>
                  </div>
                  <span className="text-gray-500 text-sm">2:24</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-gray-300 font-normal">Automate unique selling points and differentiators</span>
                  </div>
                  <span className="text-gray-500 text-sm">3:42</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-gray-300 font-normal">Target relevant to my brand</span>
                  </div>
                  <span className="text-gray-500 text-sm">2:39</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="text-gray-300 font-normal">Discover my brand should use DOOH advertising</span>
                  </div>
                  <span className="text-gray-500 text-sm">1:50</span>
                </div>
              </div>
              
              <div className="mt-6 text-sm text-gray-400">
                <span className="mr-4">Watch time:</span>
                <span>5 min 40 sec</span>
              </div>
            </div>
            
            <div className="bg-gray-200 aspect-video rounded-lg"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
