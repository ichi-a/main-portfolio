"use client"
import { useEffect } from "react"


export const ScrollBg = () => {

  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty("--scroll-y",window.scrollY.toString());
    };
    window.addEventListener("scroll",handleScroll,{passive: true});
      return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return null
};
