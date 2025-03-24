import { SvgTypesProps } from "../../types/SvgTypes";

export function IconDownload2({
  fill = 'var(--sapphire-10)',
  width = 16,
  height = 16,
}: SvgTypesProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 9.50537H12.2L10.6 11.7554H7.4L5.8 9.50537H1" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3.50537H12.808C13.1057 3.50552 13.3974 3.58351 13.6504 3.73058C13.9033 3.87765 14.1075 4.08796 14.24 4.33787L17 9.50537V14.0054C17 14.4032 16.8314 14.7847 16.5314 15.066C16.2313 15.3473 15.8243 15.5054 15.4 15.5054H2.6C2.17565 15.5054 1.76869 15.3473 1.46863 15.066C1.16857 14.7847 1 14.4032 1 14.0054V9.50537L3.76 4.33787C3.89246 4.08796 4.09666 3.87765 4.34964 3.73058C4.60261 3.58351 4.89433 3.50552 5.192 3.50537H6" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.97168 7.99463V0.494629" stroke={fill} strokeLinecap="round"/>
        <path d="M8.97168 7.99463L11.4717 5.49463" stroke={fill} strokeLinecap="round"/>
        <path d="M8.97168 7.99463L6.47168 5.49463" stroke={fill} strokeLinecap="round"/>
    </svg>
  );
}
