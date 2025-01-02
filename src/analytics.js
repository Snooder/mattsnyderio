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
  // console.log(`Page View Logged | Page Path: ${page_path}`);
};

// Log custom key events for GA4
export const logEvent = (eventName, params = {}) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
   //  console.log(`Key Event Logged | Event Name: ${eventName}`, params);
  } else {
    console.warn("Google Analytics gtag is not initialized.");
  }
};
