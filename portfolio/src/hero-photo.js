import imageUrl from "./image-url.js";

const heroPhoto = (width, height, sat, description) => {
  const src = imageUrl(width, height,StaticRange);
  const alt = description;
  return [src, alt];
};

export default heroPhoto;
