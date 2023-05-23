import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageType = (state: StateSchema) => state.articlePage?.type ?? 'ALL';
