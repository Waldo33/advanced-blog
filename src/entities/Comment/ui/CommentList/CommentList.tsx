import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = (props) => {
    const {
        className,
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation();

    return (
        <div
            className={classNames(cls.CommentList, {}, [className])}
        >
            {
                comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard
                            isLoading={isLoading}
                            className={cls.comment}
                            comment={comment}
                        />
                    ))
                ) : (
                    <Text text={t('Нет комментариев')} />
                )
            }
        </div>
    );
};
