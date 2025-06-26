import { CSSProperties, ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  label: string;
  footer?: ReactNode;
  startIconLabel?: ReactNode;
  children?: ReactNode;
  isBackground?: boolean;
  isCloseIcon?: boolean;
  styleContainer?: CSSProperties ;
};
