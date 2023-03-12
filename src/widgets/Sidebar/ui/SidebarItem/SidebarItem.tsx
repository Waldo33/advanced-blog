import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
}
export const SidebarItem: FC<SidebarItemProps> = memo(({ item }: SidebarItemProps) => {
    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <div className={cls.item}>
            <AppLink
                className={cls.link}
                theme={AppLinkTheme.SECONDARY}
                to={item.path}
            >
                <item.icon className={cls.icon} />
                <span>
                    {t(item.text)}
                </span>
            </AppLink>
        </div>
    );
});
