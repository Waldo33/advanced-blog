import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = memo((
    { className, block, ...props }: ArticleImageBlockComponentProps,
) => (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])} {...props}>
        <img className={cls.img} src={block.src} alt={block.title} />
        {block.title && (
            <Text text={block.title} align="center" />
        )}
    </div>
));
