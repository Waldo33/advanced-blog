import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleViewSwitcher } from 'features/ArticleViewSwitcher';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const';
import {
    getArticlesPageIsLoading,
} from '../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading';
import { getArticlesPageView } from '../../model/selectors/getArticlesPageView/getArticlesPageView';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
        localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, view);
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        const initView = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView || 'SMALL';
        dispatch(articlesPageActions.setView(initView));
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                <ArticleViewSwitcher
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
