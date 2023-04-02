import { User } from 'entities/User';

export type ArticleBlockType = 'CODE' | 'IMAGE' | 'TEXT'

export type ArticleView = 'BIG' | 'SMALL'

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: 'CODE'
    code: string;
}
export interface ArticleImageBlock extends ArticleBlockBase {
    type: 'IMAGE'
    src: string;
    title?: string;
}
export interface ArticleTextBlock extends ArticleBlockBase {
    type: 'TEXT'
    title?: string;
    paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS'

export interface Article {
    id: string;
    user: User;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleType[]
    blocks: ArticleBlock[];
}
