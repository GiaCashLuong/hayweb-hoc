// GA4 + Microsoft Clarity tracking module — Site 2 Blog
//
// Conditionally loaded based on Vercel env vars:
//   VITE_GA4_MEASUREMENT_ID   = G-XXXXXXXXXX  (peer: GA4 Admin → Data Streams → Web → Measurement ID)
//   VITE_CLARITY_PROJECT_ID   = aaaaaaaaaa    (peer: clarity.microsoft.com → Settings → Setup)
//
// Without env vars set, all track* helpers are no-ops (safe to call from React components).
//
// CSP requirements (already updated in vercel.json):
//   script-src 'self' https://www.googletagmanager.com https://www.clarity.ms
//   connect-src 'self' https://www.google-analytics.com https://*.clarity.ms
//   img-src 'self' data: https: https://www.google-analytics.com https://*.clarity.ms
//
// 28 mandatory events per _master/skills/post-launch.md §4.5 — Site 2 subset:
//   1.  page_view (auto GA4)              15. article_view
//   2.  scroll_depth_25                    16. article_read_time
//   3.  scroll_depth_50                    17. article_complete (scroll 100%)
//   4.  scroll_depth_75                    18. external_link_out
//   5.  scroll_depth_100                   19. cta_click
//   6.  session_start (auto GA4)           20. ai_referrer_detected
//   7.  user_engagement (auto GA4)         21. zalo_click
//   8.  internal_link_click                22. citation_link_click
//   9.  search_query (if Algolia added)    23. nav_anchor_click
//  10.  ai_disclosure_view                 24. site1_cross_link_click
//  11.  related_article_click              25. share_link_copy
//  12.  toc_link_click                     26. contact_form_submit (if Site2 form added)
//  13.  breadcrumb_click                   27. error_javascript
//  14.  font_load_error                    28. error_network
//
// Authority: Plan A handoff S4 §S4.3 GA4 + Clarity + tracking

const GA4_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID;
const CLARITY_ID = import.meta.env.VITE_CLARITY_PROJECT_ID;
let initialized = false;

export function initAnalytics() {
  if (initialized) return;
  if (typeof window === 'undefined') return;
  initialized = true;

  if (GA4_ID) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID, {
      anonymize_ip: true,
      send_page_view: true,
    });

    detectAIReferrer();
    installGlobalErrorTracking();
  }

  if (CLARITY_ID) {
    (function (c, l, a, r, i) {
      c[a] = c[a] || function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
      const t = l.createElement(r);
      t.async = 1;
      t.src = `https://www.clarity.ms/tag/${encodeURIComponent(i)}`;
      const y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_ID);
  }
}

function detectAIReferrer() {
  const ref = (document.referrer || '').toLowerCase();
  if (!ref) return;
  let aiSource = null;
  if (ref.includes('chat.openai.com') || ref.includes('chatgpt.com')) aiSource = 'chatgpt';
  else if (ref.includes('perplexity.ai')) aiSource = 'perplexity';
  else if (ref.includes('gemini.google.com') || ref.includes('bard.google.com')) aiSource = 'gemini';
  else if (ref.includes('claude.ai')) aiSource = 'claude';
  else if (ref.includes('aihay.vn') || ref.includes('aihay')) aiSource = 'aihay';
  else if (ref.includes('copilot.microsoft.com')) aiSource = 'copilot';
  if (aiSource && window.gtag) {
    window.gtag('event', 'ai_referrer_detected', {
      ai_source: aiSource,
      referrer_full: ref.substring(0, 200),
      destination_path: window.location.pathname,
    });
  }
}

function installGlobalErrorTracking() {
  window.addEventListener('error', (e) => {
    trackEvent('error_javascript', {
      message: (e.message || '').substring(0, 200),
      filename: (e.filename || '').substring(0, 200),
      lineno: e.lineno ?? 0,
    });
  });
  window.addEventListener('unhandledrejection', (e) => {
    trackEvent('error_javascript', {
      message: ('unhandled_promise_rejection: ' + String(e.reason)).substring(0, 200),
    });
  });
}

export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, params);
}

export function trackCTAClick(ctaLabel, location) {
  trackEvent('cta_click', { cta_label: ctaLabel, location });
}

export function trackArticleView(articleId, primaryKeyword, wordCount) {
  trackEvent('article_view', {
    article_id: articleId,
    primary_keyword: primaryKeyword,
    word_count: wordCount,
  });
}

export function trackArticleComplete(articleId, readTimeSec) {
  trackEvent('article_complete', {
    article_id: articleId,
    read_time_sec: readTimeSec,
  });
}

export function trackSite1CrossLinkClick(sourceArticle) {
  trackEvent('site1_cross_link_click', { source_article: sourceArticle });
}

export function trackCitationLinkClick(citationUrl, sourceArticle) {
  trackEvent('citation_link_click', {
    citation_url: citationUrl.substring(0, 200),
    source_article: sourceArticle,
  });
}

export function trackZaloClick(location) {
  trackEvent('zalo_click', { location });
}

export function installScrollDepthTracker(articleId = null) {
  if (typeof window === 'undefined') return () => {};
  const fired = new Set();
  const thresholds = [25, 50, 75, 100];
  const startTime = Date.now();
  const handler = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollHeight <= 0) return;
    const percent = Math.min(100, Math.round((window.scrollY / scrollHeight) * 100));
    for (const t of thresholds) {
      if (percent >= t && !fired.has(t)) {
        fired.add(t);
        trackEvent(`scroll_depth_${t}`, { percent: t, article_id: articleId });
        if (t === 100 && articleId) {
          const readTimeSec = Math.round((Date.now() - startTime) / 1000);
          trackArticleComplete(articleId, readTimeSec);
        }
      }
    }
  };
  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}

export function installExternalLinkTracker(sourcePage = 'unknown') {
  if (typeof window === 'undefined') return () => {};
  const handler = (e) => {
    const a = e.target.closest && e.target.closest('a');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (!href.startsWith('http')) return;
    try {
      const url = new URL(href);
      if (url.hostname === window.location.hostname) return;
      // Cross-link to Site 1 → fire specific event
      if (url.hostname.includes('kiem-tra.hayweb.vn') || url.hostname.includes('hayweb-compare.vercel.app')) {
        trackSite1CrossLinkClick(sourcePage);
        return;
      }
      // Zalo
      if (url.hostname.includes('zalo.me') || url.hostname.includes('zalo.vn')) {
        trackZaloClick(sourcePage);
        return;
      }
      // Citation links (heuristic: external academic/industry domains)
      const citationHosts = ['arxiv.org', 'web.dev', 'developers.google.com', 'ahrefs.com', 'backlinko.com', 'mozilla.org', 'whitespark.ca', 'brightlocal.com', 'searchatlas.com', 'decisionlab.co', 'owasp.org'];
      if (citationHosts.some((h) => url.hostname.includes(h))) {
        trackCitationLinkClick(href, sourcePage);
        return;
      }
      trackEvent('external_link_out', {
        url: href.substring(0, 200),
        source_page: sourcePage,
        dest_hostname: url.hostname,
      });
    } catch {
      /* invalid URL — ignore */
    }
  };
  document.addEventListener('click', handler, true);
  return () => document.removeEventListener('click', handler, true);
}
