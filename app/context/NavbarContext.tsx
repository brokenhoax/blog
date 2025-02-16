"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for our context state
interface NavbarContextType {
  isExpanded: boolean;
  toggleExpanded: () => void;
}

// Create the context with an initial empty state
const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// Create a provider component to wrap the app with
export const NavbarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <NavbarContext.Provider value={{ isExpanded, toggleExpanded }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Custom hook to use the NavbarContext
export const useNavbar = (): NavbarContextType => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};
