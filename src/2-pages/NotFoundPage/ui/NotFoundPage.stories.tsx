import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from '6-shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '1-app/providers/ThemeProvider';
import NotFoundPage from './NotFoundPage';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage/>;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};


Dark.decorators = [ThemeDecorator(Theme.DARK)];
