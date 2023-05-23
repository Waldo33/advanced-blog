import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode, useCallback } from 'react';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends string> {
    className?: string;
    tabs: TabItem<T>[];
    value: T;
    onTabClick: (tab: TabItem<T>) => void;
}
export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        className, tabs, onTabClick, value,
    } = props;

    const onClickHandler = useCallback((tab: TabItem<T>) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {
                tabs.map((tab) => (
                    <Card
                        theme={tab.value === value ? 'normal' : 'outlined'}
                        className={cls.tabItem}
                        key={tab.value}
                        onClick={onClickHandler(tab)}
                    >
                        {tab.content}
                    </Card>
                ))
            }
        </div>
    );
};
