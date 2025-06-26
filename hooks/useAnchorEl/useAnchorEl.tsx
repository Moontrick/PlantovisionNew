import { useState, MouseEvent } from 'react';

export function useAnchorEl(init: HTMLElement | null = null) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(init);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return [anchorEl, handleOpen, handleClose] as const;
}
