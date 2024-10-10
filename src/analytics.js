import ReactGA from "react-ga4";

// Initialize Google Analytics using Vite environment variable
export const initGA = () => {
  const trackingID = import.meta.env.VITE_GA_TRACKING_ID; // Access Vite environment variable
  if (trackingID) {
    ReactGA.initialize(trackingID);
    // console.log("Google Analytics Initialized with Tracking ID:", trackingID);
  } else {
    console.warn("Google Analytics Tracking ID not set. Please define VITE_GA_TRACKING_ID in .env.");
  }
};

// Log page views (when navigating between pages)
export const logPageView = () => {
  const page = window.location.pathname; // Get current page path
  ReactGA.send({ hitType: "pageview", page: page });
  // console.log(`Page View Logged | Page: ${page}`); // Add console log to indicate the page view
};

// Log custom events (such as navigation clicks)
export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
  // console.log(`Event Logged | Category: ${category}, Action: ${action}, Label: ${label}`); // Add console log to indicate event details
};
