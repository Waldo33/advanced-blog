import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text } from 'shared/ui/Text/Text';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className, view = 'SMALL', articles, isLoading, ...otherProps
    } = props;
    const { t } = useTranslation();

    const renderArticle = (article: Article) => (
        <ArticleListItem
            className={cls.article}
            key={article.id}
            article={article}
            view={view}
        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                {...otherProps}
            >
                <Text
                    size="size_l"
                    title={t('Статьи не найдены')}
                />
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            {...otherProps}
        >
            {
                articles.length > 0
                    ? articles.map(renderArticle)
                    : null
            }
            {
                isLoading
                    && new Array(view === 'SMALL' ? 9 : 3)
                        .fill(0)
                        .map((_, i) => (
                            <ArticleListItemSkeleton
                                className={cls.article}
                                key={i}
                                view={view}
                            />
                        ))
            }
        </div>
    );
});
