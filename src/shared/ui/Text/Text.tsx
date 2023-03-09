import { classNames } from 'shared/lib/classNames/classNames';
import { FC, memo } from 'react';
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
export const Text: FC<TextProps> = memo(({
    className, text, title, theme = TextTheme.PRIMARY,
}: TextProps) => (
    <div className={classNames(cls.TextWrapper, {}, [className, cls[theme]])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
));
