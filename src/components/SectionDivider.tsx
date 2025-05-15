import React from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: "wave" | "angle" | "curve" | "arrow";
  flipVertical?: boolean;
  inverted?: boolean;
  height?: number; // Height in pixels
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  className = "",
  variant = "angle",
  flipVertical = false,
  inverted = false,
  height = 80,
}) => {
  const baseStyles = `w-full pointer-events-none`;

  // Choose color based on inverted prop
  const fillColor = inverted ? "fill-background" : "fill-secondary/40";

  // Apply transform based on flipVertical
  const transform = flipVertical ? "rotate-180" : "";

  const renderDivider = () => {
    switch (variant) {
      case "wave":
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ height: `${height}px` }}
            className={cn(baseStyles, fillColor, transform, className)}
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="opacity-100"
            />
          </svg>
        );

      case "angle":
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ height: `${height}px` }}
            className={cn(baseStyles, fillColor, transform, className)}
          >
            <path d="M1200 0L0 0 0 120 1200 0z" className="opacity-100" />
          </svg>
        );

      case "curve":
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ height: `${height}px` }}
            className={cn(baseStyles, fillColor, transform, className)}
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="opacity-100"
            />
          </svg>
        );

      case "arrow":
        return (
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ height: `${height}px` }}
            className={cn(baseStyles, fillColor, transform, className)}
          >
            <path
              d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
              className="opacity-100"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative w-full overflow-hidden">{renderDivider()}</div>
  );
};

export default SectionDivider;
