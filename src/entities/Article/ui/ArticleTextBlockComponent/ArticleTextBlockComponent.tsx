import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = memo((
    { className, block, ...props }: ArticleTextBlockComponentProps,
) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])} {...props}>
        {block.title && (
            <Text className={cls.title} title={block.title} />
        )}
        {block.paragraphs.map((paragraph, index) => (
            <Text key={paragraph} text={paragraph} className={cls.paragraph} />
        ))}
    </div>
));
