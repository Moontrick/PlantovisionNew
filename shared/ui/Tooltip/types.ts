  import { ReactElement, ReactNode } from 'react';
  export type TooltipProps = {
    title: ReactNode;
    placement: 'top' | 'bottom' | 'left' | 'right';
    children: ReactElement<any, any>;
    isOpen?: boolean;
    onClose?: () => void;
  };
