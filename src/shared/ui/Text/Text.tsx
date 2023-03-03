import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}
export const Text: FC<TextProps> = ({
    className, text, title, theme,
}) => (
    <div className={classNames(cls.TextWrapper, {}, [className, cls[theme]])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
);