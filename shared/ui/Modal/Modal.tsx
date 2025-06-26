'use client';

import { IconButton } from '@mui/material';
import { useCallback, useEffect, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './types';
import styles from './Modal.module.scss';
import classNames from 'classnames';
import { IconExit } from '@/public/assets/icons/IconExit';

export function Modal({
  isOpen,
  onClose,
  label,
  footer,
  startIconLabel,
  children,
  isBackground,
  isCloseIcon = true,
  styleContainer,
}: ModalProps) {

  const htmlElement = document.documentElement;
  const modalRoot =
    typeof document !== 'undefined'
      ? document.getElementById('modal-root')
      : null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      htmlElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset';
      htmlElement.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset';
      htmlElement.style.overflow = 'unset'
    };
  }, [isOpen]);

  const handleClose = useCallback(
    (e: MouseEvent | KeyboardEvent | Event) => {
      if (e instanceof KeyboardEvent && e.key !== 'Escape') return;
      if (e instanceof Event) return
      onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleClose);
    }
    return () => {
      window.removeEventListener('keydown', handleClose);
    };
  }, [isOpen, handleClose]);

  if (!isOpen || !modalRoot) return <></>;

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div
        className={classNames(!isBackground ? styles.modalContainer : styles.modalContainerWithOutBackground)}
        style={styleContainer}
        
        onClick={(e) => e.stopPropagation()}
      >
        {!isBackground && (
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>
              {startIconLabel}
              <span className={styles.modalLabel}>{label}</span>
            </div>
            {isCloseIcon && (
              <IconButton onClick={onClose} style={{position: 'absolute', right: 0, top: 0}}>
                <IconExit fill="var(--steel-80)" />
              </IconButton>
            )}
          </div>
        )}

        <div className={styles.modalMain} style={{maxHeight: isBackground ? '100dvh' : 'calc(95dvh - 118px)'}}>
          {children}
          </div>

        {footer && <div className={styles.modalFooter}>{footer}</div>}
      </div>
    </div>,
    modalRoot,
  );
}
