import {addDecorator} from '@storybook/react';
import {StyleDecorator} from '../../src/6-shared/config/storybook/StyleDecorator/StyleDecorator';
import {ThemeDecorator} from '../../src/6-shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from '../../src/1-app/providers/ThemeProvider';
import {RouterDecorator} from "../../src/6-shared/config/storybook/RouterDecorator/RouterDecorator";
import 'loki/configure-react';

export const parameters = {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator)

