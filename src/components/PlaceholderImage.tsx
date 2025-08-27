interface PlaceholderImageProps {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export default function PlaceholderImage({
  width = 400,
  height = 300,
  text = "Placeholder",
  className = "",
  bgColor = "#e5e7eb",
  textColor = "#6b7280",
}: PlaceholderImageProps) {
  const fontSize = Math.min(width, height) / 8;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={`w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill={bgColor} />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={fontSize}
        fill={textColor}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="500"
      >
        {text}
      </text>
    </svg>
  );
}
