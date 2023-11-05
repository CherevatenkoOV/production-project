import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from '6-shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '1-app/providers/ThemeProvider';
import {Modal} from "6-shared/ui/Modal/Modal";

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus, ad amet atque fugit hic\n' +
        'ipsam ipsum laboriosam magnam magni neque nesciunt nobis obcaecati perspiciatis quisquam ratione\n' +
        'reprehenderit totam?',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus, ad amet atque fugit hic\n' +
        'ipsam ipsum laboriosam magnam magni neque nesciunt nobis obcaecati perspiciatis quisquam ratione\n' +
        'reprehenderit totam?'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]

