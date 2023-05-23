import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes, memo } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './Card.module.scss';

type CardTheme = 'normal' | 'outlined';
interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    theme?: CardTheme;
}

export const Card = memo((props: CardProps) => {
    const {
        className, children, theme = 'normal', ...otherProps
    } = props;
    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});
