import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = (props) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div
                className={classNames(cls.CommentCard, {}, [className])}
            >
                <div className={cls.header}>
                    <Skeleton border="50%" height={30} width={30} />
                    <Skeleton height={20} width={100} />
                </div>
                <Skeleton className={cls.text} height={50} width="100%" />
            </div>
        );
    }

    if (!comment) {
        return null;
    }

    return (
        <div
            className={classNames(cls.CommentCard, {}, [className])}
        >
            <AppLink to={RoutePath.profile + comment.user.id} className={cls.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
};
