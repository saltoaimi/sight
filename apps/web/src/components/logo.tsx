import Image from "next/image";

export function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "white"; className?: string }) {
  return (
    <Image
      src="/logo-white.png"
      alt="Sight"
      width={48}
      height={16}
      className={`${variant === "dark" ? "brightness-0" : ""} ${className}`}
      priority
    />
  );
}
