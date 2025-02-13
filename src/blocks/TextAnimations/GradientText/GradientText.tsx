import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[]; // ✅ เพิ่ม colors ให้รองรับ props
  animationSpeed?: number;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ff0000", "#00ff00", "#0000ff"], // ✅ ค่าเริ่มต้นเป็น RGB เห็นชัด
  animationSpeed = 1,
}: GradientTextProps) {
  return (
    <span
      className={`text-4xl font-bold bg-clip-text text-transparent animate-gradientMove ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        animation: `gradientMove ${animationSpeed}s ease infinite`,
      }}
    >
      {children}
    </span>
  );
}
