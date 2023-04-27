import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const';
import { ArticleView } from 'entities/Article/model/types/article';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/getArticlesPageInited/getArticlesPageInited';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, {
        getState, dispatch,
    }) => {
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const initView = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView || 'SMALL';
            dispatch(articlesPageActions.initState(initView));
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    },
);
