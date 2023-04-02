import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text } from 'shared/ui/Text/Text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    children: <Text
        text={'Lorem Ipsum is simply dummy text of the '
        + 'printing and typesetting industry. Lorem Ipsum has been the '
        + "industry's standard dummy text ever since the 1500s, when an"
        + ' unknown printer took a galley of type and scrambled it to'
        + ' make a type specimen book. It has survived not only five '
        + 'centuries, but also the leap into electronic typesetting, '
        + 'remaining essentially unchanged. It was popularised in the '
        + '1960s with the release of Letraset sheets containing Lorem '
        + 'Ipsum passages, and more recently with desktop publishing '
        + 'software like Aldus PageMaker including versions of Lorem'
        + ' Ipsum.'}
    />,
};
