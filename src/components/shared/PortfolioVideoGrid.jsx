import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

function VideoCard({ video, index, provider }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const embedSrc =
    provider === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0&modestbranding=1&playsinline=1`
      : `https://player.vimeo.com/video/${video.videoId}?dnt=1&title=0&byline=0&portrait=0`;

  return (
    <Reveal key={video.id} delay={index * 80} variant="clip">
      <div
        ref={ref}
        className="aspect-video rounded-xl overflow-hidden sm-glass group cursor-pointer border border-brand-pulse/10 sm-tilt relative bg-black"
      >
        {visible ? (
          <iframe
            title={video.title}
            loading="lazy"
            className="w-full h-full"
            src={embedSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <img
            loading="lazy"
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            src={video.thumbnail}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Icon name="play_circle" filled className="text-white !text-6xl drop-shadow-lg" />
        </div>
      </div>
    </Reveal>
  );
}

export function PortfolioVideoGrid({ items, provider }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24">
      {items.map((video, index) => (
        <VideoCard key={video.id} video={video} index={index} provider={provider} />
      ))}
    </div>
  );
}
