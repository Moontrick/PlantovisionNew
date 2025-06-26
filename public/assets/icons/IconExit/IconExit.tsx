
import { SvgTypesProps } from '@/shared/types/SvgTypes';

export function IconExit({
  fill = 'var(--sapphire-20)',
  width = 24,
  height = 24,
}: SvgTypesProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 6L18 18" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  );
}
