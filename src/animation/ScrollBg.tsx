"use client"
import { useEffect, useState, useRef } from "react"

export const useScrollManager = () => {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // パララックス用
      document.documentElement.style.setProperty("--scroll-y", currentScrollY.toString());

      // ヘッダー出し入れ用（100px以上スクロールした時だけ判定）
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false); // 下スクロールで隠す
      } else {
        setIsVisible(true);  // 上スクロールで出す
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isVisible;
};
