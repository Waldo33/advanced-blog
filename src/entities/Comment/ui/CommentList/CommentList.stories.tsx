import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'Test',
            user: {
                id: '1',
                username: 'user',
                avatar: '',
            },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [
        {
            id: '1',
            text: 'Test',
            user: {
                id: '1',
                username: 'user',
                avatar: '',
            },
        },
        {
            id: '2',
            text: 'Test',
            user: {
                id: '1',
                username: 'user',
                avatar: '',
            },
        },
    ],
    isLoading: true,
};

export const EmptyWithLoading = Template.bind({});
EmptyWithLoading.args = {
    comments: [],
    isLoading: true,
};
