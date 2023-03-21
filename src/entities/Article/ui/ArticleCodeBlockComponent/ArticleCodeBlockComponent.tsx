import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = (
    { className, ...props },
) => <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])} {...props} />;
