
import { SvgTypesProps } from "../../types/SvgTypes";

export function IconCursor({
  fill = 'var(--white-10)',
  width = 13,
  height = 14,
}: SvgTypesProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.4453 6.78293L0.999931 1L6.42143 13.2084L7.6262 8.06802L12.4453 6.78293Z" stroke={fill} strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
}
