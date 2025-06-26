import { popoverClasses } from '@mui/material';
import { StyledPopover } from './styled';
import { PopoverProps } from './types';

export function Popover({
  anchorOrigin,
  transformOrigin,
  children,
  padding = '12px',
  ...props
}: PopoverProps) {
  return (
    <StyledPopover
      // slotProps={{
      //   root: {
      //     sx:{
      //       padding: '0px !important',
      //     }},
      //   paper: {
      //     sx:{
      //       padding: '0px !important',
      //     }}
      // }}
      sx={{
        [`& .${popoverClasses.paper}`]: {
          padding: `${padding} !important`,
        },
      }}
      anchorOrigin={
        anchorOrigin ?? {
          vertical: 'bottom',
          horizontal: 'left',
        }
      }
      transformOrigin={
        transformOrigin ?? {
          vertical: 'top',
          horizontal: 'left',
        }
      }
      {...props}
    >
      {children}
    </StyledPopover>
  );
}
