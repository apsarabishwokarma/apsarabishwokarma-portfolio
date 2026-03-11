"use client";

import useCanvasCursor from "@/hooks/useCanvasCursor";
import { useEffect, useState } from "react";

const CURSOR_STORAGE_KEY = "cursor-enabled";
const CURSOR_PREF_EVENT = "cursor-preference-change";

const CanvasCursor = () => {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const savedCursorPreference = window.localStorage.getItem(
      CURSOR_STORAGE_KEY
    );
    if (savedCursorPreference !== "true" && savedCursorPreference !== "false") {
      window.localStorage.setItem(CURSOR_STORAGE_KEY, "true");
    }
    setEnabled(savedCursorPreference !== "false");

    const handleCursorPreferenceChange = (event: Event) => {
      const customEvent = event as CustomEvent<{ enabled?: boolean }>;
      setEnabled(customEvent.detail?.enabled !== false);
    };

    document.addEventListener(CURSOR_PREF_EVENT, handleCursorPreferenceChange);

    return () => {
      document.removeEventListener(
        CURSOR_PREF_EVENT,
        handleCursorPreferenceChange
      );
    };
  }, []);

  useCanvasCursor(enabled);

  if (!enabled) {
    return null;
  }

  return <canvas className="pointer-events-none fixed inset-0" id="canvas" />;
};
export default CanvasCursor;
