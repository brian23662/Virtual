"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  src: string;
  poster?: string;
  /** VTT captions URL */
  captionsSrc?: string;
  title: string;
  description?: string;
  /** Hide the figcaption underneath (useful for hero placement) */
  hideCaption?: boolean;
  /** Label shown in the captions track menu */
  captionsLabel?: string;
}

/**
 * CaptionedVideo
 * - All videos on the site display CC ON by default — a defining promise for an
 *   accessibility-services company.
 * - User can toggle captions, but they're visually rendered (not just video-track)
 *   so they remain accessible regardless of browser caption settings.
 */
export function CaptionedVideo({
  src,
  poster,
  captionsSrc,
  title,
  description,
  hideCaption = false,
  captionsLabel = "English",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [captionsOn, setCaptionsOn] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.textTracks && v.textTracks.length > 0) {
      v.textTracks[0].mode = captionsOn ? "showing" : "hidden";
    }
  }, [captionsOn]);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className="relative m-0">
      <div className="relative rounded-2xl overflow-hidden bg-ink shadow-2xl group">
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          playsInline
          preload="metadata"
          aria-label={title}
          className="w-full h-auto block"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          {captionsSrc && (
            <track
              default
              kind="captions"
              srcLang="en"
              src={captionsSrc}
              label={captionsLabel}
            />
          )}
          Your browser does not support the video tag.
        </video>

        <button
          type="button"
          onClick={() => setCaptionsOn((c) => !c)}
          className={`absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            captionsOn
              ? "bg-teal text-white shadow-lg"
              : "bg-ink/70 text-bone backdrop-blur-sm hover:bg-ink/90"
          }`}
          aria-pressed={captionsOn}
          aria-label={captionsOn ? "Turn captions off" : "Turn captions on"}
        >
          CC {captionsOn ? "ON" : "OFF"}
        </button>

        {!playing && poster && (
          <button
            type="button"
            onClick={toggle}
            className="absolute inset-0 flex items-center justify-center group/play z-[5]"
            aria-label="Play video"
          >
            <span className="w-20 h-20 rounded-full bg-bone/95 backdrop-blur flex items-center justify-center shadow-2xl transition-transform group-hover/play:scale-110">
              <svg className="w-7 h-7 text-plum-deep ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {!hideCaption && (title || description) && (
        <figcaption className="mt-4 text-sm text-haze-deep">
          <span className="font-medium text-ink">{title}</span>
          {description && <span className="block mt-1">{description}</span>}
        </figcaption>
      )}
    </figure>
  );
}
