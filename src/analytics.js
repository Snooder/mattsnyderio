// Initialize Google Analytics using Vite environment variable with gtag.js
export const initGA = () => {
  const trackingID = import.meta.env.VITE_GA_TRACKING_ID;
  if (trackingID) {
    // Load gtag.js
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingID}`;
    document.head.appendChild(script1);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", trackingID);
  } else {
    console.warn("Google Analytics Tracking ID not set.");
  }
};

// Log page views (when navigating between pages)
export const logPageView = () => {
  const page_path = window.location.pathname; // Get current page path
  window.gtag("event", "page_view", { page_path });
  console.log(`Page View Logged | Page Path: ${page_path}`);
};

// Log custom events (maintaining same function signature)
export const logEvent = (category, action, label) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
  });
  console.log(`Event Logged | Category: ${category}, Action: ${action}, Label: ${label}`);
};
