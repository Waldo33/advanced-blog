import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageNum = (state: StateSchema) => state.articlePage?.page || 1;
