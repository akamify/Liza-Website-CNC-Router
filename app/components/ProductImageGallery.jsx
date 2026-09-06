"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, Eye, Maximize2, X } from "lucide-react";

export default function ProductImageGallery({ images = [], title = "Product Machine" }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const currentImage = images[selectedIndex] || images[0];
  const isLastImage = selectedIndex === images.length - 1;
  const isOutputImage = currentImage.isOutput;

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Container */}
      <div className="relative group overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-md">
        <div className="relative aspect-[4/3] w-full cursor-pointer" onClick={() => setIsZoomOpen(true)}>
          <Image
            src={currentImage.url}
            alt={currentImage.title || title}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={selectedIndex === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Top Badge */}
          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            {isOutputImage ? (
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg ${isLastImage ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500 animate-pulse' : 'bg-emerald-600'}`}>
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                {currentImage.tag || (isLastImage ? "Final Machine Output ✨" : "Finished Output")}
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-400 border border-cyan-500/30 shadow-md">
                <Eye className="w-3.5 h-3.5" />
                {currentImage.tag || "Machine View"}
              </span>
            )}
          </div>

          {/* Zoom Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomOpen(true);
            }}
            className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition-all shadow-md hover:scale-110 cursor-pointer"
            title="Full view"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <p className="text-sm font-semibold text-white/90 drop-shadow-sm">
              {currentImage.title}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/20 opacity-90 transition-all hover:scale-110 hover:bg-slate-900 hover:opacity-100 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white backdrop-blur-md border border-white/20 opacity-90 transition-all hover:scale-110 hover:bg-slate-900 hover:opacity-100 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Output Highlight Banner when an Output image is selected */}
      {isOutputImage && (
        <div className="rounded-2xl border border-amber-300/60 bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-teal-500/10 p-4 backdrop-blur-xs shadow-xs">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-slate-950 font-bold shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-amber-700">
                {isLastImage ? "Final Machine Output Result" : "Finished Machine Output Sample"}
              </p>
              <p className="mt-0.5 text-xs text-slate-700 font-semibold leading-relaxed">
                This image displays an actual finished wood carving / routed output produced by the <span className="font-bold text-slate-900">{title}</span>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div>

          <div className="grid grid-cols-4 sm:grid-cols-6 gap-2.5">
            {images.map((img, idx) => {
              const isSelected = idx === selectedIndex;
              const isLast = idx === images.length - 1;
              return (
                <button
                  key={img.url + idx}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`group/thumb relative aspect-[4/3] overflow-hidden rounded-xl border-2 transition-all cursor-pointer ${
                    isSelected
                      ? "border-cyan-600 ring-2 ring-cyan-600/30 scale-[1.02] shadow-sm"
                      : "border-slate-200 hover:border-slate-400 opacity-75 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.title || `Thumbnail ${idx + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                  {img.isOutput && (
                    <span className="absolute bottom-1 right-1 rounded-md bg-emerald-600 p-0.5 text-white shadow-xs">
                      <Sparkles className="w-3 h-3" />
                    </span>
                  )}
                  {isLast && (
                    <span className="absolute top-1 left-1 rounded bg-amber-500 px-1 py-0.5 text-[9px] font-black text-slate-950 uppercase">
                      LAST
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isZoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <button
            type="button"
            onClick={() => setIsZoomOpen(false)}
            className="absolute top-4 right-4 z-50 p-3 text-white/80 hover:text-white bg-white/10 rounded-full hover:bg-white/20 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full max-h-[85vh] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={currentImage.url}
              alt={currentImage.title || title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-4 left-4 right-4 text-center bg-slate-900/80 backdrop-blur-md py-3 px-6 rounded-xl border border-white/10 max-w-xl mx-auto">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block">
                {currentImage.tag}
              </span>
              <p className="text-sm font-semibold text-white mt-1">
                {currentImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
