import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import House from 'shared/assets/icons/house-solid.svg';
import Scroll from 'shared/assets/icons/scroll-solid.svg';
import User from 'shared/assets/icons/user.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная страница',
        icon: House,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        icon: Scroll,
    },
    {
        path: RoutePath.profile,
        text: 'Profile Page',
        icon: User,
        authOnly: true,
    },
];
