import React, { useState, useEffect } from "react";
import play from "../assets/play.png";
import prev from "../assets/prev.png";
import repeat from "../assets/repeat.png";
import next from "../assets/next.png";
import shuffle from "../assets/shuffle.png";
import { Container } from "react-bootstrap";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 120;

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => (prev < duration ? prev + 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const playAudio = () => setIsPlaying(true);
  const doubleclick = function () {
    setCurrentTime(0);
    setIsPlaying(false);
    setIsPlaying(true);
  };

  return (
    <Container fluid className="player p-0 position-fixed bottom-0">
      <div className="d-flex gap-5 justify-content-center align-items-center">
        <div onClick={doubleclick}>
          <img style={{ height: "10px" }} src={shuffle} alt="repeat-png" />
        </div>
        <div onClick={doubleclick} disabled={isPlaying}>
          <img style={{ height: "10px" }} src={prev} alt="pause-png" />
        </div>
        <div onClick={playAudio} disabled={!isPlaying}>
          <img style={{ height: "10px" }} src={play} alt="play-png" />
        </div>
        <div onClick={doubleclick}>
          <img style={{ height: "10px" }} src={next} alt="repeat-png" />
        </div>
        <div onClick={doubleclick}>
          <img style={{ height: "10px" }} src={repeat} alt="repeat-png" />
        </div>
      </div>
      <div className="d-flex align-items-baseline justify-content-center gap-3">
        <progress value={currentTime} max={duration} className="w-25 bg-secondary" style={{ height: "5px" }} />
        <p className="text-secondary">
          {currentTime}s / {duration}s
        </p>
      </div>
    </Container>
  );
};

export default Player;
