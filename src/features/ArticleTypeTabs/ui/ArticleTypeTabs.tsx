import { ArticleType } from 'entities/Article/model/types/article';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTypeTabs.module.scss';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}
export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem<ArticleType>[]>(() => [
        {
            value: 'ALL',
            content: t('Все статьи'),
        },
        {
            value: 'IT',
            content: t('ИТ'),
        },
        {
            value: 'ECONOMICS',
            content: t('Экономика'),
        },
        {
            value: 'SCIENCE',
            content: t('Наука'),
        },
    ], [t]);

    const onTabClick = useCallback((tab: TabItem<ArticleType>) => {
        onChangeType(tab.value);
    }, [onChangeType]);

    return (
        <Tabs<ArticleType>
            className={classNames(cls.types, {}, [className])}
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
    );
};
