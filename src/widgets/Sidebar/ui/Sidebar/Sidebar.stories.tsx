import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
    title: 'widget/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const WithAuth = Template.bind({});
WithAuth.args = {

};
WithAuth.decorators = [StoreDecorator({
    user: {
        authData: {},
    },
})];

export const WithoutAuth = Template.bind({});
WithoutAuth.args = {

};
WithoutAuth.decorators = [StoreDecorator({
    user: {

    },
})];
