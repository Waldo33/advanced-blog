import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = (
    { className, ...props },
) => <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])} {...props} />;
