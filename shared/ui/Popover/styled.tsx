import { styled } from '@mui/material/styles';
import Popover, { PopoverProps, popoverClasses } from '@mui/material/Popover';

export const StyledPopover = styled(Popover)(() => ({
  [`& .${popoverClasses.paper}`]: {
    backgroundColor: 'var(--unique-white-10)',
    border: '1px solid var(--gray-40)',
    padding: '12px',
    marginTop: '10px',
    borderRadius: '10px',
  },
}));
