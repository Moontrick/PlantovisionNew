
import { useAnchorEl } from '@/hooks/useAnchorEl';
import { MouseEvent, useEffect, useState } from 'react';


export function useResultEditLine() {
  const [anchorEl, openPopover, closePopover] = useAnchorEl();
    const [color, setColor] = useState<string>('#005EB8')
    const [strokeWidth, setStrokeWidth] = useState<number>(2)
    const [radius, setRadius] = useState<string>('15')
    const [textColor, setTextColor] = useState<string>('#FFFFFF')
    const [fontSize, setFontSize] = useState<string>('14')
  async function handleOpenPopover(event: MouseEvent<HTMLButtonElement>) {
    openPopover(event);
  }


  function handleClosePopover() {
    closePopover();
  }

  
  return {
    anchorEl: {
      anchorEl,
      handleOpenPopover,
      handleClosePopover,
    },
    color,
    setColor,
    strokeWidth, 
    setStrokeWidth,
    radius,
    setRadius,
    textColor,
    setTextColor,
    setFontSize,
    fontSize
  };
}
