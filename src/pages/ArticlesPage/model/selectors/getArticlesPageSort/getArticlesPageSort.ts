import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageSort = (state: StateSchema) => state.articlePage?.sort ?? 'createdAt';
