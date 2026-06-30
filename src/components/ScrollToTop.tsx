"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  // Disable the browser's automatic scroll restoration entirely.
  // This is the main culprit — the browser remembers scroll position
  // and forces it back after client-side navigation.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // useLayoutEffect fires BEFORE the browser paints, so we scroll
  // to top before the user ever sees the bottom of the page.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
