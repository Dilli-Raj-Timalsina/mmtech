import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  onClick?: () => void;
  strength?: number; // Magnetic pull strength (1-10)
}

const MagneticButton = ({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  strength = 5,
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Calculate magnetic pull based on mouse position
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();

    // Calculate center of button
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from mouse to center
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    // Calculate pull effect (stronger when closer to button)
    // Normalize by strength factor (1-10)
    const maxDistance = Math.max(width, height) * 0.5;
    const pullFactor = (strength / 10) * 0.8; // Scale down to avoid too extreme movement

    // Only apply effect within a certain radius
    if (
      Math.abs(distanceX) < maxDistance &&
      Math.abs(distanceY) < maxDistance
    ) {
      setPosition({
        x: distanceX * pullFactor,
        y: distanceY * pullFactor,
      });
    } else {
      // Reset when mouse is too far
      setPosition({ x: 0, y: 0 });
    }
  };

  // Reset position on mouse leave
  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  // Apply smooth transition back to original position
  useEffect(() => {
    if (!isHovered && (position.x !== 0 || position.y !== 0)) {
      const timeout = setTimeout(() => {
        setPosition({ x: 0, y: 0 });
      }, 150);

      return () => clearTimeout(timeout);
    }
  }, [isHovered, position]);

  return (
    <div
      className="magnetic-wrapper inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        ref={buttonRef}
        className={`transition-transform ${className}`}
        variant={variant}
        size={size}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.5s ease-out",
        }}
      >
        {children}
      </Button>
    </div>
  );
};

export default MagneticButton;
