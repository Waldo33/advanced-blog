import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageView = (state: StateSchema) => state.articlePage?.view;
