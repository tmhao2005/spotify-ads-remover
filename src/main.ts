const nativeCreateElement = document.createElement;
const videoElements: HTMLVideoElement[] = [];
const halfSecondInMs = 30 * 1000;

// this is the technique to get the video that spotify init
// within its code which can't access to
document.createElement = function (tag: string) {
  const element = nativeCreateElement.apply(this, [tag]);
  if (tag == "video" || tag == "audio") {
    videoElements.push(element);
  }
  return element;
};

const initialize = () => {
  const hasAds = () => document.querySelector(`[data-testadtype="ad-type-ad"]`);
  setInterval(() => {
    if (hasAds()) {
      // seek up to 30s
      console.log("ads detected");
      for (const elem of videoElements) {
        elem.currentTime = halfSecondInMs;
      }
      // clearInterval(interval);
    }
  }, 500);
  console.log("script installed");
};

window.onload = function () {
  initialize();

  // debug code
  const timeout = setTimeout(() => {
    window.spotifyVideos = videoElements;
    clearInterval(timeout);
  }, 5000);
};
