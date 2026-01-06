export const trackEvent = (
  action: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
};

export const ANALYTICS_EVENTS = {
  LEVEL_START: "level_start",
  LEVEL_END: "level_end",
  LEVEL_RESET: "level_reset",
  SELECT_CONTENT: "select_content",
  CLICK_EXTERNAL_LINK: "click_external_link",
} as const;
