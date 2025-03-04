
import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  glassEffect = false,
  ...props 
}) => {
  return (
    <div
      className={cn(
        "rounded-xl p-6 transition-all duration-300 hover:shadow-lg",
        glassEffect ? "glass-card" : "bg-muted",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
