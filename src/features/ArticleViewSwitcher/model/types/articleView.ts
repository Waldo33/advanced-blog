import { ArticleView } from 'entities/Article/model/types/article';
import React from 'react';

export type ArticleViewType = {
    view: ArticleView;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}
