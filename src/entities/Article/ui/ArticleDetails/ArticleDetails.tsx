import React, {
    FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import CalendarIcon from 'shared/assets/icons/calendar-solid.svg';
import EyeIcon from 'shared/assets/icons/eye-solid.svg';
import { ArticleBlock } from 'entities/Article/model/types/article';
import { ArticleCodeBlockComponent } from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};
interface ArticleDetailsProps {
    className?: string;
    id: string;
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({ className, id, ...props }: ArticleDetailsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    // const isLoading = true;
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case 'CODE':
            return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
        case 'IMAGE':
            return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
        case 'TEXT':
            return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
        default:
            return null;
        }
    }, []);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    border="50%"
                />
                <Skeleton
                    className={cls.title}
                    width={300}
                    height={32}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={600}
                    height={24}
                />
                <Skeleton
                    className={cls.skeleton}
                    width="100%"
                    height={200}
                />
            </>
        );
    } else if (error) {
        content = (
            <Text
                align="center"
                title={t('Произошла ошибка при загрузке статьи!')}
            />
        );
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar className={cls.avatar} size={200} src={article?.img} />
                </div>
                <Text
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size="size_l"
                />
                <div className={cls.articleInfo}>
                    <EyeIcon height={20} />
                    <Text text={article?.views.toString()} />
                </div>
                <div className={cls.articleInfo}>
                    <CalendarIcon height={20} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])} {...props}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
