import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { ArticleViewType } from 'features/ArticleViewSwitcher/model/types/articleView';
import ListIcon from 'shared/assets/icons/bars-solid.svg';
import TiledIcon from 'shared/assets/icons/border-all-solid.svg';
import { ArticleView } from 'entities/Article/model/types/article';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleViewSwitcher.module.scss';

interface ArticleViewSwitcherProps {
    className?: string;
    view: ArticleView;
    onViewClick?: (view: ArticleView) => void;
}

const viewItems: ArticleViewType[] = [
    {
        view: 'BIG',
        icon: ListIcon,
    },
    {
        view: 'SMALL',
        icon: TiledIcon,
    },
];

export const ArticleViewSwitcher: FC<ArticleViewSwitcherProps> = (
    { className, onViewClick, view },
) => {
    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSwitcher, {}, [className])}>
            {
                viewItems.map((viewItem) => (
                    <Button
                        key={viewItem.view}
                        onClick={onClick(viewItem.view)}
                        theme={ThemeButton.CLEAR}
                    >
                        <Icon
                            className={classNames('', { [cls.selected]: viewItem.view === view })}
                            Svg={viewItem.icon}
                        />
                    </Button>
                ))
            }
        </div>
    );
};
