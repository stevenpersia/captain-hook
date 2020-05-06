import { useState, useRef, useEffect } from "react";

const useFullScreen = () => {
  const [isFS, setIsFS] = useState(false);
  const elementFS = useRef();

  const triggerFS = () => {
    const el = elementFS.current;

    if (el) {
      el.requestFullscreen && el.requestFullscreen();
      el.mozRequestFullScreen && el.mozRequestFullScreen();
      el.webkitRequestFullscreen && el.webkitRequestFullscreen();
      el.msRequestFullscreen && el.msRequestFullscreen();
    }
  };

  const exitFS = () => {
    const elFS = elementFS.current.ownerDocument.fullscreen;

    if (isFS && elFS) {
      document.exitFullscreen();
      document.exitFullscreen && document.exitFullscreen();
      document.mozCancelFullScreen && document.mozCancelFullScreen();
      document.webkitExitFullscreen && document.webkitExitFullscreen();
      document.msExitFullscreen && document.msExitFullscreen();
    }
  };
  
  useEffect(() => {
    const eventHandler = () => {
      setIsFS((val) => !val);
    };
    document.addEventListener("fullscreenchange", eventHandler);
    return () => {
      document.removeEventListener("fullscreenchange", eventHandler);
    };
  }, [setIsFS])

  return { elementFS, triggerFS, exitFS, isFS };
};

export default useFullScreen;
