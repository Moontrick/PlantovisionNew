import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';

export const StyledCheckbox = styled(Checkbox)({
  width: '12px',
  height: '12px',
  [`&.${checkboxClasses.root}`]: {
    color: 'var(--steel-20)',
  },
  [`&.${checkboxClasses.indeterminate}`]: {
    color: 'var(--sapphire-20)',
  },
  [`&.${checkboxClasses.checked}`]: {
    color: 'var(--sapphire-20)',
  },
});
