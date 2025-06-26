import { SvgTypesProps } from '@/shared/types/SvgTypes';

export function IconRightChevron({
  fill = 'var(--sapphire-20)',
  width = 4,
  height = 8,
  rotate,
}: SvgTypesProps & {rotate?: string}) {
  return (
    <svg width={width} height={height} viewBox="0 0 4 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: rotate ? rotate : 'rotate(0deg)'}}>
        <path d="M0.5 7L3.5 4L0.5 1" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
