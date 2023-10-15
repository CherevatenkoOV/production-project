import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ThemeDecorator} from '6-shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '1-app/providers/ThemeProvider';
import AppLink, {AppLinkTheme} from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    args: {
        to: "/"
    }

} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const LightPrimary = Template.bind({});
LightPrimary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
};

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
};

export const LightInverted = Template.bind({});
LightInverted.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED
};

export const DarkInverted = Template.bind({});
DarkInverted.args = {
    children: 'Text',
    theme: AppLinkTheme.INVERTED
};


DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];
