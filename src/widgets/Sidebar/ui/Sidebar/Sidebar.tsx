import { classNames } from 'shared/lib/classNames/classNames';
import {
    FC, memo, useMemo, useState,
} from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Expand from 'shared/assets/icons/expand.svg';
import Shrink from 'shared/assets/icons/shrink.svg';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/items';

interface SidebarProps {
  className?: string
}
export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            key={item.path}
            item={item}
        />
    )), []);

    return (
        <div
            data-testid="Sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.links}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
                <Button data-testid="sidebar-toggle" theme={ThemeButton.CLEAR} onClick={onToggle}>
                    {collapsed
                        ? (
                            <Expand className={cls.expand} width={40} />
                        )
                        : (
                            <Shrink className={cls.expand} width={40} />
                        )}
                </Button>
            </div>
        </div>
    );
});
