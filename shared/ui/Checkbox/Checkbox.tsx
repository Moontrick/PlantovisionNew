'use client';

import { CheckboxProps } from './type';
import { StyledCheckbox } from './styled';

export function Checkbox(props: CheckboxProps) {
  return <StyledCheckbox {...props} />;
}
