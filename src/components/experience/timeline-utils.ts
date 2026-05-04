import { useEffect } from "react";

export const TIMELINE_AUTOPLAY_MS = 50000;
export const TIMELINE_PROGRESS_DURATION_S = 45;

export function getTimelineProgressPercent(
  activeIndex: number,
  totalItems: number
): number {
  if (totalItems <= 1) return 0;
  return (activeIndex / (totalItems - 1)) * 100;
}

export function useTimelineAutoplay(
  enabled: boolean,
  delayMs: number,
  totalItems: number,
  onStep: () => void
) {
  useEffect(() => {
    if (!enabled || totalItems <= 1) return;

    const timeoutId = setTimeout(() => {
      onStep();
    }, delayMs);

    return () => clearTimeout(timeoutId);
  }, [enabled, delayMs, totalItems, onStep]);
}
