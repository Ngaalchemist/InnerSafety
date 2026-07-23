import { useMemo } from "react";
import { Leaf, Sparkles, Flower2 } from "lucide-react";

interface StarFieldProps {
  count?: number;
  className?: string;
}

const ICONS = [Leaf, Sparkles, Flower2];

/**
 * Lớp nền "lá & ánh sáng" trang trí cho các section nền tối (rêu đậm #0e1712...).
 * Các icon tâm linh (lá, hoa, ánh sáng) trôi nhẹ nhàng vô hạn — tạo cảm giác luôn chuyển động,
 * sống động nhưng không gây rối mắt. Đặt absolute inset-0 phía sau nội dung section.
 */
export function StarField({ count = 26, className = "" }: StarFieldProps) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 14 + 10,
        delay: Math.random() * 5,
        duration: Math.random() * 5 + 5,
        Icon: ICONS[i % ICONS.length],
      })),
    [count]
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {items.map((s) => (
        <s.Icon
          key={s.id}
          className="absolute"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            color: "#C9A24C",
            animation: `leaf-drift ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
