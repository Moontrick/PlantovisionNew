'use client';
import { Tooltip as MUITooltip} from '@mui/material';
import { IconButton } from '@mui/material';
import { TooltipProps } from './types';

export function Tooltip({
    title,
  placement,
  children,
  isOpen,
  onClose,
}: TooltipProps) {

  return (
    <MUITooltip title={title} placement={placement} 
            slotProps={{
              tooltip: {
                sx: {
                  backgroundColor: 'var(--unique-white-10) !important',
                  color: 'var(--sapphire-20)',
                  borderRadius: '10px',
                  border: '1px solid var(--steel-20)',
                  fontSize: '12px',
                  fontWeight: '400',
                  margin: '10px 0px 0px 0px  !important',
                },
              },
            }}
          > 
        {children}
    </MUITooltip>
  );
}
