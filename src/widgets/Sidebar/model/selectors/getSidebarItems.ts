import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import House from 'shared/assets/icons/house-solid.svg';
import Scroll from 'shared/assets/icons/scroll-solid.svg';
import User from 'shared/assets/icons/user.svg';
import News from 'shared/assets/icons/newspaper-solid.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
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
        ];

        if (userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: 'Profile Page',
                    icon: User,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'Articles Page',
                    icon: News,
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
