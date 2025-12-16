// Shared Upstash + polling config for Qrypto console pages.
// NOTE: Anything in this file is still public on GitHub Pages.
// Keep write-capable tokens OUT of here.

// Upstash Redis REST API
window.UPSTASH_REST_URL = "https://guided-spider-19708.upstash.io";
window.UPSTASH_READ_TOKEN = "Akz8AAIgcDE18SAeYebRfjHOi1t_RtbOFNv2r3NHF0kLYfDIUMnEOw";

// Poll intervals
window.QRYPTO_PULL_INTERVAL_MS = 600000;

// Feed (trade/event messages)
window.QRYPTO_FEED_LIST_KEY = "log:events";
window.QRYPTO_FEED_LIMIT = 80;
window.QRYPTO_FEED_POLL_MS = 5000;
