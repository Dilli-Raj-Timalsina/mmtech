import React, { useRef, useEffect } from "react";

interface InteractiveDotsProps {
  className?: string;
  color?: string;
  density?: number; // Dots per 100 square pixels
  speed?: number; // 1-10, how fast dots react
  variation?: number; // How much dots vary in size
}

const InteractiveDots: React.FC<InteractiveDotsProps> = ({
  className = "",
  color = "rgba(80, 70, 229, 0.4)",
  density = 0.05,
  speed = 5,
  variation = 0.5,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Adjust canvas size to container
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Calculate dot count based on area and density
    const area = canvas.width * canvas.height;
    const dotCount = Math.floor((area * density) / 100);

    // Dot properties
    interface Dot {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
    }

    const dots: Dot[] = [];
    let mousePosition = { x: null as number | null, y: null as number | null };

    // Create dots
    for (let i = 0; i < dotCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * variation + 1; // Size varies based on variation

      dots.push({
        x,
        y,
        size,
        baseX: x,
        baseY: y,
        density: Math.random() * 30 + 1,
      });
    }

    // Mouse event listeners
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.x = event.clientX - rect.left;
      mousePosition.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mousePosition.x = null;
      mousePosition.y = null;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach((dot) => {
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        // Attract to mouse or return to base position
        if (mousePosition.x !== null && mousePosition.y !== null) {
          // Calculate distance to mouse
          const dx = mousePosition.x - dot.x;
          const dy = mousePosition.y - dot.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;

          // Move toward mouse if within range
          if (distance < maxDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (maxDistance - distance) / maxDistance;
            const directionX =
              forceDirectionX * force * dot.density * (speed / 5);
            const directionY =
              forceDirectionY * force * dot.density * (speed / 5);

            dot.x += directionX;
            dot.y += directionY;
          } else {
            // Return to base position
            if (dot.x !== dot.baseX) {
              const dx = dot.baseX - dot.x;
              dot.x += dx / 20;
            }
            if (dot.y !== dot.baseY) {
              const dy = dot.baseY - dot.y;
              dot.y += dy / 20;
            }
          }
        } else {
          // Return to base position
          if (dot.x !== dot.baseX) {
            const dx = dot.baseX - dot.x;
            dot.x += dx / 20;
          }
          if (dot.y !== dot.baseY) {
            const dy = dot.baseY - dot.y;
            dot.y += dy / 20;
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [color, density, speed, variation]);

  return (
    <div
      ref={containerRef}
      className={`interactive-dots-container relative ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
    </div>
  );
};

export default InteractiveDots;
