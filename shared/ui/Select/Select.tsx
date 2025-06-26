'use client';
import {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  cloneElement,
} from 'react';
import classNames from 'classnames';
import { OptionType, SelectProps } from './types';
import styles from './Select.module.scss'; 
import { IconRightChevron } from '@/public/assets/icons/IconRightChevron';
import { Checkbox } from '../Checkbox';
export function Select({
  options,
  selected,
  onSelected,
  onBlur,
  onFocus,
  label = 'Фильтрация',
  width = '100%',
  size = 'm',
  height,
  isDisabled = false,
  fillIcon = 'var(--sapphire-10)',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const selectRef = useRef<HTMLDivElement>(null);

  // Открытие и закрытие списка
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Закрытие списка при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      setHighlightedIndex(-1);
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        onBlur && onBlur();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onBlur]);

  // Обработка выбора опции
  const handleSelect = (option: OptionType, index: number) => {
    if (!option.isDisabled) {
      onSelected(option);
      setHighlightedIndex(index);
      setIsOpen(false);
    }
  };

  // Обработка событий клавиатуры
  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex < options.length - 1 ? prevIndex + 1 : 0,
      );
      setIsOpen(true);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : options.length - 1,
      );
      setIsOpen(true);
    } else if (event.key === 'Enter') {
      if (
        isOpen &&
        highlightedIndex >= 0 &&
        highlightedIndex < options.length
      ) {
        handleSelect(options[highlightedIndex], highlightedIndex);
      }
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={classNames(styles.selectContainer, isOpen && styles.open)}
      ref={selectRef}
      tabIndex={0}
      onFocus={onFocus}
      onKeyDown={handleKeyDown}
      style={{ width }}
      data-size={size}
      data-disabled={isDisabled}
    >
      <div className={styles.selectedWrapperLabel}>{label}</div>
      <div className={styles.selectedWrapper} onClick={toggleDropdown}>
        {selected?.startIcon &&
          cloneElement(selected.startIcon, { fill: fillIcon })}
        <div className={styles.selectLabel}>{selected?.label || label}</div>
      </div>
      
      {isOpen && (
        <div className={styles.dropdown} style={{ height }}>
          <div className={styles.dropdown__content}>
            {options.map((option, index) => (
              <div
                key={option.value}
                className={classNames(
                  styles.option,
                  option.value === selected?.value ? styles.selected : '',
                  selected?.value === option.value ? styles.selected_field : '',
                  index === highlightedIndex ? styles.highlighted : '',
                )}
                onClick={() => handleSelect(option, index)}
                style={{
                  cursor: option.isDisabled ? 'not-allowed' : 'pointer',
                }}
              >
                  {option.value === selected?.value ? (
                    <div style={{padding: '1px'}}>
                      <Checkbox checked={true}/>
                    </div>
                  ) : (
                    <div style={{padding: '1px'}}>
                    <Checkbox checked={false}/>
                  </div>
                  )}
                <span className={styles.option_label}>{option.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isDisabled && (
        <div className={styles.arrow} onClick={toggleDropdown}>
          <div
            className={styles.arrow_container}
            style={{
              transform: `rotate(${isOpen ? -90 : 90}deg)`,
            }}
          >
            <IconRightChevron fill={isOpen ? 'var(--sapphire-20)' : 'var(--steel-40)' } />
          </div>
        </div>
      )}
    </div>
  );
}
