"use client";

import { useCallback, useMemo, useState } from "react";
import { experienceData } from "@/components/experience/experience-data";
import { AnimatePresence, motion } from "framer-motion";
import {
  getTimelineProgressPercent,
  TIMELINE_AUTOPLAY_MS,
  TIMELINE_PROGRESS_DURATION_S,
  useTimelineAutoplay,
} from "@/components/experience/timeline-utils";

export default function WorkExperienceTimeline() {
  const timelineEntries = useMemo(
    () =>
      experienceData.flatMap((company) =>
        company.roles.map((role) => ({
          company: company.company,
          companyTenure: company.tenure,
          companyLocation: company.location,
          ...role,
        }))
      ),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % timelineEntries.length);
  }, [timelineEntries.length]);

  useTimelineAutoplay(true, TIMELINE_AUTOPLAY_MS, timelineEntries.length, goToNext);

  const activeEntry = timelineEntries[activeIndex];
  const progressPercent = getTimelineProgressPercent(
    activeIndex,
    timelineEntries.length
  );
  const edgeInsetPercent = 50 / timelineEntries.length;
  const progressTrackPercent =
    ((100 - edgeInsetPercent * 2) * progressPercent) / 100;

  const skillTags = activeEntry.skills
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

  const bullets = activeEntry.description
    ? activeEntry.description
        .split(". ")
        .map((line) => line.trim())
        .filter(Boolean)
    : [];

  return (
    <section className="mt-24">
      <div className="w-full">
        <p className="mb-4 w-full text-neutral-400 text-left">
          &darr; experience
        </p>

        <div className="relative mt-10 overflow-x-auto pb-6">
          <div className="min-w-[720px] px-3">
            <div className="grid grid-cols-4 gap-6">
              {timelineEntries.map((entry, index) => (
                <button
                  key={`${entry.company}-${entry.title}-${entry.date}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="text-center transition-opacity hover:opacity-100 opacity-90"
                >
                  <p className="text-white font-semibold text-lg leading-tight">
                    {entry.title}
                  </p>
                  <p className="text-sm text-neutral-400 mt-1">{entry.date}</p>
                </button>
              ))}
            </div>

            <div className="relative mt-7 h-8">
              <div
                className="absolute top-1/2 h-px -translate-y-1/2 bg-white/20"
                style={{
                  left: `${edgeInsetPercent}%`,
                  right: `${edgeInsetPercent}%`,
                }}
              />
              <motion.div
                className="absolute top-1/2 h-px -translate-y-1/2 bg-emerald-300"
                style={{ left: `${edgeInsetPercent}%` }}
                animate={{ width: `${progressTrackPercent}%` }}
                transition={{
                  duration: TIMELINE_PROGRESS_DURATION_S,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-0 grid grid-cols-4 gap-6 items-center">
                {timelineEntries.map((entry, index) => (
                  <motion.button
                    key={`${entry.company}-${entry.title}-dot`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="flex justify-center items-center"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className={`h-3.5 w-3.5 rounded-full border transition-all ${
                        index <= activeIndex
                          ? "bg-emerald-300 border-emerald-200"
                          : "bg-neutral-500/80 border-neutral-300/50"
                      }`}
                      animate={
                        index === activeIndex
                          ? {
                              boxShadow: [
                                "0 0 0 5px rgba(110,231,183,0.18)",
                                "0 0 0 10px rgba(110,231,183,0.08)",
                                "0 0 0 5px rgba(110,231,183,0.18)",
                              ],
                            }
                          : hoveredIndex === index
                          ? { boxShadow: "0 0 0 8px rgba(110,231,183,0.16)" }
                          : { boxShadow: "0 0 0 0 rgba(110,231,183,0)" }
                      }
                      transition={{
                        duration: index === activeIndex ? 1.6 : 0.25,
                        repeat: index === activeIndex ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-white/15 bg-white/[0.05] p-3 lg:p-4 shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeEntry.company}-${activeEntry.title}-${activeEntry.date}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-black/25 p-5 lg:p-6"
            >
              <h4 className="text-2xl lg:text-4xl font-bold text-white tracking-tight">
                {activeEntry.title}
              </h4>
              <p className="mt-1 text-neutral-200">
                {activeEntry.type ?? "Full-time"} | {activeEntry.companyTenure}
              </p>
              <p className="text-sm text-neutral-400">
                {activeEntry.company}
                {(activeEntry.location ?? activeEntry.companyLocation) &&
                  ` • ${activeEntry.location ?? activeEntry.companyLocation}`}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skillTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-neutral-200 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {bullets.length > 0 ? (
                <ul className="mt-6 space-y-4 text-neutral-200 text-[15px] lg:text-base">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 leading-7">
                      <span className="mt-3 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span>{bullet.endsWith(".") ? bullet : `${bullet}.`}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
