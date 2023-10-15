import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from '6-shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '1-app/providers/ThemeProvider';
import {ThemeSwitcher} from './ThemeSwitcher';

// ThemeSwitcherIcon should be the opposite to the Sidebar's bg. That's why it's displayed another way
export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};


Dark.decorators = [ThemeDecorator(Theme.DARK)];
