'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [wishlistedCourses, setWishlistedCourses] = useState([]);

  // Optionally load from local storage if needed later, but we'll keep it simple in-memory for now
  useEffect(() => {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setWishlistedCourses(parsed);
        setWishlistCount(parsed.length);
      } catch (e) {}
    }
  }, []);

  const toggleWishlist = (course) => {
    let updated;
    const isExist = wishlistedCourses.find((c) => c.id === course.id);
    if (isExist) {
      updated = wishlistedCourses.filter((c) => c.id !== course.id);
    } else {
      updated = [...wishlistedCourses, course];
    }
    setWishlistedCourses(updated);
    setWishlistCount(updated.length);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const isInWishlist = (courseId) => {
    return wishlistedCourses.some(c => c.id === courseId);
  };

  return (
    <WishlistContext.Provider value={{ wishlistCount, wishlistedCourses, toggleWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
