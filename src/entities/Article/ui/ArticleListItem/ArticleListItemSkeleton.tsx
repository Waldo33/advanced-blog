import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/article';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {
        className, view, ...otherProps
    } = props;

    if (view === 'BIG') {
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                {...otherProps}
            >
                <Card>
                    <div className={cls.header}>
                        <div className={cls.user}>
                            <Skeleton width={30} height={30} border="100%" />
                            <Skeleton width={100} height={20} className={cls.username} />
                        </div>
                    </div>
                    <Skeleton className={cls.title} width={150} height={24} />
                    <Skeleton className={cls.types} width={200} height={16} />
                    <Skeleton className={cls.image} />
                    <div className={cls.footer}>
                        <Skeleton width={200} height={50} />
                        <Skeleton width={100} height={16} />
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
            <Card>
                <div className={cls.imageWrapper}>
                    <Skeleton className={cls.image} width="100%" height={200} />
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton className={cls.types} height={20} />
                    <Skeleton className={cls.views} height={20} width={50} />
                </div>
                <Skeleton className={cls.title} height={20} />
            </Card>
        </div>
    );
});
