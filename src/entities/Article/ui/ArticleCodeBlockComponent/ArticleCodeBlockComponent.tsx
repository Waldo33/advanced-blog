import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = memo((
    { className, block, ...props }: ArticleCodeBlockComponentProps,
) => (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])} {...props}>
        <Code>
            {block.code}
        </Code>
    </div>
));
