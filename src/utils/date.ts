// Small date helpers (kept framework-agnostic)

/** Format an ISO date string to a compact, locale-aware label */
export function fmt(dateIso: string, locale = "en-GB") {
  const d = new Date(dateIso);
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}

/**
 * Format a date range. If endDate is omitted or equal to start, returns single date.
 */
export function fmtRange(startIso: string, endIso?: string, locale = "en-GB") {
  if (!endIso || startIso === endIso) return fmt(startIso, locale);
  return `${fmt(startIso, locale)} — ${fmt(endIso, locale)}`;
}

/** Sort helpers */
export function byStartAsc(a: { startDate: string }, b: { startDate: string }) {
  return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
}
export function byEndDesc(
  a: { startDate: string; endDate?: string },
  b: { startDate: string; endDate?: string }
) {
  const ae = new Date(a.endDate || a.startDate).getTime();
  const be = new Date(b.endDate || b.startDate).getTime();
  return be - ae;
}
