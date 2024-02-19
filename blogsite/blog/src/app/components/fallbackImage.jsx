import fallback from "./favicon.ico";

function ImageWithFallback({ src, alt, fallBackSrc = fallback.src }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ height: "100%", aspectRatio: "1 / 1", objectFit: "cover" }}
      onError={(e) => (e.currentTarget.src = fallBackSrc)}
    />
  );
}

export default ImageWithFallback;
