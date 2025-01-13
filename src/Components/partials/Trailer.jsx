import React from "react";
import ReactPlayer from "react-player";

const Trailer = ({ videoKey }) => {
//   console.log(videoKey);
  const videoUrl = `https://www.youtube.com/watch?v=${videoKey}`;

  return (
    <div className="w-full h-screen absolute top-0 left-0 pt-14 overflow-hidden">
      <div className="w-[90%] h-[90%] mx-auto rounded-lg">
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width="100%"
          height="100%"
          playing={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export default Trailer;
