import { useEffect, useState } from "react";

const Details = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        setVideoUrl(data.videoUrl);
      } catch (error) {
        console.error("Failed to fetch video:", error);
      }
    };

    if (isPlaying && !videoUrl) {
      fetchVideoUrl();
    }
  }, [isPlaying, videoUrl]);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };
  return (
    <div className="relative mb-6">
      {isPlaying && videoUrl ? (
        <video
          src={videoUrl}
          controls
          autoPlay
          preload="none"
          className="h-72 w-full rounded-lg object-cover"
        />
      ) : (
        <div className="relative">
          <img
            src="/Poster (1).png"
            alt="Movie Trailer Placeholder"
            className="h-[449px] w-full rounded-[20px] object-cover object-center"
          />
          <button
            className="absolute inset-0 mx-auto my-auto flex flex-col items-center justify-center bg-opacity-50 font-bold text-white"
            onClick={handlePlayVideo}
          >
            <div className="flex aspect-square w-[110px] items-center justify-center rounded-[50%] bg-[#E8E8E833] backdrop-blur-[10px]">
              <img src="/Play.svg" alt="playIcon" className="w-[54px]" />
            </div>
            <span className="text-[25px] text-[#E8E8E8]">Watch Trailer</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Details;
