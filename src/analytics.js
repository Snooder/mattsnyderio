import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize("G-C5Y22VFQS1"); // Replace with your GA4 Tracking ID
  console.log("Google Analytics Initialized with Tracking ID: G-C5Y22VFQS1");
};

// Log page views (when navigating between pages)
export const logPageView = () => {
  const page = window.location.pathname; // Get current page path
  ReactGA.send({ hitType: "pageview", page: page });
  console.log(`Page View Logged | Page: ${page}`); // Add console log to indicate the page view
};

// Log custom events (such as navigation clicks)
export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
  console.log(`Event Logged | Category: ${category}, Action: ${action}, Label: ${label}`); // Add console log to indicate event details
};
