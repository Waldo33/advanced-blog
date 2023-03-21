import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = ({ className, ...props }) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])} {...props} />
);
