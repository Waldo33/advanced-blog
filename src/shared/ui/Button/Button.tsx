import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  disabled?: boolean;
}
export const Button: FC<ButtonProps> = ({
    className, theme, disabled, ...props
}) => (
    <button
        type="button"
        className={classNames(cls.Button, {}, [className, cls[theme]])}
        disabled={disabled}
        {...props}
    />
);
