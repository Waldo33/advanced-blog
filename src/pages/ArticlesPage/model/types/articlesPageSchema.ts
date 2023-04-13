import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article> {
    view: ArticleView;
    isLoading?: boolean;
    error?: string;
}
