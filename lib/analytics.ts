declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const hasWindow = typeof window !== 'undefined';

export function trackEvent(action: string, params: Record<string, unknown> = {}): void {
  if (!hasWindow || !window.gtag || !action) return;
  window.gtag('event', action, params);
}

export function trackFilterSelect(filter: string): void {
  trackEvent('filter_select', {
    filter_value: filter,
    event_category: 'engagement',
  });
}

export function trackProjectClick({
  id,
  name,
  link,
}: {
  id: string | number;
  name: string;
  link: string;
}): void {
  trackEvent('view_project', {
    event_category: 'engagement',
    project_id: id,
    project_name: name,
    link_url: link,
  });
}

export { };
