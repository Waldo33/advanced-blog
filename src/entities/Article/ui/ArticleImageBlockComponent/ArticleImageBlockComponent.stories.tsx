import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
    title: 'shared/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => <ArticleImageBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};
