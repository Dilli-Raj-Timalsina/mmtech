import React, { useEffect, useRef } from "react";

interface Dot {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  pulseSpeed: number;
  pulseDirection: number;
  maxSize: number;
  cluster: number; // Which cluster this dot belongs to
}

const BackgroundDots = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Set canvas size to match window
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Define four cluster centers (positioned at four corners/areas of the screen)
    const clusters = [
      { x: canvas.width * 0.15, y: canvas.height * 0.2 }, // top left
      { x: canvas.width * 0.85, y: canvas.height * 0.2 }, // top right
      { x: canvas.width * 0.25, y: canvas.height * 0.85 }, // bottom left
      { x: canvas.width * 0.8, y: canvas.height * 0.75 }, // bottom right
    ];

    // Generate significantly fewer dots
    const dotsPerCluster = Math.floor(window.innerWidth / 60); // Reduced density
    const dots: Dot[] = [];

    const generateDot = (clusterIndex: number): Dot => {
      // Cluster center
      const center = clusters[clusterIndex];

      // Random radius from center, creating a concentrated mesh
      const radius = Math.random() * (canvas.width * 0.2);
      const angle = Math.random() * Math.PI * 2;

      // Position within cluster
      const x = center.x + Math.cos(angle) * radius;
      const y = center.y + Math.sin(angle) * radius;

      // Reduced opacity colors
      const colors = [
        "rgba(80, 70, 229, 0.35)", // primary blue
        "rgba(120, 95, 240, 0.3)", // accent purple
        "rgba(90, 90, 120, 0.25)", // dark grey
        "rgba(130, 130, 180, 0.3)", // slate blue-grey
      ];

      const size = Math.random() * 2 + 0.8; // Slightly smaller
      return {
        x: x,
        y: y,
        baseX: x, // Base position to return to
        baseY: y,
        size: size,
        maxSize: size * (Math.random() * 0.3 + 1.05), // Reduced pulsing
        speedX: (Math.random() - 0.5) * 0.2, // Slower movement
        speedY: (Math.random() - 0.5) * 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.25 + 0.15, // Lower opacity
        pulseSpeed: Math.random() * 0.01 + 0.003, // Slower pulsing
        pulseDirection: 1,
        cluster: clusterIndex, // Remember which cluster this dot belongs to
      };
    };

    // Generate dots for each cluster
    for (let c = 0; c < clusters.length; c++) {
      for (let i = 0; i < dotsPerCluster; i++) {
        dots.push(generateDot(c));
      }
    }

    // Draw dots and connections
    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections only within the same cluster
      dots.forEach((dot, i) => {
        dots.forEach((otherDot, j) => {
          if (i !== j && dot.cluster === otherDot.cluster) {
            // Only connect dots in same cluster
            const dx = dot.x - otherDot.x;
            const dy = dot.y - otherDot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 80; // Shorter connection distance

            if (distance < maxDistance) {
              // More subtle connection lines
              const opacity = 0.06 * (1 - distance / maxDistance);
              ctx.beginPath();
              ctx.strokeStyle = `rgba(100, 100, 160, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(dot.x, dot.y);
              ctx.lineTo(otherDot.x, otherDot.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw dots with pulsing effect
      dots.forEach((dot) => {
        // Pulse effect - more subtle
        if (dot.size >= dot.maxSize) dot.pulseDirection = -1;
        else if (dot.size <= dot.maxSize * 0.8) dot.pulseDirection = 1;

        dot.size += dot.pulseSpeed * dot.pulseDirection;

        // Draw with subtle glow
        const glow = dot.size * 1.3;

        // Outer glow
        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          glow
        );
        gradient.addColorStop(0, dot.color);
        gradient.addColorStop(1, "rgba(100, 100, 160, 0)");

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, glow, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Main dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();

        // Move dots with slight randomness but always tend toward base position
        if (Math.random() > 0.95) {
          dot.speedX += (Math.random() - 0.5) * 0.01;
          dot.speedY += (Math.random() - 0.5) * 0.01;

          // Limit speed
          dot.speedX = Math.max(Math.min(dot.speedX, 0.3), -0.3);
          dot.speedY = Math.max(Math.min(dot.speedY, 0.3), -0.3);
        }

        // Always add a tiny attraction back to base position (creates gravitational effect)
        const dx = dot.baseX - dot.x;
        const dy = dot.baseY - dot.y;
        dot.speedX += dx * 0.0005;
        dot.speedY += dy * 0.0005;

        dot.x += dot.speedX;
        dot.y += dot.speedY;

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) {
          dot.speedX *= -0.9;
          dot.x = dot.x < 0 ? 0 : canvas.width;
        }
        if (dot.y < 0 || dot.y > canvas.height) {
          dot.speedY *= -0.9;
          dot.y = dot.y < 0 ? 0 : canvas.height;
        }
      });

      requestAnimationFrame(drawDots);
    };

    drawDots();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
    />
  );
};

export default BackgroundDots;
