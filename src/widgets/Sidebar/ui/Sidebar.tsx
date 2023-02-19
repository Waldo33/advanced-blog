import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import Expand from 'shared/assets/icons/expand.svg';
import Shrink from 'shared/assets/icons/shrink.svg';
import House from 'shared/assets/icons/house-solid.svg';
import Scroll from 'shared/assets/icons/scroll-solid.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string
}
export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="Sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button data-testid="sidebar-toggle" theme={ThemeButton.CLEAR} onClick={onToggle}>
                {collapsed
                    ? (
                        <Expand className={cls.expand} width={40} />
                    )
                    : (
                        <Shrink className={cls.expand} width={40} />
                    )}
            </Button>
            <div className={cls.links}>
                <div className={cls.item}>
                    <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
                        <House className={cls.icon} />
                        <span>
                            {t('Главная страница')}
                        </span>
                    </AppLink>
                </div>
                <div className={cls.item}>
                    <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
                        <Scroll className={cls.icon} />
                        <span>
                            {t('О сайте')}
                        </span>
                    </AppLink>
                </div>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
