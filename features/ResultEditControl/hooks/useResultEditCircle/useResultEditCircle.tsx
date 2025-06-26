
import { useAnchorEl } from '@/hooks/useAnchorEl';
import { MouseEvent, useEffect, useState } from 'react';


export function useResultEditCircle() {
  const [anchorEl, openPopover, closePopover] = useAnchorEl();
    const [color, setColor] = useState<string>('#FFFFFF')
    const [width, setWidth] = useState<string>('30')
    const [height, setHeight] = useState<string>('30')
    const [radius, setRadius] = useState<string>('15')
    const [text, setText] = useState<string>('')
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
    width,
    setWidth,
    height,
    setHeight,
    radius,
    setRadius,
    text,
    setText
  };
}
