import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageNum } from 'pages/ArticlesPage/model/selectors/getArticlesPageNum/getArticlesPageNum';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { getArticlesPageType } from 'pages/ArticlesPage/model/selectors/getArticlesPageType/getArticlesPageType';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit/getArticlesPageLimit';
import { getArticlesPageSort } from '../../selectors/getArticlesPageSort/getArticlesPageSort';
import {
    getArticlesPageSortOrder,
} from '../../selectors/getArticlesPageSortOrder/getArticlesPageSortOrder';
import { getArticlesPageSearch } from '../../selectors/getArticlesPageSearch/getArticlesPageSearch';

interface FetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (args, { extra, rejectWithValue, getState }) => {
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageSortOrder(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPageNum(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === 'ALL' ? undefined : type,
                },
            });

            if (!response.data) {
                throw new Error('error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
