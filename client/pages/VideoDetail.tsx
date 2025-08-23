import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

// Lesson data structure
const lessonsData = {
  lesson1: {
    title: "Lesson 1: Establish an optimal strategy",
    description:
      "Start by defining your campaign goals and target audience. Our AI analyzes your industry and brand to provide data-driven recommendations that align with your objectives.",
    watchTime: "7min 32 sec",
    videos: {
      video1: {
        title: "Provide your industry category or brand",
        duration: "2:16",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      },
      video2: {
        title: "Explore inventory by market",
        duration: "2:12",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      },
      video3: {
        title: "Explore inventory by POI",
        duration: "3:47",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      },
    },
    next: {
      title: "Convert your strategy into a plan",
      route: "/video/lesson2/video1",
    },
  },
  lesson2: {
    title: "Lesson 2: Convert your strategy into a plan",
    description:
      "Transform your strategy into actionable campaign plans with precise budget allocation and timeline management.",
    watchTime: "7min 38 sec",
    videos: {
      video1: {
        title: "Set budget and dates",
        duration: "3:15",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      },
      video2: {
        title: "Refine plan or make revisions",
        duration: "4:20",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      },
      video3: {
        title: "Finalize and share campaign plan",
        duration: "1:24",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      },
    },
    next: {
      title: "Brainstorm ideas for your brand/industry",
      route: "/video/lesson3/video1",
    },
  },
  lesson3: {
    title: "Lesson 3: Brainstorm ideas for your brand/industry",
    description:
      "Generate creative insights and strategic recommendations tailored specifically to your brand and industry vertical.",
    watchTime: "5min 40 sec",
    videos: {
      video1: {
        title: "Get strategic recommendations for my brand",
        duration: "2:24",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      },
      video2: {
        title: "Automate unique selling points and differentiators",
        duration: "3:42",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      },
      video3: {
        title: "Target relevant to my brand",
        duration: "2:39",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
      },
      video4: {
        title: "Discover my brand should use DOOH advertising",
        duration: "1:50",
        videoUrl:
          "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      },
    },
    next: null,
  },
};

// Custom play icon with white circle and cutout play button
const PlayIconCutout = ({
  className,
  isSelected,
}: {
  className?: string;
  isSelected?: boolean;
}) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    className={`w-5 h-5 flex-shrink-0 ${className || ''}`}
  >
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
      fill={isSelected ? "white" : "white"}
      mask="url(#play-cutout)"
    />
  </svg>
);

export default function VideoDetail() {
  const { lessonId, videoId } = useParams<{
    lessonId: string;
    videoId: string;
  }>();
  const navigate = useNavigate();

  // Get current lesson data
  const currentLesson = lessonsData[lessonId as keyof typeof lessonsData];
  const currentVideo =
    currentLesson?.videos[videoId as keyof typeof currentLesson.videos];
  const videoEntries = Object.entries(currentLesson?.videos || {});

  // State for currently playing video
  const [currentPlayingVideo, setCurrentPlayingVideo] = useState(currentVideo);
  const [currentPlayingVideoId, setCurrentPlayingVideoId] = useState(videoId);

  // Update playing video when URL params change
  useEffect(() => {
    if (currentVideo) {
      setCurrentPlayingVideo(currentVideo);
      setCurrentPlayingVideoId(videoId);
    }
  }, [currentVideo, videoId]);

  // Smooth scroll to top when video changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [lessonId, videoId]);

  // Handle video selection
  const handleVideoSelect = (videoKey: string, video: any) => {
    setCurrentPlayingVideo(video);
    setCurrentPlayingVideoId(videoKey);
    // Update URL without full page reload
    navigate(`/video/${lessonId}/${videoKey}`, { replace: true });
  };

  if (!currentLesson || !currentVideo) {
    return <div>Video not found</div>;
  }

  // Check if this is the last video of lesson 3
  const isLastVideoOfLastLesson =
    lessonId === "lesson3" && videoId === "video4";

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center py-6">
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <span className="text-white text-lg font-bold">Ad</span>
            <span className="text-white text-lg font-light">Aura</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Company
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Platform
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Resources
            </a>
            <button className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-full text-sm font-medium transition-colors text-white">
              Sign Up
            </button>
          </nav>
        </header>
      </div>

      {/* Full width breadcrumb section */}
      <div className="border-t border-b border-white border-opacity-25 py-4">
        <div className="container mx-auto">
          <div className="flex items-center text-sm">
            <Link
              to="/"
              className="text-white font-normal hover:text-white transition-colors"
            >
              Intro to AdAura
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-white font-normal">
              {currentLesson.title}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="pt-8 pb-20">
          {/* Video Title */}
          <h1 className="text-2xl lg:text-3xl font-bold mb-8 leading-tight">
            {currentPlayingVideo?.title}
          </h1>

          {/* Video Player */}
          <div>
            <div className="bg-gray-400 aspect-video rounded-t-lg flex items-center justify-center text-black text-xl font-medium">
              <video
                key={currentPlayingVideo?.videoUrl}
                width="100%"
                height="100%"
                controls
                autoPlay
                className="rounded-t-lg"
              >
                <source src={currentPlayingVideo?.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Video Info Section */}
          <div className="bg-gray-800 rounded-b-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-bold text-lg">
                {currentLesson.title} ({videoEntries.length} Videos)
              </h3>
              <span className="text-white font-bold text-sm">
                Watch time: {currentLesson.watchTime}
              </span>
            </div>

            {/* Video List */}
            <div className="space-y-3">
              {videoEntries.map(([videoKey, video], index) => {
                const isActive = videoKey === currentPlayingVideoId;

                return (
                  <div
                    key={videoKey}
                    onClick={() => handleVideoSelect(videoKey, video)}
                    className={`flex items-center justify-between p-2 rounded transition-colors cursor-pointer group ${
                      isActive
                        ? "text-white bg-primary"
                        : "text-white hover:bg-primary hover:text-white"
                    }`}
                  >
                    <div className="flex items-center">
                      {isActive ? (
                        <PlayIconCutout className="mr-3" isSelected={true} />
                      ) : (
                        <div className="mr-3">
                          <svg width="20" height="20" viewBox="0 0 20 20">
                            <defs>
                              <mask id={`play-cutout-${index}`}>
                                <rect width="20" height="20" fill="white" />
                                <polygon points="8,6 8,14 14,10" fill="black" />
                              </mask>
                            </defs>
                            <circle
                              cx="10"
                              cy="10"
                              r="9"
                              fill="white"
                              mask={`url(#play-cutout-${index})`}
                              className="group-hover:fill-white transition-colors"
                            />
                          </svg>
                        </div>
                      )}
                      <span className="font-normal">{video.title}</span>
                    </div>
                    <span className="text-sm">{video.duration}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Lesson Section */}
          {!isLastVideoOfLastLesson && currentLesson.next && (
            <Link
              to={currentLesson.next.route}
              className="border border-gray-400 rounded-lg p-6 block hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-gray-300 text-sm mb-1">Next Lesson</div>
                  <h4 className="text-white font-normal text-lg">
                    {currentLesson.next.title}
                  </h4>
                </div>
                <div className="bg-white bg-opacity-10 px-4 py-2 rounded text-sm font-normal">
                  Go to {lessonId === "lesson1" ? "lesson 2" : "lesson 3"}
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
