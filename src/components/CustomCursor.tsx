import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Create spring-animated motion values
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Apply spring physics for smooth following
  const springConfig = { damping: 25, stiffness: 300 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Secondary dots with more friction for trail effect
  const trailX = useSpring(cursorX, { damping: 40, stiffness: 150 });
  const trailY = useSpring(cursorY, { damping: 40, stiffness: 150 });

  const trailX2 = useSpring(trailX, { damping: 40, stiffness: 100 });
  const trailY2 = useSpring(trailY, { damping: 40, stiffness: 100 });

  const trailX3 = useSpring(trailX2, { damping: 40, stiffness: 70 });
  const trailY3 = useSpring(trailY2, { damping: 40, stiffness: 70 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Handle cursor over interactive elements
    const handleLinkHoverEnter = () => {
      setIsHovering(true);
    };

    const handleLinkHoverLeave = () => {
      setIsHovering(false);
    };

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea, select, [role='button']"
      );

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleLinkHoverEnter);
        el.addEventListener("mouseleave", handleLinkHoverLeave);
      });

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleLinkHoverEnter);
          el.removeEventListener("mouseleave", handleLinkHoverLeave);
        });
      };
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const removeHoverListeners = addHoverListeners();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      removeHoverListeners();
    };
  }, [cursorX, cursorY]);

  // Only render on client
  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Trail dots */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          x: trailX3,
          y: trailY3,
          translateX: "-50%",
          translateY: "-50%",
          width: "8px",
          height: "8px",
          backgroundColor: "rgba(180, 180, 220, 0.4)",
          opacity: isVisible ? 0.4 : 0,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          x: trailX2,
          y: trailY2,
          translateX: "-50%",
          translateY: "-50%",
          width: "12px",
          height: "12px",
          backgroundColor: "rgba(180, 180, 220, 0.5)",
          opacity: isVisible ? 0.5 : 0,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          width: "16px",
          height: "16px",
          backgroundColor: "rgba(140, 140, 200, 0.6)",
          opacity: isVisible ? 0.6 : 0,
        }}
      />

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {/* Inner dot */}
        <motion.div
          className="bg-white rounded-full"
          initial={{ scale: 1 }}
          animate={{
            scale: isHovering ? 1.4 : 1,
            width: isHovering ? "18px" : "14px",
            height: isHovering ? "18px" : "14px",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          style={{
            boxShadow: "0 0 20px rgba(120, 100, 255, 0.8)",
          }}
        />

        {/* Outer ring */}
        <motion.div
          className="absolute top-0 left-0 rounded-full border-2 border-white"
          initial={{ scale: 1 }}
          animate={{
            scale: isHovering ? 1 : 0.8,
            width: isHovering ? "50px" : "35px",
            height: isHovering ? "50px" : "35px",
            opacity: 0.5,
            x: "-50%",
            y: "-50%",
            translateX: "50%",
            translateY: "50%",
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
