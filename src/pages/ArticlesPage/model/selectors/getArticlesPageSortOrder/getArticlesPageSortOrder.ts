import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesPageSortOrder = (state: StateSchema) => state.articlePage?.order ?? 'desc';
