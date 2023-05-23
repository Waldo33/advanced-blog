import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleType } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
    view: ArticleView;
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;

    // filters
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}
