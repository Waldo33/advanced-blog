import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import ViewIcon from 'shared/assets/icons/eye-solid.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock, ArticleView } from '../../model/types/article';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className, view, article, ...otherProps
    } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const types = <Text className={cls.types} text={article.type.join(', ')} />;
    const views = (
        <div className={cls.viewsWrapper}>
            <Text className={cls.views} text={String(article.views)} />
            <Icon width={20} Svg={ViewIcon} />
        </div>
    );

    if (view === 'BIG') {
        const textBlock = article.blocks.find(
            (block) => block.type === 'TEXT',
        ) as ArticleTextBlock;
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                {...otherProps}
            >
                <Card>
                    <div className={cls.header}>
                        <div className={cls.user}>
                            <Avatar size={30} src={article.user.avatar} />
                            <Text className={cls.username} text={article.user.username} />
                        </div>
                        <Text className={cls.date} text={article.createdAt} />
                    </div>
                    <Text className={cls.title} title={article.title} />
                    {types}
                    <img className={cls.image} src={article.img} alt={article.title} />
                    {textBlock && (
                        <Text className={cls.description} text={textBlock.paragraphs.join(' ')} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle}>{t('Читать далее')}</Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            {...otherProps}
        >
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img className={cls.image} src={article.img} alt={article.title} />
                    <Text className={cls.date} text={article.createdAt} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text className={cls.title} text={article.title} />
            </Card>
        </div>
    );
});
