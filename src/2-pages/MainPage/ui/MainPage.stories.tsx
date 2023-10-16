import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from '6-shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '1-app/providers/ThemeProvider';
import MainPage from './MainPage';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage/>;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};


Dark.decorators = [ThemeDecorator(Theme.DARK)];