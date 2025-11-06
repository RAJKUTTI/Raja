// src/app/components/ClientWrapper.js

"use client"; // This component is specifically for client-side logic

import { useEffect } from 'react';

export default function ClientWrapper({ children }) {
  // This hook adds the event listener to disable right-click
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Add the event listener to the document
    document.addEventListener("contextmenu", handleContextMenu);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []); // Empty array ensures this runs only once on mount

  return <>{children}</>;
}