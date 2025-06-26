export type OptionType = {
  value: string | number;
  label: string;
  isDisabled?: boolean;
  startIcon?: JSX.Element;
  [key: string]: any;
};

export enum SelectSize {
  Small = 's',
  Medium = 'm',
  large = 'l',
}

export type SelectProps = {
  options: OptionType[];
  selected: OptionType | null;
  onSelected: (value: OptionType) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  label?: string;
  width?: string | number;
  size?: `${SelectSize}`;
  height?: string | number;
  isDisabled?: boolean;
  fillIcon?: string;
};
