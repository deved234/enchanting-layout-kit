import { useState } from "react";
import { Reveal } from "./Reveal";
import { Icon } from "./Icon";

function VideoCard({ video, index, accent }) {
  const [clicked, setClicked] = useState(false);
  const isMotion = accent === "pulse";
  const playHover = isMotion ? "group-hover:bg-brand-pulse/80" : "group-hover:bg-brand-motion/80";

  const isPortrait = video.orientation === "portrait";
  const aspectClass = isPortrait ? "aspect-[9/16]" : "aspect-video";

  const embedSrc = `https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0&modestbranding=1&autoplay=1&playsinline=1`;

  return (
    <Reveal key={video.id} delay={index * 80} variant="clip">
      <div
        onClick={() => setClicked(true)}
        className={`${aspectClass} rounded-xl overflow-hidden bg-black group cursor-pointer relative shadow-lg hover:shadow-2xl transition-shadow`}
      >
        {clicked ? (
          <iframe
            title={video.title}
            loading="lazy"
            className="w-full h-full"
            src={embedSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <img
              loading="lazy"
              alt={video.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 flex items-center justify-center transition-opacity group-hover:bg-black/40">
              <span
                className={`w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-110 ${playHover} transition-all duration-300`}
              >
                <Icon name="play_arrow" filled className="text-white !text-4xl ms-0.5" />
              </span>
            </div>
            {isPortrait && (
              <span
                className={`absolute top-3 end-3 backdrop-blur-sm text-white text-[10px] px-2 py-0.5 rounded-full border border-white/10 ${isMotion ? "bg-brand-pulse/60" : "bg-brand-motion/60"}`}
              >
                طولي
              </span>
            )}
          </>
        )}
      </div>
    </Reveal>
  );
}

export function PortfolioVideoGrid({ items, accent = "pulse" }) {
  const isMotion = accent === "pulse";

  const landscape = items.filter((v) => v.orientation === "landscape");
  const portrait = items.filter((v) => v.orientation === "portrait");
  const hasOrientation = landscape.length > 0 || portrait.length > 0;

  function colClass(count) {
    if (count <= 2) return "grid-cols-1 sm:grid-cols-2";
    if (count === 3) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 md:grid-cols-4";
  }

  function barClass() {
    return isMotion ? "bg-brand-pulse/40" : "bg-brand-motion/40";
  }

  function labelClass() {
    return isMotion ? "text-brand-muted" : "text-brand-motion";
  }

  if (!hasOrientation) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((video, index) => (
          <VideoCard key={video.id} video={video} index={index} accent={accent} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {landscape.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className={`w-6 h-0.5 rounded-full ${barClass()}`} />
            <span className={`text-xs font-bold tracking-widest ${labelClass()}`}>عرضي</span>
            <span className="h-px grow bg-brand-outline/10" />
          </div>
          <div className={`grid ${colClass(landscape.length)} gap-4 md:gap-6`}>
            {landscape.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} accent={accent} />
            ))}
          </div>
        </div>
      )}

      {portrait.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className={`w-6 h-0.5 rounded-full ${barClass()}`} />
            <span className={`text-xs font-bold tracking-widest ${labelClass()}`}>طولي</span>
            <span className="h-px grow bg-brand-outline/10" />
          </div>
          <div className={`grid ${colClass(portrait.length)} gap-4 md:gap-6 max-w-4xl mx-auto`}>
            {portrait.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                index={landscape.length + index}
                accent={accent}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
